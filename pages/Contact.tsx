import React, { useState } from 'react';
import { SOCIALS } from '../constants';
import { Mail, Github, Linkedin, Instagram, MessageCircle, User } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(SOCIALS.email);
    setActiveNode(0);
    setTimeout(() => setActiveNode(null), 3000);
  };

  const copyWhatsapp = () => {
    navigator.clipboard.writeText(SOCIALS.whatsapp);
    setActiveNode(1);
    setTimeout(() => setActiveNode(null), 3000);
  };

  const contactNodes = [
    { icon: Mail, color: "text-indigo-600", border: "border-indigo-100", onClick: copyEmail, label: "Email", value: SOCIALS.email },
    { icon: MessageCircle, color: "text-green-600", border: "border-green-100", onClick: copyWhatsapp, label: "WhatsApp", value: SOCIALS.whatsapp },
    { icon: Instagram, color: "text-pink-600", border: "border-pink-100", href: SOCIALS.instagram, label: "Instagram" },
    { icon: Github, color: "text-slate-900", border: "border-slate-200", href: SOCIALS.github, label: "GitHub" },
    { icon: Linkedin, color: "text-blue-600", border: "border-blue-100", href: SOCIALS.linkedin, label: "LinkedIn" },
  ];

  return (
    <div className="max-w-4xl mx-auto pt-12 px-4 pb-24">
      <FadeIn>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            I'm currently taking on <span className="text-indigo-600 font-bold">Freelance Projects</span> and <span className="text-indigo-600 font-bold">Custom Development</span>. Tap a node to connect.
          </p>
        </div>
      </FadeIn>
      
      <div className="relative w-[320px] h-[320px] md:w-[460px] md:h-[460px] mx-auto my-16 flex items-center justify-center">
        
        {/* SVG Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 460">
          {contactNodes.map((_, i) => {
            const angle = (-90 + (i * 72)) * (Math.PI / 180);
            // Radius is 160px for the 460px viewBox
            const x = 230 + 160 * Math.cos(angle);
            const y = 230 + 160 * Math.sin(angle);
            return (
              <motion.line 
                key={i} 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: "easeInOut" }}
                x1="230" y1="230" x2={x} y2={y} 
                stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" 
              />
            )
          })}
        </svg>
        
        {/* Central Profile Node */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative z-10 w-28 h-28 md:w-36 md:h-36 bg-slate-100 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-slate-400 group overflow-hidden ring-4 ring-indigo-50"
        >
          <motion.div 
             animate={{ scale: [1, 1.05, 1] }} 
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute inset-0 rounded-full bg-indigo-50/50" 
          />
          <img src="https://i.postimg.cc/CLbZw0nd/Whats-App-Image-2026-06-22-at-10-44-03-PM-(1).jpg" alt="Profile" className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500" />
        </motion.div>

        {/* Orbiting Nodes */}
        {contactNodes.map((item, i) => {
          const angle = -90 + (i * 72);
          return (
            <div 
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 + (i * 0.1) }}
              >
                {/* Responsive radius: 110px mobile, 160px desktop */}
                <div className="translate-x-[120px] md:translate-x-[160px]">
                  <div style={{ transform: `rotate(${-angle}deg)` }}>
                     {item.href ? (
                     <motion.a 
                       whileHover={{ scale: 1.15, y: -4 }}
                       whileTap={{ scale: 0.95 }}
                       href={item.href} 
                       target="_blank" 
                       rel="noreferrer" 
                       className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 bg-white ${item.border} ${item.color} shadow-md group relative hover:border-indigo-400 hover:shadow-xl`}
                     >
                       <item.icon size={24} className="md:w-7 md:h-7" />
                       <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-bold text-slate-700 bg-white px-3 py-1.5 rounded-full shadow-md whitespace-nowrap border border-slate-100 pointer-events-none z-20">
                         {item.label}
                       </span>
                     </motion.a>
                   ) : (
                     <div className="relative z-30">
                       <motion.button 
                         whileHover={{ scale: 1.15, y: -4 }}
                         whileTap={{ scale: 0.95 }}
                         onClick={item.onClick} 
                         className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 bg-white ${item.border} ${item.color} shadow-md group relative hover:border-indigo-400 hover:shadow-xl`}
                       >
                         <item.icon size={24} className="md:w-7 md:h-7" />
                         <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-bold text-slate-700 bg-white px-3 py-1.5 rounded-full shadow-md whitespace-nowrap border border-slate-100 pointer-events-none z-20">
                           {item.label}
                         </span>
                       </motion.button>
                       
                       {/* Tooltip when clicked */}
                       <AnimatePresence>
                         {activeNode === i && (
                           <motion.div 
                             initial={{ opacity: 0, x: -10, scale: 0.9 }}
                             animate={{ opacity: 1, x: 0, scale: 1 }}
                             exit={{ opacity: 0, scale: 0.9 }}
                             className="absolute left-[calc(100%+16px)] top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-xl border border-slate-200 whitespace-nowrap z-50 flex items-center gap-2"
                           >
                             <span className="font-bold text-slate-800 text-sm">{item.label}:</span>
                             <span className="text-slate-600 text-sm font-mono">{item.value}</span>
                             <span className="text-xs text-green-600 font-bold ml-1">(Copied!)</span>
                           </motion.div>
                         )}
                       </AnimatePresence>
                     </div>
                   )}
                </div>
              </div>
            </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  );
}