'use client';

import { useState } from 'react';
import { LogIn, Mail, Lock, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex bg-brand-blue items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 text-center max-w-md">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tighter">
            MISSION <span className="text-brand-accent">CONTROL</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Access your secure project environment and collaborate with our firm in real-time.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-brand-blue tracking-tight">Welcome back</h2>
            <p className="text-brand-blue/60 mt-2">Sign in to your client portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-blue ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-blue/30" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-brand-blue/10 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder:text-brand-blue/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-sm font-semibold text-brand-blue">Password</label>
                <a href="#" className="text-xs font-bold text-brand-accent hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-blue/30" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-brand-blue/10 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder:text-brand-blue/30"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  <LogIn size={20} className="group-hover:translate-x-1 transition-transform" />
                  Sign In
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-brand-blue/60">
            Don't have an account? <a href="#" className="font-bold text-brand-accent hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}
