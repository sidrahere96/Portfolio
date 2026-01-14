import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'; // Optional: install lucide-react or use your own icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand/Name Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-tight">YourName<span className="text-blue-500">.</span></h2>
          <p className="mt-2 text-sm max-w-xs">
            Building digital experiences with focus on performance and user-centric design.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-500 transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="mailto:your@email.com" className="hover:text-blue-500 transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        {/* Quick Links / Legal */}
        <div className="text-sm font-medium">
          <ul className="flex space-x-4">
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {currentYear} All rights reserved. Designed & Built by YourName.</p>
      </div>
    </footer>
  );
};

export default Footer;
