import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-50 border-t text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="font-heading font-bold text-xl text-blue-700">
                Be Superior Tutors
              </span>
            </div>
            <p className="text-sm mb-4">
              Expert online and in-home tutoring helping students across Islamabad & Rawalpindi excel academically.
            </p>
            <address className="not-italic space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>info@besuperior.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+92 XXX XXXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Islamabad & Rawalpindi, Pakistan</span>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-blue-700 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/pricing", label: "Pricing" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="font-heading font-semibold text-blue-700 mb-4">
              Subjects
            </h3>
            <ul className="space-y-2 text-sm">
              {["Mathematics", "Science", "English", "Computer Science"].map(
                (subject) => (
                  <li key={subject}>
                    <Link
                      href="/services"
                      className="text-gray-600 hover:text-blue-700 transition-colors"
                    >
                      {subject}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-blue-700 mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/terms"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
          <p>© {currentYear} Be Superior Tutors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
