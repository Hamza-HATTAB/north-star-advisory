# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.ts >> Responsive Layout >> renders correctly at Mobile L (414x896)
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
      - button "Open navigation menu" [ref=e7]:
        - img [ref=e8]
  - main [ref=e9]:
    - generic [ref=e10]:
      - region "Hero — North Star Advisory positioning" [ref=e11]:
        - generic [ref=e12]:
          - generic [ref=e15]:
            - generic [ref=e16]:
              - generic [ref=e18]: North Star Advisory
              - generic [ref=e19]: /
              - generic [ref=e20]: Revenue Architecture
            - heading "Growth rarely breaks because of effort. It breaks because of friction hidden inside the system." [level=1] [ref=e22]
            - paragraph [ref=e24]: We identify structural revenue leakage and deploy algorithmic execution to protect enterprise margins. We architect systemic revenue yield for ambitious operators across the GCC.
            - generic [ref=e26]:
              - button "Apply for Diagnostic" [ref=e27] [cursor=pointer]
              - button "Read The Thesis" [ref=e28] [cursor=pointer]:
                - text: Read The Thesis
                - img [ref=e29]
          - generic [ref=e32]:
            - generic [ref=e33]:
              - paragraph [ref=e34]: Built For
              - paragraph [ref=e35]: Real Estate, Healthcare, Professional Services
            - generic [ref=e36]:
              - paragraph [ref=e37]: Focus
              - paragraph [ref=e38]: Saudi Arabia, UAE
            - generic [ref=e39]:
              - paragraph [ref=e40]: Specialization
              - paragraph [ref=e41]: Revenue Systems, AI Infrastructure, Conversion Architecture
      - region "The Growth Friction Index" [ref=e42]:
        - generic [ref=e43]:
          - generic [ref=e44]:
            - generic [ref=e45]:
              - paragraph [ref=e46]: Proprietary Diagnostic
              - heading "The Growth Friction Index" [level=2] [ref=e47]
            - paragraph [ref=e49]: Most businesses do not have a growth problem. They have a friction problem. We identify exactly where revenue is being suppressed across three diagnostic domains — and we remove the constraints with precision.
          - generic [ref=e51]:
            - generic [ref=e52]:
              - generic [ref=e53]:
                - text: Operational Inputs
                - paragraph [ref=e54]: Capital & Time
              - generic [ref=e55]: ÷
              - generic [ref=e56]:
                - generic [ref=e57]: The Diagnostic
                - paragraph [ref=e58]: Friction Drag
              - generic [ref=e59]: =
              - generic [ref=e60]:
                - text: Actual Outcome
                - paragraph [ref=e61]: EBITDA Yield
            - generic [ref=e62]:
              - paragraph [ref=e63]: The Operator's Equation
              - paragraph [ref=e64]: Growth isn't just about adding more capital or time. It's about removing the friction that suppresses your return on both. We isolate the exact locations where revenue is leaking.
          - generic [ref=e66]:
            - generic [ref=e67]:
              - generic [ref=e68]: Live Diagnostic
              - generic [ref=e69]: 01 / 03
            - heading "How is your acquisition data routed to your sales or conversion team?" [level=3] [ref=e70]
            - generic [ref=e71]:
              - button "A Manual CRM entry or disjointed CSV uploads." [ref=e72]:
                - generic [ref=e73]: A
                - generic [ref=e74]: Manual CRM entry or disjointed CSV uploads.
              - button "B Basic Zapier connections without intent filtering." [ref=e75]:
                - generic [ref=e76]: B
                - generic [ref=e77]: Basic Zapier connections without intent filtering.
              - button "C Real-time algorithmic routing based on behavioral intent." [ref=e78]:
                - generic [ref=e79]: C
                - generic [ref=e80]: Real-time algorithmic routing based on behavioral intent.
      - region "The Architecture Model" [ref=e81]:
        - generic [ref=e82]:
          - generic [ref=e83]:
            - paragraph [ref=e84]: Deployment Protocol
            - heading "The Architecture Model" [level=2] [ref=e85]
          - generic [ref=e87]:
            - generic [ref=e89]:
              - generic [ref=e90]: "01"
              - heading "Structural Audit" [level=3] [ref=e91]
              - paragraph [ref=e92]: Mapping your current data flow and isolating the exact operational bottlenecks suppressing your enterprise margin.
            - generic [ref=e94]:
              - generic [ref=e95]: "02"
              - heading "Logic Architecture" [level=3] [ref=e96]
              - paragraph [ref=e97]: Engineering a bespoke conversion pipeline and strict routing rules to maximize your system throughput.
            - generic [ref=e99]:
              - generic [ref=e100]: "03"
              - heading "Live Deployment" [level=3] [ref=e101]
              - paragraph [ref=e102]: Integrating the new infrastructure into your live environment without disrupting daily execution.
            - generic [ref=e104]:
              - generic [ref=e105]: "04"
              - heading "Yield Optimization" [level=3] [ref=e106]
              - paragraph [ref=e107]: Continuous algorithmic refinement based on hard performance data and measured operational leverage.
      - region "Architectural Interventions" [ref=e108]:
        - generic [ref=e109]:
          - generic [ref=e111]:
            - generic [ref=e112]:
              - paragraph [ref=e113]: Empirical Evidence
              - heading "Architectural Interventions" [level=2] [ref=e114]
            - button "Examine all outcome reports" [ref=e115] [cursor=pointer]:
              - text: Examine Outcome Reports
              - img [ref=e116]
          - generic [ref=e118]:
            - article [ref=e120]:
              - img [ref=e122]:
                - generic [ref=e133]: ROUTER
              - generic "Case study categories" [ref=e134]:
                - generic [ref=e135]: Real Estate
                - generic [ref=e136]: Conversion Architecture
              - heading "Institutional Real Estate Portfolio" [level=3] [ref=e137]
              - generic [ref=e138]:
                - generic [ref=e139]:
                  - generic [ref=e140]: 01 / Problem
                  - paragraph [ref=e141]: High-volume ad spend generating unpredictable lead quality across 12 decentralized developments.
                - generic [ref=e142]:
                  - generic [ref=e143]: 02 / Diagnosis
                  - paragraph [ref=e144]: No central intent verification; sales teams were burning bandwidth on low-intent inquiries, eroding margin.
                - generic [ref=e145]:
                  - generic [ref=e146]: 03 / Architecture
                  - paragraph [ref=e147]: Algorithmic routing logic layer mapping behavioral intent to dynamic lead scoring thresholds.
                - generic [ref=e148]:
                  - generic [ref=e149]: 04 / Implementation
                  - paragraph [ref=e150]: Deployed a centralized webhook router intercepting, scoring, and instantly distributing high-intent leads to premium agents.
              - generic [ref=e152]:
                - generic [ref=e153]:
                  - paragraph [ref=e154]: System Constraint
                  - paragraph [ref=e155]: Lead Leakage at Scale
                - generic [ref=e156]:
                  - paragraph [ref=e157]: Verified Yield
                  - generic [ref=e158]:
                    - paragraph [ref=e159]: 31%
                    - paragraph [ref=e160]: Increase in Qualified Conversion
            - article [ref=e162]:
              - img [ref=e164]:
                - generic [ref=e174]: UNIFIED LAYER
                - generic [ref=e176]: LTV
              - generic "Case study categories" [ref=e177]:
                - generic [ref=e178]: Healthcare
                - generic [ref=e179]: Growth Architecture
              - heading "Premium Private Clinic Network" [level=3] [ref=e180]
              - generic [ref=e181]:
                - generic [ref=e182]:
                  - generic [ref=e183]: 01 / Problem
                  - paragraph [ref=e184]: Rising patient acquisition costs despite increasing top-of-funnel marketing budgets.
                - generic [ref=e185]:
                  - generic [ref=e186]: 02 / Diagnosis
                  - paragraph [ref=e187]: Fragmented data silos prevented the clinic from attributing exact Patient Lifetime Value (LTV) to specific marketing channels.
                - generic [ref=e188]:
                  - generic [ref=e189]: 03 / Architecture
                  - paragraph [ref=e190]: Unified data pipeline connecting appointment booking systems directly to advertising conversion APIs.
                - generic [ref=e191]:
                  - generic [ref=e192]: 04 / Implementation
                  - paragraph [ref=e193]: Deployed server-side conversion tracking and structural data mapping to feed deterministic LTV data back into algorithmic ad bidding.
              - generic [ref=e195]:
                - generic [ref=e196]:
                  - paragraph [ref=e197]: System Constraint
                  - paragraph [ref=e198]: Fragmented Data Silos
                - generic [ref=e199]:
                  - paragraph [ref=e200]: Verified Yield
                  - generic [ref=e201]:
                    - paragraph [ref=e202]: 42%
                    - paragraph [ref=e203]: Reduction in Patient Acquisition Cost
      - region "Infrastructure over advice. Algorithms over effort." [ref=e204]:
        - generic [ref=e205]:
          - generic [ref=e207]:
            - paragraph [ref=e208]: The Thesis
            - heading "Infrastructure over advice. Algorithms over effort." [level=2] [ref=e209]:
              - text: Infrastructure over advice.
              - text: Algorithms over effort.
            - paragraph [ref=e210]: "North Star Advisory is built on a singular premise: sustainable growth is an engineering problem, not a marketing problem. We build tangible revenue infrastructure, deploy algorithmic execution, and measure success in measurable business outcomes."
            - generic [ref=e212]:
              - generic [ref=e214]:
                - heading "Empirically Driven" [level=3] [ref=e217]
                - paragraph [ref=e218]: We measure intervention success in validated enterprise value and structural revenue metrics — never vanity indicators.
              - generic [ref=e220]:
                - heading "Absolute Discretion" [level=3] [ref=e223]
                - paragraph [ref=e224]: Operating with structural confidentiality for ambitious operators and private offices across the GCC.
              - generic [ref=e226]:
                - heading "Infrastructure Over Advice" [level=3] [ref=e229]
                - paragraph [ref=e230]: We construct tangible business architecture, not theoretical slide decks. Every mandate produces operational infrastructure.
              - generic [ref=e232]:
                - heading "Operator-to-Operator" [level=3] [ref=e235]
                - paragraph [ref=e236]: We understand the realities of scaling a business in the region. We speak the language of EBITDA, asset yield, and operational leverage.
          - generic [ref=e239]:
            - generic [ref=e241]:
              - paragraph [ref=e242]: The Operator
              - generic [ref=e243]:
                - paragraph [ref=e244]: Principal Advisor
                - paragraph [ref=e245]: Revenue Systems & Growth Architecture
                - paragraph [ref=e246]: "Specialization: GCC Revenue Systems"
              - heading "We build the architecture that consulting firms only talk about." [level=3] [ref=e247]
              - paragraph [ref=e248]: The firm engineers clinical data infrastructures and real estate lead-routing systems because we have witnessed millions of dollars burn on theoretical strategy decks. You do not need more advice. You need systems that mathematically generate yield.
            - generic [ref=e249]:
              - generic [ref=e250]:
                - heading "1. Logic over effort." [level=4] [ref=e251]
                - paragraph [ref=e252]: Throwing more marketing budget at a broken pipeline is financial negligence. We fix the systemic conversion logic before we attempt to scale acquisition.
              - generic [ref=e253]:
                - heading "2. Data over opinions." [level=4] [ref=e254]
                - paragraph [ref=e255]: Every recommendation we make is anchored in mathematical probability and validated by hard enterprise data. Assumptions are the enemy of yield.
              - generic [ref=e256]:
                - heading "3. Tangible over theoretical." [level=4] [ref=e257]
                - paragraph [ref=e258]: We do not hand over a 100-page PDF and walk away. We build, deploy, and refine the actual systems and logic models that generate your revenue.
              - generic [ref=e259]:
                - heading "4. Accountability over retainers." [level=4] [ref=e260]
                - paragraph [ref=e261]: We operate with the precise commercial urgency of a founder. Our success is explicitly tied to the measurable enterprise value we unlock for your firm.
      - region "Apply for Executive Diagnostic" [ref=e262]:
        - generic [ref=e265]:
          - generic [ref=e266]:
            - paragraph [ref=e272]: Executive Diagnostic
            - heading "Apply for Executive Diagnostic" [level=2] [ref=e273]
            - paragraph [ref=e274]: Commence a structured, confidential audit regarding your systemic friction, revenue bottlenecks, and algorithmic execution opportunities.
          - form "Strategic review request form" [ref=e275]:
            - generic [ref=e276]:
              - generic [ref=e277]:
                - generic: Full Name *
                - textbox "Full Name" [ref=e278]
              - generic [ref=e279]:
                - generic: Corporate Email *
                - textbox "Corporate Email" [ref=e280]
              - generic [ref=e281]:
                - generic: Company *
                - textbox "Company" [ref=e282]
              - generic [ref=e283]:
                - generic: Industry *
                - generic [ref=e284]:
                  - combobox "Industry" [ref=e285] [cursor=pointer]:
                    - option "Real Estate" [selected]
                    - option "Clinics & Healthcare"
                    - option "Professional Services"
                    - option "Other"
                  - generic:
                    - img
              - generic [ref=e286]:
                - generic: Company Size *
                - generic [ref=e287]:
                  - combobox "Company Size" [ref=e288] [cursor=pointer]:
                    - option "1 - 10 Employees"
                    - option "11 - 50 Employees" [selected]
                    - option "51 - 200 Employees"
                    - option "200+ Employees"
                  - generic:
                    - img
              - generic [ref=e289]:
                - generic: Primary Bottleneck *
                - generic [ref=e290]:
                  - combobox "Primary Bottleneck" [ref=e291] [cursor=pointer]:
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
              - generic [ref=e292]:
                - generic: Website (optional)
                - textbox "Website (optional)" [ref=e293]:
                  - /placeholder: https://
              - generic [ref=e294]:
                - generic: Additional Context (optional)
                - textbox "Additional Context (optional)" [ref=e295]:
                  - /placeholder: Any specific challenges?
              - button "Apply for Diagnostic" [ref=e299] [cursor=pointer]
              - paragraph [ref=e300]: We respond within one business day. Absolute discretion guaranteed.
          - generic [ref=e301]:
            - paragraph [ref=e302]: Or contact us directly
            - generic [ref=e303]:
              - link "hamza@northstaradvisory.pro" [ref=e304] [cursor=pointer]:
                - /url: mailto:hamza@northstaradvisory.pro
              - link "WhatsApp Business" [ref=e305] [cursor=pointer]:
                - /url: https://wa.me/213776463005?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20systemic%20audit.
                - img [ref=e306]
                - text: WhatsApp Business
  - contentinfo [ref=e308]:
    - generic [ref=e310]:
      - img "North Star Advisory" [ref=e312]
      - navigation "Footer navigation" [ref=e313]:
        - list [ref=e314]:
          - listitem [ref=e315]:
            - link "Privacy Policy" [ref=e316] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e317]:
            - link "GCC Compliance" [ref=e318] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e319]:
            - link "Secure Contact" [ref=e320] [cursor=pointer]:
              - /url: "#contact"
      - paragraph [ref=e321]: © 2026 North Star Advisory
  - alert [ref=e322]
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