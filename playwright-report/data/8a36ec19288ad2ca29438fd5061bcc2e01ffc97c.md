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
        - text: North Star Advisory
      - button "Open navigation menu" [ref=e6]:
        - img [ref=e7]
  - main [ref=e8]:
    - generic [ref=e9]:
      - region "Hero — North Star Advisory positioning" [ref=e10]:
        - generic [ref=e11]:
          - generic [ref=e14]:
            - generic [ref=e15]:
              - generic [ref=e17]: North Star Advisory
              - generic [ref=e18]: /
              - generic [ref=e19]: Revenue Architecture
            - heading "Growth rarely breaks because of effort. It breaks because of friction hidden inside the system." [level=1] [ref=e21]:
              - text: Growth rarely breaks because of effort.
              - text: It breaks because of friction hidden inside the system.
            - paragraph [ref=e23]: Revenue is leaking. Bandwidth is burned. Margins are eroding. We diagnose systemic bottlenecks and architect revenue yield and operational leverage for ambitious operators in the GCC.
            - generic [ref=e25]:
              - button "Apply for Diagnostic" [ref=e26] [cursor=pointer]
              - button "Read The Thesis" [ref=e27] [cursor=pointer]:
                - text: Read The Thesis
                - img [ref=e28]
          - generic [ref=e31]:
            - generic [ref=e32]:
              - paragraph [ref=e33]: Built For
              - paragraph [ref=e34]: Real Estate, Healthcare, Professional Services
            - generic [ref=e35]:
              - paragraph [ref=e36]: Focus
              - paragraph [ref=e37]: Saudi Arabia, UAE
            - generic [ref=e38]:
              - paragraph [ref=e39]: Specialization
              - paragraph [ref=e40]: Revenue Systems, AI Infrastructure, Conversion Architecture
      - region "The Growth Friction Index" [ref=e41]:
        - generic [ref=e42]:
          - generic [ref=e43]:
            - generic [ref=e44]:
              - paragraph [ref=e45]: Proprietary Diagnostic
              - heading "The Growth Friction Index" [level=2] [ref=e46]
            - paragraph [ref=e48]: Most businesses do not have a growth problem. They have a friction problem. We identify exactly where revenue is being suppressed across three diagnostic domains — and we remove the constraints with precision.
          - generic [ref=e50]:
            - generic [ref=e51]:
              - generic [ref=e52]:
                - text: Operational Inputs
                - paragraph [ref=e53]: Capital & Time
              - generic [ref=e54]: ÷
              - generic [ref=e55]:
                - generic [ref=e56]: The Diagnostic
                - paragraph [ref=e57]: Friction Drag
              - generic [ref=e58]: =
              - generic [ref=e59]:
                - text: Actual Outcome
                - paragraph [ref=e60]: EBITDA Yield
            - generic [ref=e61]:
              - paragraph [ref=e62]: The Operator's Equation
              - paragraph [ref=e63]: Growth isn't just about adding more capital or time. It's about removing the friction that suppresses your return on both. We isolate the exact locations where revenue is leaking.
          - generic [ref=e65]:
            - generic [ref=e66]:
              - generic [ref=e67]: Live Diagnostic
              - generic [ref=e68]: 01 / 03
            - heading "How is your acquisition data routed to your sales or conversion team?" [level=3] [ref=e69]
            - generic [ref=e70]:
              - button "A Manual CRM entry or disjointed CSV uploads." [ref=e71]:
                - generic [ref=e72]: A
                - generic [ref=e73]: Manual CRM entry or disjointed CSV uploads.
              - button "B Basic Zapier connections without intent filtering." [ref=e74]:
                - generic [ref=e75]: B
                - generic [ref=e76]: Basic Zapier connections without intent filtering.
              - button "C Real-time algorithmic routing based on behavioral intent." [ref=e77]:
                - generic [ref=e78]: C
                - generic [ref=e79]: Real-time algorithmic routing based on behavioral intent.
      - region "The Architecture Model" [ref=e80]:
        - generic [ref=e81]:
          - generic [ref=e82]:
            - paragraph [ref=e83]: Deployment Protocol
            - heading "The Architecture Model" [level=2] [ref=e84]
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
              - paragraph [ref=e138]: Engineered a multi-node lead routing architecture to process high-volume inquiries, applying strict logic rules to segment intent and automate premium follow-up sequencing.
              - generic [ref=e140]:
                - generic [ref=e141]:
                  - paragraph [ref=e142]: System Constraint
                  - paragraph [ref=e143]: Lead Leakage at Scale
                - generic [ref=e144]:
                  - paragraph [ref=e145]: Verified Yield
                  - generic [ref=e146]:
                    - paragraph [ref=e147]: 31%
                    - paragraph [ref=e148]: Increase in Qualified Conversion
            - article [ref=e150]:
              - img [ref=e152]:
                - generic [ref=e162]: UNIFIED LAYER
                - generic [ref=e164]: LTV
              - generic "Case study categories" [ref=e165]:
                - generic [ref=e166]: Healthcare
                - generic [ref=e167]: Growth Architecture
              - heading "Premium Private Clinic Network" [level=3] [ref=e168]
              - paragraph [ref=e169]: Architected a centralised data ecosystem integrating disjointed clinical and marketing systems to calculate precise patient lifetime value and algorithmically optimise acquisition spend.
              - generic [ref=e171]:
                - generic [ref=e172]:
                  - paragraph [ref=e173]: System Constraint
                  - paragraph [ref=e174]: Fragmented Data Silos
                - generic [ref=e175]:
                  - paragraph [ref=e176]: Verified Yield
                  - generic [ref=e177]:
                    - paragraph [ref=e178]: 42%
                    - paragraph [ref=e179]: Reduction in Patient Acquisition Cost
      - region "Infrastructure over advice. Algorithms over effort." [ref=e180]:
        - generic [ref=e181]:
          - generic [ref=e183]:
            - paragraph [ref=e184]: The Thesis
            - heading "Infrastructure over advice. Algorithms over effort." [level=2] [ref=e185]:
              - text: Infrastructure over advice.
              - text: Algorithms over effort.
            - paragraph [ref=e186]: "North Star Advisory is built on a singular premise: sustainable growth is an engineering problem, not a marketing problem. We build tangible revenue infrastructure, deploy algorithmic execution, and measure success in measurable business outcomes."
            - generic [ref=e188]:
              - generic [ref=e190]:
                - heading "Empirically Driven" [level=3] [ref=e193]
                - paragraph [ref=e194]: We measure intervention success in validated enterprise value and structural revenue metrics — never vanity indicators.
              - generic [ref=e196]:
                - heading "Absolute Discretion" [level=3] [ref=e199]
                - paragraph [ref=e200]: Operating with structural confidentiality for ambitious operators and private offices across the GCC.
              - generic [ref=e202]:
                - heading "Infrastructure Over Advice" [level=3] [ref=e205]
                - paragraph [ref=e206]: We construct tangible business architecture, not theoretical slide decks. Every mandate produces operational infrastructure.
              - generic [ref=e208]:
                - heading "Operator-to-Operator" [level=3] [ref=e211]
                - paragraph [ref=e212]: We understand the realities of scaling a business in the region. We speak the language of EBITDA, asset yield, and operational leverage.
          - generic [ref=e215]:
            - generic [ref=e217]:
              - paragraph [ref=e218]: The Operator
              - generic [ref=e219]:
                - paragraph [ref=e220]: Hamza Hattab
                - paragraph [ref=e221]: AI Engineering, USTHB
                - paragraph [ref=e222]: "Specialization: GCC Revenue Systems"
              - heading "I build the architecture that consulting firms only talk about." [level=3] [ref=e223]
              - paragraph [ref=e224]: I built clinical data infrastructures and real estate lead-routing systems because I watched millions of dollars burn on theoretical strategy decks. You do not need more advice. You need systems that mathematically generate yield.
            - generic [ref=e225]:
              - generic [ref=e226]:
                - heading "1. Logic over effort." [level=4] [ref=e227]
                - paragraph [ref=e228]: Throwing more marketing budget at a broken pipeline is financial negligence. We fix the systemic conversion logic before we attempt to scale acquisition.
              - generic [ref=e229]:
                - heading "2. Data over opinions." [level=4] [ref=e230]
                - paragraph [ref=e231]: Every recommendation we make is anchored in mathematical probability and validated by hard enterprise data. Assumptions are the enemy of yield.
              - generic [ref=e232]:
                - heading "3. Tangible over theoretical." [level=4] [ref=e233]
                - paragraph [ref=e234]: We do not hand over a 100-page PDF and walk away. We build, deploy, and refine the actual systems and logic models that generate your revenue.
              - generic [ref=e235]:
                - heading "4. Accountability over retainers." [level=4] [ref=e236]
                - paragraph [ref=e237]: We operate with the precise commercial urgency of a founder. Our success is explicitly tied to the measurable enterprise value we unlock for your firm.
      - region "Apply for Executive Diagnostic" [ref=e238]:
        - generic [ref=e241]:
          - generic [ref=e242]:
            - paragraph [ref=e248]: Executive Diagnostic
            - heading "Apply for Executive Diagnostic" [level=2] [ref=e249]
            - paragraph [ref=e250]: Commence a structured, confidential audit regarding your systemic friction, revenue bottlenecks, and algorithmic execution opportunities.
          - form "Strategic review request form" [ref=e251]:
            - generic [ref=e252]:
              - generic [ref=e253]:
                - generic: Full Name *
                - textbox "Full Name" [ref=e254]
              - generic [ref=e255]:
                - generic: Corporate Email *
                - textbox "Corporate Email" [ref=e256]
              - generic [ref=e257]:
                - generic: Company *
                - textbox "Company" [ref=e258]
              - generic [ref=e259]:
                - generic: Industry *
                - generic [ref=e260]:
                  - combobox "Industry" [ref=e261] [cursor=pointer]:
                    - option "Real Estate" [selected]
                    - option "Clinics & Healthcare"
                    - option "Professional Services"
                    - option "Other"
                  - generic:
                    - img
              - generic [ref=e262]:
                - generic: Company Size *
                - generic [ref=e263]:
                  - combobox "Company Size" [ref=e264] [cursor=pointer]:
                    - option "1 - 10 Employees"
                    - option "11 - 50 Employees" [selected]
                    - option "51 - 200 Employees"
                    - option "200+ Employees"
                  - generic:
                    - img
              - generic [ref=e265]:
                - generic: Primary Bottleneck *
                - generic [ref=e266]:
                  - combobox "Primary Bottleneck" [ref=e267] [cursor=pointer]:
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
              - generic [ref=e268]:
                - generic: Website (optional)
                - textbox "Website (optional)" [ref=e269]:
                  - /placeholder: https://
              - generic [ref=e270]:
                - generic: Additional Context (optional)
                - textbox "Additional Context (optional)" [ref=e271]:
                  - /placeholder: Any specific challenges?
              - button "Apply for Diagnostic" [ref=e275] [cursor=pointer]
              - paragraph [ref=e276]: We respond within one business day. Absolute discretion guaranteed.
          - generic [ref=e277]:
            - paragraph [ref=e278]: Or contact us directly
            - generic [ref=e279]:
              - link "hamza@northstaradvisory.pro" [ref=e280] [cursor=pointer]:
                - /url: mailto:hamza@northstaradvisory.pro
              - generic [ref=e281]: "|"
              - link "WhatsApp Business" [ref=e282] [cursor=pointer]:
                - /url: https://wa.me/213549391101?text=Hi%20Hamza%2C%20I%20want%20to%20discuss%20a%20systemic%20audit.
                - img [ref=e283]
                - text: WhatsApp Business
  - contentinfo [ref=e285]:
    - generic [ref=e287]:
      - generic [ref=e288]: North Star Advisory
      - navigation "Footer navigation" [ref=e289]:
        - list [ref=e290]:
          - listitem [ref=e291]:
            - link "Privacy Policy" [ref=e292] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e293]:
            - link "GCC Compliance" [ref=e294] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e295]:
            - link "Secure Contact" [ref=e296] [cursor=pointer]:
              - /url: "#contact"
      - paragraph [ref=e297]: © 2026 North Star Advisory
  - alert [ref=e298]
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