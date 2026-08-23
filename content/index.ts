import type {
  NavLink,
  ServicePillar,
  MethodologyStep,
  CaseStudy,
  GFIDomain,
  Differentiator,
  WhoWeHelpCategory,
  DiagnosticDeliverable,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Who We Help", href: "#who-we-help" },
  { label: "What We Fix", href: "#what-we-fix" },
  { label: "The Diagnostic", href: "#diagnostic" },
  { label: "Proof of Method", href: "#case-studies" },
  { label: "About Founder", href: "#why-north-star" },
];

export const whoWeHelpCategories: WhoWeHelpCategory[] = [
  {
    badge: "Primary Focus — KSA & UAE",
    title: "GCC Real Estate Developers & Brokerages",
    description:
      "Businesses managing multiple projects, ad channels, and sales teams where enquiry-to-appointment conversion is leaking.",
    keyProblems: [
      "Inquiries sitting unassigned for hours after ad campaigns fire",
      "Sales agents wasting bandwidth on unqualified tire-kickers",
      "Lack of real-time visibility between lead submission and CRM handoff",
    ],
    systemFix:
      "Real-Estate Lead-to-Appointment System: Instant intent scoring, automated routing, speed-to-lead notification, and persistent follow-up workflows.",
  },
  {
    badge: "Secondary Vertical",
    title: "Premium Healthcare & Private Clinics",
    description:
      "Clinic networks and specialized medical providers needing deterministic patient acquisition and booking workflows.",
    keyProblems: [
      "Rising cost per booking despite heavy marketing spend",
      "High drop-off between website inquiry and confirmed appointment",
      "Disconnected booking software and marketing attribution",
    ],
    systemFix:
      "Patient Booking Pipeline: Server-side tracking, automated intake qualification, and CRM/EHR appointment sync.",
  },
  {
    badge: "Secondary Vertical",
    title: "High-Value Professional Services",
    description:
      "B2B advisory, legal, corporate structuring, and financial service firms handling high-ticket client inquiries.",
    keyProblems: [
      "Manual intake processes creating friction for high-net-worth prospects",
      "Inconsistent follow-up on high-intent corporate inquiries",
      "No structured data tracking pipeline health or team response velocity",
    ],
    systemFix:
      "B2B Qualification Engine: Structured diagnostic intake, automated routing to senior advisors, and pipeline telemetry.",
  },
];

export const gfiDomains: GFIDomain[] = [
  {
    title: "Response & Routing Speed",
    description:
      "Enquiries cooling off in queues before reaching sales reps. We automate instant qualification and route leads in seconds.",
    frictionPoint1: "Delayed Response Time (>15 min)",
    frictionPoint2: "Unfiltered Lead Assignment",
  },
  {
    title: "Qualification & Intent Logic",
    description:
      "Sales teams spending hours on low-intent prospects. We engineer smart qualification logic into intake channels.",
    frictionPoint1: "Unqualified Inquiry Bandwidth Drain",
    frictionPoint2: "No Intent Scoring Thresholds",
  },
  {
    title: "CRM Handoff & Follow-Up",
    description:
      "Leads dropping out between campaign, website, CRM, and agent assignment. We build resilient multi-touch workflows.",
    frictionPoint1: "CRM Integration Gaps",
    frictionPoint2: "Cold Prospect Abandonment",
  },
];

export const servicePillars: ServicePillar[] = [
  {
    number: "01",
    title: "Speed-to-Lead & Instant Qualification",
    description:
      "We replace static forms and manual handling with instant intent qualification systems that capture prospect details, evaluate intent in real time, and trigger immediate sales notifications.",
    systemImpact: "Sub-2-Minute Lead Response",
    strategicOutcome: "Higher Appointment Show Rate",
  },
  {
    number: "02",
    title: "Automated CRM Routing & Sales Assignment",
    description:
      "We map your exact sales structure and build resilient API integrations that pass scored leads directly into your CRM, assign them to the right agent, and track response status.",
    systemImpact: "Zero Lead Leakage",
    strategicOutcome: "Eliminated Manual Data Entry",
  },
  {
    number: "03",
    title: "Multi-Touch Pipeline & Re-engagement Automation",
    description:
      "We design automated, behavioral-triggered follow-up sequences across SMS, WhatsApp, and email so cold or stalled inquiries are systematically re-engaged without rep burnout.",
    systemImpact: "Persistent Re-engagement",
    strategicOutcome: "Maximized Pipeline Lifetime Value",
  },
];

export const diagnosticDeliverables: DiagnosticDeliverable[] = [
  {
    title: "1. Workflow & Leakage Audit",
    description:
      "Full mapping of your current lead path from ad click to website form, qualification, CRM entry, sales assignment, and response time.",
  },
  {
    title: "2. Bottleneck Quantification",
    description:
      "Identification of specific points where qualified prospects are lost, delayed, or misrouted across your sales operations.",
  },
  {
    title: "3. Prioritized Repair Plan",
    description:
      "A concrete architectural roadmap detailing exact software, API integrations, routing rules, and automation required to fix the leaks.",
  },
  {
    title: "4. Systems Architecture Map",
    description:
      "A clear technical diagram showing how your marketing channels, lead capture, CRM, and sales team will connect seamlessly.",
  },
];

