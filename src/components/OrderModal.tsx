'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MapPin, 
  CalendarDays, 
  DollarSign, 
  User, 
  Mail, 
  MessageSquareText,
  CheckCircle2,
  Wand2
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  initialSubService: string;
  availableSubServices: string[];
}

export default function OrderModal({ isOpen, onClose, serviceTitle, initialSubService, availableSubServices }: OrderModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    timeline: '',
    details: '',
  });

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (initialSubService) setSelectedServices([initialSubService]);
    } else {
      document.body.style.overflow = 'unset';
      // Reset state after animation completes
      setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          location: '',
          budget: '',
          timeline: '',
          details: '',
        });
      }, 300);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-blue/90 backdrop-blur-md"
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="bg-brand-blue/5 p-8 border-b border-brand-blue/10 relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-2 rounded-full hover:bg-brand-blue/10 text-brand-blue/40 hover:text-brand-blue transition-all"
          >
            <X size={24} />
          </button>
          
          <div className="flex items-center gap-3 mb-3 text-brand-blue/60">
            <Wand2 size={20} className="text-brand-accent" />
            <span className="text-xs font-black uppercase tracking-widest">{serviceTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue tracking-tight">
            Order <span className="text-brand-accent italic">{serviceTitle} Services</span>
          </h2>
          <p className="text-brand-blue/60 mt-2 font-medium">
            Please provide context about your project so our engineering team can accurately assist you.
          </p>
        </div>

        {/* Scrollable Form Area */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Services Selection Row */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-brand-blue uppercase tracking-widest ml-1">Included Services</label>
                  <div className="flex flex-wrap gap-2">
                    {availableSubServices?.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            if (isSelected && selectedServices.length > 1) {
                              setSelectedServices(prev => prev.filter(s => s !== service));
                            } else if (!isSelected) {
                              setSelectedServices(prev => [...prev, service]);
                            }
                          }}
                          className={cn(
                            "px-4 py-2 rounded-xl text-sm font-bold transition-all border",
                            isSelected 
                              ? "bg-brand-accent text-brand-blue border-brand-accent shadow-md cursor-pointer hover:bg-brand-accent/90" 
                              : "bg-brand-blue/5 text-brand-blue/60 border-brand-blue/5 hover:border-brand-accent/50 hover:bg-white hover:text-brand-blue cursor-pointer"
                          )}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                  {selectedServices.length === 1 && (
                     <p className="text-xs font-semibold text-brand-blue/40 ml-1">Tip: Select multiple services to build a comprehensive project order.</p>
                  )}
                </div>

                {/* Personal Info Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-brand-blue uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative">
                      <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-blue/40" />
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-12 pr-6 py-4 rounded-2xl border border-brand-blue/10 bg-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all font-semibold text-brand-blue"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-brand-blue uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-blue/40" />
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-12 pr-6 py-4 rounded-2xl border border-brand-blue/10 bg-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all font-semibold text-brand-blue"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Specifics Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-brand-blue uppercase tracking-widest ml-1">Project Location</label>
                    <div className="relative">
                      <MapPin size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-blue/40" />
                      <input 
                        required
                        type="text" 
                        placeholder="City, State, or Country"
                        value={formData.location}
                        onChange={e => setFormData({...formData, location: e.target.value})}
                        className="w-full pl-12 pr-6 py-4 rounded-2xl border border-brand-blue/10 bg-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all font-semibold text-brand-blue"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-brand-blue uppercase tracking-widest ml-1">Estimated Budget</label>
                    <div className="relative">
                      <DollarSign size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-blue/40" />
                      <select 
                        required
                        value={formData.budget}
                        onChange={e => setFormData({...formData, budget: e.target.value})}
                        className={cn(
                          "w-full pl-12 pr-6 py-4 rounded-2xl border border-brand-blue/10 bg-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all font-semibold appearance-none",
                          formData.budget ? "text-brand-blue" : "text-brand-blue/40"
                        )}
                      >
                        <option value="" disabled>Select Budget Range</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-250k">$50,000 - $250,000</option>
                        <option value="250k-1m">$250,000 - $1,000,000</option>
                        <option value="1m-plus">$1,000,000+</option>
                        <option value="undecided">Undecided / Need Assessment</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Timeline Row */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-brand-blue uppercase tracking-widest ml-1">Desired Timeline</label>
                  <div className="relative">
                    <CalendarDays size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-blue/40" />
                    <select 
                      required
                      value={formData.timeline}
                      onChange={e => setFormData({...formData, timeline: e.target.value})}
                      className={cn(
                        "w-full pl-12 pr-6 py-4 rounded-2xl border border-brand-blue/10 bg-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all font-semibold appearance-none",
                        formData.timeline ? "text-brand-blue" : "text-brand-blue/40"
                      )}
                    >
                      <option value="" disabled>When do you want to start?</option>
                      <option value="immediately">Immediately</option>
                      <option value="1-3-months">Within 1-3 Months</option>
                      <option value="3-6-months">Within 3-6 Months</option>
                      <option value="flexible">Flexible / Exploring Options</option>
                    </select>
                  </div>
                </div>

                {/* Details Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-brand-blue uppercase tracking-widest ml-1">Additional Project Context (Optional)</label>
                  <div className="relative">
                    <MessageSquareText size={18} className="absolute left-5 top-5 text-brand-blue/40" />
                    <textarea 
                      rows={4}
                      placeholder="Tell us any specific requirements, constraints, or goals for this project..."
                      value={formData.details}
                      onChange={e => setFormData({...formData, details: e.target.value})}
                      className="w-full pl-12 pr-6 py-4 rounded-2xl border border-brand-blue/10 bg-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all font-semibold text-brand-blue resize-none"
                    />
                  </div>
                </div>

                {/* Submit Area */}
                <div className="pt-4 border-t border-brand-blue/10">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-blue text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/10 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <>
                        Submit Order Request
                        <CheckCircle2 size={20} className="text-brand-accent group-hover:scale-110 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs font-semibold text-brand-blue/40 mt-4">
                    Our team typically responds within 24 business hours to organize an initial consultation.
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-24 h-24 bg-brand-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8 relative">
                  <CheckCircle2 size={48} className="text-brand-accent" />
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 bg-brand-accent/20 rounded-3xl"
                  />
                </div>
                <h3 className="text-4xl font-bold text-brand-blue italic">Request <span className="text-brand-accent">Received</span></h3>
                <p className="text-brand-blue/60 max-w-md mx-auto leading-relaxed text-lg">
                  Thank you, <span className="font-bold text-brand-blue">{formData.name.split(' ')[0]}</span>. Our <span className="font-bold text-brand-blue">{serviceTitle}</span> specific engineering team will review your requirements for the selected services and reach out very soon.
                </p>
                <button 
                  onClick={onClose}
                  className="mt-4 px-12 py-4 bg-brand-blue/5 text-brand-blue font-bold rounded-2xl hover:bg-brand-accent hover:text-brand-blue transition-all"
                >
                  Return to Page
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
