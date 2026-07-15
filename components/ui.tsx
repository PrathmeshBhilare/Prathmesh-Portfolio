import React, { ReactNode } from 'react';

export const Section: React.FC<{ title?: string, children: ReactNode, className?: string }> = ({ title, children, className = "" }) => (
  <section className={`mb-16 md:mb-24 ${className}`}>
    {title && (
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px bg-slate-200 flex-1 max-w-[40px]"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
        <div className="h-px bg-slate-200 flex-1"></div>
      </div>
    )}
    {children}
  </section>
);

export const Badge: React.FC<{ children: ReactNode, color?: "indigo" | "slate" | "green" }> = ({ children, color = "indigo" }) => {
  const colors = {
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100",
    slate: "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border uppercase tracking-wider transition-colors ${colors[color]}`}>
      {children}
    </span>
  );
};

export const Card: React.FC<{ children: ReactNode, className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white/70 backdrop-blur-sm border border-slate-200 p-6 md:p-8 rounded-lg shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_-4px_rgba(79,70,229,0.1)] hover:border-indigo-300/50 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export const Button: React.FC<{ children: ReactNode, onClick?: () => void, variant?: "primary" | "outline", className?: string }> = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-indigo-600 active:scale-95";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30",
    outline: "border border-slate-300 text-slate-700 hover:bg-white hover:text-indigo-600 hover:border-indigo-300 bg-transparent"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};