"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  onEnquireClick: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Our Edge", href: "#edge" },
  { label: "Domains", href: "#domains" },
  { label: "Programs", href: "#programs" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar({ onEnquireClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/95 backdrop-blur-md py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 group">
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-extrabold text-[#1565C0] tracking-tight">
              accredian
            </span>
            <span className="text-[10px] font-semibold text-white bg-[#1565C0] px-2 py-0.5 rounded tracking-widest uppercase -mt-1">
              enterprise
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-600 hover:text-[#1565C0] px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            id="navbar-enquire-btn"
            onClick={onEnquireClick}
            className="hidden sm:inline-flex items-center gap-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Enquire Now
          </button>

          {/* Hamburger */}
          <button
            id="hamburger-menu-btn"
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 bg-white space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-sm font-medium text-gray-700 hover:text-[#1565C0] px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onEnquireClick(); }}
            className="w-full mt-2 bg-[#1565C0] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#0D47A1] transition-colors"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </header>
  );
}
