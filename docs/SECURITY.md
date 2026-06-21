# Security & Anti-Bot Infrastructure

## Cloudflare Turnstile Implementation

The application leverages **Cloudflare Turnstile** as a drop-in, privacy-preserving CAPTCHA replacement to aggressively block automated submissions.

### Client-Side Execution (`LeadCapture.tsx`)
1. The `<Turnstile />` component is mounted explicitly below the contact form.
2. Validation via `Zod` blocks form submission completely if the `turnstileToken` state is null.
3. The generated ephemeral token is sent as a payload parameter `turnstileToken` alongside `name`, `email`, `company`, and `inquiry`.

### Server-Side Enforcement (`app/api/contact/route.ts`)
1. The API route immediately intercepts the payload.
2. **First Gate:** If `turnstileToken` is falsy or missing, it returns a hard `400 Bad Request` with message: *"Bot protection challenge missing. Please refresh and try again."*
3. **Second Gate (Upstash Rate Limiting):** The endpoint leverages `@upstash/ratelimit` with Redis to restrict the absolute volume of requests coming from a single IP address, preventing Layer 7 brute-force flooding.
4. **Final Execution:** Only after Turnstile and Rate Limiting clear does the system interact with the Resend API to fire off the enterprise email.

## Vulnerability Mitigations
- **Hydration Crash Prevention:** `AnimatedSection` specifically avoids state-based conditionally rendering `div` vs `motion.div` during SSR to prevent React from dropping DOM trees on Low Power Mode devices.
- **Viewport Integrity:** Horizontal scaling locks prevent malformed CSS injections or user-scaled text from breaking the UI wrapper.
- **XSS Safety:** React Hook Form sanitizes all inputs natively; Next.js App Router API properly formats JSON responses strictly.
