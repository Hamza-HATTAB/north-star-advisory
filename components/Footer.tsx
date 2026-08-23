"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "GCC Compliance", href: "/gcc-compliance" },
    { label: "About Founder", href: "/about" },
    { label: "Advisory Services", href: "/advisory-services" },
    { label: "Secure Contact", href: "/contact" },
  ];

  return (
    <footer
      role="contentinfo"
      className="py-12"
      style={{
        backgroundColor: "var(--color-primary)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container-main">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="North Star Advisory — Home">
              <img 
                src="/assets/brand/logo-symbol-light.svg" 
                alt="North Star Advisory" 
                width={40} 
                height={40} 
                style={{ display: "block" }}
              />
            </Link>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-8 list-none p-0 m-0">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-label-caps transition-colors duration-200"
                    style={{ color: "var(--color-secondary-fixed-dim)", textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "white")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "var(--color-secondary-fixed-dim)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p
            className="text-body-md"
            style={{ color: "var(--color-secondary-fixed-dim)", fontSize: "14px" }}
          >
            &copy; {currentYear} North Star Advisory
          </p>
        </div>
      </div>
    </footer>
  );
}
