import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ---------------------------------------------------------------------------
// Rate limiting — Upstash Redis
// We initialize lazily so a missing / unresolvable URL never crashes at module
// load time. Any Redis connectivity failure degrades gracefully: the request is
// allowed through (fail-open) and the error is logged for ops visibility.
// ---------------------------------------------------------------------------
function getRateLimiter(): Ratelimit | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  try {
    const redis = new Redis({ url, token });
    return new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "1 m"),
      analytics: false,
    });
  } catch (err) {
    console.error("[contact/route] Failed to initialise Redis:", err);
    return null;
  }
}

const rateLimiter = getRateLimiter();

/**
 * Returns true when the request should be rate-limited (blocked).
 * On any Redis error, fails open (returns false) to avoid breaking the form.
 */
async function checkRateLimit(ip: string): Promise<boolean> {
  if (!rateLimiter) return false;
  try {
    const { success } = await rateLimiter.limit(`contact_form_${ip}`);
    return !success; // true = rate-limited
  } catch (err) {
    // Log for ops but do not let Redis errors break form submissions.
    console.error("[contact/route] Rate-limit check failed (fail-open):", err);
    return false;
  }
}

// ---------------------------------------------------------------------------
// Turnstile verification
// ---------------------------------------------------------------------------
async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // No secret set — allow in dev; warn loudly.
    console.warn("[contact/route] TURNSTILE_SECRET_KEY is not set. Skipping verification.");
    return true;
  }

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret, response: token }),
      }
    );

    if (!res.ok) {
      console.error("[contact/route] Turnstile API returned non-200:", res.status);
      return false;
    }

    const data = (await res.json()) as { success: boolean; "error-codes"?: string[] };
    if (!data.success) {
      console.warn("[contact/route] Turnstile verification failed:", data["error-codes"]);
    }
    return data.success;
  } catch (err) {
    console.error("[contact/route] Turnstile fetch error:", err);
    return false;
  }
}

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  try {
    // ── 1. Rate limiting ────────────────────────────────────────────────────
    const limited = await checkRateLimit(ip);
    if (limited) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    // ── 2. Parse & validate body ────────────────────────────────────────────
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request format." },
        { status: 400 }
      );
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      console.warn("[contact/route] Zod validation failed:", result.error.flatten());
      return NextResponse.json(
        { success: false, error: "Please check your form entries and try again." },
        { status: 400 }
      );
    }

    const {
      name, email, company, industry, companySize, primaryBottleneck,
      website, additionalContext, turnstileToken,
      gfiScore, gfiSeverity, gfiAnswers,
    } = result.data;

    // ── 3. Turnstile verification ───────────────────────────────────────────
    if (!turnstileToken) {
      return NextResponse.json(
        { success: false, error: "Bot protection challenge missing. Please refresh and try again." },
        { status: 400 }
      );
    }

    const turnstileValid = await verifyTurnstile(turnstileToken);
    if (!turnstileValid) {
      return NextResponse.json(
        { success: false, error: "Security verification failed. Please refresh and try again." },
        { status: 400 }
      );
    }

    // ── 4. Send email via Resend ────────────────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      // Log clearly so the ops team can spot missing config in Vercel dashboard.
      console.error("[contact/route] RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { success: false, error: "Email service is temporarily unavailable. Please contact us directly." },
        { status: 503 }
      );
    }

    let gfiBlock = "No GFI Data Available";
    if (gfiScore !== undefined) {
      gfiBlock = [
        `GFI Score: ${gfiScore}`,
        `Severity:  ${gfiSeverity ?? "N/A"}`,
        `Answers:`,
        `- Routing:     ${gfiAnswers?.routing ?? "N/A"}`,
        `- Measurement: ${gfiAnswers?.measurement ?? "N/A"}`,
        `- Retention:   ${gfiAnswers?.retention ?? "N/A"}`,
      ].join("\n");
    }

    const emailContent = [
      "New Executive Diagnostic Application",
      "------------------------------------",
      "Lead Profile",
      `Name:      ${name}`,
      `Email:     ${email}`,
      `Company:   ${company}`,
      `Website:   ${website || "Not provided"}`,
      `Industry:  ${industry}`,
      `Size:      ${companySize}`,
      "",
      "Constraint Analysis",
      `Bottleneck:  ${primaryBottleneck}`,
      `Context:     ${additionalContext || "None provided"}`,
      "",
      "GFI Diagnostic State",
      gfiBlock,
      "",
      "------------------------------------",
      `Submitted: ${new Date().toISOString()}`,
      `IP:        ${ip}`,
    ].join("\n");

    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      const { error: resendError } = await resend.emails.send({
        from: "North Star Advisory <noreply@northstaradvisory.pro>",
        to: ["hamza@northstaradvisory.pro"],
        replyTo: email,
        subject: `Strategic Review Request — ${name}${company ? ` (${company})` : ""}`,
        text: emailContent,
      });

      if (resendError) {
        console.error("[contact/route] Resend error:", resendError);
        return NextResponse.json(
          { success: false, error: "Failed to send your request. Please try again or contact us directly." },
          { status: 502 }
        );
      }
    } catch (emailErr) {
      console.error("[contact/route] Resend threw an exception:", emailErr);
      return NextResponse.json(
        { success: false, error: "Failed to send your request. Please try again or contact us directly." },
        { status: 502 }
      );
    }

    console.info(`[contact/route] Submission accepted — ${name} <${email}> from ${ip}`);

    return NextResponse.json({
      success: true,
      message: "Your request has been received. We will respond within one business day.",
    });

  } catch (error) {
    // True unexpected errors — log the full error for debugging.
    console.error("[contact/route] Unhandled exception:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again or contact us directly at hamza@northstaradvisory.pro" },
      { status: 500 }
    );
  }
}
