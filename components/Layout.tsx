import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { SOCIALS } from '../constants';

const NavItem = ({ to, label, onClick }: { to: string, label: string, onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`block px-4 py-2 text-sm font-medium transition-all duration-200 ${
        isActive ? 'text-indigo-600 bg-indigo-50/80 rounded-md ring-1 ring-indigo-100' : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-md'
      }`}
    >
      {label}
    </NavLink>
  );
};

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/20 relative">
      {/* Tech Background Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50/90 pointer-events-none z-0" />

      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg border-b border-slate-200/60 z-50 supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <NavLink to="/" className="text-lg font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
            <span className="font-mono tracking-tight">PRATHMESH_BHILARE</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <NavItem to="/" label="Home" />
            <NavItem to="/services" label="Services" />
            <NavItem to="/projects" label="Portfolio" />
            <NavItem to="/about" label="About" />
            <NavItem to="/contact" label="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              className="text-slate-600 hover:text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <NavItem to="/" label="Home" onClick={() => setIsMenuOpen(false)} />
              <NavItem to="/services" label="Services" onClick={() => setIsMenuOpen(false)} />
              <NavItem to="/projects" label="Portfolio" onClick={() => setIsMenuOpen(false)} />
              <NavItem to="/about" label="About" onClick={() => setIsMenuOpen(false)} />
              <NavItem to="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
            </div>
          </div>
        )}
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-5xl mx-auto min-h-[85vh] relative z-10">
        <Outlet />
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
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors transform hover:-translate-y-1">
              <Instagram size={18} />
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors transform hover:-translate-y-1">
              <Github size={18} />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors transform hover:-translate-y-1">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${SOCIALS.email}`} className="text-slate-400 hover:text-indigo-600 transition-colors transform hover:-translate-y-1">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}