import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | North Star Advisory",
  description:
    "Privacy Policy and Data Protection Notice for North Star Advisory. Details third-party analytics, bot prevention, security controls, and form submission practices.",
  alternates: {
    canonical: "https://northstaradvisory.pro/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1} className="w-full overflow-x-hidden relative pt-16 pb-24" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-main max-w-4xl mx-auto px-6">
          <h1 className="text-headline-lg mb-4" style={{ color: "var(--color-primary)" }}>
            Privacy Policy & Data Notice
          </h1>
          <p className="text-label-caps mb-12" style={{ color: "var(--color-secondary)" }}>
            Effective Date: August 23, 2026 | Last Revised: August 2026
          </p>

          <div className="space-y-10 text-body-lg" style={{ color: "var(--color-on-surface)" }}>
            <section className="space-y-4">
              <h2 className="text-headline-sm" style={{ color: "var(--color-primary)" }}>
                1. Overview & Business Boundaries
              </h2>
              <p>
                North Star Advisory (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the corporate website at <code>https://northstaradvisory.pro</code>. We provide founder-led growth systems engineering, automated lead routing, and workflow optimization services for businesses operating across the Gulf Cooperation Council (GCC) region.
              </p>
              <p>
                We respect your privacy and process personal and corporate data strictly in accordance with applicable regional data protection standards, including Saudi Arabia Data Personal Data Protection Law (PDPL) and UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-sm" style={{ color: "var(--color-primary)" }}>
                2. Data We Collect & Purpose
              </h2>
              <p>When you interact with our website or submit a diagnostic request, we collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Diagnostic Form Submissions:</strong> Full Name, Corporate Email Address, Company Name, Role/Title, Primary Market/Country (KSA, UAE, Qatar, Kuwait, Bahrain, Oman, or International), Industry Sector, Team Size, Operational Bottleneck, Website URL, and optional operational context.
                </li>
                <li>
                  <strong>Technical Telemetry:</strong> IP address (processed temporarily for security and rate limiting), user-agent string, page view events, scroll depth, and interaction metrics.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-sm" style={{ color: "var(--color-primary)" }}>
                3. Third-Party Infrastructure & Sub-Processors
              </h2>
              <p>To deliver a secure, performant website, we use the following third-party infrastructure services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cloudflare Turnstile:</strong> Used for bot prevention and spam mitigation. Turnstile evaluates request telemetry to prevent automated abuse without tracking users across non-Cloudflare sites.
                </li>
                <li>
                  <strong>Upstash Redis:</strong> Used for server-side rate limiting (maximum 3 diagnostic requests per minute per IP address) to prevent form abuse.
                </li>
                <li>
                  <strong>Resend API:</strong> Used to securely transmit diagnostic application payloads directly to our founder via encrypted email delivery.
                </li>
                <li>
                  <strong>Google Analytics 4 & Microsoft Clarity:</strong> Used to measure website engagement, page view velocity, and usability. Interaction data is aggregated and anonymized.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-sm" style={{ color: "var(--color-primary)" }}>
                4. Data Retention & Response Commitment
              </h2>
              <p>
                Diagnostic request submissions are retained strictly for the duration necessary to conduct the diagnostic review and follow up with your team. We review all valid requests and respond within two business days.
              </p>
              <p>
                We do not sell, rent, trade, or share your corporate or personal data with external third parties for commercial or marketing purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-headline-sm" style={{ color: "var(--color-primary)" }}>
                5. Your Rights & Inquiries
              </h2>
              <p>
                You may request access to, correction of, or deletion of any personal data submitted to North Star Advisory at any time by contacting our founder directly:
              </p>
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
