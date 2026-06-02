"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  ArrowUpRight,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import Link from "next/link";
import { projects, categories } from "@/data/projects";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const categoryLabel = categories.find(
    (c) => c.id === project.category,
  )?.label;

  return (
    <main className="min-h-screen bg-white text-brand-blue pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/40 via-transparent to-brand-blue/90" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-transparent transition-all">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <span className="font-bold tracking-widest uppercase text-xs">
                  Back to Portfolio
                </span>
              </Link>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-brand-accent text-brand-blue text-xs font-black uppercase tracking-widest">
                  {categoryLabel}
                </span>
                <span className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                  {project.location}
                </span>
                <span className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <Calendar className="w-4 h-4 text-brand-accent" />
                  {project.year}
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info & Stats Section */}
      <section className="py-24 bg-gray-50 border-b border-brand-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
              <p className="text-xl text-brand-blue/70 leading-relaxed font-medium">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {project.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white rounded-3xl border border-brand-blue/5 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all group"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-brand-blue/40 mb-2 group-hover:text-brand-accent transition-colors">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Showcase (Gallery) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Visual Identity
            </h2>
            <p className="text-brand-blue/60 max-w-2xl font-medium">
              Every detail matters. We approach each project with a commitment
              to excellence and a vision for the future.
            </p>
          </div>

          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {project.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative rounded-3xl overflow-hidden group cursor-none"
              >
                <img
                  src={img}
                  alt={`${project.title} detail ${idx + 1}`}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-brand-blue flex items-center justify-center">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Impact Image */}
      <section className="h-[60vh] relative overflow-hidden">
        <img
          src={project.gallery[0]}
          className="w-full h-full object-cover"
          alt="Impact visualization"
        />
        <div className="absolute inset-0 bg-brand-blue/60 flex items-center justify-center text-center p-4">
          <div className="max-w-4xl">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Crafting environments that inspire and endure.
            </h3>
            <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Next Project / CTA */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-brand-blue rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/10 skew-x-12 translate-x-24 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Ready to build your vision?
              </h2>
              <p className="text-white/60 max-w-md font-medium text-lg">
                Let's collaborate to create something extraordinary. Our team is
                ready to bring your ideas to life.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-brand-accent text-brand-blue rounded-full font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-all transform hover:scale-105"
              >
                Start a project
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border border-white/20 text-white rounded-full font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white/10 transition-all"
              >
                View all work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
