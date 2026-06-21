import type {
  NavLink,
  ServicePillar,
  MethodologyStep,
  CaseStudy,
  GFIDomain,
  Differentiator,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Core Capabilities", href: "#services" },
  { label: "The Protocol", href: "#methodology" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Our Thesis", href: "#why-north-star" },
];

export const gfiDomains: GFIDomain[] = [
  {
    title: "Market Friction",
    description:
      "Capital deployed into fragmented channels generating variable returns. We eliminate acquisition volatility.",
    frictionPoint1: "Unpredictable Lead Flow",
    frictionPoint2: "High Acquisition Cost",
  },
  {
    title: "Conversion Friction",
    description:
      "High-intent opportunities expiring in bloated pipelines. We engineer the exact logic path to closed revenue.",
    frictionPoint1: "Extended Sales Cycles",
    frictionPoint2: "Low Qualified Win Rate",
  },
  {
    title: "Execution Friction",
    description:
      "Manual redundancies eroding margins. We deploy algorithmic execution to protect executive bandwidth.",
    frictionPoint1: "Margin Erosion",
    frictionPoint2: "Executive Bandwidth Loss",
  },
];

export const servicePillars: ServicePillar[] = [
  {
    number: "01",
    title: "Revenue Architecture",
    description:
      "We design acquisition engines that mathematically reduce reliance on variable channels, establishing a compounding flow of qualified opportunities through structured data feedback loops.",
    systemImpact: "Lowered Blended CAC",
    strategicOutcome: "Compounding Pipeline Yield",
  },
  {
    number: "02",
    title: "Conversion Logic",
    description:
      "We map the critical path from interest to closed revenue, removing friction points and aligning automated sales processes with the buyer's cognitive decision journey.",
    systemImpact: "Accelerated Deal Velocity",
    strategicOutcome: "Increased Qualified Win Rate",
  },
  {
    number: "03",
    title: "Algorithmic Execution",
    description:
      "We deploy intelligent infrastructure via API integrations and custom logic layers to handle repetitive operations, freeing the operator for high-leverage strategic execution.",
    systemImpact: "Eliminated Manual Redundancy",
    strategicOutcome: "Protected Profit Margins",
  },
];

export const methodologySteps: MethodologyStep[] = [
  {
    number: "01",
    title: "Structural Audit",
    description:
      "Mapping your current data flow and isolating the exact operational bottlenecks suppressing your enterprise margin.",
  },
  {
    number: "02",
    title: "Logic Architecture",
    description:
      "Engineering a bespoke conversion pipeline and strict routing rules to maximize your system throughput.",
  },
  {
    number: "03",
    title: "Live Deployment",
    description:
      "Integrating the new infrastructure into your live environment without disrupting daily execution.",
  },
  {
    number: "04",
    title: "Yield Optimization",
    description:
      "Continuous algorithmic refinement based on hard performance data and measured operational leverage.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    tags: ["Real Estate", "Conversion Architecture"],
    headline: "Institutional Real Estate Portfolio",
    description:
      "Engineered a multi-node lead routing architecture to process high-volume inquiries, applying strict logic rules to segment intent and automate premium follow-up sequencing.",
    constraint: "Lead Leakage at Scale",
    outcomeStat: "31%",
    outcomeLabel: "Increase in Qualified Conversion",
  },
  {
    tags: ["Healthcare", "Growth Architecture"],
    headline: "Premium Private Clinic Network",
    description:
      "Architected a centralised data ecosystem integrating disjointed clinical and marketing systems to calculate precise patient lifetime value and algorithmically optimise acquisition spend.",
    constraint: "Fragmented Data Silos",
    outcomeStat: "42%",
    outcomeLabel: "Reduction in Patient Acquisition Cost",
  },
];

export const differentiators: Differentiator[] = [
  {
    title: "Empirically Driven",
    description:
      "We measure intervention success in validated enterprise value and structural revenue metrics — never vanity indicators.",
  },
  {
    title: "Absolute Discretion",
    description:
      "Operating with structural confidentiality for ambitious operators and private offices across the GCC.",
  },
  {
    title: "Infrastructure Over Advice",
    description:
      "We construct tangible business architecture, not theoretical slide decks. Every mandate produces operational infrastructure.",
  },
  {
    title: "Operator-to-Operator",
    description:
      "We understand the realities of scaling a business in the region. We speak the language of EBITDA, asset yield, and operational leverage.",
  },
];

export const industryOptions = [
  { value: "real_estate", label: "Real Estate" },
  { value: "clinics_healthcare", label: "Clinics & Healthcare" },
  { value: "professional_services", label: "Professional Services" },
  { value: "other", label: "Other" },
];

export const companySizeOptions = [
  { value: "1_10", label: "1 - 10 Employees" },
  { value: "11_50", label: "11 - 50 Employees" },
  { value: "51_200", label: "51 - 200 Employees" },
  { value: "200_plus", label: "200+ Employees" },
];

export const bottleneckOptions = [
  { value: "lead_generation", label: "Lead Generation" },
  { value: "conversion", label: "Conversion" },
  { value: "follow_up", label: "Follow-Up" },
  { value: "sales_process", label: "Sales Process" },
  { value: "operations", label: "Operations" },
  { value: "customer_experience", label: "Customer Experience" },
  { value: "ai_automation", label: "AI Automation" },
  { value: "other", label: "Other" },
];
