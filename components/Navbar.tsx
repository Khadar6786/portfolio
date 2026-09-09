"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-sm font-medium text-text-primary"
        >
          Shaik Khadar Ahamad
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="text-sm text-text-secondary transition-colors hover:text-text-primary md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {menuOpen && (
          <div className="absolute left-0 top-full w-full border-b border-border bg-background md:hidden">
            <div className="flex flex-col px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-3 text-sm text-text-secondary transition-colors hover:text-text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}