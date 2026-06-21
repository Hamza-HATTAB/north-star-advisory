"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content";
import { trackCTAClick } from "@/lib/analytics";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (href: string, label: string) => {
      setMobileOpen(false);
      trackCTAClick(label, "navbar");
      // Smooth scroll to section
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  const handleCTAClick = useCallback(() => {
    setMobileOpen(false);
    trackCTAClick("Request Strategic Review", "navbar");
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <header
        role="banner"
        className="w-full sticky top-0 z-50 transition-all duration-300"
        style={{
          height: "96px",
          backgroundColor: "var(--color-surface)",
          borderBottom: isScrolled
            ? "1px solid rgba(0,23,54,0.12)"
            : "1px solid rgba(0,23,54,0.06)",
        }}
      >
        <div
          className="container-main flex items-center justify-between h-full"
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-headline-sm"
            style={{ color: "var(--color-primary)", textDecoration: "none" }}
            aria-label="North Star Advisory — Home"
          >
            North Star Advisory
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.label)}
                className="text-label-caps transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
                style={{ color: "var(--color-secondary)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "var(--color-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "var(--color-secondary)")
                }
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            className="btn-primary hidden lg:flex"
            onClick={handleCTAClick}
            aria-label="Request a Strategic Review"
          >
            Request Strategic Review
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            style={{ color: "var(--color-primary)" }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="lg:hidden fixed inset-0 z-40 flex flex-col"
        style={{
          backgroundColor: "var(--color-surface)",
          top: "96px",
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? "visible" : "hidden",
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
      >
        <nav
          className="flex flex-col gap-0 px-6 pt-8"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href, link.label)}
              className="text-left py-5 text-label-caps hairline-bottom bg-transparent border-none cursor-pointer"
              style={{ color: "var(--color-secondary)" }}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="px-6 pt-8">
          <button
            className="btn-primary w-full"
            onClick={handleCTAClick}
          >
            Request Strategic Review
          </button>
        </div>
      </div>
    </>
  );
}
