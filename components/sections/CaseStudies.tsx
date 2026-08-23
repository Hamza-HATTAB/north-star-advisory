"use client";

import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { caseStudies } from "@/content";

function StructuralDiagram({ variant }: { variant: "network" | "unified" }) {
  if (variant === "network") {
    return (
      <svg
        viewBox="0 0 320 160"
        className="w-full h-full"
        aria-hidden="true"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Source nodes */}
        <circle cx="40" cy="80" r="16" stroke="rgba(169,199,255,0.4)" strokeWidth="1" />
        <circle cx="40" cy="30" r="10" stroke="rgba(169,199,255,0.3)" strokeWidth="1" />
        <circle cx="40" cy="130" r="10" stroke="rgba(169,199,255,0.3)" strokeWidth="1" />
        {/* Lines */}
        <line x1="50" y1="80" x2="130" y2="80" stroke="rgba(169,199,255,0.25)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50" y1="30" x2="130" y2="70" stroke="rgba(169,199,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50" y1="130" x2="130" y2="90" stroke="rgba(169,199,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        {/* Router node */}
        <rect x="130" y="60" width="60" height="40" stroke="rgba(169,199,255,0.5)" strokeWidth="1" />
        <line x1="150" y1="75" x2="170" y2="75" stroke="rgba(169,199,255,0.4)" strokeWidth="1.5" />
        <line x1="150" y1="85" x2="165" y2="85" stroke="rgba(169,199,255,0.3)" strokeWidth="1" />
        {/* Output lines */}
        <line x1="190" y1="72" x2="270" y2="50" stroke="rgba(169,199,255,0.25)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="190" y1="88" x2="270" y2="110" stroke="rgba(169,199,255,0.25)" strokeWidth="1" strokeDasharray="4 4" />
        {/* Output nodes */}
        <rect x="270" y="38" width="36" height="24" stroke="rgba(169,199,255,0.4)" strokeWidth="1" />
        <rect x="270" y="98" width="36" height="24" stroke="rgba(169,199,255,0.4)" strokeWidth="1" />
        {/* Labels */}
        <text x="143" y="58" fill="rgba(169,199,255,0.5)" fontSize="7" fontFamily="monospace" letterSpacing="1">ROUTER</text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 160"
      className="w-full h-full"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Source boxes */}
      {[40, 120, 200].map((x, i) => (
        <g key={i}>
          <rect x={x} y="20" width="40" height="30" stroke="rgba(169,199,255,0.35)" strokeWidth="1" />
          <line x1={x + 20} y1="50" x2={x + 20} y2="80" stroke="rgba(169,199,255,0.2)" strokeWidth="1" />
        </g>
      ))}
      {/* Converge lines */}
      <line x1="60" y1="80" x2="140" y2="100" stroke="rgba(169,199,255,0.2)" strokeWidth="1" />
      <line x1="140" y1="80" x2="140" y2="100" stroke="rgba(169,199,255,0.2)" strokeWidth="1" />
      <line x1="220" y1="80" x2="140" y2="100" stroke="rgba(169,199,255,0.2)" strokeWidth="1" />
      {/* Unified layer */}
      <rect x="80" y="100" width="120" height="30" stroke="rgba(169,199,255,0.6)" strokeWidth="1" />
      <text x="105" y="119" fill="rgba(169,199,255,0.6)" fontSize="7" fontFamily="monospace" letterSpacing="1">UNIFIED LAYER</text>
      {/* Output */}
      <line x1="140" y1="130" x2="140" y2="155" stroke="rgba(169,199,255,0.3)" strokeWidth="1" />
      <circle cx="140" cy="155" r="8" stroke="rgba(169,199,255,0.5)" strokeWidth="1" />
      <text x="132" y="158" fill="rgba(169,199,255,0.4)" fontSize="6" fontFamily="monospace">LTV</text>
    </svg>
  );
}

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="section-pad"
      aria-labelledby="case-studies-heading"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="container-main">
        {/* Header */}
        <AnimatedSection>
          <div
            className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 mb-16"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="mb-6 md:mb-0">
              <SectionLabel light>Technical Capability & Proof of Method</SectionLabel>
              <h2
                id="case-studies-heading"
                className="text-headline-md"
                style={{ color: "var(--color-on-primary)" }}
              >
                Systems Architecture Models
              </h2>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="btn-ghost-white flex items-center gap-2"
              aria-label="Request a Growth Systems Diagnostic"
            >
              Request Diagnostic for Your Stack
              <ArrowRight size={14} aria-hidden="true" />
            </button>
          </div>
        </AnimatedSection>

        {/* Case Study Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {caseStudies.map((study, index) => (
            <StaggerItem key={study.headline}>
              <article className="group">
                {/* Visual diagram */}
                <div
                  className="h-48 mb-8 flex items-center justify-center p-6 overflow-hidden transition-opacity duration-500"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "0.7";
                  }}
                  aria-hidden="true"
                >
                  <StructuralDiagram
                    variant={index === 0 ? "network" : "unified"}
                  />
                </div>

                {/* Tags */}
                <div className="flex gap-4 mb-6" aria-label="Case study categories">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-label-caps pb-1"
                      style={{
                        color: "var(--color-primary-fixed-dim)",
                        borderBottom: "1px solid rgba(169,199,255,0.3)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="text-headline-sm mb-4"
                  style={{ color: "var(--color-on-primary)" }}
                >
                  {study.headline}
                </h3>
                <div className="mb-8 space-y-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest font-mono" style={{ color: "var(--color-primary-fixed-dim)" }}>01 / Problem</span>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>{study.problem}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest font-mono" style={{ color: "var(--color-primary-fixed-dim)" }}>02 / Diagnosis</span>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>{study.diagnosis}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest font-mono" style={{ color: "var(--color-primary-fixed-dim)" }}>03 / Architecture</span>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>{study.architecture}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest font-mono" style={{ color: "var(--color-primary-fixed-dim)" }}>04 / Implementation</span>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>{study.implementation}</p>
                  </div>
                </div>

                {/* Outcome callout */}
                <div
                  className="p-8 mt-6"
                  style={{ borderTop: "1px dashed rgba(255,255,255,0.15)" }}
                >
                  <div className="flex flex-col gap-6">
                    <div>
                      <p
                        className="text-label-caps mb-2"
                        style={{ color: "var(--color-primary-fixed-dim)" }}
                      >
                        System Constraint
                      </p>
                      <p
                        className="text-body-md"
                        style={{ color: "var(--color-outline-variant)" }}
                      >
                        {study.constraint}
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-label-caps mb-4"
                        style={{ color: "var(--color-primary-fixed-dim)" }}
                      >
                        Verified Yield
                      </p>
                      <div className="flex items-baseline gap-3">
                        <p
                          className="text-[48px] md:text-[64px] font-serif leading-none tracking-tight"
                          style={{ color: "var(--color-on-primary)" }}
                        >
                          {study.outcomeStat}
                        </p>
                        <p
                          className="text-body-md font-semibold max-w-[120px] leading-tight"
                          style={{ color: "var(--color-on-primary)" }}
                        >
                          {study.outcomeLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
