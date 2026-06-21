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
            - heading "Growth rarely breaks because of effort. It breaks because of friction hidden inside the system." [level=1] [ref=e21]
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
          - generic [ref=e86]:
            - generic [ref=e88]:
              - generic [ref=e89]: "01"
              - heading "Structural Audit" [level=3] [ref=e90]
              - paragraph [ref=e91]: Mapping your current data flow and isolating the exact operational bottlenecks suppressing your enterprise margin.
            - generic [ref=e93]:
              - generic [ref=e94]: "02"
              - heading "Logic Architecture" [level=3] [ref=e95]
              - paragraph [ref=e96]: Engineering a bespoke conversion pipeline and strict routing rules to maximize your system throughput.
            - generic [ref=e98]:
              - generic [ref=e99]: "03"
              - heading "Live Deployment" [level=3] [ref=e100]
              - paragraph [ref=e101]: Integrating the new infrastructure into your live environment without disrupting daily execution.
            - generic [ref=e103]:
              - generic [ref=e104]: "04"
              - heading "Yield Optimization" [level=3] [ref=e105]
              - paragraph [ref=e106]: Continuous algorithmic refinement based on hard performance data and measured operational leverage.
      - region "Architectural Interventions" [ref=e107]:
        - generic [ref=e108]:
          - generic [ref=e110]:
            - generic [ref=e111]:
              - paragraph [ref=e112]: Empirical Evidence
              - heading "Architectural Interventions" [level=2] [ref=e113]
            - button "Examine all outcome reports" [ref=e114] [cursor=pointer]:
              - text: Examine Outcome Reports
              - img [ref=e115]
          - generic [ref=e117]:
            - article [ref=e119]:
              - img [ref=e121]:
                - generic [ref=e132]: ROUTER
              - generic "Case study categories" [ref=e133]:
                - generic [ref=e134]: Real Estate
                - generic [ref=e135]: Conversion Architecture
              - heading "Institutional Real Estate Portfolio" [level=3] [ref=e136]
              - paragraph [ref=e137]: Engineered a multi-node lead routing architecture to process high-volume inquiries, applying strict logic rules to segment intent and automate premium follow-up sequencing.
              - generic [ref=e139]:
                - generic [ref=e140]:
                  - paragraph [ref=e141]: System Constraint
                  - paragraph [ref=e142]: Lead Leakage at Scale
                - generic [ref=e143]:
                  - paragraph [ref=e144]: Verified Yield
                  - generic [ref=e145]:
                    - paragraph [ref=e146]: 31%
                    - paragraph [ref=e147]: Increase in Qualified Conversion
            - article [ref=e149]:
              - img [ref=e151]:
                - generic [ref=e161]: UNIFIED LAYER
                - generic [ref=e163]: LTV
              - generic "Case study categories" [ref=e164]:
                - generic [ref=e165]: Healthcare
                - generic [ref=e166]: Growth Architecture
              - heading "Premium Private Clinic Network" [level=3] [ref=e167]
              - paragraph [ref=e168]: Architected a centralised data ecosystem integrating disjointed clinical and marketing systems to calculate precise patient lifetime value and algorithmically optimise acquisition spend.
              - generic [ref=e170]:
                - generic [ref=e171]:
                  - paragraph [ref=e172]: System Constraint
                  - paragraph [ref=e173]: Fragmented Data Silos
                - generic [ref=e174]:
                  - paragraph [ref=e175]: Verified Yield
                  - generic [ref=e176]:
                    - paragraph [ref=e177]: 42%
                    - paragraph [ref=e178]: Reduction in Patient Acquisition Cost
      - region "Infrastructure over advice. Algorithms over effort." [ref=e179]:
        - generic [ref=e180]:
          - generic [ref=e182]:
            - paragraph [ref=e183]: The Thesis
            - heading "Infrastructure over advice. Algorithms over effort." [level=2] [ref=e184]:
              - text: Infrastructure over advice.
              - text: Algorithms over effort.
            - paragraph [ref=e185]: "North Star Advisory is built on a singular premise: sustainable growth is an engineering problem, not a marketing problem. We build tangible revenue infrastructure, deploy algorithmic execution, and measure success in measurable business outcomes."
            - generic [ref=e187]:
              - generic [ref=e189]:
                - heading "Empirically Driven" [level=3] [ref=e192]
                - paragraph [ref=e193]: We measure intervention success in validated enterprise value and structural revenue metrics — never vanity indicators.
              - generic [ref=e195]:
                - heading "Absolute Discretion" [level=3] [ref=e198]
                - paragraph [ref=e199]: Operating with structural confidentiality for ambitious operators and private offices across the GCC.
              - generic [ref=e201]:
                - heading "Infrastructure Over Advice" [level=3] [ref=e204]
                - paragraph [ref=e205]: We construct tangible business architecture, not theoretical slide decks. Every mandate produces operational infrastructure.
              - generic [ref=e207]:
                - heading "Operator-to-Operator" [level=3] [ref=e210]
                - paragraph [ref=e211]: We understand the realities of scaling a business in the region. We speak the language of EBITDA, asset yield, and operational leverage.
          - generic [ref=e214]:
            - generic [ref=e216]:
              - paragraph [ref=e217]: The Operator
              - generic [ref=e218]:
                - paragraph [ref=e219]: Hamza Hattab
                - paragraph [ref=e220]: AI Engineering, USTHB
                - paragraph [ref=e221]: "Specialization: GCC Revenue Systems"
              - heading "I build the architecture that consulting firms only talk about." [level=3] [ref=e222]
              - paragraph [ref=e223]: I built clinical data infrastructures and real estate lead-routing systems because I watched millions of dollars burn on theoretical strategy decks. You do not need more advice. You need systems that mathematically generate yield.
            - generic [ref=e224]:
              - generic [ref=e225]:
                - heading "1. Logic over effort." [level=4] [ref=e226]
                - paragraph [ref=e227]: Throwing more marketing budget at a broken pipeline is financial negligence. We fix the systemic conversion logic before we attempt to scale acquisition.
              - generic [ref=e228]:
                - heading "2. Data over opinions." [level=4] [ref=e229]
                - paragraph [ref=e230]: Every recommendation we make is anchored in mathematical probability and validated by hard enterprise data. Assumptions are the enemy of yield.
              - generic [ref=e231]:
                - heading "3. Tangible over theoretical." [level=4] [ref=e232]
                - paragraph [ref=e233]: We do not hand over a 100-page PDF and walk away. We build, deploy, and refine the actual systems and logic models that generate your revenue.
              - generic [ref=e234]:
                - heading "4. Accountability over retainers." [level=4] [ref=e235]
                - paragraph [ref=e236]: We operate with the precise commercial urgency of a founder. Our success is explicitly tied to the measurable enterprise value we unlock for your firm.
      - region "Apply for Executive Diagnostic" [ref=e237]:
        - generic [ref=e240]:
          - generic [ref=e241]:
            - paragraph [ref=e247]: Executive Diagnostic
            - heading "Apply for Executive Diagnostic" [level=2] [ref=e248]
            - paragraph [ref=e249]: Commence a structured, confidential audit regarding your systemic friction, revenue bottlenecks, and algorithmic execution opportunities.
          - form "Strategic review request form" [ref=e250]:
            - generic [ref=e251]:
              - generic [ref=e252]:
                - generic: Full Name *
                - textbox "Full Name" [ref=e253]
              - generic [ref=e254]:
                - generic: Corporate Email *
                - textbox "Corporate Email" [ref=e255]
              - generic [ref=e256]:
                - generic: Company *
                - textbox "Company" [ref=e257]
              - generic [ref=e258]:
                - generic: Industry *
                - generic [ref=e259]:
                  - combobox "Industry" [ref=e260] [cursor=pointer]:
                    - option "Real Estate" [selected]
                    - option "Clinics & Healthcare"
                    - option "Professional Services"
                    - option "Other"
                  - generic:
                    - img
              - generic [ref=e261]:
                - generic: Company Size *
                - generic [ref=e262]:
                  - combobox "Company Size" [ref=e263] [cursor=pointer]:
                    - option "1 - 10 Employees"
                    - option "11 - 50 Employees" [selected]
                    - option "51 - 200 Employees"
                    - option "200+ Employees"
                  - generic:
                    - img
              - generic [ref=e264]:
                - generic: Primary Bottleneck *
                - generic [ref=e265]:
                  - combobox "Primary Bottleneck" [ref=e266] [cursor=pointer]:
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
              - generic [ref=e267]:
                - generic: Website (optional)
                - textbox "Website (optional)" [ref=e268]:
                  - /placeholder: https://
              - generic [ref=e269]:
                - generic: Additional Context (optional)
                - textbox "Additional Context (optional)" [ref=e270]:
                  - /placeholder: Any specific challenges?
              - button "Apply for Diagnostic" [ref=e274] [cursor=pointer]
              - paragraph [ref=e275]: We respond within one business day. Absolute discretion guaranteed.
          - generic [ref=e276]:
            - paragraph [ref=e277]: Or contact us directly
            - generic [ref=e278]:
              - link "hamza@northstaradvisory.pro" [ref=e279] [cursor=pointer]:
                - /url: mailto:hamza@northstaradvisory.pro
              - link "WhatsApp Business" [ref=e280] [cursor=pointer]:
                - /url: https://wa.me/213549391101?text=Hi%20Hamza%2C%20I%20want%20to%20discuss%20a%20systemic%20audit.
                - img [ref=e281]
                - text: WhatsApp Business
  - contentinfo [ref=e283]:
    - generic [ref=e285]:
      - generic [ref=e286]: North Star Advisory
      - navigation "Footer navigation" [ref=e287]:
        - list [ref=e288]:
          - listitem [ref=e289]:
            - link "Privacy Policy" [ref=e290] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e291]:
            - link "GCC Compliance" [ref=e292] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e293]:
            - link "Secure Contact" [ref=e294] [cursor=pointer]:
              - /url: "#contact"
      - paragraph [ref=e295]: © 2026 North Star Advisory
  - alert [ref=e296]
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
  21 |     await expect(navbar.getByText("North Star Advisory")).toBeVisible();
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