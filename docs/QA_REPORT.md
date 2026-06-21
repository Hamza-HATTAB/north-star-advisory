# Quality Assurance & Testing

## 1. Autonomous AI Testing (TestSprite)
This project is configured with a deep **TestSprite** QA testing plan (`testsprite_tests/testsprite_frontend_test_plan.json`).

The AI Agent specifically evaluates:
- **Mobile Drawer Mechanics:** Opens and navigates between sections using the mobile hamburger menu overlay.
- **GFI Engine Calculation:** Runs the 3-step diagnostic, asserts the EBITDA multiplier math, and clicks Recalculate.
- **Form Validation:** Attempts submitting invalid emails, missing tokens, and empty corporate fields.
- **Bot Rejection (TC001/TC004):** TestSprite proves the Turnstile integration works by attempting to bypass the bot check and failing (getting blocked).

## 2. Playwright E2E Suite
`playwright.config.ts` handles automated cross-browser regressions (Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari).
- Runs automated CI tests against critical paths to ensure the Lead Capture endpoint and GFI diagnostic are never broken by upstream changes.

## 3. Lighthouse 100/100/100 Audits
The project guarantees perfect Lighthouse metrics:
- **Performance:** Optimized CSS variables, minimal JS bundle overhead, and optimized local Geist fonts.
- **Accessibility:** `aria-label`, `aria-labelledby`, `role` attributes, high contrast ratio text (`var(--color-on-surface-variant)`), and `SkipLink` components.
- **Best Practices:** HTTPS/SSL assumptions, clean console outputs, and hydration safety.
