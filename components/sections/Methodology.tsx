"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { methodologySteps } from "@/content";
import type { MethodologyStep } from "@/types";

function StepCard({ step }: { step: MethodologyStep }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="group flex flex-col items-center md:items-start text-center md:text-left">
      <div
        className="w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300 text-headline-sm cursor-default select-none"
        style={{
          border: "2px solid var(--color-primary)",
          color: hovered ? "var(--color-on-primary)" : "var(--color-primary)",
          backgroundColor: hovered
            ? "var(--color-primary)"
            : "var(--color-surface-container)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-hidden="true"
      >
        {step.number}
      </div>

      <h3
        className="text-body-lg font-semibold mb-3"
        style={{ color: "var(--color-primary)" }}
      >
        {step.title}
      </h3>
      <p
        className="text-body-md"
        style={{ color: "var(--color-secondary)" }}
      >
        {step.description}
      </p>
    </div>
  );
}

export function Methodology() {
  return (
    <section
      id="methodology"
      className="section-pad"
      aria-labelledby="methodology-heading"
      style={{ backgroundColor: "var(--color-surface-container)" }}
    >
      <div className="container-main">
        {/* Header */}
        <AnimatedSection className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
          <SectionLabel>Deployment Protocol</SectionLabel>
          <h2
            id="methodology-heading"
            className="text-headline-md"
            style={{ color: "var(--color-primary)" }}
          >
            The Architecture Model
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connector line */}
          <div
            className="hidden md:block absolute h-px"
            style={{
              top: "32px",
              left: "10%",
              right: "10%",
              backgroundColor: "rgba(0,23,54,0.12)",
            }}
            aria-hidden="true"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
            {methodologySteps.map((step) => (
              <StaggerItem key={step.number}>
                <StepCard step={step} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
