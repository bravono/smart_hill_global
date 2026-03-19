'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Scene } from './three/Scene';
import { OrbitControls } from '@react-three/drei';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-blue mb-4">
          SMARTHILL <span className="text-brand-accent">GLOBAL</span>
        </h1>
        <p className="text-xl md:text-2xl text-brand-blue/80 max-w-2xl">
          High-performance 3D solutions for modern firms. 
          Architecting the future of professional services.
        </p>
        <div className="mt-8 flex gap-4">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-contact-wizard'))}
            className="px-8 py-4 bg-brand-blue text-[#ffffff] font-semibold rounded-full hover:bg-brand-blue/90 transition-all transform hover:scale-105 shadow-xl shadow-brand-blue/10"
          >
            Get Started
          </button>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-contact-wizard'))}
            className="px-8 py-4 border-2 border-brand-accent text-brand-blue font-semibold rounded-full hover:bg-brand-accent/10 transition-all transform hover:scale-105"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
