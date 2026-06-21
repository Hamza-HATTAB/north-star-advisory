# North Star Advisory — Revenue Architecture

Enterprise-grade landing page and diagnostic application built for North Star Advisory, focused on scaling revenue infrastructure in the GCC.

## 🚀 Core Architecture

This project is built on a highly optimized, modern React stack designed for maximum conversion yield, accessibility, and security.

### Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion (Optimized for iOS Low Power Mode)
- **State Management:** Zustand
- **Form Handling:** React Hook Form + Zod validation
- **Security:** Cloudflare Turnstile (Client & Server-Side Verification)
- **Rate Limiting:** Upstash Redis

## 🌟 Key Features

### 1. Growth Friction Index (GFI) Diagnostic
An interactive 3-step diagnostic tool that calculates an operator's EBITDA Yield and Revenue Leakage Severity.
- Calculates structural bottlenecks based on real-time inputs.
- Automatically constructs and encodes a secure payload for **WhatsApp routing**, directly connecting high-intent prospects to the sales team.

### 2. Secure Enterprise Lead Capture
- Form protected by strictly enforced **Cloudflare Turnstile** bot protection.
- Server-side verification ensures that automated bots cannot bypass the UI to spam the endpoint. Empty or invalid tokens are instantly rejected with `400 Bad Request`.

### 3. Bulletproof Accessibility & Responsive Design
- **Semantic HTML5:** Strict adherence to WAI-ARIA standards (`role="banner"`, `role="main"`, `role="contentinfo"`).
- **Viewport Hardening:** Mathematical CSS scaling guarantees zero horizontal scroll overflow on extremely narrow 375px mobile viewports.
- **Low Power Mode Native Support:** Animations are handled natively by Framer Motion. Devices with `prefers-reduced-motion: reduce` enabled (like iPhones on 5% battery) will instantly skip animations to conserve battery, completely avoiding React Hydration Mismatch crashes.

## 🧪 Advanced Testing Infrastructure

This repository is hardened against regressions using a multi-layered testing strategy:

1. **TestSprite AI Autonomous Testing:** 
   - A fully autonomous AI QA agent is configured via `testsprite_tests/testsprite_frontend_test_plan.json`.
   - Explicit directives test Turnstile blocks, iOS Low Power Mode, mobile viewport integrity, and ARIA landmarks.
2. **Playwright E2E:** 
   - Automated browser testing to ensure critical paths (like the GFI diagnostic and lead submission) are functionally sound.
3. **Lighthouse Performance & SEO:** 
   - Optimized for perfect 100 scores across Accessibility, Best Practices, and SEO.

## 💻 Local Development

First, set up your local environment variables:
```bash
# .env.local
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

Run the development server:
```bash
npm run dev
```

To run the full production build (recommended for testing):
```bash
npm run build && PORT=3000 npm run start
```
