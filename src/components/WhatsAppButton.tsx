'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ExternalLink, PhoneCall } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className={props.className}
    style={props.style}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show tooltip after 3 seconds, then hide it after 8 seconds
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 11000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const contacts = [
    {
      name: 'Akeem (Project Lead)',
      number: '2348038013591',
      label: 'Construction & Real Estate',
      message: 'Hello Akeem, I am interested in Smarthill Global services.',
    },
    {
      name: 'Smarthill Support',
      number: '2348118684886',
      label: 'General Inquiries',
      message: 'Hello Smarthill Support, I need assistance.',
    },
  ];

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-[95] flex flex-col items-end">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-3 px-4 py-2 bg-brand-blue text-white text-xs font-bold rounded-xl shadow-lg border border-brand-accent/20 flex items-center gap-2 whitespace-nowrap"
          >
            <span className="w-2 h-2 bg-[#25D366] rounded-full animate-ping" />
            Chat with us on WhatsApp!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white w-[320px] rounded-[2rem] shadow-2xl overflow-hidden border border-brand-blue/5 shadow-brand-accent/10 mb-4"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <WhatsAppIcon className="w-24 h-24" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <WhatsAppIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white tracking-tight">WhatsApp Chat</h4>
                    <p className="text-[10px] text-white/80 font-semibold uppercase tracking-wider">Online & Ready</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="text-xs mt-3 text-white/90 leading-relaxed font-medium">
                Click a contact below to start a conversation with our team.
              </p>
            </div>

            {/* Contacts List */}
            <div className="p-4 space-y-2.5 bg-gray-50/50">
              {contacts.map((contact) => (
                <a
                  key={contact.number}
                  href={`https://wa.me/${contact.number}?text=${encodeURIComponent(contact.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-brand-blue/5 hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-brand-blue/5 text-[#25D366] rounded-xl flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-brand-blue group-hover:text-brand-blue transition-colors">
                        {contact.name}
                      </span>
                      <span className="block text-[10px] text-brand-blue/40 font-bold uppercase tracking-wider">
                        {contact.label}
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-brand-blue/20 group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-all group relative border-2 border-white/10"
      >
        <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:opacity-0 transition-opacity" />
        <WhatsAppIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </motion.button>
    </div>
  );
}
