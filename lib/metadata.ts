import type { Metadata } from "next";

const baseUrl = "https://northstaradvisory.pro";

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "North Star Advisory | Growth Systems for GCC Businesses",
  description:
    "Strategic Growth, Conversion & Automation Advisory for ambitious founders and operators in Saudi Arabia and UAE. We architect predictable growth systems.",
  keywords: [
    "growth advisory",
    "business systems",
    "GCC advisory",
    "Saudi Arabia consulting",
    "UAE business advisory",
    "automation consulting",
    "growth friction index",
    "conversion systems",
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
    title: "North Star Advisory | Growth Systems for GCC Businesses",
    description:
      "Strategic Growth, Conversion & Automation Advisory for ambitious founders in Saudi Arabia and UAE.",
    siteName: "North Star Advisory",
    images: [
      {
        url: "/assets/social/og-image.png",
        width: 1200,
        height: 630,
        alt: "North Star Advisory — Revenue Architecture Briefing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "North Star Advisory | Growth Systems for GCC Businesses",
    description:
      "Strategic Growth, Conversion & Automation Advisory for GCC businesses.",
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
