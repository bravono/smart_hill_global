"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, PlayCircle, Eye, Building2, PaintBucket, Briefcase, Ruler, Map } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "construction", label: "Construction" },
  { id: "real-estate", label: "Real Estate" },
  { id: "interior-design", label: "Interior Design" },
  { id: "consulting", label: "Project Consulting" },
  { id: "visualization", label: "Architectural Viz" },
];

const projects = [
  {
    id: 1,
    title: "Apex Skyline Towers",
    category: "construction",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    shortDesc: "Commercial Hub",
    year: "2025",
    icon: Building2,
  },
  {
    id: 2,
    title: "Horizon Estate Villas",
    category: "real-estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    shortDesc: "Luxury Residential",
    year: "2024",
    icon: Map,
  },
  {
    id: 3,
    title: "The Minimalist Loft",
    category: "interior-design",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    shortDesc: "Custom Furnishing",
    year: "2026",
    icon: PaintBucket,
  },
  {
    id: 4,
    title: "Eco-Tech Innovation Park",
    category: "consulting",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    shortDesc: "Feasibility Study",
    year: "2023",
    icon: Briefcase,
  },
  {
    id: 5,
    title: "Neon Metropolis Model",
    category: "visualization",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
    shortDesc: "3D Rendering XR",
    year: "2026",
    icon: Eye,
  },
  {
    id: 6,
    title: "Bridgeport Logistics Center",
    category: "construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    shortDesc: "Industrial Facility",
    year: "2025",
    icon: Building2,
  },
  {
    id: 7,
    title: "Oasis Executive Suites",
    category: "interior-design",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    shortDesc: "Space Planning",
    year: "2024",
    icon: Ruler,
  },
  {
    id: 8,
    title: "Harbor View Mall Valuation",
    category: "real-estate",
    image: "https://images.unsplash.com/photo-1574360773950-c8dc8c6ba7b7?q=80&w=2074&auto=format&fit=crop",
    shortDesc: "Market Analysis",
    year: "2025",
    icon: Map,
  },
  {
    id: 9,
    title: "Alpine Resort Development",
    category: "consulting",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
    shortDesc: "Risk Management",
    year: "2023",
    icon: Briefcase,
  },
  {
    id: 10,
    title: "Smart City Infrastructure",
    category: "visualization",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1964&auto=format&fit=crop",
    shortDesc: "BIM Integration",
    year: "2026",
    icon: Eye,
  }
];

function PortfolioContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (categoryParam && categories.some(c => c.id === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20 overflow-hidden text-brand-blue">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-accent/5 blur-3xl" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-brand-blue/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-6"
          >
            <SparkleIcon className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-bold tracking-widest uppercase text-brand-blue/80">Our Masterpieces</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-brand-blue"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-blue">Projects</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-blue/60 font-medium"
          >
            Explore our curated selection of groundbreaking work across construction, real estate, design, and visualization.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105",
                activeCategory === category.id
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                  : "bg-white text-brand-blue/60 hover:text-brand-blue hover:bg-brand-accent/20 border border-brand-blue/10 hover:border-transparent"
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-brand-blue/5 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating Year Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-brand-blue shadow-sm">
                    {project.year}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-accent/90 backdrop-blur-md flex items-center justify-center transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-brand-blue">
                      <ArrowUpRight className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-30 bg-white transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-brand-blue/5 rounded-lg text-brand-accent">
                      <project.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-brand-blue/40">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2 group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-brand-blue/60 line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-brand-blue">No projects found in this category.</h3>
            <p className="text-brand-blue/60 mt-2">Check back later for updates.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-brand-blue">
        <div className="w-8 h-8 border-4 border-brand-accent border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <PortfolioContent />
    </Suspense>
  );
}

function SparkleIcon(props: any) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  );
}
