import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react'; // Optional icons

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 md:p-24">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Left Side: Contact Info */}
        <div className="bg-blue-600 p-8 md:p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">Let's connect.</h2>
            <p className="text-blue-100 text-lg mb-8">
              I’m currently open to new opportunities and collaborations. 
              Have a question or just want to say hi? My inbox is always open.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-lg"><Mail size={24} /></div>
                <span>sidrasc05@email.com</span>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#" className="hover:text-blue-200 transition-colors"><Github size={28} /></a>
                <a href="#" className="hover:text-blue-200 transition-colors"><Linkedin size={28} /></a>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-blue-200 mt-12 italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-12">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                placeholder="Sidra Chaushari"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea 
                rows="4" 
                placeholder="How can I help you?"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
