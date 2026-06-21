import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { differentiators } from "@/content";

export function WhyNorthStar() {
  return (
    <section
      id="why-north-star"
      className="section-pad"
      aria-labelledby="why-heading"
      style={{ backgroundColor: "var(--color-surface-container)" }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left column */}
          <AnimatedSection className="md:col-span-7">
            <SectionLabel>The Thesis</SectionLabel>
            <h2
              id="why-heading"
              className="text-headline-md mb-8"
              style={{ color: "var(--color-primary)", lineHeight: "1.25" }}
            >
              Infrastructure over advice.
              <br /> Algorithms over effort.
            </h2>
            <p
              className="text-body-lg mb-12"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              North Star Advisory is built on a singular premise: sustainable growth is an engineering problem, not a marketing problem. We build tangible revenue infrastructure, deploy algorithmic execution, and measure success in measurable business outcomes.
            </p>

            {/* Differentiators */}
            <div
              className="pt-10"
              style={{ borderTop: "1px solid rgba(0,23,54,0.1)" }}
            >
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {differentiators.map((d) => (
                <StaggerItem key={d.title}>
                  <div>
                    {/* Square icon marker */}
                    <div
                      className="w-10 h-10 flex items-center justify-center mb-4"
                      style={{
                        border: "1px solid var(--color-primary)",
                      }}
                      aria-hidden="true"
                    >
                      <div
                        className="w-3 h-3"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      />
                    </div>
                    <h3
                      className="text-body-lg font-semibold mb-2"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {d.title}
                    </h3>
                    <p
                      className="text-body-md"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {d.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            </div>
          </AnimatedSection>

          {/* Right column — Removed fake testimonial block per V4 standards */}
        </div>

        {/* Philosophy Section */}
        <AnimatedSection className="mt-20 md:mt-32 pt-16 md:pt-20">
          <div style={{ borderTop: "1px solid rgba(0,23,54,0.1)" }} className="pt-16 md:pt-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5 md:pr-8 flex flex-col justify-between">
                <div>
                  <SectionLabel>The Operator</SectionLabel>
                  <div className="mb-8 pb-8" style={{ borderBottom: "1px dashed rgba(0,23,54,0.15)" }}>
                    <p className="text-headline-sm" style={{ color: "var(--color-primary)" }}>Principal Advisor</p>
                    <p className="text-label-caps mt-3" style={{ color: "var(--color-secondary)" }}>Revenue Systems & Growth Architecture</p>
                    <p className="text-label-caps mt-1" style={{ color: "var(--color-secondary)" }}>Specialization: GCC Revenue Systems</p>
                  </div>
                  <h3 className="text-headline-sm mb-6" style={{ color: "var(--color-primary)", lineHeight: 1.3 }}>
                    We build the architecture that consulting firms only talk about.
                  </h3>
                  <p className="text-body-md mb-8" style={{ color: "var(--color-secondary)" }}>
                    The firm engineers clinical data infrastructures and real estate lead-routing systems because we have witnessed millions of dollars burn on theoretical strategy decks. You do not need more advice. You need systems that mathematically generate yield.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 border hairline-all h-full" style={{ backgroundColor: "var(--color-surface)", borderColor: "rgba(0,23,54,0.08)" }}>
                  <h4 className="text-body-lg font-semibold mb-3" style={{ color: "var(--color-primary)" }}>1. Logic over effort.</h4>
                  <p className="text-body-md" style={{ color: "var(--color-secondary)" }}>
                    Throwing more marketing budget at a broken pipeline is financial negligence. We fix the systemic conversion logic before we attempt to scale acquisition.
                  </p>
                </div>
                <div className="p-8 border hairline-all h-full" style={{ backgroundColor: "var(--color-surface)", borderColor: "rgba(0,23,54,0.08)" }}>
                  <h4 className="text-body-lg font-semibold mb-3" style={{ color: "var(--color-primary)" }}>2. Data over opinions.</h4>
                  <p className="text-body-md" style={{ color: "var(--color-secondary)" }}>
                    Every recommendation we make is anchored in mathematical probability and validated by hard enterprise data. Assumptions are the enemy of yield.
                  </p>
                </div>
                <div className="p-8 border hairline-all h-full" style={{ backgroundColor: "var(--color-surface)", borderColor: "rgba(0,23,54,0.08)" }}>
                  <h4 className="text-body-lg font-semibold mb-3" style={{ color: "var(--color-primary)" }}>3. Tangible over theoretical.</h4>
                  <p className="text-body-md" style={{ color: "var(--color-secondary)" }}>
                    We do not hand over a 100-page PDF and walk away. We build, deploy, and refine the actual systems and logic models that generate your revenue.
                  </p>
                </div>
                <div className="p-8 border hairline-all h-full" style={{ backgroundColor: "var(--color-surface)", borderColor: "rgba(0,23,54,0.08)" }}>
                  <h4 className="text-body-lg font-semibold mb-3" style={{ color: "var(--color-primary)" }}>4. Accountability over retainers.</h4>
                  <p className="text-body-md" style={{ color: "var(--color-secondary)" }}>
                    We operate with the precise commercial urgency of a founder. Our success is explicitly tied to the measurable enterprise value we unlock for your firm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
