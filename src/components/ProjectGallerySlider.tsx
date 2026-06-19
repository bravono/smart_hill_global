"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectGallerySliderProps {
  gallery: string[];
  title: string;
}

export default function ProjectGallerySlider({ gallery, title }: ProjectGallerySliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Handle keyboard events for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, activeIndex]);

  if (!gallery || gallery.length === 0) return null;

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleThumbnailClick = (idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Visual Identity
          </h2>
          <p className="text-brand-blue/60 max-w-2xl font-medium">
            Every detail matters. We approach each project with a commitment
            to excellence and a vision for the future.
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative w-full aspect-[16/10] md:aspect-[21/10] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-brand-blue/5 bg-gray-50 mb-8">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={gallery[activeIndex]}
                alt={`${title} showcase ${activeIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 via-transparent to-brand-blue/10 pointer-events-none" />

          {/* Maximize/Lightbox Trigger */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-brand-blue flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-brand-accent hover:text-brand-blue opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
            title="Maximize image"
          >
            <Maximize2 className="w-5 h-5" />
          </button>

          {/* Arrow Navigation */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md text-brand-blue flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-blue hover:text-white opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md text-brand-blue flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-blue hover:text-white opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Current Index Badge */}
          <div className="absolute bottom-6 left-6 bg-brand-blue/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black text-white tracking-widest uppercase">
            Image {activeIndex + 1} of {gallery.length}
          </div>
        </div>

        {/* Thumbnail Selector */}
        {gallery.length > 1 && (
          <div className="flex gap-4 overflow-x-auto pb-4 justify-start md:justify-center scrollbar-thin">
            {gallery.map((img, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={idx}
                  onClick={() => handleThumbnailClick(idx)}
                  className={cn(
                    "relative h-20 w-32 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer",
                    isSelected
                      ? "border-brand-accent scale-105 shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-brand-accent text-white hover:text-brand-blue rounded-full transition-all duration-300 transform hover:rotate-90 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Main Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-7xl max-h-[85vh] aspect-[16/10] overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[activeIndex]}
                alt={`${title} lightbox ${activeIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Lightbox Controls */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-brand-accent text-white hover:text-brand-blue flex items-center justify-center transition-all duration-300 cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-brand-accent text-white hover:text-brand-blue flex items-center justify-center transition-all duration-300 cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
