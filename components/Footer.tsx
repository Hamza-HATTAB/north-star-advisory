"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "GCC Compliance", href: "#" },
    { label: "Secure Contact", href: "#contact" },
  ];

  return (
    <footer
      className="py-12"
      style={{
        backgroundColor: "var(--color-primary)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container-main">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div
            className="text-headline-sm"
            style={{ color: "var(--color-on-primary)" }}
          >
            North Star Advisory
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-8 list-none p-0 m-0">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
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
                  </a>
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
