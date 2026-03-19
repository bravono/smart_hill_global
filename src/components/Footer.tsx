"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-[#ffffff] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <img
                src="/smarthill.jpeg"
                alt="Logo"
                className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform"
              />
              <span className="text-2xl font-bold tracking-tighter text-white">
                smarthill<span className="text-brand-accent">.</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Leading the way in premium construction, real estate, and design
              solutions. Architecting the future of professional services with
              precision and innovation.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-brand-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-brand-accent transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-contact-wizard'))}
                  className="hover:text-brand-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="/services/construction"
                  className="hover:text-brand-accent transition-colors"
                >
                  Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/real-estate"
                  className="hover:text-brand-accent transition-colors"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/services/interior-design"
                  className="hover:text-brand-accent transition-colors"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="hover:text-brand-accent transition-colors"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/visualization"
                  className="hover:text-brand-accent transition-colors"
                >
                  Architectural Visualization
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Smarthill Global. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="hover:text-brand-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-brand-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
