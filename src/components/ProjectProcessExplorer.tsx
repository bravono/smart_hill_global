"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

interface ProjectProcessExplorerProps {
  project: {
    title: string;
    image: string;
    gallery: string[];
    process?: ProcessStep[];
    category?: string;
  };
}

const CATEGORY_PHASES: Record<string, { title: string; description: string }[]> = {
  construction: [
    {
      title: "Site Surveying",
      description: "Detailed topographical assessment, soil test, boundary mapping, and planning site logistics before breaking ground.",
    },
    {
      title: "DPC works",
      description: "Damp Proof Course works. Executing the foundation layout, pouring concrete footings, and laying blocks up to DPC level to prevent moisture ingress.",
    },
    {
      title: "Superstructure",
      description: "Erection of columns, beams, load-bearing walls, lintels, and upper floor slabs to form the core structural skeleton.",
    },
    {
      title: "Roofing",
      description: "Installing the roof trusses, rafters, purlins, and premium roofing sheets or tiles to fully enclose the structure.",
    },
    {
      title: "Finishing",
      description: "Internal plastering, plumbing and electrical conduit installations, tiling, painting, and fitting doors, windows, and sanitaries.",
    },
  ],
  "real-estate": [
    {
      title: "Market Sourcing",
      description: "Conducting demographic studies, identifying prime locations, and acquiring land rights.",
    },
    {
      title: "Planning & Approvals",
      description: "Securing municipal approvals, environmental impact assessments, and structural designs.",
    },
    {
      title: "Construction Phase",
      description: "Supervising the physical erection of units, civil engineering works, and infrastructure utilities.",
    },
    {
      title: "Interior & Landscaping",
      description: "Undertaking premium finishing, furnishing show houses, and landscaping common areas.",
    },
    {
      title: "Sales & Handover",
      description: "Direct marketing, client facility tours, processing deeds, and key handover to property managers.",
    },
  ],
  "interior-design": [
    {
      title: "Discovery & Concept",
      description: "Understanding client lifestyle needs, functional requirements, color preferences, and curating initial moodboards.",
    },
    {
      title: "3D Visualization",
      description: "Creating high-fidelity 3D renders of rooms, selecting materials, fabrics, lighting, and bespoke furniture.",
    },
    {
      title: "Sourcing & Fabrication",
      description: "Procuring custom furniture, custom millwork, natural stone, and importing specialized fixtures.",
    },
    {
      title: "Installation & Styling",
      description: "On-site installation of fittings, final painting, art curation, textile staging, and final reveal.",
    },
  ],
  "consulting": [
    {
      title: "Initial Consultation",
      description: "Defining project objectives, client requirements, budget constraints, and project scope.",
    },
    {
      title: "Feasibility & Research",
      description: "Conducting technical, financial, and environmental feasibility studies to validate the business case.",
    },
    {
      title: "Project Planning",
      description: "Designing implementation strategies, risk management frameworks, procurement plans, and scheduling.",
    },
    {
      title: "Monitoring & Advisory",
      description: "Continuous quality audits, cost control assessments, and reporting to stakeholders during execution.",
    },
  ],
  visualization: [
    {
      title: "CAD & 3D Modeling",
      description: "Importing blueprints and modeling precise 3D architectural volumes, terrain, and exterior facades.",
    },
    {
      title: "Material & Lighting",
      description: "Applying high-resolution PBR textures and configuring realistic daylight, night, or interior light setups.",
    },
    {
      title: "Rendering & Post-Production",
      description: "Generating high-resolution drafts, rendering sequences, color grading, and enhancing visual impact in post-processing.",
    },
    {
      title: "Client Delivery",
      description: "Providing 8K static renders, interactive virtual reality (VR) walkthroughs, and fly-through animations.",
    },
  ],
};

const DEFAULT_PHASES = CATEGORY_PHASES.construction;

