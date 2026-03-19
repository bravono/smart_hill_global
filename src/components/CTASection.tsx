'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="relative z-10 p-12 md:p-20 rounded-[3rem] bg-brand-blue text-white overflow-hidden shadow-2xl shadow-brand-blue/20">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          
          <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Ready to discuss your next <span className="text-brand-accent italic">landmark project?</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-0">
                Smarthill Global provides the precision, performance, and visualization tools needed to architectural excellence. Book a meeting with our principal engineers today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact-wizard'))}
                className="px-8 py-5 bg-brand-accent text-brand-blue font-black tracking-widest uppercase rounded-2xl flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all shadow-xl shadow-brand-accent/20"
              >
                Book Consultation
                <Calendar size={20} />
              </button>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact-wizard'))}
                className="px-8 py-5 border-2 border-white/20 hover:border-white/40 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
              >
                Get Started
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
