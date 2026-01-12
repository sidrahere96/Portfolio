import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import React from "react";

const MENU_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export default function OverlayMenu({ isOpen, onClose }) {
  // Check window width for origin point (SSR safe)
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);
  }, []);

  const origin = isMobile ? "90% 5%" : "50% 5%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-xl"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Close Menu"
          >
            <FiX size={32} />
          </button>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-col gap-6 text-center">
              {MENU_ITEMS.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.08,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={onClose}
                    className="group relative inline-block text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white transition-all"
                  >
                    {/* Hover text effect */}
                    <span className="relative z-10 group-hover:text-blue-400 transition-colors duration-300">
                      {item.label}
                    </span>
                    
                    {/* Underline decorative element */}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
