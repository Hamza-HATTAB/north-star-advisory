import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Serverless rate limiting via Upstash
// Note: If UPSTASH_REDIS_REST_URL is missing in dev, we fallback gracefully
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "https://dummy.upstash.io",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "dummy",
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "1 m"),
  analytics: false,
});

async function checkRateLimit(ip: string): Promise<boolean> {
  if (!process.env.UPSTASH_REDIS_REST_URL) {
    // Graceful fallback for dev without Redis tokens
    return false;
  }
  const { success } = await ratelimit.limit(`contact_form_${ip}`);
  return !success; // Return true if limited (success is false)
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Skip verification in dev if key not set

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
    }
  );

  const data = (await res.json()) as { success: boolean };
  return data.success;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    if (await checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    // Parse and validate body
    const body: unknown = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Please check your form entries and try again." },
        { status: 400 }
      );
    }

    const { 
      name, email, company, industry, companySize, primaryBottleneck, 
      website, additionalContext, turnstileToken, 
      gfiScore, gfiSeverity, gfiAnswers 
    } = result.data;

    // Verify Turnstile if token provided
    if (turnstileToken) {
      const valid = await verifyTurnstile(turnstileToken);
      if (!valid) {
        return NextResponse.json(
          { success: false, error: "Security verification failed. Please refresh and try again." },
          { status: 400 }
        );
      }
    }

    // Send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      let gfiBlock = "No GFI Data Available";
      if (gfiScore !== undefined) {
        gfiBlock = `
GFI Score: ${gfiScore}
Severity:  ${gfiSeverity || "N/A"}
Answers:
- Routing:     ${gfiAnswers?.routing || "N/A"}
- Measurement: ${gfiAnswers?.measurement || "N/A"}
- Retention:   ${gfiAnswers?.retention || "N/A"}
        `.trim();
      }

      const emailContent = `
New Executive Diagnostic Application
------------------------------------
**Lead Profile**
Name:      ${name}
Email:     ${email}
Company:   ${company}
Website:   ${website || "Not provided"}
Industry:  ${industry}
Size:      ${companySize}

**Constraint Analysis**
Bottleneck:        ${primaryBottleneck}
Context:           ${additionalContext || "None provided"}

**GFI Diagnostic State**
${gfiBlock}

------------------------------------
Submitted: ${new Date().toISOString()}
IP:        ${ip}
      `.trim();

      await resend.emails.send({
        from: "North Star Advisory <noreply@northstaradvisory.pro>",
        to: ["hamza@northstaradvisory.pro"],
        replyTo: email,
        subject: `Strategic Review Request — ${name}${company ? ` (${company})` : ""}`,
        text: emailContent,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Your request has been received. We will respond within one business day.",
    });
  } catch (error) {
    console.error("[contact/route] Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
