"use client";

import { Mail, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Past Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Get Started", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-ivory/10">
          {/* Brand */}
          <div>
            <h3
              className="text-ivory text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Kyle DeCubellis
            </h3>
            <p
              className="text-ivory/45 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Product leader. Builder. Making the web work for the people who
              actually make things work.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              className="text-ivory/30 text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Navigation
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ivory/55 hover:text-amber text-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-ivory/30 text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="mailto:kyledecubellis@gmail.com"
                className="flex items-center gap-2.5 text-ivory/55 hover:text-amber text-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Mail size={15} className="flex-shrink-0" />
                kyledecubellis@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/kyledecubellis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-ivory/55 hover:text-amber text-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Linkedin size={15} className="flex-shrink-0" />
                linkedin.com/in/kyledecubellis
              </a>
            </div>

            {/* Location */}
            <p
              className="mt-5 text-ivory/30 text-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              📍 Greater Boston · Remote-friendly
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-ivory/25 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Kyle DeCubellis. All rights reserved.
          </p>
          <p
            className="text-ivory/20 text-xs italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built with care. For the people who deserve it.
          </p>
        </div>
      </div>
    </footer>
  );
}
