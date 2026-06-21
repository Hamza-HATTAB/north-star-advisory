# North Star Advisory - System Architecture

## Overview
North Star Advisory's landing page is an enterprise-grade web application engineered for high-yield conversion and diagnostic lead generation. The system is designed to mathematically route prospects to a structured WhatsApp endpoint based on algorithmic inputs.

## Technology Stack
- **Framework:** Next.js 14+ (App Router paradigm)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (v4) with bespoke CSS variables for deep theming
- **State Management:** Zustand (Handling Growth Friction Index multi-step state)
- **Animations:** Framer Motion & Tailwind Keyframes
- **Forms & Validation:** React Hook Form + Zod

## Core Modules

### 1. Growth Friction Index (GFI) Engine
**Location:** `components/sections/GrowthFrictionIndex.tsx`
- **Purpose:** An interactive diagnostic engine that maps 3 specific domain queries to a mathematical EBITDA Yield constraint multiplier.
- **Routing:** Automatically generates an encoded WhatsApp URL payload containing the user's score and severity level (`SEVERE`, `MODERATE`, `OPTIMIZED`) to instantly route to the consulting team.

### 2. The Conversion Architecture
**Location:** `components/sections/LeadCapture.tsx`
- **Purpose:** Strict enterprise lead capture.
- **Bot Mitigation:** Integrated Cloudflare Turnstile token validation on both the client interface and server API (`app/api/contact/route.ts`).
- **Telemetry:** Fires deterministic GA4/Clarity events (`trackFormSuccess`, `trackFormError`) located in `lib/analytics.ts`.

### 3. SEO & Semantic Integrity
**Location:** `app/layout.tsx`
- **Structured Data:** Injects `application/ld+json` (ProfessionalService schema) into the root `<head>`.
- **Accessibility:** A11y landmarks (`role="banner"`, `role="main"`, `role="contentinfo"`) properly demarcated. Screen reader Skip Links included.

## Infrastructure Highlights
- **Viewport Constraints:** The layout uses specific CSS mathematical overrides (`min-width: 0`, precise `max-w` settings) to guarantee 0 horizontal scrolling, even on highly constrained 375px screens.
- **Hydration Safety:** The animation primitives natively handle `prefers-reduced-motion` at the library level, preventing React 18 hydration crashes on iOS Low Power Mode.
