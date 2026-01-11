import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Database, Layout, Lock, Server } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Core Development",
      icon: <Layout className="text-blue-400" />,
      skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      color: "from-blue-500/20 to-transparent"
    },
    {
      title: "Backend Architecture",
      icon: <Server className="text-cyan-400" />,
      skills: ["Node.js", "Express", "Python", "GraphQL"],
      color: "from-cyan-500/20 to-transparent"
    },
    {
      title: "Cybersecurity",
      icon: <ShieldCheck className="text-emerald-400" />,
      skills: ["OWASP Top 10", "Pen-Testing", "Network Security", "Auth0/JWT"],
      color: "from-emerald-500/20 to-transparent"
    },
    {
      title: "Databases & DevOps",
      icon: <Database className="text-purple-400" />,
      skills: ["PostgreSQL", "MongoDB", "Docker", "AWS / Firebase"],
      color: "from-purple-500/20 to-transparent"
    }
  ];

  return (
    <section id="skills" className="relative w-full min-h-screen bg-[#0a192f] py-24 px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-4">
            <span className="text-blue-400 font-mono text-2xl">02.</span> Tech_Capabilities
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative p-8 rounded-2xl bg-[#112240] border border-white/5 hover:border-blue-500/30 transition-all group overflow-hidden`}
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#0a192f] rounded-lg border border-white/10 group-hover:border-blue-400/50 transition-colors">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{group.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {group.skills.map((skill, sIndex) => (
                    <div key={skill} className="flex items-center gap-2 group/item">
                      <div className="h-[2px] w-0 bg-blue-400 group-hover/item:w-4 transition-all duration-300" />
                      <span className="text-slate-400 font-mono text-sm group-hover/item:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative "Scanning" Line */}
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-blue-500/20 z-0"
              />
            </motion.div>
          ))}
        </div>

        {/* Cybersecurity "Status" Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-8 items-center justify-center py-6 border-y border-white/5"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/70">
            <Lock size={14} /> SYSTEM_ENCRYPTED: TRUE
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400/70">
            <Terminal size={14} /> SHELL: ZSH
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Cpu size={14} /> OPTIMIZED_STACK: STABLE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
