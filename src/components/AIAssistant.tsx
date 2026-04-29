'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  MessageSquare,
  RefreshCcw,
  Minus
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am your SmartHill AI Assistant. How can I help you with your project today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ai-assistant', handleOpen);
    return () => window.removeEventListener('open-ai-assistant', handleOpen);
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Thank you for your inquiry about "${userMessage}". Our team specializes in high-end construction and real estate solutions. Would you like to view our portfolio or book a 1-on-1 consultation?` 
      }]);
      setIsTyping(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-[100] transition-all duration-500 transform",
      isMinimized ? "scale-90" : "scale-100"
    )}>
      <AnimatePresence>
        {!isMinimized && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white w-[400px] h-[600px] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-brand-blue/5 shadow-brand-accent/20"
          >
            {/* Header */}
            <div className="bg-brand-blue p-6 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles size={100} className="text-brand-accent" />
              </div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Bot size={24} className="text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-tight">SmartHill AI</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Active Assistant</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 relative z-10">
                <button 
                  onClick={() => setIsMinimized(true)}
                  className="p-2 hover:bg-white/10 rounded-xl text-white/50 hover:text-white transition-all"
                >
                  <Minus size={20} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-xl text-white/50 hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "flex items-end gap-3",
                  msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                )}>
                  <div className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center shrink-0",
                    msg.role === 'user' ? "bg-brand-accent/10 text-brand-blue" : "bg-brand-blue/5 text-brand-blue"
                  )}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={cn(
                    "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-brand-blue text-white rounded-br-none" 
                      : "bg-brand-blue/5 text-brand-blue rounded-bl-none font-medium"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-end gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-blue/5 flex items-center justify-center">
                    <Bot size={14} className="text-brand-blue" />
                  </div>
                  <div className="bg-brand-blue/5 p-4 rounded-2xl rounded-bl-none">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-brand-blue/20 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-brand-blue/20 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-brand-blue/20 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t border-brand-blue/5">
              <form onSubmit={handleSend} className="relative">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about your project..."
                  className="w-full pl-6 pr-14 py-4 bg-brand-blue/5 rounded-2xl border border-transparent focus:border-brand-accent focus:bg-white outline-none transition-all text-sm font-semibold text-brand-blue"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-2 top-2 p-3 bg-brand-blue text-white rounded-xl hover:bg-brand-accent hover:text-brand-blue transition-all disabled:opacity-50 disabled:grayscale group"
                >
                  <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
              <p className="text-[10px] text-center mt-4 font-black uppercase tracking-widest text-brand-blue/20">
                Powered by SmartHill AI Engine
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isMinimized && (
        <motion.button
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => setIsMinimized(false)}
          className="w-16 h-16 bg-brand-blue text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-brand-accent hover:text-brand-blue transition-all group relative"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-accent rounded-full border-2 border-white animate-pulse" />
          <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
        </motion.button>
      )}
    </div>
  );
}
