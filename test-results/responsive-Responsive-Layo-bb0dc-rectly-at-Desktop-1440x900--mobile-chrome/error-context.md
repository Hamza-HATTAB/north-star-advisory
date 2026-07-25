# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.ts >> Responsive Layout >> renders correctly at Desktop (1440x900)
- Location: tests/e2e/responsive.spec.ts:13:9

# Error details

```
Test timeout of 30000ms exceeded.
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
  3  | const viewports = [
  4  |   { name: "Mobile S", width: 375, height: 667 },
  5  |   { name: "Mobile L", width: 414, height: 896 },
  6  |   { name: "Tablet", width: 768, height: 1024 },
  7  |   { name: "Laptop", width: 1280, height: 800 },
  8  |   { name: "Desktop", width: 1440, height: 900 },
  9  | ];
  10 | 
  11 | test.describe("Responsive Layout", () => {
  12 |   for (const vp of viewports) {
  13 |     test(`renders correctly at ${vp.name} (${vp.width}x${vp.height})`, async ({
  14 |       page,
  15 |     }) => {
  16 |       await page.setViewportSize({ width: vp.width, height: vp.height });
  17 |       await page.goto("/");
> 18 |       await page.waitForLoadState("networkidle");
     |                  ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  19 | 
  20 |       // No horizontal overflow
  21 |       const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  22 |       expect(bodyWidth).toBeLessThanOrEqual(vp.width + 1); // 1px tolerance
  23 | 
  24 |       // Key sections are present
  25 |       await expect(page.getByRole("banner")).toBeVisible();
  26 |       await expect(page.getByRole("main")).toBeVisible();
  27 |       await expect(page.getByRole("contentinfo")).toBeVisible();
  28 | 
  29 |       // Hero h1 is visible
  30 |       await expect(
  31 |         page.getByRole("heading", { level: 1 })
  32 |       ).toBeVisible();
  33 |     });
  34 |   }
  35 | 
  36 |   test("mobile menu button is visible on mobile", async ({ page }) => {
  37 |     await page.setViewportSize({ width: 375, height: 667 });
  38 |     await page.goto("/");
  39 |     const menuBtn = page.getByRole("button", {
  40 |       name: /open navigation menu/i,
  41 |     });
  42 |     await expect(menuBtn).toBeVisible();
  43 |   });
  44 | 
  45 |   test("desktop nav links are visible on desktop", async ({ page }) => {
  46 |     await page.setViewportSize({ width: 1280, height: 800 });
  47 |     await page.goto("/");
  48 |     const desktopNav = page
  49 |       .getByRole("navigation", { name: "Primary navigation" })
  50 |       .first();
  51 |     await expect(desktopNav).toBeVisible();
  52 |   });
  53 | 
  54 |   test("contact form is usable on mobile", async ({ page }) => {
  55 |     await page.setViewportSize({ width: 375, height: 667 });
  56 |     await page.goto("/");
  57 |     await page.evaluate(() => {
  58 |       document.getElementById("contact")?.scrollIntoView();
  59 |     });
  60 | 
  61 |     const nameInput = page.locator("#contact-name");
  62 |     await expect(nameInput).toBeVisible();
  63 | 
  64 |     // Touch target size check (minimum 44x44)
  65 |     const submitBtn = page.locator("#contact-submit");
  66 |     const box = await submitBtn.boundingBox();
  67 |     expect(box?.height).toBeGreaterThanOrEqual(44);
  68 |     expect(box?.width).toBeGreaterThan(44);
  69 |   });
  70 | 
  71 |   test("GFI section columns stack on mobile", async ({ page }) => {
  72 |     await page.setViewportSize({ width: 375, height: 667 });
  73 |     await page.goto("/");
  74 | 
  75 |     // All three GFI columns should be in the DOM
  76 |     await expect(
  77 |       page.getByRole("heading", { name: "The Growth Friction Index" })
  78 |     ).toBeAttached();
  79 |   });
  80 | });
  81 | 
```