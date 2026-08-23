import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact & Diagnostic Request | North Star Advisory",
  description:
    "Request a Growth Systems Diagnostic or reach Hamza Hattab directly for GCC growth systems engineering and lead routing audits.",
  alternates: {
    canonical: "https://northstaradvisory.pro/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1} className="w-full overflow-x-hidden relative pt-12">
        <div className="relative z-10">
          <LeadCapture />
        </div>
      </main>
      <Footer />
    </>
  );
}
