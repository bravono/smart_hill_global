'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Scene } from './three/Scene';
import { OrbitControls } from '@react-three/drei';
import Link from 'next/link';

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
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-contact-wizard'))}
            className="px-8 py-4 bg-brand-blue text-[#ffffff] font-semibold rounded-full hover:bg-brand-blue/90 transition-all transform hover:scale-105 shadow-xl shadow-brand-blue/10 min-w-[160px]"
          >
            Get Started
          </button>
          <Link 
            href="/login"
            className="px-8 py-4 bg-white text-brand-blue border border-brand-blue/10 font-semibold rounded-full hover:bg-brand-blue/5 transition-all transform hover:scale-105 shadow-lg min-w-[160px]"
          >
            Client Portal
          </Link>
        </div>
      </div>
    </section>
  );
}
