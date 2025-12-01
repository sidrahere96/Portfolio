import {AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import React from "react";

export default function OverlayMenu({isOpen, onClose}){
  const isMobile=typeof window !== "undefined" && window.innerWidth <= 1024;
  const origin = isMobile ? "95% 8%" : "50% 8%";
  
  return (
    <AnimatePresence>
      {isOpen &&(
        <motion.div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
        initial ={{ clipPath: `circle(0% at ${origin})` }}
        animate={{clipPath :`circle(150% at ${origin})` }}
        exit={{clipPath: `circle(0% at ${origin})` }}
        transition={{duration:0.7, ease:[0.4,0,0.2,1]}}
        >
          <button onClick={onClose} className="text-white text-3xl focus:outline-none absolute top-6 right-6"
          aria-label="Close Menu">
            <FiX />
          </button>

          <ul className="space-y-8 text-center mt-20 text-2xl font-medium text-white">
            {[
              { label: "HOME", id: "home" },
              { label: "ABOUT", id: "about" },
              { label: "SKILLS", id: "skills" },
              { label: "PROJECTS", id: "projects" },
              { label: "EXPERIENCE", id: "experience" },
              { label: "TESTIMONIALS", id: "testimonials" },
              { label: "CONTACT", id: "contact" }
            ].map((item, index) => (
              <motion.li key={item.label}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{ delay: 0.3 + index * 0.1 }}>
                <a href={`#${item.id}`} 
                onClick={onClose} 
                className="text-4xl text-white font-semibold hover:text-blue-400 transition-color duration-300 underline">
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

        </motion.div>
      )}
    </AnimatePresence>
  );
}