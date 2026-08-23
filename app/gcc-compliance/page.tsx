import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "GCC Compliance & Business Boundaries | North Star Advisory",
  description:
    "Official disclosure regarding North Star Advisory business boundaries, non-regulated status, software engineering scope, and GCC operational standards.",
  alternates: {
    canonical: "https://northstaradvisory.pro/gcc-compliance",
  },
};

export default function GCCCompliancePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1} className="w-full overflow-x-hidden relative pt-16 pb-24" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-main max-w-4xl mx-auto px-6">
          <h1 className="text-headline-lg mb-4" style={{ color: "var(--color-primary)" }}>
            GCC Compliance & Business Boundaries
          </h1>
          <p className="text-label-caps mb-12" style={{ color: "var(--color-secondary)" }}>
            Regulatory Notice & Corporate Scope | North Star Advisory
          </p>

          <div className="space-y-10 text-body-lg" style={{ color: "var(--color-on-surface)" }}>
            <section className="space-y-4">
              <h2 className="text-headline-sm" style={{ color: "var(--color-primary)" }}>
                1. Non-Regulated Commercial Status Notice
              </h2>
              <p>
                North Star Advisory operates as a specialized growth-systems engineering, automation, and software advisory practice led by Founder Hamza Hattab.
              </p>
              <p>
                North Star Advisory is <strong>NOT</strong> an investment adviser, financial institution, securities broker-dealer, asset manager, or regulated financial services firm under the Capital Market Authority (CMA) of Saudi Arabia, the Central Bank of the UAE (CBUAE), the Securities and Commodities Authority (SCA), or the Dubai Financial Services Authority (DFSA).
              </p>
              <p>
                We do not manage investment funds, render financial product advice, handle customer funds, execute securities transactions, or offer regulated financial instruments.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-sm" style={{ color: "var(--color-primary)" }}>
                2. Operational Scope of Services
              </h2>
              <p>Our engagement scope is strictly restricted to commercial software, operational workflow engineering, and revenue process automation, specifically:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Audit and mapping of marketing enquiry capture, lead qualification, and CRM handoffs.</li>
                <li>Design and software integration of sub-2-minute speed-to-lead notification webhooks.</li>
                <li>Automated lead routing and round-robin sales agent assignment logic.</li>
                <li>Persistent re-engagement workflows across email, SMS, and WhatsApp Business APIs.</li>
                <li>Telemetry tracking and operational conversion analytics.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-sm" style={{ color: "var(--color-primary)" }}>
                3. Illustrative Capability Demonstrations
              </h2>
              <p>
                All case studies, architectural models, and diagnostic formulas (including the Growth Friction Index) published on our website serve as illustrative capability frameworks and signal models. They demonstrate founder technical methodology and system design principles and do not constitute guaranteed financial returns or past performance representations for third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-sm" style={{ color: "var(--color-primary)" }}>
                4. Data Sovereignty & Regional Compliance
              </h2>
              <p>
                We design system architectures with strict attention to regional data residency expectations across Saudi Arabia (KSA) and the United Arab Emirates (UAE). Customer data integrations adhere to regional data privacy laws, confidentiality obligations, and client NDAs.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-sm" style={{ color: "var(--color-primary)" }}>
                5. Formal Contact & Verification
              </h2>
              <p>For any legal or compliance inquiries, please contact our founder directly:</p>
              <p className="font-semibold" style={{ color: "var(--color-primary)" }}>
                Hamza Hattab — Founder & Growth Systems Engineer<br />
                Email: <a href="mailto:hamza@northstaradvisory.pro" className="underline">hamza@northstaradvisory.pro</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
