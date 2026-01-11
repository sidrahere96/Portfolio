import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "Git", "UI/UX Design"];

  return (
    <section id="about" className="w-full min-h-screen bg-slate-50 py-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Animated Image/Visual Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Replace with your LinkedIn profile picture or a professional shot */}
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Sidra Chaudhari Professional" 
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-6"
          >
            About <span className="text-blue-600">Me</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-gray-600 text-lg leading-relaxed"
          >
            <p>
              Hi! I'm <span className="font-semibold text-gray-800">Sidra Chaudhari</span>. 
              I am a passionate developer dedicated to building digital experiences that are 
              not only functional but visually compelling.
            </p>
            <p>
              With a background rooted in problem-solving (as seen on my LinkedIn), I thrive on 
              turning complex challenges into elegant code. My goal is to bridge the gap between 
              design and technology.
            </p>
          </motion.div>

          {/* Tech Stack/Skills */}
          <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ y: -5 }}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-blue-600 shadow-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
