import type { Metadata } from "next";

const baseUrl = "https://northstaradvisory.pro";

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "North Star Advisory | GCC Growth Systems & Lead-to-Appointment Diagnostics",
  description:
    "We help GCC operators in Saudi Arabia and the UAE turn more qualified enquiries into appointments by fixing qualification, routing, CRM handoff, and follow-up systems.",
  keywords: [
    "real estate lead diagnostic",
    "GCC growth systems",
    "Saudi Arabia business automation",
    "UAE lead routing",
    "speed to lead automation",
    "real estate appointment conversion",
    "growth friction diagnostic",
    "CRM automation GCC",
  ],
  authors: [{ name: "North Star Advisory" }],
  creator: "North Star Advisory",
  publisher: "North Star Advisory",
  icons: {
    icon: "/assets/brand/icon.svg",
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "North Star Advisory | GCC Growth Systems & Lead-to-Appointment Diagnostics",
    description:
      "Helping GCC real estate and high-value operators in Saudi Arabia and the UAE eliminate lead leakage and accelerate qualified appointments.",
    siteName: "North Star Advisory",
    images: [
      {
        url: "/assets/social/og-image.png",
        width: 1200,
        height: 630,
        alt: "North Star Advisory — GCC Growth Systems & Lead Diagnostics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "North Star Advisory | GCC Growth Systems & Lead Diagnostics",
    description:
      "Growth systems and lead-to-appointment diagnostics for operators in KSA and UAE.",
    images: ["/assets/social/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

