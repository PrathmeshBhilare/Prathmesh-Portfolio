import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

export const Section: React.FC<{ title?: string, children: ReactNode, className?: string }> = ({ title, children, className = "" }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={`mb-16 md:mb-24 ${className}`}
  >
    {title && (
      <div className="flex items-center gap-4 mb-8">
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-slate-200 flex-1 max-w-[40px] origin-left"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-slate-200 flex-1 origin-left"
        />
      </div>
    )}
    {children}
  </motion.section>
);

export const Badge: React.FC<{ children: ReactNode, color?: "indigo" | "slate" | "green" }> = ({ children, color = "indigo" }) => {
  const colors = {
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100",
    slate: "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
  };
  
  return (
    <motion.span 
      whileHover={{ scale: 1.05, y: -2 }}
      className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border uppercase tracking-wider transition-colors inline-block ${colors[color]}`}
    >
      {children}
    </motion.span>
  );
};

export const Card: React.FC<{ children: ReactNode, className?: string }> = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`bg-white/70 backdrop-blur-sm border border-slate-200 p-6 md:p-8 rounded-lg shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300/50 transition-colors duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export const Button: React.FC<{ children: ReactNode, onClick?: () => void, variant?: "primary" | "outline", className?: string }> = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-indigo-600 relative overflow-hidden z-10 group";
  const variants = {
    primary: "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20",
    outline: "border border-slate-300 text-slate-700 bg-transparent"
  };

  return (
    <motion.button 
      onClick={onClick} 
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={{
        initial: { scale: 1 },
        hover: variant === 'primary' 
          ? { scale: 1.05, backgroundColor: "#4338ca", boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.4), 0 10px 10px -5px rgba(79, 70, 229, 0.2)" } 
          : { scale: 1.05, borderColor: "#4f46e5", color: "#ffffff" },
        tap: { scale: 0.95 }
      }}
      transition={{ duration: 0.2 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {variant === 'outline' && (
        <motion.div
          className="absolute inset-0 bg-indigo-600 z-[-1] origin-left"
          variants={{
            initial: { scaleX: 0 },
            hover: { scaleX: 1 }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}
      <span className="relative z-10 flex items-center">{children}</span>
    </motion.button>
  );
};