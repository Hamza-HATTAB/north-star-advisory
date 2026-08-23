"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { diagnosticDeliverables } from "@/content";
import { ArrowRight, Clock, FileCheck, Target } from "lucide-react";

export function FirstEngagement() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="diagnostic"
      className="section-pad"
      aria-labelledby="diagnostic-heading"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-main">
        {/* Header */}
        <AnimatedSection className="mb-16 md:mb-20 max-w-3xl">
          <SectionLabel>First Engagement Offer</SectionLabel>
          <h2
            id="diagnostic-heading"
            className="text-headline-md mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            The Real-Estate Lead-to-Appointment Diagnostic
          </h2>
          <p
            className="text-body-lg"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            Instead of proposing expensive, multi-month consulting retainers upfront, we begin with a narrow, defined 5-day diagnostic to map where your qualified enquiries are lost between ad campaigns, website capture, qualification, CRM handoff, and agent response.
          </p>
        </AnimatedSection>

        {/* Diagnostic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Scope & Inputs */}
          <AnimatedSection className="lg:col-span-5">
            <div
              className="p-8 border hairline-all"
              style={{
                backgroundColor: "var(--color-surface-container-low)",
                borderColor: "rgba(0,23,54,0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target size={20} style={{ color: "var(--color-primary)" }} />
                <h3 className="text-headline-sm" style={{ color: "var(--color-primary)" }}>
                  Diagnostic Scope & Inputs
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-label-caps" style={{ color: "var(--color-secondary)" }}>
                    01 / Lead Capture Audit
                  </p>
                  <p className="text-body-md" style={{ color: "var(--color-on-surface)" }}>
                    Evaluating all current web forms, landing pages, Meta/Google ad lead forms, and WhatsApp widgets.
                  </p>
                </div>

                <div className="space-y-2 pt-4" style={{ borderTop: "1px dashed rgba(0,23,54,0.1)" }}>
                  <p className="text-label-caps" style={{ color: "var(--color-secondary)" }}>
                    02 / Qualification & Response Speed
                  </p>
                  <p className="text-body-md" style={{ color: "var(--color-on-surface)" }}>
                    Measuring exact timestamp gaps between enquiry submission, agent assignment, and first contact attempt.
                  </p>
                </div>

                <div className="space-y-2 pt-4" style={{ borderTop: "1px dashed rgba(0,23,54,0.1)" }}>
                  <p className="text-label-caps" style={{ color: "var(--color-secondary)" }}>
                    03 / CRM Integration & Routing
                  </p>
                  <p className="text-body-md" style={{ color: "var(--color-on-surface)" }}>
                    Reviewing API connections, manual entry dependencies, and unassigned lead queues in your CRM.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 flex items-center gap-3" style={{ borderTop: "1px solid rgba(0,23,54,0.1)" }}>
                <Clock size={18} style={{ color: "var(--color-primary)" }} />
                <p className="text-body-sm font-semibold" style={{ color: "var(--color-primary)" }}>
                  Execution Timeline: 5 Business Days
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Deliverables */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <FileCheck size={20} style={{ color: "var(--color-primary)" }} />
              <h3 className="text-headline-sm" style={{ color: "var(--color-primary)" }}>
                What You Receive
              </h3>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {diagnosticDeliverables.map((item) => (
                <StaggerItem key={item.title}>
                  <div
                    className="p-6 border hairline-all h-full flex flex-col justify-between"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "rgba(0,23,54,0.08)",
                    }}
                  >
                    <div>
                      <h4
                        className="text-body-lg font-semibold mb-3"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-body-md"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Bottom CTA block */}
        <AnimatedSection delay={0.2}>
          <div
            className="p-8 md:p-12 border hairline-all flex flex-col md:flex-row items-center justify-between gap-8"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-on-primary)",
            }}
          >
            <div className="max-w-xl">
              <p className="text-label-caps mb-2" style={{ color: "var(--color-primary-fixed-dim)" }}>
                Zero Risk First Mandate
              </p>
              <h3 className="text-headline-md mb-2" style={{ color: "white" }}>
                Ready to identify where your enquiries are lost?
              </h3>
              <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>
                Request your diagnostic. We will review your business model and confirm diagnostic availability within one business day.
              </p>
            </div>
            <button
              onClick={scrollToContact}
              className="btn-primary-white shrink-0 flex items-center gap-2"
            >
              Request a Growth Systems Diagnostic
              <ArrowRight size={14} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
