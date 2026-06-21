# Master Product Requirements Document (PRD) & QA Test Directives
**Target Domain:** `northstaradvisory.pro`
**Application Type:** Next.js Server-Side Rendered B2B Enterprise Lead Generation Engine
**Objective:** Strict 100% automated test execution to verify all newly patched vulnerabilities and run deep advanced security, accessibility, and UI audits.

---

## 1. Core User Flows & Functionality to Audit

### A. The Growth Friction Index (GFI) Diagnostic
- **Description:** A highly complex, interactive 3-step diagnostic calculator determining operational revenue leakage.
- **Critical Flow Verification:** 
  - Ensure the inputs update dynamically without page reloads.
  - Ensure the final resulting dashboard calculates the exact EBITDA Yield Multiplier.
  - **[NEWLY PATCHED - MUST TEST]:** The results panel now contains a dynamic **"Discuss on WhatsApp"** button. The test harness **MUST** click this button and verify that the user is routed to the WhatsApp Business API with the exact friction severity and numeric score embedded in the URL payload.

### B. Secure Enterprise Lead Capture (Contact Form)
- **Description:** Enterprise-grade contact form protected by Cloudflare Turnstile bot protection.
- **Critical Flow Verification:**
  - Valid payloads must route cleanly to the `api/contact` endpoint and display a "Request Received" confirmation state.
  - **[NEWLY PATCHED - MUST TEST]:** The `api/contact` route has been strictly locked down. The test harness **MUST** attempt to submit the form *without* a Turnstile token. The backend must unconditionally reject the payload with a 400 error status ("Bot protection challenge missing").

### C. Advanced Mobile Viewport & CSS Animation Rendering
- **Description:** Responsive landing page built with custom Tailwind CSS micro-animations.
- **Critical Flow Verification:**
  - **[NEWLY PATCHED - MUST TEST]:** Previous builds had horizontal scrolling overflow on 375px screens. The test harness **MUST** emulate iPhone 12/Pixel 5 viewports and mathematically verify that all DOM elements fit within `100vw` with absolutely zero horizontal scrollbars.
  - **[NEWLY PATCHED - MUST TEST]:** Emulate "Low Power Mode" / `prefers-reduced-motion: reduce`. Verify that the `.animate-fade-in-up` CSS overrides function correctly and that the Hero text is 100% visible (`opacity: 1`) immediately on page load.

---

## 2. Advanced Accessibility (A11y) Directives

**[NEWLY PATCHED - MUST TEST]:** The DOM has been completely restructured to include strict semantic HTML5. The test harness must verify the following:
1. **Landmark Rigidity:** The DOM must contain exactly one `role="banner"` (Header/Navbar), one `role="main"` (Page Content), and one `role="contentinfo"` (Footer). Assistive technologies must be able to parse these landmarks without errors.
2. **Keyboard Trapping & Navigation:** The "Skip to main content" link must function correctly on first Tab. The mobile menu must be fully operable without a mouse.
3. **Screen Reader Error Linking:** The Contact form validation errors must be read by screen readers.

---

## 3. Advanced SEO & Lighthouse Performance Directives
The test suite must run a rigorous headless Lighthouse audit ensuring:
- **SEO Score:** 100/100.
- **Accessibility Score:** 100/100.
- **Best Practices:** 100/100.
- **Performance:** 90+/100 (accounting for Next.js hydration).
- **Checks to Execute:** `<title>` presence, canonical tags, valid `robots.txt`, logical `H1` -> `H6` descending hierarchies, and valid `og:image` social graph metadata.

---

## 4. Execution Command for the AI Test Agent
**DIRECTIVE TO THE TEST ENGINE:**
You are to run the absolute deepest, most rigorous QA sweep possible across the entire `northstaradvisory.pro` domain. Do not stop at basic visual checks. You must simulate network failures, strip out security tokens, emulate 375px mobile screens, force Low Power Mode, and map the accessibility tree. 

If all 5 of the previously failed tests (Turnstile bypass, WhatsApp GFI routing, ARIA landmarks, Viewport Overflow, and Low Power invisible text) pass with 100% success, you are to certify the application as Production Ready.
