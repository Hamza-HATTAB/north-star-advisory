# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigation >> primary CTA button in navbar scrolls to contact form
- Location: tests/e2e/navigation.spec.ts:24:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /request strategic review/i }).first()

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
        - img "North Star Advisory" [ref=e6]
      - navigation "Primary navigation" [ref=e7]:
        - button "Core Capabilities" [ref=e8] [cursor=pointer]
        - button "The Protocol" [ref=e9] [cursor=pointer]
        - button "Case Studies" [ref=e10] [cursor=pointer]
        - button "Our Thesis" [ref=e11] [cursor=pointer]
      - button "Request a Strategic Review" [ref=e12] [cursor=pointer]: Request Strategic Review
  - main [ref=e13]:
    - generic [ref=e14]:
      - region "Hero — North Star Advisory positioning" [ref=e15]:
        - generic [ref=e16]:
          - generic [ref=e17]:
            - generic [ref=e19]:
              - generic [ref=e20]:
                - generic [ref=e22]: North Star Advisory
                - generic [ref=e23]: /
                - generic [ref=e24]: Revenue Architecture
              - heading "Growth rarely breaks because of effort. It breaks because of friction hidden inside the system." [level=1] [ref=e26]:
                - text: Growth rarely breaks because of effort.
                - text: It breaks because of friction hidden inside the system.
              - paragraph [ref=e28]: We identify structural revenue leakage and deploy algorithmic execution to protect enterprise margins. We architect systemic revenue yield for ambitious operators across the GCC.
              - generic [ref=e30]:
                - button "Apply for Diagnostic" [ref=e31] [cursor=pointer]
                - button "Read The Thesis" [ref=e32] [cursor=pointer]:
                  - text: Read The Thesis
                  - img [ref=e33]
            - generic [ref=e37]:
              - img [ref=e49]
              - generic [ref=e52]: SYS.ARC.01
              - generic [ref=e53]: YIELD.VECTOR
          - generic [ref=e55]:
            - generic [ref=e56]:
              - paragraph [ref=e57]: Built For
              - paragraph [ref=e58]: Real Estate, Healthcare, Professional Services
            - generic [ref=e59]:
              - paragraph [ref=e60]: Focus
              - paragraph [ref=e61]: Saudi Arabia, UAE
            - generic [ref=e62]:
              - paragraph [ref=e63]: Specialization
              - paragraph [ref=e64]: Revenue Systems, AI Infrastructure, Conversion Architecture
      - region "The Growth Friction Index" [ref=e65]:
        - generic [ref=e66]:
          - generic [ref=e67]:
            - generic [ref=e68]:
              - paragraph [ref=e69]: Proprietary Diagnostic
              - heading "The Growth Friction Index" [level=2] [ref=e70]
            - paragraph [ref=e72]: Most businesses do not have a growth problem. They have a friction problem. We identify exactly where revenue is being suppressed across three diagnostic domains — and we remove the constraints with precision.
          - generic [ref=e74]:
            - generic [ref=e75]:
              - generic [ref=e76]:
                - text: Operational Inputs
                - paragraph [ref=e77]: Capital & Time
              - generic [ref=e78]: ÷
              - generic [ref=e79]:
                - generic [ref=e80]: The Diagnostic
                - paragraph [ref=e81]: Friction Drag
              - generic [ref=e82]: =
              - generic [ref=e83]:
                - text: Actual Outcome
                - paragraph [ref=e84]: EBITDA Yield
            - generic [ref=e85]:
              - paragraph [ref=e86]: The Operator's Equation
              - paragraph [ref=e87]: Growth isn't just about adding more capital or time. It's about removing the friction that suppresses your return on both. We isolate the exact locations where revenue is leaking.
          - generic [ref=e89]:
            - generic [ref=e90]:
              - generic [ref=e91]: Live Diagnostic
              - generic [ref=e92]: 01 / 03
            - heading "How is your acquisition data routed to your sales or conversion team?" [level=3] [ref=e93]
            - generic [ref=e94]:
              - button "A Manual CRM entry or disjointed CSV uploads." [ref=e95]:
                - generic [ref=e96]: A
                - generic [ref=e97]: Manual CRM entry or disjointed CSV uploads.
              - button "B Basic Zapier connections without intent filtering." [ref=e98]:
                - generic [ref=e99]: B
                - generic [ref=e100]: Basic Zapier connections without intent filtering.
              - button "C Real-time algorithmic routing based on behavioral intent." [ref=e101]:
                - generic [ref=e102]: C
                - generic [ref=e103]: Real-time algorithmic routing based on behavioral intent.
      - region "The Architecture Model" [ref=e104]:
        - generic [ref=e105]:
          - generic [ref=e106]:
            - paragraph [ref=e107]: Deployment Protocol
            - heading "The Architecture Model" [level=2] [ref=e108]
          - generic [ref=e111]:
            - generic [ref=e113]:
              - generic [ref=e114]: "01"
              - heading "Structural Audit" [level=3] [ref=e115]
              - paragraph [ref=e116]: Mapping your current data flow and isolating the exact operational bottlenecks suppressing your enterprise margin.
            - generic [ref=e118]:
              - generic [ref=e119]: "02"
              - heading "Logic Architecture" [level=3] [ref=e120]
              - paragraph [ref=e121]: Engineering a bespoke conversion pipeline and strict routing rules to maximize your system throughput.
            - generic [ref=e123]:
              - generic [ref=e124]: "03"
              - heading "Live Deployment" [level=3] [ref=e125]
              - paragraph [ref=e126]: Integrating the new infrastructure into your live environment without disrupting daily execution.
            - generic [ref=e128]:
              - generic [ref=e129]: "04"
              - heading "Yield Optimization" [level=3] [ref=e130]
              - paragraph [ref=e131]: Continuous algorithmic refinement based on hard performance data and measured operational leverage.
      - region "Architectural Interventions" [ref=e132]:
        - generic [ref=e133]:
          - generic [ref=e135]:
            - generic [ref=e136]:
              - paragraph [ref=e137]: Empirical Evidence
              - heading "Architectural Interventions" [level=2] [ref=e138]
            - button "Examine all outcome reports" [ref=e139] [cursor=pointer]:
              - text: Examine Outcome Reports
              - img [ref=e140]
          - generic [ref=e142]:
            - article [ref=e144]:
              - img [ref=e146]:
                - generic [ref=e157]: ROUTER
              - generic "Case study categories" [ref=e158]:
                - generic [ref=e159]: Real Estate
                - generic [ref=e160]: Conversion Architecture
              - heading "Institutional Real Estate Portfolio" [level=3] [ref=e161]
              - generic [ref=e162]:
                - generic [ref=e163]:
                  - generic [ref=e164]: 01 / Problem
                  - paragraph [ref=e165]: High-volume ad spend generating unpredictable lead quality across 12 decentralized developments.
                - generic [ref=e166]:
                  - generic [ref=e167]: 02 / Diagnosis
                  - paragraph [ref=e168]: No central intent verification; sales teams were burning bandwidth on low-intent inquiries, eroding margin.
                - generic [ref=e169]:
                  - generic [ref=e170]: 03 / Architecture
                  - paragraph [ref=e171]: Algorithmic routing logic layer mapping behavioral intent to dynamic lead scoring thresholds.
                - generic [ref=e172]:
                  - generic [ref=e173]: 04 / Implementation
                  - paragraph [ref=e174]: Deployed a centralized webhook router intercepting, scoring, and instantly distributing high-intent leads to premium agents.
              - generic [ref=e176]:
                - generic [ref=e177]:
                  - paragraph [ref=e178]: System Constraint
                  - paragraph [ref=e179]: Lead Leakage at Scale
                - generic [ref=e180]:
                  - paragraph [ref=e181]: Verified Yield
                  - generic [ref=e182]:
                    - paragraph [ref=e183]: 31%
                    - paragraph [ref=e184]: Increase in Qualified Conversion
            - article [ref=e186]:
              - img [ref=e188]:
                - generic [ref=e198]: UNIFIED LAYER
                - generic [ref=e200]: LTV
              - generic "Case study categories" [ref=e201]:
                - generic [ref=e202]: Healthcare
                - generic [ref=e203]: Growth Architecture
              - heading "Premium Private Clinic Network" [level=3] [ref=e204]
              - generic [ref=e205]:
                - generic [ref=e206]:
                  - generic [ref=e207]: 01 / Problem
                  - paragraph [ref=e208]: Rising patient acquisition costs despite increasing top-of-funnel marketing budgets.
                - generic [ref=e209]:
                  - generic [ref=e210]: 02 / Diagnosis
                  - paragraph [ref=e211]: Fragmented data silos prevented the clinic from attributing exact Patient Lifetime Value (LTV) to specific marketing channels.
                - generic [ref=e212]:
                  - generic [ref=e213]: 03 / Architecture
                  - paragraph [ref=e214]: Unified data pipeline connecting appointment booking systems directly to advertising conversion APIs.
                - generic [ref=e215]:
                  - generic [ref=e216]: 04 / Implementation
                  - paragraph [ref=e217]: Deployed server-side conversion tracking and structural data mapping to feed deterministic LTV data back into algorithmic ad bidding.
              - generic [ref=e219]:
                - generic [ref=e220]:
                  - paragraph [ref=e221]: System Constraint
                  - paragraph [ref=e222]: Fragmented Data Silos
                - generic [ref=e223]:
                  - paragraph [ref=e224]: Verified Yield
                  - generic [ref=e225]:
                    - paragraph [ref=e226]: 42%
                    - paragraph [ref=e227]: Reduction in Patient Acquisition Cost
      - region "Infrastructure over advice. Algorithms over effort." [ref=e228]:
        - generic [ref=e229]:
          - generic [ref=e231]:
            - paragraph [ref=e232]: The Thesis
            - heading "Infrastructure over advice. Algorithms over effort." [level=2] [ref=e233]:
              - text: Infrastructure over advice.
              - text: Algorithms over effort.
            - paragraph [ref=e234]: "North Star Advisory is built on a singular premise: sustainable growth is an engineering problem, not a marketing problem. We build tangible revenue infrastructure, deploy algorithmic execution, and measure success in measurable business outcomes."
            - generic [ref=e236]:
              - generic [ref=e238]:
                - heading "Empirically Driven" [level=3] [ref=e241]
                - paragraph [ref=e242]: We measure intervention success in validated enterprise value and structural revenue metrics — never vanity indicators.
              - generic [ref=e244]:
                - heading "Absolute Discretion" [level=3] [ref=e247]
                - paragraph [ref=e248]: Operating with structural confidentiality for ambitious operators and private offices across the GCC.
              - generic [ref=e250]:
                - heading "Infrastructure Over Advice" [level=3] [ref=e253]
                - paragraph [ref=e254]: We construct tangible business architecture, not theoretical slide decks. Every mandate produces operational infrastructure.
              - generic [ref=e256]:
                - heading "Operator-to-Operator" [level=3] [ref=e259]
                - paragraph [ref=e260]: We understand the realities of scaling a business in the region. We speak the language of EBITDA, asset yield, and operational leverage.
          - generic [ref=e263]:
            - generic [ref=e265]:
              - paragraph [ref=e266]: The Operator
              - generic [ref=e267]:
                - paragraph [ref=e268]: Principal Advisor
                - paragraph [ref=e269]: Revenue Systems & Growth Architecture
                - paragraph [ref=e270]: "Specialization: GCC Revenue Systems"
              - heading "We build the architecture that consulting firms only talk about." [level=3] [ref=e271]
              - paragraph [ref=e272]: The firm engineers clinical data infrastructures and real estate lead-routing systems because we have witnessed millions of dollars burn on theoretical strategy decks. You do not need more advice. You need systems that mathematically generate yield.
            - generic [ref=e273]:
              - generic [ref=e274]:
                - heading "1. Logic over effort." [level=4] [ref=e275]
                - paragraph [ref=e276]: Throwing more marketing budget at a broken pipeline is financial negligence. We fix the systemic conversion logic before we attempt to scale acquisition.
              - generic [ref=e277]:
                - heading "2. Data over opinions." [level=4] [ref=e278]
                - paragraph [ref=e279]: Every recommendation we make is anchored in mathematical probability and validated by hard enterprise data. Assumptions are the enemy of yield.
              - generic [ref=e280]:
                - heading "3. Tangible over theoretical." [level=4] [ref=e281]
                - paragraph [ref=e282]: We do not hand over a 100-page PDF and walk away. We build, deploy, and refine the actual systems and logic models that generate your revenue.
              - generic [ref=e283]:
                - heading "4. Accountability over retainers." [level=4] [ref=e284]
                - paragraph [ref=e285]: We operate with the precise commercial urgency of a founder. Our success is explicitly tied to the measurable enterprise value we unlock for your firm.
      - region "Apply for Executive Diagnostic" [ref=e286]:
        - generic [ref=e289]:
          - generic [ref=e290]:
            - paragraph [ref=e296]: Executive Diagnostic
            - heading "Apply for Executive Diagnostic" [level=2] [ref=e297]
            - paragraph [ref=e298]: Commence a structured, confidential audit regarding your systemic friction, revenue bottlenecks, and algorithmic execution opportunities.
          - form "Strategic review request form" [ref=e299]:
            - generic [ref=e300]:
              - generic [ref=e301]:
                - generic: Full Name *
                - textbox "Full Name" [ref=e302]
              - generic [ref=e303]:
                - generic: Corporate Email *
                - textbox "Corporate Email" [ref=e304]
              - generic [ref=e305]:
                - generic: Company *
                - textbox "Company" [ref=e306]
              - generic [ref=e307]:
                - generic: Industry *
                - generic [ref=e308]:
                  - combobox "Industry" [ref=e309] [cursor=pointer]:
                    - option "Real Estate" [selected]
                    - option "Clinics & Healthcare"
                    - option "Professional Services"
                    - option "Other"
                  - generic:
                    - img
              - generic [ref=e310]:
                - generic: Company Size *
                - generic [ref=e311]:
                  - combobox "Company Size" [ref=e312] [cursor=pointer]:
                    - option "1 - 10 Employees"
                    - option "11 - 50 Employees" [selected]
                    - option "51 - 200 Employees"
                    - option "200+ Employees"
                  - generic:
                    - img
              - generic [ref=e313]:
                - generic: Primary Bottleneck *
                - generic [ref=e314]:
                  - combobox "Primary Bottleneck" [ref=e315] [cursor=pointer]:
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
              - generic [ref=e316]:
                - generic: Website (optional)
                - textbox "Website (optional)" [ref=e317]:
                  - /placeholder: https://
              - generic [ref=e318]:
                - generic: Additional Context (optional)
                - textbox "Additional Context (optional)" [ref=e319]:
                  - /placeholder: Any specific challenges?
              - button "Apply for Diagnostic" [ref=e323] [cursor=pointer]
              - paragraph [ref=e324]: We respond within one business day. Absolute discretion guaranteed.
          - generic [ref=e325]:
            - paragraph [ref=e326]: Or contact us directly
            - generic [ref=e327]:
              - link "hamza@northstaradvisory.pro" [ref=e328] [cursor=pointer]:
                - /url: mailto:hamza@northstaradvisory.pro
              - generic [ref=e329]: "|"
              - link "WhatsApp Business" [ref=e330] [cursor=pointer]:
                - /url: https://wa.me/213776463005?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20systemic%20audit.
                - img [ref=e331]
                - text: WhatsApp Business
  - contentinfo [ref=e333]:
    - generic [ref=e335]:
      - img "North Star Advisory" [ref=e337]
      - navigation "Footer navigation" [ref=e338]:
        - list [ref=e339]:
          - listitem [ref=e340]:
            - link "Privacy Policy" [ref=e341] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e342]:
            - link "GCC Compliance" [ref=e343] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e344]:
            - link "Secure Contact" [ref=e345] [cursor=pointer]:
              - /url: "#contact"
      - paragraph [ref=e346]: © 2026 North Star Advisory
  - alert [ref=e347]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Navigation", () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto("/");
  6  |   });
  7  | 
  8  |   test("page loads and has correct title", async ({ page }) => {
  9  |     await expect(page).toHaveTitle(/North Star Advisory/);
  10 |   });
  11 | 
  12 |   test("skip link is visible on focus", async ({ page }) => {
  13 |     const skipLink = page.getByRole("link", { name: /skip to main content/i });
  14 |     await skipLink.focus();
  15 |     await expect(skipLink).toBeVisible();
  16 |   });
  17 | 
  18 |   test("navbar is visible and contains brand name", async ({ page }) => {
  19 |     const navbar = page.getByRole("banner");
  20 |     await expect(navbar).toBeVisible();
  21 |     await expect(navbar.getByAltText("North Star Advisory")).toBeVisible();
  22 |   });
  23 | 
  24 |   test("primary CTA button in navbar scrolls to contact form", async ({
  25 |     page,
  26 |   }) => {
  27 |     const ctaBtn = page.getByRole("button", {
  28 |       name: /request strategic review/i,
  29 |     }).first();
> 30 |     await ctaBtn.click();
     |                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  31 |     // Contact section should be in view
  32 |     const contactSection = page.locator("#contact");
  33 |     await expect(contactSection).toBeInViewport({ ratio: 0.1 });
  34 |   });
  35 | 
  36 |   test("navbar remains sticky on scroll", async ({ page }) => {
  37 |     await page.evaluate(() => window.scrollTo(0, 500));
  38 |     const header = page.getByRole("banner");
  39 |     await expect(header).toBeVisible();
  40 |     const box = await header.boundingBox();
  41 |     expect(box?.y).toBe(0);
  42 |   });
  43 | 
  44 |   test("mobile menu opens and closes", async ({ page, isMobile }) => {
  45 |     if (!isMobile) {
  46 |       test.skip();
  47 |       return;
  48 |     }
  49 |     const menuBtn = page.getByRole("button", {
  50 |       name: /open navigation menu/i,
  51 |     });
  52 |     await menuBtn.click();
  53 |     const mobileNav = page.getByRole("dialog");
  54 |     await expect(mobileNav).toBeVisible();
  55 | 
  56 |     const closeBtn = page.getByRole("button", {
  57 |       name: /close navigation menu/i,
  58 |     });
  59 |     await closeBtn.click();
  60 |     await expect(mobileNav).not.toBeVisible();
  61 |   });
  62 | 
  63 |   test("all main sections are present", async ({ page }) => {
  64 |     for (const id of [
  65 |       "#growth-friction-index",
  66 |       "#methodology",
  67 |       "#case-studies",
  68 |       "#why-north-star",
  69 |       "#contact",
  70 |     ]) {
  71 |       const section = page.locator(id);
  72 |       await expect(section).toBeAttached();
  73 |     }
  74 |   });
  75 | });
  76 | 
```