'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Building2, 
  Home, 
  Paintbrush, 
  Briefcase, 
  Monitor, 
  CheckCircle2,
  Mail,
  User,
  Sparkles,
  Phone,
  MapPin,
  CreditCard,
  Calendar as CalendarIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  { id: 'construction', title: 'Construction', icon: Building2 },
  { id: 'real-estate', title: 'Real Estate', icon: Home },
  { id: 'interior-design', title: 'Interior Design', icon: Paintbrush },
  { id: 'consulting', title: 'Project Consulting', icon: Briefcase },
  { id: 'visualization', title: 'Architectural Visualization', icon: Monitor },
];

interface ContactWizardProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'inquiry' | 'consultation';
}

export default function ContactWizard({ isOpen, onClose, initialMode = 'inquiry' }: ContactWizardProps) {
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState<'inquiry' | 'consultation'>(initialMode);
  const [formData, setFormData] = useState({
    service: '',
    projectName: '',
    projectDescription: '',
    name: '',
    email: '',
    date: '',
  });

  // Sync mode with initialMode when opened
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setStep(1);
    }
  }, [isOpen, initialMode]);

  // Reset steps and handle body scroll when closed/open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => setStep(1), 300);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId });
    setStep(2);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(mode === 'inquiry' ? 4 : 4); // Success for inquiry, maybe payment for consultation? 
    // User wants payment to complete booking.
  };

  const handlePayment = () => {
    // Mock payment successful
    setStep(4);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-blue/90 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden shadow-brand-accent/10 flex flex-col md:flex-row h-[90vh] max-h-[800px]"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-2 rounded-full hover:bg-brand-blue/5 text-brand-blue/30 hover:text-brand-blue transition-all z-20"
        >
          <X size={24} />
        </button>

        {/* Sidebar with Info & Progress */}
        <div className="hidden md:flex w-72 bg-brand-blue/5 p-10 flex-col justify-between border-r border-brand-blue/5">
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue/40">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={14} className="mt-1 text-brand-accent" />
                  <div className="text-sm font-bold text-brand-blue leading-tight">
                    08038013591<br />08118684886
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={14} className="mt-1 text-brand-accent" />
                  <div className="text-sm font-bold text-brand-blue break-all">
                    akeem@smarthillglobal.com
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="mt-1 text-brand-accent" />
                  <div className="text-sm font-bold text-brand-blue">
                    Abuja
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue/40">Step Progress</h4>
              <div className="space-y-6">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-4">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500",
                      step === s ? "border-brand-accent bg-brand-accent text-brand-blue scale-110 shadow-lg shadow-brand-accent/20" : 
                      step > s ? "border-brand-accent bg-transparent text-brand-accent" :
                      "border-brand-blue/10 text-brand-blue/20"
                    )}>
                      {step > s ? <CheckCircle2 size={16} /> : <span className="text-xs font-bold">{s}</span>}
                    </div>
                    <span className={cn(
                      "text-xs font-bold uppercase tracking-widest",
                      step === s ? "text-brand-blue" : "text-brand-blue/30"
                    )}>
                      {s === 1 ? 'Service' : s === 2 ? (mode === 'inquiry' ? 'Project' : 'Schedule') : 'Details'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 bg-brand-blue text-white rounded-2xl">
            <Sparkles size={20} className="mb-2 text-brand-accent" />
            <p className="text-[10px] font-bold leading-relaxed opacity-80">
              Need immediate help? Sign up to access our AI Assistant.
            </p>
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-sm font-black text-brand-accent tracking-widest uppercase mb-2">Step 01</h2>
                  <h3 className="text-3xl font-bold text-brand-blue">
                    {mode === 'inquiry' ? 'Start your inquiry' : 'Book a consultation'}
                  </h3>
                  <p className="text-brand-blue/50 mt-2">Select the service you're interested in.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className={cn(
                        "flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 group",
                        formData.service === service.id 
                          ? "border-brand-accent bg-brand-accent/5 shadow-lg shadow-brand-accent/5" 
                          : "border-brand-blue/5 hover:border-brand-blue/20 hover:bg-brand-blue/5 hover:translate-x-1"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "p-3 rounded-xl transition-colors",
                          formData.service === service.id ? "bg-brand-accent text-brand-blue" : "bg-white text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white"
                        )}>
                          <service.icon size={20} />
                        </div>
                        <span className={cn(
                          "font-bold text-left transition-colors text-sm",
                          formData.service === service.id ? "text-brand-blue" : "text-brand-blue/70 group-hover:text-brand-blue"
                        )}>{service.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && mode === 'inquiry' && (
              <motion.div 
                key="step2-inquiry"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-sm font-black text-brand-accent tracking-widest uppercase mb-2">Step 02</h2>
                  <h3 className="text-3xl font-bold text-brand-blue">Tell us about your <span className="text-brand-accent italic">project</span></h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-brand-blue uppercase tracking-widest ml-1">Project Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Nexus Tower"
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl border border-brand-blue/5 bg-brand-blue/5 focus:bg-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all font-semibold text-brand-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-brand-blue uppercase tracking-widest ml-1">Brief Description</label>
                    <textarea 
                      placeholder="How can we help?"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl border border-brand-blue/5 bg-brand-blue/5 focus:bg-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all font-semibold text-brand-blue resize-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button onClick={prevStep} className="p-4 rounded-2xl border border-brand-blue/5 text-brand-blue hover:bg-brand-blue hover:text-white transition-all">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextStep} className="flex-1 py-4 bg-brand-blue text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:translate-x-1 transition-all shadow-xl shadow-brand-blue/10">
                    Continue
                    <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && mode === 'consultation' && (
              <motion.div 
                key="step2-consult"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-sm font-black text-brand-accent tracking-widest uppercase mb-2">Step 02</h2>
                  <h3 className="text-3xl font-bold text-brand-blue">Pick a <span className="text-brand-accent italic">Convenient Date</span></h3>
                  <p className="text-brand-blue/50 mt-2">Select a time for our 1:1 discovery session.</p>
                </div>

                {/* Calendly Integration Placeholder */}
                <div className="w-full bg-brand-blue/5 rounded-[2rem] border-2 border-dashed border-brand-blue/10 aspect-video flex flex-col items-center justify-center space-y-4">
                   <CalendarIcon size={48} className="text-brand-blue/20" />
                   <div className="text-center">
                     <p className="text-brand-blue font-bold">Calendly Scheduler</p>
                     <p className="text-brand-blue/40 text-xs">Ready to embed your availability</p>
                   </div>
                   <button 
                    onClick={() => setFormData({...formData, date: 'Scheduled'})}
                    className="px-6 py-2 bg-brand-blue text-white rounded-full text-xs font-bold"
                   >
                     Select Slot
                   </button>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button onClick={prevStep} className="p-4 rounded-2xl border border-brand-blue/5 text-brand-blue hover:bg-brand-blue hover:text-white transition-all">
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    disabled={!formData.date}
                    onClick={nextStep} 
                    className="flex-1 py-4 bg-brand-blue text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:translate-x-1 transition-all shadow-xl shadow-brand-blue/10 disabled:opacity-50"
                  >
                    Next Step
                    <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-sm font-black text-brand-accent tracking-widest uppercase mb-2">Step 03</h2>
                  <h3 className="text-3xl font-bold text-brand-blue">Final <span className="text-brand-accent italic">details</span></h3>
                  <p className="text-brand-blue/50 mt-2">
                    {mode === 'inquiry' ? 'How should we get back to you?' : 'Complete your booking with payment.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <User size={18} className="absolute left-6 top-5 text-brand-blue/30" />
                    <input 
                      type="text" 
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-14 pr-6 py-4 rounded-2xl border border-brand-blue/5 bg-brand-blue/5 focus:bg-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all font-semibold text-brand-blue"
                    />
                  </div>
                  <div className="relative">
                    <Mail size={18} className="absolute left-6 top-5 text-brand-blue/30" />
                    <input 
                      type="email" 
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-14 pr-6 py-4 rounded-2xl border border-brand-blue/5 bg-brand-blue/5 focus:bg-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all font-semibold text-brand-blue"
                    />
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <button type="button" onClick={prevStep} className="p-4 rounded-2xl border border-brand-blue/5 text-brand-blue hover:bg-brand-blue hover:text-white transition-all">
                      <ChevronLeft size={24} />
                    </button>
                    {mode === 'inquiry' ? (
                      <button type="submit" className="flex-1 py-4 bg-brand-accent text-brand-blue font-black tracking-widest uppercase rounded-2xl flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all shadow-xl shadow-brand-accent/20">
                        Submit Request
                        <CheckCircle2 size={20} />
                      </button>
                    ) : (
                      <button 
                        type="button" 
                        onClick={handlePayment}
                        className="flex-1 py-4 bg-brand-accent text-brand-blue font-black tracking-widest uppercase rounded-2xl flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all shadow-xl shadow-brand-accent/20"
                      >
                        Make Payment
                        <CreditCard size={20} />
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
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
                <h3 className="text-4xl font-bold text-brand-blue italic">
                  {mode === 'inquiry' ? 'Request ' : 'Booking '}
                  <span className="text-brand-accent">Received</span>
                </h3>
                <p className="text-brand-blue/60 max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name.split(' ')[0]}. {mode === 'inquiry' ? `Our specialized ${services.find(s => s.id === formData.service)?.title} team will review your project and get back to you.` : `Your consultation for ${services.find(s => s.id === formData.service)?.title} is confirmed. Check your email for meeting details.`}
                </p>
                <button 
                  onClick={onClose}
                  className="px-12 py-4 border-2 border-brand-blue text-brand-blue font-bold rounded-2xl hover:bg-brand-blue hover:text-white transition-all"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
