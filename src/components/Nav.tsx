"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Let's Talk", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-fog"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className={`font-display text-xl font-700 tracking-tight transition-colors duration-300 ${
            scrolled ? "text-charcoal" : "text-ivory"
          }`}
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          Kyle DeCubellis
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              {link.label === "Let's Talk" ? (
                <a
                  href={link.href}
                  className="px-5 py-2.5 rounded-full bg-amber text-ivory text-sm font-medium hover:bg-amber-light transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-amber ${
                    scrolled ? "text-walnut" : "text-ivory/90"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden transition-colors ${
            scrolled ? "text-charcoal" : "text-ivory"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-ivory border-t border-fog px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-walnut font-medium text-base hover:text-amber transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
