"use client";

import { useState, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { contactSchema, type ContactFormInput } from "@/lib/validations";
import { industryOptions, companySizeOptions, bottleneckOptions } from "@/content";
import { trackFormStart, trackFormSuccess, trackFormError } from "@/lib/analytics";
import type { ContactFormResponse } from "@/types";
import { useGFIStore } from "@/lib/store";
import { Turnstile } from "@marsidev/react-turnstile";

export function LeadCapture() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | undefined>();
  const hasTrackedStart = useRef(false);

  const gfiScore = useGFIStore((state) => state.score);
  const gfiSeverity = useGFIStore((state) => state.severity);
  const gfiAnswers = useGFIStore((state) => state.answers);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { industry: "real_estate", companySize: "11_50", primaryBottleneck: "lead_generation" },
  });

  const handleFieldFocus = useCallback(() => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      trackFormStart();
    }
  }, []);

  const onSubmit = useCallback(
    async (data: ContactFormInput) => {
      setStatus("submitting");

      const payload = {
        ...data,
        gfiScore: gfiScore !== null ? gfiScore : undefined,
        gfiSeverity: gfiSeverity !== null ? gfiSeverity : undefined,
        gfiAnswers: gfiAnswers !== null ? gfiAnswers : undefined,
        turnstileToken: turnstileToken,
      };

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const json = (await res.json()) as ContactFormResponse;

        if (json.success) {
          setStatus("success");
          trackFormSuccess();
          reset();
        } else {
          setStatus("error");
          setErrorMessage(json.error || "Something went wrong. Please try again.");
          trackFormError(json.error || "unknown");
        }
      } catch {
        setStatus("error");
        setErrorMessage("Unable to send your request. Please check your connection and try again.");
        trackFormError("network_error");
      }
    },
    [reset, gfiScore, gfiSeverity, gfiAnswers, turnstileToken]
  );

  if (status === "success") {
    return (
      <section
        id="contact"
        className="section-pad"
        aria-labelledby="contact-heading"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container-main">
          <div
            className="max-w-2xl mx-auto p-12 md:p-16 text-center"
            style={{ border: "1px solid rgba(0,23,54,0.1)" }}
            role="status"
            aria-live="polite"
          >
            <div
              className="w-16 h-16 mx-auto mb-8 flex items-center justify-center"
              style={{ border: "2px solid var(--color-primary)" }}
              aria-hidden="true"
            >
              <div
                className="w-6 h-6"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
            </div>
            <h2
              className="text-headline-md mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Request Received
            </h2>
            <p
              className="text-body-lg"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Your strategic review request has been received. We will respond
              within one business day.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="section-pad"
      aria-labelledby="contact-heading"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-main">
        <AnimatedSection>
          <div
            className="max-w-2xl mx-auto p-10 md:p-16"
            style={{ border: "1px solid rgba(0,23,54,0.1)" }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              {/* Icon */}
              <div
                className="w-16 h-16 mx-auto mb-8 flex items-center justify-center"
                style={{ border: "1px solid var(--color-primary)" }}
                aria-hidden="true"
              >
                <div className="flex flex-col gap-1.5" aria-hidden="true">
                  {[5, 5, 3].map((w, i) => (
                    <div
                      key={i}
                      style={{
                        width: `${w * 4}px`,
                        height: "1.5px",
                        backgroundColor: "var(--color-primary)",
                        opacity: 0.7,
                      }}
                    />
                  ))}
                </div>
              </div>

              <SectionLabel className="text-center">
                Executive Diagnostic
              </SectionLabel>
              <h2
                id="contact-heading"
                className="text-headline-md mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Apply for Executive Diagnostic
              </h2>
              <p
                className="text-body-lg"
                style={{ color: "var(--color-secondary)" }}
              >
                Commence a structured, confidential audit regarding your systemic
                friction, revenue bottlenecks, and algorithmic execution opportunities.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="Strategic review request form"
            >
              <div className="space-y-10 max-w-md mx-auto">
                {/* Name */}
                <div className="relative">
                  <label
                    htmlFor="contact-name"
                    className="input-label"
                  >
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                    className={`input-field ${errors.name ? "error" : ""}`}
                    placeholder="Full Name"
                    onFocus={handleFieldFocus}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="text-label-caps mt-2"
                      style={{ color: "var(--color-error)" }}
                      role="alert"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor="contact-email"
                    className="input-label"
                  >
                    Corporate Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                    className={`input-field ${errors.email ? "error" : ""}`}
                    placeholder="Corporate Email"
                    onFocus={handleFieldFocus}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-label-caps mt-2"
                      style={{ color: "var(--color-error)" }}
                      role="alert"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Company (Required) */}
                <div className="relative">
                  <label
                    htmlFor="contact-company"
                    className="input-label"
                  >
                    Company <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    autoComplete="organization"
                    aria-required="true"
                    aria-describedby={errors.company ? "company-error" : undefined}
                    aria-invalid={!!errors.company}
                    className={`input-field ${errors.company ? "error" : ""}`}
                    placeholder="Company"
                    onFocus={handleFieldFocus}
                    {...register("company")}
                  />
                  {errors.company && (
                    <p
                      id="company-error"
                      className="text-label-caps mt-2"
                      style={{ color: "var(--color-error)" }}
                      role="alert"
                    >
                      {errors.company.message}
                    </p>
                  )}
                </div>

                {/* Industry */}
                <div className="relative">
                  <label
                    htmlFor="contact-industry"
                    className="input-label"
                  >
                    Industry <span aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="contact-industry"
                      aria-required="true"
                      aria-describedby={errors.industry ? "industry-error" : undefined}
                      aria-invalid={!!errors.industry}
                      className="input-field appearance-none pr-8"
                      style={{ cursor: "pointer" }}
                      onFocus={handleFieldFocus}
                      {...register("industry")}
                    >
                      {industryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {/* Chevron */}
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden="true"
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 7L11 1" stroke="var(--color-primary)" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Company Size */}
                <div className="relative">
                  <label
                    htmlFor="contact-companySize"
                    className="input-label"
                  >
                    Company Size <span aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="contact-companySize"
                      aria-required="true"
                      aria-describedby={errors.companySize ? "companySize-error" : undefined}
                      aria-invalid={!!errors.companySize}
                      className="input-field appearance-none pr-8"
                      style={{ cursor: "pointer" }}
                      onFocus={handleFieldFocus}
                      {...register("companySize")}
                    >
                      {companySizeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {/* Chevron */}
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden="true"
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 7L11 1" stroke="var(--color-primary)" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Primary Bottleneck */}
                <div className="relative">
                  <label
                    htmlFor="contact-bottleneck"
                    className="input-label"
                  >
                    Primary Bottleneck <span aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="contact-bottleneck"
                      aria-required="true"
                      aria-describedby={errors.primaryBottleneck ? "bottleneck-error" : undefined}
                      aria-invalid={!!errors.primaryBottleneck}
                      className="input-field appearance-none pr-8"
                      style={{ cursor: "pointer" }}
                      onFocus={handleFieldFocus}
                      {...register("primaryBottleneck")}
                    >
                      {bottleneckOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {/* Chevron */}
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden="true"
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 7L11 1" stroke="var(--color-primary)" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Website (optional) */}
                <div className="relative">
                  <label
                    htmlFor="contact-website"
                    className="input-label"
                  >
                    Website{" "}
                    <span
                      style={{ color: "var(--color-outline)", fontSize: "10px", letterSpacing: "0.05em", textTransform: "none", fontWeight: 400 }}
                    >
                      (optional)
                    </span>
                  </label>
                  <input
                    id="contact-website"
                    type="url"
                    className={`input-field ${errors.website ? "error" : ""}`}
                    placeholder="https://"
                    onFocus={handleFieldFocus}
                    {...register("website")}
                  />
                  {errors.website && (
                    <p
                      className="text-label-caps mt-2"
                      style={{ color: "var(--color-error)" }}
                    >
                      {errors.website.message}
                    </p>
                  )}
                </div>

                {/* Additional Context (optional) */}
                <div className="relative">
                  <label
                    htmlFor="contact-context"
                    className="input-label"
                  >
                    Additional Context{" "}
                    <span
                      style={{ color: "var(--color-outline)", fontSize: "10px", letterSpacing: "0.05em", textTransform: "none", fontWeight: 400 }}
                    >
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="contact-context"
                    rows={3}
                    className={`input-field ${errors.additionalContext ? "error" : ""}`}
                    placeholder="Any specific challenges?"
                    onFocus={handleFieldFocus}
                    {...register("additionalContext")}
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <div
                    className="p-4"
                    style={{
                      backgroundColor: "var(--color-error-container)",
                      border: "1px solid var(--color-error)",
                    }}
                    role="alert"
                    aria-live="assertive"
                  >
                    <p
                      className="text-body-md"
                      style={{ color: "var(--color-on-error-container)" }}
                    >
                      {errorMessage}
                    </p>
                  </div>
                )}

                {/* Cloudflare Turnstile */}
                <div className="flex justify-center mt-6">
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={(token) => setTurnstileToken(token)}
                    options={{ theme: "light" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full mt-4"
                  style={{
                    opacity: status === "submitting" ? 0.7 : 1,
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                  }}
                  aria-describedby="form-note"
                >
                  {status === "submitting"
                    ? "Evaluating Request..."
                    : "Apply for Diagnostic"}
                </button>

                <p
                  id="form-note"
                  className="text-center text-label-caps"
                  style={{ color: "var(--color-secondary)", fontSize: "11px" }}
                >
                  We respond within one business day. Absolute discretion guaranteed.
                </p>
              </div>
            </form>

            {/* Direct Contact Fallback */}
            <div className="mt-16 pt-10 text-center" style={{ borderTop: "1px solid rgba(0,23,54,0.1)" }}>
              <p className="text-label-caps mb-6" style={{ color: "var(--color-secondary)" }}>
                Or contact us directly
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="mailto:hello@northstaradvisory.pro" className="text-body-md font-semibold hover:underline" style={{ color: "var(--color-primary)" }}>
                  hello@northstaradvisory.pro
                </a>
                <span className="hidden sm:block" style={{ color: "var(--color-outline-variant)" }}>|</span>
                <a 
                  href={`https://wa.me/971500000000?text=${encodeURIComponent(
                    gfiScore !== null && gfiSeverity !== null
                      ? `Hi Hamza, I just ran the GFI and scored ${gfiScore}x EBITDA Yield (${gfiSeverity}). I want to discuss a systemic audit.`
                      : "Hi Hamza, I want to discuss a systemic audit."
                  )}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-body-md font-semibold hover:underline" 
                  style={{ color: "var(--color-primary)" }}
                >
                  WhatsApp Business
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
