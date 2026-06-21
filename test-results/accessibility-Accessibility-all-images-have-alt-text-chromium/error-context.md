# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility >> all images have alt text
- Location: tests/e2e/accessibility.spec.ts:36:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "North Star Advisory — Home" [ref=e5] [cursor=pointer]:
        - /url: /
        - text: North Star Advisory
      - navigation "Primary navigation" [ref=e6]:
        - button "Core Capabilities" [ref=e7] [cursor=pointer]
        - button "The Protocol" [ref=e8] [cursor=pointer]
        - button "Case Studies" [ref=e9] [cursor=pointer]
        - button "Our Thesis" [ref=e10] [cursor=pointer]
      - button "Request a Strategic Review" [ref=e11] [cursor=pointer]: Request Strategic Review
  - main [ref=e12]:
    - generic [ref=e13]:
      - region "Hero — North Star Advisory positioning" [ref=e14]:
        - generic [ref=e15]:
          - generic [ref=e16]:
            - generic [ref=e18]:
              - generic [ref=e19]:
                - generic [ref=e21]: North Star Advisory
                - generic [ref=e22]: /
                - generic [ref=e23]: Revenue Architecture
              - heading "Growth rarely breaks because of effort. It breaks because of friction hidden inside the system." [level=1] [ref=e25]:
                - text: Growth rarely breaks because of effort.
                - text: It breaks because of friction hidden inside the system.
              - paragraph [ref=e27]: Revenue is leaking. Bandwidth is burned. Margins are eroding. We diagnose systemic bottlenecks and architect revenue yield and operational leverage for ambitious operators in the GCC.
              - generic [ref=e29]:
                - button "Apply for Diagnostic" [ref=e30] [cursor=pointer]
                - button "Read The Thesis" [ref=e31] [cursor=pointer]:
                  - text: Read The Thesis
                  - img [ref=e32]
            - generic [ref=e36]:
              - img [ref=e48]
              - generic [ref=e51]: SYS.ARC.01
              - generic [ref=e52]: YIELD.VECTOR
          - generic [ref=e54]:
            - generic [ref=e55]:
              - paragraph [ref=e56]: Built For
              - paragraph [ref=e57]: Real Estate, Healthcare, Professional Services
            - generic [ref=e58]:
              - paragraph [ref=e59]: Focus
              - paragraph [ref=e60]: Saudi Arabia, UAE
            - generic [ref=e61]:
              - paragraph [ref=e62]: Specialization
              - paragraph [ref=e63]: Revenue Systems, AI Infrastructure, Conversion Architecture
      - region "The Growth Friction Index" [ref=e64]:
        - generic [ref=e65]:
          - generic [ref=e66]:
            - generic [ref=e67]:
              - paragraph [ref=e68]: Proprietary Diagnostic
              - heading "The Growth Friction Index" [level=2] [ref=e69]
            - paragraph [ref=e71]: Most businesses do not have a growth problem. They have a friction problem. We identify exactly where revenue is being suppressed across three diagnostic domains — and we remove the constraints with precision.
          - generic [ref=e73]:
            - generic [ref=e74]:
              - generic [ref=e75]:
                - text: Operational Inputs
                - paragraph [ref=e76]: Capital & Time
              - generic [ref=e77]: ÷
              - generic [ref=e78]:
                - generic [ref=e79]: The Diagnostic
                - paragraph [ref=e80]: Friction Drag
              - generic [ref=e81]: =
              - generic [ref=e82]:
                - text: Actual Outcome
                - paragraph [ref=e83]: EBITDA Yield
            - generic [ref=e84]:
              - paragraph [ref=e85]: The Operator's Equation
              - paragraph [ref=e86]: Growth isn't just about adding more capital or time. It's about removing the friction that suppresses your return on both. We isolate the exact locations where revenue is leaking.
          - generic [ref=e88]:
            - generic [ref=e89]:
              - generic [ref=e90]: Live Diagnostic
              - generic [ref=e91]: 01 / 03
            - heading "How is your acquisition data routed to your sales or conversion team?" [level=3] [ref=e92]
            - generic [ref=e93]:
              - button "A Manual CRM entry or disjointed CSV uploads." [ref=e94]:
                - generic [ref=e95]: A
                - generic [ref=e96]: Manual CRM entry or disjointed CSV uploads.
              - button "B Basic Zapier connections without intent filtering." [ref=e97]:
                - generic [ref=e98]: B
                - generic [ref=e99]: Basic Zapier connections without intent filtering.
              - button "C Real-time algorithmic routing based on behavioral intent." [ref=e100]:
                - generic [ref=e101]: C
                - generic [ref=e102]: Real-time algorithmic routing based on behavioral intent.
      - region "The Architecture Model" [ref=e103]:
        - generic [ref=e104]:
          - generic [ref=e105]:
            - paragraph [ref=e106]: Deployment Protocol
            - heading "The Architecture Model" [level=2] [ref=e107]
          - generic [ref=e110]:
            - generic [ref=e112]:
              - generic [ref=e113]: "01"
              - heading "Structural Audit" [level=3] [ref=e114]
              - paragraph [ref=e115]: Mapping your current data flow and isolating the exact operational bottlenecks suppressing your enterprise margin.
            - generic [ref=e117]:
              - generic [ref=e118]: "02"
              - heading "Logic Architecture" [level=3] [ref=e119]
              - paragraph [ref=e120]: Engineering a bespoke conversion pipeline and strict routing rules to maximize your system throughput.
            - generic [ref=e122]:
              - generic [ref=e123]: "03"
              - heading "Live Deployment" [level=3] [ref=e124]
              - paragraph [ref=e125]: Integrating the new infrastructure into your live environment without disrupting daily execution.
            - generic [ref=e127]:
              - generic [ref=e128]: "04"
              - heading "Yield Optimization" [level=3] [ref=e129]
              - paragraph [ref=e130]: Continuous algorithmic refinement based on hard performance data and measured operational leverage.
      - region "Architectural Interventions" [ref=e131]:
        - generic [ref=e132]:
          - generic [ref=e134]:
            - generic [ref=e135]:
              - paragraph [ref=e136]: Empirical Evidence
              - heading "Architectural Interventions" [level=2] [ref=e137]
            - button "Examine all outcome reports" [ref=e138] [cursor=pointer]:
              - text: Examine Outcome Reports
              - img [ref=e139]
          - generic [ref=e141]:
            - article [ref=e143]:
              - img [ref=e145]:
                - generic [ref=e156]: ROUTER
              - generic "Case study categories" [ref=e157]:
                - generic [ref=e158]: Real Estate
                - generic [ref=e159]: Conversion Architecture
              - heading "Institutional Real Estate Portfolio" [level=3] [ref=e160]
              - paragraph [ref=e161]: Engineered a multi-node lead routing architecture to process high-volume inquiries, applying strict logic rules to segment intent and automate premium follow-up sequencing.
              - generic [ref=e163]:
                - generic [ref=e164]:
                  - paragraph [ref=e165]: System Constraint
                  - paragraph [ref=e166]: Lead Leakage at Scale
                - generic [ref=e167]:
                  - paragraph [ref=e168]: Verified Yield
                  - generic [ref=e169]:
                    - paragraph [ref=e170]: 31%
                    - paragraph [ref=e171]: Increase in Qualified Conversion
            - article [ref=e173]:
              - img [ref=e175]:
                - generic [ref=e185]: UNIFIED LAYER
                - generic [ref=e187]: LTV
              - generic "Case study categories" [ref=e188]:
                - generic [ref=e189]: Healthcare
                - generic [ref=e190]: Growth Architecture
              - heading "Premium Private Clinic Network" [level=3] [ref=e191]
              - paragraph [ref=e192]: Architected a centralised data ecosystem integrating disjointed clinical and marketing systems to calculate precise patient lifetime value and algorithmically optimise acquisition spend.
              - generic [ref=e194]:
                - generic [ref=e195]:
                  - paragraph [ref=e196]: System Constraint
                  - paragraph [ref=e197]: Fragmented Data Silos
                - generic [ref=e198]:
                  - paragraph [ref=e199]: Verified Yield
                  - generic [ref=e200]:
                    - paragraph [ref=e201]: 42%
                    - paragraph [ref=e202]: Reduction in Patient Acquisition Cost
      - region "Infrastructure over advice. Algorithms over effort." [ref=e203]:
        - generic [ref=e204]:
          - generic [ref=e206]:
            - paragraph [ref=e207]: The Thesis
            - heading "Infrastructure over advice. Algorithms over effort." [level=2] [ref=e208]:
              - text: Infrastructure over advice.
              - text: Algorithms over effort.
            - paragraph [ref=e209]: "North Star Advisory is built on a singular premise: sustainable growth is an engineering problem, not a marketing problem. We build tangible revenue infrastructure, deploy algorithmic execution, and measure success in measurable business outcomes."
            - generic [ref=e211]:
              - generic [ref=e213]:
                - heading "Empirically Driven" [level=3] [ref=e216]
                - paragraph [ref=e217]: We measure intervention success in validated enterprise value and structural revenue metrics — never vanity indicators.
              - generic [ref=e219]:
                - heading "Absolute Discretion" [level=3] [ref=e222]
                - paragraph [ref=e223]: Operating with structural confidentiality for ambitious operators and private offices across the GCC.
              - generic [ref=e225]:
                - heading "Infrastructure Over Advice" [level=3] [ref=e228]
                - paragraph [ref=e229]: We construct tangible business architecture, not theoretical slide decks. Every mandate produces operational infrastructure.
              - generic [ref=e231]:
                - heading "Operator-to-Operator" [level=3] [ref=e234]
                - paragraph [ref=e235]: We understand the realities of scaling a business in the region. We speak the language of EBITDA, asset yield, and operational leverage.
          - generic [ref=e238]:
            - generic [ref=e240]:
              - paragraph [ref=e241]: The Operator
              - generic [ref=e242]:
                - paragraph [ref=e243]: Hamza Hattab
                - paragraph [ref=e244]: AI Engineering, USTHB
                - paragraph [ref=e245]: "Specialization: GCC Revenue Systems"
              - heading "I build the architecture that consulting firms only talk about." [level=3] [ref=e246]
              - paragraph [ref=e247]: I built clinical data infrastructures and real estate lead-routing systems because I watched millions of dollars burn on theoretical strategy decks. You do not need more advice. You need systems that mathematically generate yield.
            - generic [ref=e248]:
              - generic [ref=e249]:
                - heading "1. Logic over effort." [level=4] [ref=e250]
                - paragraph [ref=e251]: Throwing more marketing budget at a broken pipeline is financial negligence. We fix the systemic conversion logic before we attempt to scale acquisition.
              - generic [ref=e252]:
                - heading "2. Data over opinions." [level=4] [ref=e253]
                - paragraph [ref=e254]: Every recommendation we make is anchored in mathematical probability and validated by hard enterprise data. Assumptions are the enemy of yield.
              - generic [ref=e255]:
                - heading "3. Tangible over theoretical." [level=4] [ref=e256]
                - paragraph [ref=e257]: We do not hand over a 100-page PDF and walk away. We build, deploy, and refine the actual systems and logic models that generate your revenue.
              - generic [ref=e258]:
                - heading "4. Accountability over retainers." [level=4] [ref=e259]
                - paragraph [ref=e260]: We operate with the precise commercial urgency of a founder. Our success is explicitly tied to the measurable enterprise value we unlock for your firm.
      - region "Apply for Executive Diagnostic" [ref=e261]:
        - generic [ref=e264]:
          - generic [ref=e265]:
            - paragraph [ref=e271]: Executive Diagnostic
            - heading "Apply for Executive Diagnostic" [level=2] [ref=e272]
            - paragraph [ref=e273]: Commence a structured, confidential audit regarding your systemic friction, revenue bottlenecks, and algorithmic execution opportunities.
          - form "Strategic review request form" [ref=e274]:
            - generic [ref=e275]:
              - generic [ref=e276]:
                - generic: Full Name *
                - textbox "Full Name" [ref=e277]
              - generic [ref=e278]:
                - generic: Corporate Email *
                - textbox "Corporate Email" [ref=e279]
              - generic [ref=e280]:
                - generic: Company *
                - textbox "Company" [ref=e281]
              - generic [ref=e282]:
                - generic: Industry *
                - generic [ref=e283]:
                  - combobox "Industry" [ref=e284] [cursor=pointer]:
                    - option "Real Estate" [selected]
                    - option "Clinics & Healthcare"
                    - option "Professional Services"
                    - option "Other"
                  - generic:
                    - img
              - generic [ref=e285]:
                - generic: Company Size *
                - generic [ref=e286]:
                  - combobox "Company Size" [ref=e287] [cursor=pointer]:
                    - option "1 - 10 Employees"
                    - option "11 - 50 Employees" [selected]
                    - option "51 - 200 Employees"
                    - option "200+ Employees"
                  - generic:
                    - img
              - generic [ref=e288]:
                - generic: Primary Bottleneck *
                - generic [ref=e289]:
                  - combobox "Primary Bottleneck" [ref=e290] [cursor=pointer]:
                    - option "Lead Generation" [selected]
                    - option "Conversion"
                    - option "Follow-Up"
                    - option "Sales Process"
                    - option "Operations"
                    - option "Customer Experience"
                    - option "AI Automation"
                    - option "Other"
                  - generic:
                    - img
              - generic [ref=e291]:
                - generic: Website (optional)
                - textbox "Website (optional)" [ref=e292]:
                  - /placeholder: https://
              - generic [ref=e293]:
                - generic: Additional Context (optional)
                - textbox "Additional Context (optional)" [ref=e294]:
                  - /placeholder: Any specific challenges?
              - button "Apply for Diagnostic" [ref=e298] [cursor=pointer]
              - paragraph [ref=e299]: We respond within one business day. Absolute discretion guaranteed.
          - generic [ref=e300]:
            - paragraph [ref=e301]: Or contact us directly
            - generic [ref=e302]:
              - link "hamza@northstaradvisory.pro" [ref=e303] [cursor=pointer]:
                - /url: mailto:hamza@northstaradvisory.pro
              - generic [ref=e304]: "|"
              - link "WhatsApp Business" [ref=e305] [cursor=pointer]:
                - /url: https://wa.me/213549391101?text=Hi%20Hamza%2C%20I%20want%20to%20discuss%20a%20systemic%20audit.
                - img [ref=e306]
                - text: WhatsApp Business
  - contentinfo [ref=e308]:
    - generic [ref=e310]:
      - generic [ref=e311]: North Star Advisory
      - navigation "Footer navigation" [ref=e312]:
        - list [ref=e313]:
          - listitem [ref=e314]:
            - link "Privacy Policy" [ref=e315] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e316]:
            - link "GCC Compliance" [ref=e317] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e318]:
            - link "Secure Contact" [ref=e319] [cursor=pointer]:
              - /url: "#contact"
      - paragraph [ref=e320]: © 2026 North Star Advisory
  - alert [ref=e321]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import AxeBuilder from "@axe-core/playwright";
  3  | 
  4  | test.describe("Accessibility", () => {
  5  |   test.beforeEach(async ({ page }) => {
  6  |     await page.goto("/");
  7  |     // Wait for page to be fully interactive
> 8  |     await page.waitForLoadState("networkidle");
     |                ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  9  |   });
  10 | 
  11 |   test("no critical accessibility violations on page load", async ({ page }) => {
  12 |     const results = await new AxeBuilder({ page })
  13 |       .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
  14 |       .analyze();
  15 | 
  16 |     // Filter out known false positives (e.g. color-contrast for decorative elements)
  17 |     const critical = results.violations.filter(
  18 |       (v) => v.impact === "critical" || v.impact === "serious"
  19 |     );
  20 | 
  21 |     if (critical.length > 0) {
  22 |       console.log(
  23 |         "Accessibility violations:",
  24 |         JSON.stringify(critical, null, 2)
  25 |       );
  26 |     }
  27 | 
  28 |     expect(critical).toHaveLength(0);
  29 |   });
  30 | 
  31 |   test("page has a single h1", async ({ page }) => {
  32 |     const h1s = page.getByRole("heading", { level: 1 });
  33 |     await expect(h1s).toHaveCount(1);
  34 |   });
  35 | 
  36 |   test("all images have alt text", async ({ page }) => {
  37 |     const images = page.locator("img");
  38 |     const count = await images.count();
  39 |     for (let i = 0; i < count; i++) {
  40 |       const img = images.nth(i);
  41 |       const alt = await img.getAttribute("alt");
  42 |       expect(alt).not.toBeNull();
  43 |     }
  44 |   });
  45 | 
  46 |   test("all interactive elements are keyboard accessible", async ({ page }) => {
  47 |     // Tab through the page and verify focus reaches interactive elements
  48 |     const interactiveElements = await page
  49 |       .locator(
  50 |         "button:visible, a:visible, input:visible, select:visible, [role='button']:visible"
  51 |       )
  52 |       .all();
  53 | 
  54 |     expect(interactiveElements.length).toBeGreaterThan(0);
  55 | 
  56 |     for (const el of interactiveElements.slice(0, 10)) {
  57 |       await el.focus();
  58 |       const focused = await page.evaluate(
  59 |         () => document.activeElement?.tagName
  60 |       );
  61 |       expect(focused).toBeDefined();
  62 |     }
  63 |   });
  64 | 
  65 |   test("skip link is present and functional", async ({ page }) => {
  66 |     const skipLink = page.getByRole("link", { name: /skip to main content/i });
  67 |     await expect(skipLink).toBeAttached();
  68 |     await skipLink.focus();
  69 |     await expect(skipLink).toBeVisible();
  70 |   });
  71 | 
  72 |   test("main landmark is present", async ({ page }) => {
  73 |     const main = page.getByRole("main");
  74 |     await expect(main).toBeVisible();
  75 |   });
  76 | 
  77 |   test("navigation landmark is present", async ({ page }) => {
  78 |     const nav = page.getByRole("navigation").first();
  79 |     await expect(nav).toBeVisible();
  80 |   });
  81 | 
  82 |   test("footer landmark is present", async ({ page }) => {
  83 |     const footer = page.getByRole("contentinfo");
  84 |     await expect(footer).toBeVisible();
  85 |   });
  86 | 
  87 |   test("heading hierarchy is logical", async ({ page }) => {
  88 |     const headings = await page
  89 |       .locator("h1, h2, h3, h4")
  90 |       .evaluateAll((els) =>
  91 |         els.map((el) => ({ tag: el.tagName, text: el.textContent?.trim() }))
  92 |       );
  93 |     // h1 must come first
  94 |     const firstHeading = headings[0];
  95 |     expect(firstHeading?.tag).toBe("H1");
  96 |   });
  97 | });
  98 | 
```