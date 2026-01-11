import React, { useMemo, useState, useEffect } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal, Shield } from 'lucide-react';

export default function Home() {
  const roles = useMemo(() => [
    "Full-Stack Developer",
    "Cybersecurity Enthusiast",
    "Security Analyst",
    "Backend Architect",
    "UI/UX Designer"
  ], []);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex(v => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 2000); // Wait longer on finished word
      } else if (deleting && subIndex > 0) {
        setSubIndex(v => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex(p => (p + 1) % roles.length);
      }
    }, deleting ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section id="home" className="w-full h-screen relative bg-[#030712] overflow-hidden flex items-center justify-center">
      <ParticlesBackground />

      {/* Optimized Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Main Hero Content */}
        <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-mono text-xs tracking-widest uppercase"
          >
            <Shield size={14} className="animate-pulse" /> System Secure & Online
          </motion.div>

          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-400 font-mono text-lg md:text-xl tracking-tight h-8"
            >
              &gt; {roles[index].substring(0, subIndex)}
              <span className="w-2 h-5 bg-cyan-400 inline-block ml-1 animate-pulse align-middle" />
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-tight"
            >
              SIDRA <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                CHAUDHARI
              </span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              View Projects
            </button>
            <button className="px-8 py-4 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <Terminal size={18} /> Resume.exe
            </button>
          </motion.div>
        </div>

        {/* HUD/Stats Side Panel (Hidden on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="hidden lg:flex lg:col-span-4 flex-col gap-4"
        >
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em] mb-4">Core_Metrics</p>
            <div className="space-y-4">
              {[
                { label: 'Uptime', val: '99.9%' },
                { label: 'Vulnerability_Scan', val: '0 Threats' },
                { label: 'Latency', val: '24ms' }
              ].map(stat => (
                <div key={stat.label} className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-xs text-slate-500 font-mono">{stat.label}</span>
                  <span className="text-xs text-white font-mono">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </motion.div>
    </section>
  );
}
