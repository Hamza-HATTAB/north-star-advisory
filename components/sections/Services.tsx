import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { servicePillars } from "@/content";

export function Services() {
  return (
    <section
      id="what-we-fix"
      className="section-pad"
      aria-labelledby="services-heading"
      style={{ backgroundColor: "var(--color-surface-container-low)" }}
    >
      <div className="container-main">
        {/* Header */}
        <AnimatedSection className="mb-16 md:mb-20">
          <SectionLabel>Core Solutions</SectionLabel>
          <h2
            id="services-heading"
            className="text-headline-md max-w-2xl"
            style={{ color: "var(--color-primary)" }}
          >
            What We Fix: Operational Systems Engineering
          </h2>
        </AnimatedSection>

        {/* Pillars */}
        <div className="space-y-0">
          {servicePillars.map((pillar, index) => (
            <AnimatedSection
              key={pillar.number}
              delay={index * 0.1}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 md:py-20"
                style={{
                  borderTop: "1px solid rgba(0,23,54,0.08)",
                  borderBottom:
                    index === servicePillars.length - 1
                      ? "1px solid rgba(0,23,54,0.08)"
                      : "none",
                }}
              >
                {/* Left column: number + title */}
                <div className="md:col-span-4">
                  <span
                    className="block mb-4"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "48px",
                      fontWeight: "600",
                      lineHeight: "1",
                      color: "rgba(0,23,54,0.15)",
                    }}
                    aria-hidden="true"
                  >
                    {pillar.number}
                  </span>
                  <h3
                    className="text-headline-sm"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {pillar.title}
                  </h3>
                </div>

                {/* Right column: description + callouts */}
                <div
                  className="md:col-span-8 md:pl-10"
                  style={{
                    borderLeft: undefined,
                  }}
                >
                  <div
                    className="hidden md:block absolute"
                    style={{
                      width: "1px",
                      top: 0,
                      bottom: 0,
                      left: "calc(4/12 * 100%)",
                      backgroundColor: "rgba(0,23,54,0.06)",
                    }}
                  />
                  <p
                    className="text-body-lg mb-10 max-w-2xl"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    {pillar.description}
                  </p>

                  {/* Impact callout */}
                  <div
                    className="grid grid-cols-2 gap-8 p-8"
                    style={{
                      backgroundColor: "var(--color-surface-container-low)",
                      border: "1px solid rgba(0,23,54,0.05)",
                    }}
                  >
                    <div>
                      <p
                        className="text-label-caps mb-2"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        System Impact
                      </p>
                      <p
                        className="text-body-md font-semibold"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {pillar.systemImpact}
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-label-caps mb-2"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        Strategic Outcome
                      </p>
                      <p
                        className="text-body-md font-semibold"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {pillar.strategicOutcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
