"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { whoWeHelpCategories } from "@/content";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function WhoWeHelp() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="who-we-help"
      className="section-pad"
      aria-labelledby="who-we-help-heading"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-main">
        {/* Section Header */}
        <AnimatedSection className="mb-16 md:mb-20 max-w-3xl">
          <SectionLabel>Target Verticals</SectionLabel>
          <h2
            id="who-we-help-heading"
            className="text-headline-md mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            Built for GCC Operators Managing High-Volume & High-Value Enquiries
          </h2>
          <p
            className="text-body-lg"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            We partner with operational leaders in Saudi Arabia and the UAE who spend on acquisition but experience friction, slow response times, or leakage before sales handoff.
          </p>
        </AnimatedSection>

        {/* Category Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {whoWeHelpCategories.map((cat, idx) => (
            <StaggerItem key={cat.title}>
              <div
                className="p-8 md:p-10 border hairline-all h-full flex flex-col justify-between transition-all duration-300 hover:border-[var(--color-primary)]"
                style={{
                  backgroundColor: idx === 0 ? "var(--color-surface-container-low)" : "var(--color-surface)",
                  borderColor: idx === 0 ? "var(--color-primary)" : "rgba(0,23,54,0.1)",
                }}
              >
                <div>
                  <span
                    className="inline-block text-[10px] uppercase font-mono tracking-widest px-3 py-1 mb-6 rounded-full"
                    style={{
                      backgroundColor: idx === 0 ? "var(--color-primary)" : "rgba(0,23,54,0.06)",
                      color: idx === 0 ? "var(--color-on-primary)" : "var(--color-primary)",
                    }}
                  >
                    {cat.badge}
                  </span>
                  <h3
                    className="text-headline-sm mb-4"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    className="text-body-md mb-8"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {cat.description}
                  </p>

                  <div className="space-y-4 mb-8 pt-6" style={{ borderTop: "1px dashed rgba(0,23,54,0.12)" }}>
                    <p className="text-label-caps" style={{ color: "var(--color-primary)" }}>
                      Common Operational Friction:
                    </p>
                    {cat.keyProblems.map((prob) => (
                      <div key={prob} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "var(--color-error)" }} />
                        <span className="text-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                          {prob}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6" style={{ borderTop: "1px solid rgba(0,23,54,0.08)" }}>
                  <div className="flex items-start gap-2 mb-4">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-primary)" }} />
                    <span className="text-body-sm font-semibold" style={{ color: "var(--color-primary)" }}>
                      {cat.systemFix}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA banner */}
        <AnimatedSection delay={0.2}>
          <div
            className="p-8 md:p-10 border hairline-all flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-on-primary)",
            }}
          >
            <div>
              <p className="text-label-caps mb-2" style={{ color: "var(--color-primary-fixed-dim)" }}>
                Real Estate Priority Mandate
              </p>
              <h3 className="text-headline-sm">
                Request a Real-Estate Lead-to-Appointment Diagnostic
              </h3>
            </div>
            <button
              onClick={scrollToContact}
              className="btn-primary-white shrink-0 flex items-center gap-2"
            >
              Request Diagnostic
              <ArrowRight size={14} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
