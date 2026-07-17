import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { SOCIALS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

const NavItem = ({ to, label, isActive, onClick }: { to: string, label: string, isActive: boolean, onClick?: () => void }) => {
  return (
    <button
      onClick={() => {
        const el = document.getElementById(to);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        if (onClick) onClick();
      }}
      className={`relative block px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
        isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
      }`}
    >
      {label}
      {!isActive && (
        <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-indigo-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
      )}
      {isActive && (
        <motion.div 
          layoutId="nav-pill"
          className="absolute inset-0 border border-indigo-100 rounded-md z-[-1] bg-indigo-50/80"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </button>
  );
};

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = new Map();
    
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    const sections = ['home', 'services', 'projects', 'about', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "services", label: "Services" },
    { to: "projects", label: "Portfolio" },
    { to: "about", label: "About" },
    { to: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/20 relative">
      {/* Tech Background Pattern */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="fixed inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none z-0" 
      />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50/90 pointer-events-none z-0" />

      {/* Animated Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-200/40 blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-200/40 blur-[120px]"
        />
      </div>

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200/60 shadow-sm py-2' : 'bg-transparent py-2 md:py-4'}`}
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
          <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-lg font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors flex items-center gap-2 px-2 md:px-0 mt-2 md:mt-0">
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
            <span className="font-mono tracking-tight">PRATHMESH_BHILARE</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navItems.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} isActive={activeSection === item.to} />
            ))}
          </div>

          {/* Mobile Nav (Horizontal Scroll) */}
          <div className="md:hidden flex items-center overflow-x-auto w-full pb-2 -ml-2 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex space-x-1 flex-nowrap whitespace-nowrap">
              {navItems.map((item) => (
                <NavItem key={item.to} to={item.to} label={item.label} isActive={activeSection === item.to} />
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="pt-28 pb-20 px-6 max-w-5xl mx-auto min-h-[85vh] relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-slate-200 py-12 mt-12 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-mono flex flex-col md:flex-row items-center gap-4">
            <span>© {new Date().getFullYear()} Prathmesh Bhilare.</span>
            <span className="hidden md:inline text-slate-300">|</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all group cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:animate-pulse"></span>
              <span className="text-xs font-medium text-slate-600 group-hover:text-indigo-600">Built with VibeCoding</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Instagram size={18} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Github size={18} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: -5 }} href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Linkedin size={18} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href={`mailto:${SOCIALS.email}`} className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Mail size={18} />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}