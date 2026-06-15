"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X, Sparkles, Calendar, Wand2 } from "lucide-react";
import ContactWizard from "./ContactWizard";
import AIAssistant from "./AIAssistant";
import { createClient } from "@/lib/supabase";

const services = [
  {
    name: "Construction",
    href: "/services/construction",
    subItems: [
      {
        name: "Residential Complexes",
        href: "/services/construction#residential",
      },
      { name: "Commercial Hubs", href: "/services/construction#commercial" },
      {
        name: "Industrial Facilities",
        href: "/services/construction#industrial",
      },
    ],
  },
  {
    name: "Real Estate",
    href: "/services/real-estate",
    subItems: [
      {
        name: "Market Analysis",
        href: "/services/real-estate#market-analysis",
      },
      { name: "Property Valuation", href: "/services/real-estate#valuation" },
      { name: "Investment Advisory", href: "/services/real-estate#advisory" },
    ],
  },
  {
    name: "Interior Design",
    href: "/services/interior-design",
    subItems: [
      {
        name: "Space Planning",
        href: "/services/interior-design#space-planning",
      },
      {
        name: "Material Selection",
        href: "/services/interior-design#materials",
      },
      {
        name: "Custom Furnishing",
        href: "/services/interior-design#furnishing",
      },
    ],
  },
  {
    name: "Project Consulting",
    href: "/services/consulting",
    subItems: [
      { name: "Risk Management", href: "/services/consulting#risk-management" },
      { name: "Feasibility Studies", href: "/services/consulting#feasibility" },
      {
        name: "Regulatory Compliance",
        href: "/services/consulting#compliance",
      },
    ],
  },
  {
    name: "Architectural Visualization",
    href: "/services/visualization",
    subItems: [
      { name: "3D Rendering", href: "/services/visualization#3d-rendering" },
      { name: "Virtual XR Tours", href: "/services/visualization#xr-tours" },
      { name: "BIM Integration", href: "/services/visualization#bim" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardMode, setWizardMode] = useState<"inquiry" | "consultation">(
    "inquiry",
  );
  const [user, setUser] = useState<any>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 400);
  };

  useEffect(() => {
    const handleWizardOpen = (e: any) => {
      setWizardMode(e.detail?.mode || "inquiry");
      setWizardOpen(true);
    };
    window.addEventListener(
      "open-contact-wizard",
      handleWizardOpen as EventListener,
    );
    return () =>
      window.removeEventListener(
        "open-contact-wizard",
        handleWizardOpen as EventListener,
      );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
              className="relative text-sm font-semibold text-brand-blue/70 hover:text-brand-blue transition-all duration-300 group py-1"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="relative text-sm font-semibold text-brand-blue/70 hover:text-brand-blue transition-all duration-300 group py-1"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  "relative flex items-center gap-1 text-sm font-semibold transition-all duration-300 py-1 group",
                  activeDropdown === "services"
                    ? "text-brand-blue"
                    : "text-brand-blue/70 hover:text-brand-blue",
                )}
              >
                Services{" "}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    activeDropdown === "services" && "rotate-180",
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-brand-accent transition-all duration-300",
                    activeDropdown === "services"
                      ? "w-full"
                      : "w-0 group-hover:w-full",
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
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
              className="relative text-sm font-semibold text-brand-blue/70 hover:text-brand-blue transition-all duration-300 group py-1"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  href={
                    user.email?.toLowerCase().includes("admin")
                      ? "/admin/dashboard"
                      : "/dashboard"
                  }
                  className="px-6 py-2 bg-brand-blue/5 text-brand-blue text-sm font-bold rounded-full hover:bg-brand-blue/10 transition-all transform hover:scale-105 active:scale-95"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    import("@/app/login/actions").then(({ logout }) =>
                      logout(),
                    );
                  }}
                  className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="relative text-sm font-semibold text-brand-blue/70 hover:text-brand-blue transition-all duration-300 group py-1"
              >
                Login
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            )}

            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("contact")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-6 py-2 bg-brand-blue text-white text-sm font-bold rounded-full hover:bg-brand-blue/90 transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95">
                Get in Touch
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-300",
                    activeDropdown === "contact" && "rotate-180",
                  )}
                />
              </button>

              <div
                className={cn(
                  "absolute top-full right-0 mt-2 w-72 bg-white border border-brand-blue/5 rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-300 transform origin-top-right",
                  activeDropdown === "contact"
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
                )}
              >
                <div className="p-3 space-y-1">
                  <button
                    onClick={() => {
                      setWizardMode("inquiry");
                      setWizardOpen(true);
                      setActiveDropdown(null);
                    }}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-brand-blue/5 text-left transition-all group"
                  >
                    <div className="p-2.5 bg-brand-accent/10 rounded-xl text-brand-blue group-hover:bg-brand-accent group-hover:text-brand-blue transition-colors">
                      <Wand2 size={20} />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-brand-blue">
                        Interactive Inquiry
                      </span>
                      <span className="block text-[10px] uppercase tracking-widest text-brand-blue/40 font-black mt-0.5">
                        Wizard Guide
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setWizardMode("consultation");
                      setWizardOpen(true);
                      setActiveDropdown(null);
                    }}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-brand-blue/5 text-left transition-all group"
                  >
                    <div className="p-2.5 bg-brand-blue/5 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-brand-blue">
                        Book Consultation
                      </span>
                      <span className="block text-[10px] uppercase tracking-widest text-brand-blue/40 font-black mt-0.5">
                        1:1 Discovery
                      </span>
                    </div>
                  </button>

                  <div className="relative">
                    <button
                      disabled={!user}
                      onClick={() => {
                        // AI Assistant trigger logic
                        window.dispatchEvent(
                          new CustomEvent("open-ai-assistant"),
                        );
                        setActiveDropdown(null);
                      }}
                      className={cn(
                        "w-full flex items-center gap-4 p-4 rounded-2xl transition-all group",
                        user
                          ? "hover:bg-brand-blue/5 cursor-pointer"
                          : "opacity-40 grayscale cursor-not-allowed",
                      )}
                    >
                      <div className="p-2.5 bg-brand-blue/5 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-brand-blue flex items-center gap-2">
                          AI Assistant
                          {!user && (
                            <span className="text-[9px] bg-brand-accent/20 text-brand-blue px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">
                              Soon
                            </span>
                          )}
                        </span>
                        <span className="block text-[10px] uppercase tracking-widest text-brand-blue/40 font-black mt-0.5">
                          Automated Support
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="p-6 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-bold text-brand-blue p-4 hover:bg-brand-blue/5 active:bg-brand-blue/10 active:scale-95 transition-all rounded-2xl"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-bold text-brand-blue p-4 hover:bg-brand-blue/5 active:bg-brand-blue/10 active:scale-95 transition-all rounded-2xl"
            >
              About
            </Link>

            <div className="overflow-hidden">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-xl font-bold text-brand-blue p-4 hover:bg-brand-blue/5 active:bg-brand-blue/10 active:scale-[0.98] transition-all rounded-2xl"
              >
                Services
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    mobileServicesOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  mobileServicesOpen
                    ? "grid-rows-[1fr] opacity-100 mt-2"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden bg-brand-blue/[0.02] rounded-3xl mx-2">
                  <div className="p-4 space-y-6">
                    {services.map((service) => (
                      <div key={service.name} className="space-y-3">
                        <Link
                          href={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs font-black uppercase tracking-[0.2em] text-brand-accent active:opacity-70 transition-opacity pl-2"
                        >
                          {service.name}
                        </Link>
                        <div className="grid grid-cols-1 gap-2">
                          {service.subItems?.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-3 text-base font-semibold text-brand-blue/60 hover:text-brand-blue hover:bg-white active:bg-brand-blue/5 active:scale-95 transition-all rounded-xl shadow-sm border border-transparent hover:border-brand-blue/5"
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
            </div>

            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-bold text-brand-blue p-4 hover:bg-brand-blue/5 active:bg-brand-blue/10 active:scale-95 transition-all rounded-2xl"
            >
              Portfolio
            </Link>

            {user ? (
              <div className="space-y-1">
                <Link
                  href={
                    user.email?.toLowerCase().includes("admin")
                      ? "/admin/dashboard"
                      : "/dashboard"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl font-bold text-brand-blue p-4 hover:bg-brand-blue/5 active:bg-brand-blue/10 active:scale-95 transition-all rounded-2xl"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    import("@/app/login/actions").then(({ logout }) =>
                      logout(),
                    );
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left text-xl font-bold text-red-600 p-4 hover:bg-red-50 active:bg-red-100 active:scale-95 transition-all rounded-2xl"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-bold text-brand-blue p-4 hover:bg-brand-blue/5 active:bg-brand-blue/10 active:scale-95 transition-all rounded-2xl"
              >
                Login
              </Link>
            )}

            <div className="overflow-hidden pt-4 border-t border-brand-blue/5">
              <button
                onClick={() => setMobileContactOpen(!mobileContactOpen)}
                className="w-full flex items-center justify-between text-xl font-bold text-brand-blue p-4 hover:bg-brand-blue/5 active:bg-brand-blue/10 active:scale-[0.98] transition-all rounded-2xl"
              >
                Get in Touch
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    mobileContactOpen && "rotate-180",
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  mobileContactOpen
                    ? "grid-rows-[1fr] opacity-100 mt-2"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden px-2">
                  <div className="space-y-3 pb-4">
                    <button
                      onClick={() => {
                        setWizardMode("inquiry");
                        setWizardOpen(true);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-4 p-4 bg-brand-blue/5 rounded-2xl text-left border border-brand-blue/5 active:scale-95 active:bg-brand-blue/10 transition-all group"
                    >
                      <div className="p-3 bg-brand-accent rounded-xl text-brand-blue group-hover:scale-110 transition-transform">
                        <Wand2 size={24} />
                      </div>
                      <div>
                        <span className="block font-bold text-brand-blue text-lg">
                          Inquiry Wizard
                        </span>
                        <span className="block text-[10px] uppercase tracking-widest text-brand-blue/40 font-black">
                          AI Guided Path
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setWizardMode("consultation");
                        setWizardOpen(true);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-4 p-4 bg-brand-blue/5 rounded-2xl text-left border border-brand-blue/5 active:scale-95 active:bg-brand-blue/10 transition-all group"
                    >
                      <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue group-hover:scale-110 transition-transform">
                        <Calendar size={24} />
                      </div>
                      <div>
                        <span className="block font-bold text-brand-blue text-lg">
                          Book Consultation
                        </span>
                        <span className="block text-[10px] uppercase tracking-widest text-brand-blue/40 font-black">
                          1:1 Discovery
                        </span>
                      </div>
                    </button>

                    <button
                      disabled={!user}
                      onClick={() => {
                        window.dispatchEvent(
                          new CustomEvent("open-ai-assistant"),
                        );
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center gap-4 p-4 bg-brand-blue/5 rounded-2xl text-left border border-brand-blue/5 active:scale-95 active:bg-brand-blue/10 transition-all group",
                        !user && "opacity-40 grayscale cursor-not-allowed",
                      )}
                    >
                      <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue group-hover:scale-110 transition-transform">
                        <Sparkles size={24} />
                      </div>
                      <div>
                        <span className="block font-bold text-brand-blue text-lg flex items-center gap-2">
                          AI Assistant
                          {!user && (
                            <span className="text-[9px] bg-brand-accent/20 text-brand-blue px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">
                              Soon
                            </span>
                          )}
                        </span>
                        <span className="block text-[10px] uppercase tracking-widest text-brand-blue/40 font-black">
                          Automated Support
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <ContactWizard
        isOpen={wizardOpen}
        onClose={() => setWizardOpen(false)}
        initialMode={wizardMode}
      />
      <AIAssistant />
    </>
  );
}
