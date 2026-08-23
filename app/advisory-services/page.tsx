import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Services } from "@/components/sections/Services";
import { FirstEngagement } from "@/components/sections/FirstEngagement";
import { GrowthFrictionIndex } from "@/components/sections/GrowthFrictionIndex";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Advisory Services & Systems Engineering | North Star Advisory",
  description:
    "Explore North Star Advisory systems engineering services: sub-2-minute lead response, automated CRM routing, and 5-day Lead-to-Appointment diagnostics.",
  alternates: {
    canonical: "https://northstaradvisory.pro/advisory-services",
  },
};

export default function AdvisoryServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1} className="w-full overflow-x-hidden relative pt-12">
        <div className="relative z-10">
          <Services />
          <FirstEngagement />
          <GrowthFrictionIndex />
          <LeadCapture />
        </div>
      </main>
      <Footer />
    </>
  );
}
