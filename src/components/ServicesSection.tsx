'use client';

import { ArrowRight, Building2, Home, Paintbrush, Briefcase, CheckCircle2, Monitor } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'construction',
    title: 'Construction',
    icon: Building2,
    description: 'Expert engineering and masonry for structures that stand the test of time.',
    details: ['Residential Complexes', 'Commercial Hubs', 'Industrial Facilities'],
    portfolioUrl: '/portfolio/construction',
    color: 'bg-brand-blue/5',
    iconColor: 'text-brand-accent',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    icon: Home,
    description: 'Strategic property acquisition, sales, and investment management.',
    details: ['Market Analysis', 'Property Valuation', 'Investment Advisory'],
    portfolioUrl: '/portfolio/real-estate',
    color: 'bg-brand-blue/5',
    iconColor: 'text-brand-blue',
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    icon: Paintbrush,
    description: 'Bespoke interior solutions that blend functionality with modern aesthetics.',
    details: ['Space Planning', 'Material Selection', 'Custom Furnishing'],
    portfolioUrl: '/portfolio/interior-design',
    color: 'bg-brand-blue/5',
    iconColor: 'text-brand-accent',
  },
  {
    id: 'consulting',
    title: 'Project Consulting',
    icon: Briefcase,
    description: 'Professional guidance and oversight for complex infrastructure projects.',
    details: ['Risk Management', 'Feasibility Studies', 'Regulatory Compliance'],
    portfolioUrl: '/portfolio/consulting',
    color: 'bg-brand-blue/5',
    iconColor: 'text-brand-blue',
  },
  {
    id: 'visualization',
    title: 'Architectural Visualization',
    icon: Monitor,
    description: 'Immersive 3D renderings and virtual tours that bring your projects to life before construction.',
    details: ['3D Rendering', 'Virtual XR Tours', 'BIM Integration'],
    portfolioUrl: '/portfolio/visualization',
    color: 'bg-brand-blue/5',
    iconColor: 'text-brand-accent',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-4 italic">What we do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6 tracking-tight">
            Integrated Solutions for the <span className="text-brand-accent italic">Modern Firm</span>
          </h3>
          <p className="text-lg text-brand-blue/60 leading-relaxed">
            Smarthill Global provides a comprehensive suite of services tailored to meet the evolving needs of 
            the construction and real estate industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={cn(
                "group relative p-8 rounded-3xl border border-brand-blue/5 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-blue/10",
                service.color
              )}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className={cn("p-4 rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110", service.iconColor)}>
                    <service.icon size={32} />
                  </div>
                  <span className="text-6xl font-black text-brand-blue/5 pointer-events-none">0{index + 1}</span>
                </div>

                <h4 className="text-2xl font-bold text-brand-blue mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h4>
                <p className="text-brand-blue/70 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-8">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-brand-accent" />
                      <span className="text-sm font-semibold text-brand-blue/80">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-brand-blue/5 flex items-center justify-between">
                  <Link 
                    href={service.portfolioUrl}
                    className="flex items-center gap-2 text-sm font-bold text-brand-blue group/link"
                  >
                    View Portfolio 
                    <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                  <div className="w-10 h-1 h-brand-accent/30 rounded-full group-hover:w-20 bg-brand-accent transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