export const methodologySteps: MethodologyStep[] = [
  {
    number: "01",
    title: "Research & Audit",
    description:
      "Mapping your current lead flow, response times, CRM handoff, and sales assignment to find exact leakage points.",
  },
  {
    number: "02",
    title: "Logic Architecture",
    description:
      "Engineering the qualification rules, routing logic, and automated workflows required for your specific operational model.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    description:
      "Writing clean integrations, connecting webhooks, and configuring CRM/automation infrastructure without disrupting daily operations.",
  },
  {
    number: "04",
    title: "Measure & Optimize",
    description:
      "Tracking response velocity, qualification accuracy, and appointment conversion rates to continuously refine system yield.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    tags: ["Real Estate", "Lead Routing", "Illustrative Framework"],
    headline: "Real Estate Multi-Project Lead Routing Architecture",
    problem: "Ad spend across multiple developments generated high lead volume, but response times averaged 4 hours and leads went to unassigned spreadsheets.",
    diagnosis: "No centralized intent scoring or real-time routing; sales agents picked leads manually, favoring low-value inquiries.",
    architecture: "Algorithmic webhook router with instant qualification thresholds and agent round-robin assignment.",
    implementation: "Engineered a centralized lead-capture router intercepting enquiries, scoring buyer budget/timeline, and delivering instant WhatsApp/CRM alerts to top agents.",
    constraint: "Slow Response & Unassigned Leads",
    outcomeStat: "System Fix",
    outcomeLabel: "Instant Routing & Qualified Appointment Lift",
  },
  {
    tags: ["Healthcare", "Attribution Pipeline", "Illustrative Framework"],
    headline: "Clinic Network Patient Booking Workflow",
    problem: "High cost per booking with heavy drop-off between online booking requests and actual clinic visits.",
    diagnosis: "Disconnected appointment booking widget and advertising platforms created blind spots in patient journey data.",
    architecture: "Unified data pipeline mapping online booking submissions directly to ad platform conversion APIs.",
    implementation: "Deployed server-side conversion tracking and automated WhatsApp booking confirmations to confirm patient appointments instantly.",
    constraint: "Booking Drop-Off & Attribution Gaps",
    outcomeStat: "System Fix",
    outcomeLabel: "Automated Confirmation & Lower CAC",
  },
];

export const differentiators: Differentiator[] = [
  {
    title: "Founder-Engineer Execution",
    description:
      "You work directly with Hamza Hattab—a systems engineer who researches, architects, writes the code, deploys the integrations, and measures performance.",
  },
  {
    title: "Practical Systems Over Slide Decks",
    description:
      "We build tangible software, webhooks, and CRM automation rather than handing off theoretical consulting reports.",
  },
  {
    title: "Focused GCC Specialization",
    description:
      "Tailored specifically for operators in Saudi Arabia and the UAE who require fast, localized, and discreet execution.",
  },
  {
    title: "Empirical & Measured",
    description:
      "Every project starts with a diagnostic and ends with concrete operational measurement—response speed, qualification rate, and appointments booked.",
  },
];

export const marketOptions = [
  { value: "saudi_arabia", label: "Saudi Arabia (KSA)" },
  { value: "uae", label: "United Arab Emirates (UAE)" },
  { value: "qatar", label: "Qatar" },
  { value: "kuwait", label: "Kuwait" },
  { value: "bahrain", label: "Bahrain" },
  { value: "oman", label: "Oman" },
  { value: "other_gcc", label: "Other GCC / Middle East" },
  { value: "international", label: "International" },
];

export const industryOptions = [
  { value: "real_estate", label: "Real Estate (Developer / Brokerage)" },
  { value: "clinics_healthcare", label: "Healthcare & Private Clinics" },
  { value: "professional_services", label: "Professional Services & Advisory" },
  { value: "other", label: "Other GCC Operator" },
];

export const companySizeOptions = [
  { value: "1_10", label: "1 - 10 Employees" },
  { value: "11_50", label: "11 - 50 Employees" },
  { value: "51_200", label: "51 - 200 Employees" },
  { value: "200_plus", label: "200+ Employees" },
];

export const bottleneckOptions = [
  { value: "lead_response_speed", label: "Lead Response Speed & Routing" },
  { value: "lead_qualification", label: "Lead Qualification & Intent Filtering" },
  { value: "crm_handoff", label: "CRM Integration & Sales Handoff" },
  { value: "follow_up_automation", label: "Follow-Up & Pipeline Re-engagement" },
  { value: "marketing_attribution", label: "Marketing ROI & Attribution Data" },
  { value: "other", label: "Other Operational Bottleneck" },
];