export default function ProjectProcessExplorer({ project }: ProjectProcessExplorerProps) {
  // Generate process steps from existing project data if not specified
  const categoryId = project.category || "construction";
  const defaultPhasesForCategory = CATEGORY_PHASES[categoryId] || DEFAULT_PHASES;

  const rawSteps = project.process && project.process.length > 0
    ? project.process
    : defaultPhasesForCategory.map((phase, idx) => {
        // Fall back to gallery images, or hero image
        const img = project.gallery && project.gallery[idx] 
          ? project.gallery[idx] 
          : (project.gallery && project.gallery[idx % project.gallery.length]) || project.image;
        return {
          ...phase,
          image: img,
        };
      });

  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const stepsCount = rawSteps.length;

  const handleNext = () => {
    if (activeStep < stepsCount - 1) {
      setDirection(1);
      setActiveStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setDirection(-1);
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleStepClick = (idx: number) => {
    setDirection(idx > activeStep ? 1 : -1);
    setActiveStep(idx);
  };

  // Framer Motion variants for slide transition
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const currentStepData = rawSteps[activeStep];

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-brand-blue/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/15 border border-brand-accent/20 mb-4">
            <Activity className="w-3.5 h-3.5 text-brand-blue" />
            <span className="text-xs font-black uppercase tracking-widest text-brand-blue">
              How We Built It
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-brand-blue">
            Project Lifecycle & Execution
          </h2>
          <p className="text-brand-blue/60 max-w-2xl font-medium">
            Explore the chronological timeline and key construction milestones that brought {project.title} from blueprint to reality.
          </p>
        </div>

        {/* Timeline Indicator */}
        <div className="relative mb-16 px-4">
          {/* Progress Bar Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand-blue/10 -translate-y-1/2 rounded-full z-0" />
          
          {/* Animated Active Line */}
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-brand-accent -translate-y-1/2 rounded-full z-10"
            initial={false}
            animate={{
              width: `${(activeStep / (stepsCount - 1)) * 100}%`,
            }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          />

          {/* Stepper Nodes */}
          <div className="relative z-20 flex justify-between">
            {rawSteps.map((step, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;
              return (
                <button
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <motion.div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300",
                      isActive
                        ? "bg-brand-blue border-brand-accent text-brand-accent shadow-lg shadow-brand-blue/20 scale-110"
                        : isPast
                        ? "bg-brand-accent border-brand-blue text-brand-blue"
                        : "bg-white border-brand-blue/15 text-brand-blue/40 group-hover:border-brand-blue/60"
                    )}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {idx + 1}
                  </motion.div>
                  
                  {/* Step Label */}
                  <span
                    className={cn(
                      "mt-3 text-xs font-black uppercase tracking-wider hidden sm:block transition-colors duration-300",
                      isActive ? "text-brand-blue" : "text-brand-blue/40 group-hover:text-brand-blue/80"
                    )}
                  >
                    {step.title.split(" & ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Process Slide Area */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-brand-blue/5 border border-brand-blue/5 min-h-[450px] md:min-h-[500px] flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text Info */}
            <div className="lg:col-span-5 flex flex-col justify-center h-full">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeStep}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="space-y-6"
                >
                  <div className="text-brand-accent font-black tracking-[0.2em] text-xs uppercase">
                    Milestone 0{activeStep + 1} / 0{stepsCount}
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-brand-blue leading-tight">
                    {currentStepData.title}
                  </h3>
                  <p className="text-brand-blue/70 text-lg leading-relaxed font-medium">
                    {currentStepData.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Premium Image Showcase */}
            <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden group shadow-2xl bg-gray-100">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeStep}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 100, damping: 16 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={currentStepData.image}
                    alt={currentStepData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Stepper Navigation Controls */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-brand-blue/5">
            <button
              onClick={handlePrev}
              disabled={activeStep === 0}
              className={cn(
                "w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none",
                activeStep === 0
                  ? "border-brand-blue/10 text-brand-blue/20 cursor-not-allowed"
                  : "border-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white hover:scale-105 active:scale-95"
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-sm font-black uppercase tracking-widest text-brand-blue/40">
              {activeStep + 1} of {stepsCount}
            </div>

            <button
              onClick={handleNext}
              disabled={activeStep === stepsCount - 1}
              className={cn(
                "w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none",
                activeStep === stepsCount - 1
                  ? "border-brand-blue/10 text-brand-blue/20 cursor-not-allowed"
                  : "border-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white hover:scale-105 active:scale-95"
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
