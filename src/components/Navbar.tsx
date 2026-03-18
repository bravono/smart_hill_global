"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  {
    name: "Construction",
    href: "/services/construction",
    subItems: [
      { name: "Residential Complexes", href: "/services/construction/residential" },
      { name: "Commercial Hubs", href: "/services/construction/commercial" },
      { name: "Industrial Facilities", href: "/services/construction/industrial" },
    ],
  },
  {
    name: "Real Estate",
    href: "/services/real-estate",
    subItems: [
      { name: "Market Analysis", href: "/services/real-estate/market-analysis" },
      { name: "Property Valuation", href: "/services/real-estate/valuation" },
      { name: "Investment Advisory", href: "/services/real-estate/advisory" },
    ],
  },
  {
    name: "Interior Design",
    href: "/services/interior-design",
    subItems: [
      { name: "Space Planning", href: "/services/interior-design/space-planning" },
      { name: "Material Selection", href: "/services/interior-design/materials" },
      { name: "Custom Furnishing", href: "/services/interior-design/furnishing" },
    ],
  },
  {
    name: "Project Consulting",
    href: "/services/consulting",
    subItems: [
      { name: "Risk Management", href: "/services/consulting/risk-management" },
      { name: "Feasibility Studies", href: "/services/consulting/feasibility" },
      { name: "Regulatory Compliance", href: "/services/consulting/compliance" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-brand-blue/10 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/smarthill.jpeg"
            alt="Logo"
            className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform"
          />

          <span className="text-2xl font-bold tracking-tighter text-brand-blue">
            smarthill<span className="text-brand-accent">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-semibold text-brand-blue/80 hover:text-brand-blue transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold text-brand-blue/80 hover:text-brand-blue transition-colors"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-brand-blue/80 hover:text-brand-blue transition-colors">
              Services{" "}
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  activeDropdown === "services" && "rotate-180",
                )}
              />
            </button>

            <div
              className={cn(
                "absolute top-full -left-48 md:left-1/2 md:-translate-x-1/2 mt-2 w-[90vw] max-w-4xl bg-white border border-brand-blue/5 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-top",
                activeDropdown === "services"
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
              )}
            >
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                  <div key={service.name} className="space-y-4">
                    <Link
                      href={service.href}
                      className="block text-xs font-black uppercase tracking-widest text-brand-accent hover:text-brand-blue transition-colors"
                    >
                      {service.name}
                    </Link>
                    <div className="space-y-3">
                      {service.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block text-sm font-semibold text-brand-blue/60 hover:text-brand-blue transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/portfolio"
            className="text-sm font-semibold text-brand-blue/80 hover:text-brand-blue transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-brand-blue text-white text-sm font-bold rounded-full hover:bg-brand-blue/90 transition-all transform hover:scale-105 active:scale-95"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-[73px] bg-white z-40 transition-transform duration-300 overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="p-6 space-y-4">
          <Link
            href="/"
            className="block text-lg font-bold text-brand-blue border-b border-brand-blue/5 pb-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-lg font-bold text-brand-blue border-b border-brand-blue/5 pb-2"
          >
            About
          </Link>
          <div className="space-y-2">
            <span className="text-sm font-bold text-brand-blue/40 uppercase tracking-wider">
              Services
            </span>
            {services.map((service) => (
              <div key={service.name} className="space-y-1">
                <Link
                  href={service.href}
                  className="block text-lg font-bold text-brand-blue py-2"
                >
                  {service.name}
                </Link>
                {service.subItems && (
                  <div className="pl-4 space-y-2 border-l-2 border-brand-accent/30">
                    {service.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block text-brand-blue/60 font-medium"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link
            href="/portfolio"
            className="block text-lg font-bold text-brand-blue border-b border-brand-blue/5 pb-2"
          >
            Portfolio
          </Link>
          <button className="w-full py-4 bg-brand-blue text-white font-bold rounded-2xl shadow-lg mt-8">
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}
