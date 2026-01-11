import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading the UI/UX team to build scalable web applications using React and Tailwind CSS. Improved site performance by 40%.",
    },
    {
      id: 2,
      role: "Web Developer Intern",
      company: "Creative Digital Agency",
      period: "2021 - 2022",
      description: "Collaborated with senior devs to implement responsive designs and integrated RESTful APIs into client dashboards.",
    }
  ];

  return (
    <section id="experience" className="w-full min-h-screen bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 inline-border border-b-4 border-blue-500 pb-2">
            Experience
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-200 ml-4 md:ml-0 md:left-1/2">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Empty space for layout */}
              <div className="hidden md:block w-5/12"></div>

              {/* Timeline Dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 bg-slate-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-1">{exp.role}</h3>
                <h4 className="text-gray-600 font-medium mb-3">{exp.company}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
