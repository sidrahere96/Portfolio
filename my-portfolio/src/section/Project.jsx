import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Terminal, Cpu } from 'lucide-react'; // Optional lucide icons

const About = () => {
  const skillCategories = [
    { name: "Frontend", skills: ["React.js", "Tailwind", "Next.js"], icon: <Code size={20} /> },
    { name: "Backend", skills: ["Node.js", "Express", "PostgreSQL"], icon: <Terminal size={20} /> },
    { name: "Cybersecurity", skills: ["OWASP Top 10", "JWT", "Pen-Testing"], icon: <Shield size={20} /> },
  ];

  return (
    <section id="about" className="relative w-full min-h-screen bg-[#0a192f] py-20 px-6 flex items-center overflow-hidden">
      
      {/* Background Animation: Subtle Moving Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Modern Image Frame with Glow */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-6 opacity-20 border-2 border-blue-400"></div>
            <div className="absolute inset-0 bg-cyan-500 rounded-2xl -rotate-3 opacity-20 border-2 border-cyan-400"></div>
            <div className="relative h-full w-full bg-[#112240] rounded-2xl border border-white/10 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" 
                alt="Cybersecurity & Web Dev" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Terminal-style Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-blue-400 font-mono text-2xl">01.</span> About_Me
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-slate-400 text-lg font-medium leading-relaxed"
          >
            <p>
              Hi, I'm <span className="text-cyan-400">Sidra Chaudhari</span>. I specialize in building robust 
              Full Stack applications with a security-first mindset. 
            </p>
            <p>
              My focus lies in the intersection of <span className="text-white">scalable architecture</span> and 
              <span className="text-white text-blue-400 underline decoration-blue-500/30"> defensive coding</span>. 
              Whether I'm crafting dynamic user interfaces or auditing codebases for vulnerabilities, 
              I aim for digital excellence.
            </p>
          </motion.div>

          {/* Categorized Tech Stack */}
          <div className="mt-10 space-y-4">
            {skillCategories.map((cat, i) => (
              <motion.div 
                key={cat.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#112240] p-4 rounded-lg border border-white/5 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-2 text-blue-400">
                  {cat.icon}
                  <h4 className="font-mono font-bold text-sm tracking-widest uppercase">{cat.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => (
                    <span key={s} className="text-xs font-mono text-slate-300 bg-blue-500/10 px-2 py-1 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
