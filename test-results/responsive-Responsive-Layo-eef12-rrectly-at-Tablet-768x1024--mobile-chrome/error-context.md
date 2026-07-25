# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.ts >> Responsive Layout >> renders correctly at Tablet (768x1024)
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
            - heading "Growth rarely breaks because of effort. It breaks because of friction hidden inside the system." [level=1] [ref=e22]:
              - text: Growth rarely breaks because of effort.
              - text: It breaks because of friction hidden inside the system.
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
          - generic [ref=e88]:
            - generic [ref=e90]:
              - generic [ref=e91]: "01"
              - heading "Structural Audit" [level=3] [ref=e92]
              - paragraph [ref=e93]: Mapping your current data flow and isolating the exact operational bottlenecks suppressing your enterprise margin.
            - generic [ref=e95]:
              - generic [ref=e96]: "02"
              - heading "Logic Architecture" [level=3] [ref=e97]
              - paragraph [ref=e98]: Engineering a bespoke conversion pipeline and strict routing rules to maximize your system throughput.
            - generic [ref=e100]:
              - generic [ref=e101]: "03"
              - heading "Live Deployment" [level=3] [ref=e102]
              - paragraph [ref=e103]: Integrating the new infrastructure into your live environment without disrupting daily execution.
            - generic [ref=e105]:
              - generic [ref=e106]: "04"
              - heading "Yield Optimization" [level=3] [ref=e107]
              - paragraph [ref=e108]: Continuous algorithmic refinement based on hard performance data and measured operational leverage.
      - region "Architectural Interventions" [ref=e109]:
        - generic [ref=e110]:
          - generic [ref=e112]:
            - generic [ref=e113]:
              - paragraph [ref=e114]: Empirical Evidence
              - heading "Architectural Interventions" [level=2] [ref=e115]
            - button "Examine all outcome reports" [ref=e116] [cursor=pointer]:
              - text: Examine Outcome Reports
              - img [ref=e117]
          - generic [ref=e119]:
            - article [ref=e121]:
              - img [ref=e123]:
                - generic [ref=e134]: ROUTER
              - generic "Case study categories" [ref=e135]:
                - generic [ref=e136]: Real Estate
                - generic [ref=e137]: Conversion Architecture
              - heading "Institutional Real Estate Portfolio" [level=3] [ref=e138]
              - generic [ref=e139]:
                - generic [ref=e140]:
                  - generic [ref=e141]: 01 / Problem
                  - paragraph [ref=e142]: High-volume ad spend generating unpredictable lead quality across 12 decentralized developments.
                - generic [ref=e143]:
                  - generic [ref=e144]: 02 / Diagnosis
                  - paragraph [ref=e145]: No central intent verification; sales teams were burning bandwidth on low-intent inquiries, eroding margin.
                - generic [ref=e146]:
                  - generic [ref=e147]: 03 / Architecture
                  - paragraph [ref=e148]: Algorithmic routing logic layer mapping behavioral intent to dynamic lead scoring thresholds.
                - generic [ref=e149]:
                  - generic [ref=e150]: 04 / Implementation
                  - paragraph [ref=e151]: Deployed a centralized webhook router intercepting, scoring, and instantly distributing high-intent leads to premium agents.
              - generic [ref=e153]:
                - generic [ref=e154]:
                  - paragraph [ref=e155]: System Constraint
                  - paragraph [ref=e156]: Lead Leakage at Scale
                - generic [ref=e157]:
                  - paragraph [ref=e158]: Verified Yield
                  - generic [ref=e159]:
                    - paragraph [ref=e160]: 31%
                    - paragraph [ref=e161]: Increase in Qualified Conversion
            - article [ref=e163]:
              - img [ref=e165]:
                - generic [ref=e175]: UNIFIED LAYER
                - generic [ref=e177]: LTV
              - generic "Case study categories" [ref=e178]:
                - generic [ref=e179]: Healthcare
                - generic [ref=e180]: Growth Architecture
              - heading "Premium Private Clinic Network" [level=3] [ref=e181]
              - generic [ref=e182]:
                - generic [ref=e183]:
                  - generic [ref=e184]: 01 / Problem
                  - paragraph [ref=e185]: Rising patient acquisition costs despite increasing top-of-funnel marketing budgets.
                - generic [ref=e186]:
                  - generic [ref=e187]: 02 / Diagnosis
                  - paragraph [ref=e188]: Fragmented data silos prevented the clinic from attributing exact Patient Lifetime Value (LTV) to specific marketing channels.
                - generic [ref=e189]:
                  - generic [ref=e190]: 03 / Architecture
                  - paragraph [ref=e191]: Unified data pipeline connecting appointment booking systems directly to advertising conversion APIs.
                - generic [ref=e192]:
                  - generic [ref=e193]: 04 / Implementation
                  - paragraph [ref=e194]: Deployed server-side conversion tracking and structural data mapping to feed deterministic LTV data back into algorithmic ad bidding.
              - generic [ref=e196]:
                - generic [ref=e197]:
                  - paragraph [ref=e198]: System Constraint
                  - paragraph [ref=e199]: Fragmented Data Silos
                - generic [ref=e200]:
                  - paragraph [ref=e201]: Verified Yield
                  - generic [ref=e202]:
                    - paragraph [ref=e203]: 42%
                    - paragraph [ref=e204]: Reduction in Patient Acquisition Cost
      - region "Infrastructure over advice. Algorithms over effort." [ref=e205]:
        - generic [ref=e206]:
          - generic [ref=e208]:
            - paragraph [ref=e209]: The Thesis
            - heading "Infrastructure over advice. Algorithms over effort." [level=2] [ref=e210]:
              - text: Infrastructure over advice.
              - text: Algorithms over effort.
            - paragraph [ref=e211]: "North Star Advisory is built on a singular premise: sustainable growth is an engineering problem, not a marketing problem. We build tangible revenue infrastructure, deploy algorithmic execution, and measure success in measurable business outcomes."
            - generic [ref=e213]:
              - generic [ref=e215]:
                - heading "Empirically Driven" [level=3] [ref=e218]
                - paragraph [ref=e219]: We measure intervention success in validated enterprise value and structural revenue metrics — never vanity indicators.
              - generic [ref=e221]:
                - heading "Absolute Discretion" [level=3] [ref=e224]
                - paragraph [ref=e225]: Operating with structural confidentiality for ambitious operators and private offices across the GCC.
              - generic [ref=e227]:
                - heading "Infrastructure Over Advice" [level=3] [ref=e230]
                - paragraph [ref=e231]: We construct tangible business architecture, not theoretical slide decks. Every mandate produces operational infrastructure.
              - generic [ref=e233]:
                - heading "Operator-to-Operator" [level=3] [ref=e236]
                - paragraph [ref=e237]: We understand the realities of scaling a business in the region. We speak the language of EBITDA, asset yield, and operational leverage.
          - generic [ref=e240]:
            - generic [ref=e242]:
              - paragraph [ref=e243]: The Operator
              - generic [ref=e244]:
                - paragraph [ref=e245]: Principal Advisor
                - paragraph [ref=e246]: Revenue Systems & Growth Architecture
                - paragraph [ref=e247]: "Specialization: GCC Revenue Systems"
              - heading "We build the architecture that consulting firms only talk about." [level=3] [ref=e248]
              - paragraph [ref=e249]: The firm engineers clinical data infrastructures and real estate lead-routing systems because we have witnessed millions of dollars burn on theoretical strategy decks. You do not need more advice. You need systems that mathematically generate yield.
            - generic [ref=e250]:
              - generic [ref=e251]:
                - heading "1. Logic over effort." [level=4] [ref=e252]
                - paragraph [ref=e253]: Throwing more marketing budget at a broken pipeline is financial negligence. We fix the systemic conversion logic before we attempt to scale acquisition.
              - generic [ref=e254]:
                - heading "2. Data over opinions." [level=4] [ref=e255]
                - paragraph [ref=e256]: Every recommendation we make is anchored in mathematical probability and validated by hard enterprise data. Assumptions are the enemy of yield.
              - generic [ref=e257]:
                - heading "3. Tangible over theoretical." [level=4] [ref=e258]
                - paragraph [ref=e259]: We do not hand over a 100-page PDF and walk away. We build, deploy, and refine the actual systems and logic models that generate your revenue.
              - generic [ref=e260]:
                - heading "4. Accountability over retainers." [level=4] [ref=e261]
                - paragraph [ref=e262]: We operate with the precise commercial urgency of a founder. Our success is explicitly tied to the measurable enterprise value we unlock for your firm.
      - region "Apply for Executive Diagnostic" [ref=e263]:
        - generic [ref=e266]:
          - generic [ref=e267]:
            - paragraph [ref=e273]: Executive Diagnostic
            - heading "Apply for Executive Diagnostic" [level=2] [ref=e274]
            - paragraph [ref=e275]: Commence a structured, confidential audit regarding your systemic friction, revenue bottlenecks, and algorithmic execution opportunities.
          - form "Strategic review request form" [ref=e276]:
            - generic [ref=e277]:
              - generic [ref=e278]:
                - generic: Full Name *
                - textbox "Full Name" [ref=e279]
              - generic [ref=e280]:
                - generic: Corporate Email *
                - textbox "Corporate Email" [ref=e281]
              - generic [ref=e282]:
                - generic: Company *
                - textbox "Company" [ref=e283]
              - generic [ref=e284]:
                - generic: Industry *
                - generic [ref=e285]:
                  - combobox "Industry" [ref=e286] [cursor=pointer]:
                    - option "Real Estate" [selected]
                    - option "Clinics & Healthcare"
                    - option "Professional Services"
                    - option "Other"
                  - generic:
                    - img
              - generic [ref=e287]:
                - generic: Company Size *
                - generic [ref=e288]:
                  - combobox "Company Size" [ref=e289] [cursor=pointer]:
                    - option "1 - 10 Employees"
                    - option "11 - 50 Employees" [selected]
                    - option "51 - 200 Employees"
                    - option "200+ Employees"
                  - generic:
                    - img
              - generic [ref=e290]:
                - generic: Primary Bottleneck *
                - generic [ref=e291]:
                  - combobox "Primary Bottleneck" [ref=e292] [cursor=pointer]:
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
              - generic [ref=e293]:
                - generic: Website (optional)
                - textbox "Website (optional)" [ref=e294]:
                  - /placeholder: https://
              - generic [ref=e295]:
                - generic: Additional Context (optional)
                - textbox "Additional Context (optional)" [ref=e296]:
                  - /placeholder: Any specific challenges?
              - button "Apply for Diagnostic" [ref=e300] [cursor=pointer]
              - paragraph [ref=e301]: We respond within one business day. Absolute discretion guaranteed.
          - generic [ref=e302]:
            - paragraph [ref=e303]: Or contact us directly
            - generic [ref=e304]:
              - link "hamza@northstaradvisory.pro" [ref=e305] [cursor=pointer]:
                - /url: mailto:hamza@northstaradvisory.pro
              - generic [ref=e306]: "|"
              - link "WhatsApp Business" [ref=e307] [cursor=pointer]:
                - /url: https://wa.me/213776463005?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20systemic%20audit.
                - img [ref=e308]
                - text: WhatsApp Business
  - contentinfo [ref=e310]:
    - generic [ref=e312]:
      - img "North Star Advisory" [ref=e314]
      - navigation "Footer navigation" [ref=e315]:
        - list [ref=e316]:
          - listitem [ref=e317]:
            - link "Privacy Policy" [ref=e318] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e319]:
            - link "GCC Compliance" [ref=e320] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e321]:
            - link "Secure Contact" [ref=e322] [cursor=pointer]:
              - /url: "#contact"
      - paragraph [ref=e323]: © 2026 North Star Advisory
  - alert [ref=e324]
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