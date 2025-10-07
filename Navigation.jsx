import React, { useState } from "react";
import { GraduationCap, Menu, X, LogIn } from "lucide-react";
import "./Navigation.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <GraduationCap className="nav-icon" />
          <a href="/" className="nav-title">
            Be Superior Tutors
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}

          {/* Sign In */}
          <a href="/signin" className="nav-link flex items-center gap-1">
            <LogIn size={16} />
            Sign In
          </a>

          {/* Get a Tutor button */}
          <a href="/tutor-signup" className="btn-get-tutor">
            Get a Tutor
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="mobile-link"
            >
              {link.name}
            </a>
          ))}

          {/* Sign In */}
          <a
            href="/signin"
            onClick={() => setMenuOpen(false)}
            className="mobile-link flex items-center gap-1"
          >
            <LogIn size={16} />
            Sign In
          </a>

          {/* Get a Tutor */}
          <a
            href="/tutor-signup"
            onClick={() => setMenuOpen(false)}
            className="mobile-btn"
          >
            Get a Tutor
          </a>
        </div>
      )}
    </nav>
  );
}
