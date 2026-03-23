"use client";

import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  CheckCircle2,
  Linkedin,
  Twitter,
  Instagram,
  Cpu,
  Users,
  Globe2,
  Box,
  Award,
  Rocket,
} from "lucide-react";

const team = [
  {
    name: "Abdulakeem Salako",
    role: "Managing Director & CEO",
    social: { platform: "LinkedIn", icon: Linkedin, url: "#" },
    image: "/team/placeholder.jpg",
  },
  {
    name: "Winifred Runor",
    role: "Secretary",
    social: { platform: "X", icon: Twitter, url: "#" },
    image: "/team/placeholder.jpg",
  },
  {
    name: "ETA Okon",
    role: "Structural Engineer",
    social: { platform: "LinkedIn", icon: Linkedin, url: "#" },
    image: "/team/placeholder.jpg",
  },
  {
    name: "Nasir Olalekan",
    role: "Builder",
    social: { platform: "Instagram", icon: Instagram, url: "#" },
    image: "/team/placeholder.jpg",
  },
  {
    name: "Mason ISAh Mohammed",
    role: "Operations Associate",
    social: { platform: "X", icon: Twitter, url: "#" },
    image: "/team/placeholder.jpg",
  },
  {
    name: "QS Azees Salako",
    role: "Quantity Surveyor",
    social: { platform: "LinkedIn", icon: Linkedin, url: "#" },
    image: "/team/placeholder.jpg",
  },
  {
    name: "Obinna Nwachukwu",
    role: "Procurement Manager",
    social: { platform: "Instagram", icon: Instagram, url: "#" },
    image: "/team/placeholder.jpg",
  },
  {
    name: "Ayo Akanno",
    role: "Architect",
    social: { platform: "LinkedIn", icon: Linkedin, url: "#" },
    image: "/team/placeholder.jpg",
  },
  {
    name: "Ahbideen Yusuf",
    role: "3D Artist & Software Developer",
    social: {
      platform: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ahbideen-yusuf-74a232179",
    },
    image: "/team/ahbideen_yusuf.jpg",
  },
];

const stats = [
  { label: "High-Tech Projects", value: "50+", icon: Box },
  { label: "Years of Engineering", value: "10+", icon: Award },
  { label: "Government Partnerships", value: "20+", icon: MapPin },
  { label: "Innovation Awards", value: "5", icon: Rocket },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-brand-blue/5 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-3xl opacity-50" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-blue mb-8">
              Pioneering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">
                Future of Architecture
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section (The Rewrite) */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/5 rounded-full text-brand-blue text-sm font-bold">
              <Cpu size={16} className="text-brand-accent" />
              Technology First
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-blue">
              Building Nigeria's vision through precision.
            </h2>

            <p className="text-lg text-brand-blue/70 leading-relaxed font-medium">
              At Smarthill, we are pioneers of Nigeria's digital-first
              construction era. Based in Abuja, we are redefining the landscape
              of government infrastructure and commercial developments through a
              commitment to technological excellence.
            </p>

            <p className="text-lg text-brand-blue/70 leading-relaxed font-medium">
              We leverage state-of-the-art 3D visualization and high-fidelity
              miniature prototypes—the first in Nigeria—enabling us to simulate
              and solve complex engineering challenges before doing actual
              construction. Our multidisciplinary team combines local expertise
              with global standards to deliver infrastructure that truly
              inspires.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-accent w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-blue">
                    Precision Engineering
                  </h4>
                  <p className="text-sm text-brand-blue/50">
                    Zero-error tolerance workflows
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-accent w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-blue">
                    Innovation First
                  </h4>
                  <p className="text-sm text-brand-blue/50">
                    Leader in 3D Construction Viz
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] bg-brand-blue/5 overflow-hidden border border-brand-blue/10 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              {/* Placeholder for actual image */}
              <div className="w-full h-full bg-gradient-to-br from-brand-blue to-brand-blue/80 p-12 flex items-center justify-center text-center">
                <div>
                  <Building2
                    size={120}
                    className="text-brand-accent/20 mx-auto mb-6"
                  />
                  <p className="text-white/60 font-bold uppercase tracking-widest text-xs">
                    Innovation Center Abuja
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-accent p-8 rounded-3xl shadow-xl transform -rotate-6">
              <p className="text-brand-blue font-black text-4xl">50+</p>
              <p className="text-brand-blue/80 font-bold uppercase tracking-widest text-[10px]">
                Projects Done
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof (Stats) */}
      <section className="py-20 px-6 bg-brand-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/5">
                <stat.icon className="text-brand-accent" size={24} />
              </div>
              <h3 className="text-4xl md:text-5xl font-black">{stat.value}</h3>
              <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              The Experts
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue">
              Meet Our Leadership Team
            </h2>
            <p className="text-brand-blue/40 mt-4 max-w-xl mx-auto">
              Our diverse team of engineers, builders, and strategists are
              committed to excellence in every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 rounded-[2rem] bg-brand-blue/[0.02] border border-brand-blue/5 hover:bg-white hover:border-brand-accent/20 hover:shadow-2xl hover:shadow-brand-accent/10 transition-all duration-300"
              >
                <div className="w-full aspect-square rounded-2xl bg-brand-blue/5 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent" />
                  <div className="w-full h-full flex items-center justify-center text-brand-blue/10">
                    <Users size={64} />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-brand-blue group-hover:text-brand-accent transition-colors">
                  {member.name}
                </h4>
                <p className="text-brand-blue/40 font-bold uppercase tracking-widest text-[10px] mt-1 mb-4">
                  {member.role}
                </p>

                <div className="pt-4 border-t border-brand-blue/5 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-brand-blue/30 tracking-widest group-hover:text-brand-blue transition-colors">
                    Connect
                  </span>
                  <a
                    href={member.social.url}
                    className="p-2 bg-brand-blue/5 rounded-xl text-brand-blue hover:bg-brand-blue hover:text-white transition-all transform hover:scale-110"
                    title={member.social.platform}
                  >
                    <member.social.icon size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-brand-accent p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-brand-blue tracking-tighter mb-8">
              Ready to Build <br /> Something Iconic?
            </h2>
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-contact-wizard"))
              }
              className="px-10 py-5 bg-brand-blue text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-brand-blue/90 transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
