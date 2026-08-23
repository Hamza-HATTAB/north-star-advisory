import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { WhyNorthStar } from "@/components/sections/WhyNorthStar";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About North Star Advisory | Founder & Growth Systems Architecture",
  description:
    "Learn about North Star Advisory and Founder Hamza Hattab. We engineer lead routing, instant qualification, and CRM integration systems for GCC growth operators.",
  alternates: {
    canonical: "https://northstaradvisory.pro/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1} className="w-full overflow-x-hidden relative pt-12">
        <div className="relative z-10">
          <WhyNorthStar />
          <WhoWeHelp />
          <LeadCapture />
        </div>
      </main>
      <Footer />
    </>
  );
}
