"use client";

import { useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { trackCTAClick } from "@/lib/analytics";
import { HeroVisual } from "@/components/ui/HeroVisual";

export function Hero() {
  const scrollToContact = useCallback(() => {
    trackCTAClick("Apply for Executive Diagnostic", "hero-primary");
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToServices = useCallback(() => {
    trackCTAClick("Read The Thesis", "hero-secondary");
    const el = document.getElementById("why-north-star");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section
      className="section-pad relative"
      aria-label="Hero — North Star Advisory positioning"
      style={{ paddingBottom: "64px" }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          {/* Content */}
          <div className="lg:col-span-7 lg:pr-12 relative z-10">
            <div className="flex flex-col">
              <div className="animate-fade-in-up flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 bg-[var(--color-primary)]" />
                <span className="text-label-caps tracking-widest uppercase" style={{ color: "var(--color-primary)" }}>
                  North Star Advisory
                </span>
                <span className="text-[var(--color-outline-variant)]">/</span>
                <span className="text-label-caps text-[var(--color-secondary)]">Revenue Architecture</span>
              </div>

              <div className="animate-fade-in-up delay-100">
                <h1
                  className="text-display-lg-mobile md:text-display-lg mb-8 leading-tight"
                  style={{ color: "var(--color-primary)" }}
                >
                  Growth rarely breaks because of effort.
                  <br className="hidden sm:block" /> It breaks because of friction hidden inside the system.
                </h1>
              </div>

              <div className="animate-fade-in-up delay-200">
                <p
                  className="text-body-lg mb-12 max-w-2xl"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  We identify structural revenue leakage and deploy algorithmic execution to protect enterprise margins. We architect systemic revenue yield for ambitious operators across the GCC.
                </p>
              </div>

              <div className="animate-fade-in-up delay-300">
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    className="btn-primary"
                    onClick={scrollToContact}
                    id="hero-cta-primary"
                  >
                    Apply for Diagnostic
                  </button>
                  <button
                    className="btn-secondary flex items-center gap-2"
                    onClick={scrollToServices}
                    id="hero-cta-secondary"
                  >
                    Read The Thesis
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5 hidden lg:block relative" style={{ height: "520px" }}>
            <div className="h-full animate-fade-in-up delay-400 p-1 border hairline-all" style={{ backgroundColor: "var(--color-surface)", borderColor: "rgba(0,23,54,0.1)" }}>
              <HeroVisual />
            </div>
          </div>
        </div>

        {/* Proof Bar */}
        <div
          className="mt-16 pt-12"
          style={{ borderTop: "1px dashed rgba(0,23,54,0.15)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                label: "Built For",
                value: "Real Estate, Healthcare, Professional Services",
              },
              {
                label: "Focus",
                value: "Saudi Arabia, UAE",
              },
              {
                label: "Specialization",
                value: "Revenue Systems, AI Infrastructure, Conversion Architecture",
              },
            ].map((item) => (
              <AnimatedSection key={item.label} delay={0.1}>
                <p
                  className="text-label-caps mb-2"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-body-md font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  {item.value}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
