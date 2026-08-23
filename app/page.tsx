import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { Services } from "@/components/sections/Services";
import { FirstEngagement } from "@/components/sections/FirstEngagement";
import { GrowthFrictionIndex } from "@/components/sections/GrowthFrictionIndex";
import { Methodology } from "@/components/sections/Methodology";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyNorthStar } from "@/components/sections/WhyNorthStar";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1} className="w-full overflow-x-hidden relative">
        <div className="relative z-10">
          <Hero />
          <WhoWeHelp />
          <Services />
          <FirstEngagement />
          <GrowthFrictionIndex />
          <Methodology />
          <CaseStudies />
          <WhyNorthStar />
          <LeadCapture />
        </div>
      </main>
      <Footer />
    </>
  );
}

