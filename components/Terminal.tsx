import React, { useEffect } from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { useRef } from 'react';

const CountUp = ({ to, duration = 1.5, decimals = 0, prefix = "", suffix = "" }: { to: number, duration?: number, decimals?: number, prefix?: string, suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => 
    prefix + (latest).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix
  );

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [count, inView, to, duration]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

export const Terminal = () => {
  return (
    <div className="w-full bg-slate-900 rounded-lg shadow-2xl overflow-hidden border border-slate-800 font-sans text-sm leading-relaxed relative group">
      {/* Header */}
      <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="text-slate-400 text-xs font-medium">
          Live Business Dashboard
        </div>
      </div>

      {/* Body */}
      <div className="p-6 h-[280px] flex flex-col justify-center gap-6 relative">
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
            <DollarSign size={14} className="text-emerald-400" /> Monthly Revenue Generated
          </div>
          <div className="text-4xl font-bold text-white flex items-baseline gap-2">
            <CountUp to={12702} prefix="$" />
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
              className="text-sm font-medium text-emerald-400 flex items-center"
            >
              <TrendingUp size={16} className="mr-1" /> +34%
            </motion.span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
             <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
               <Users size={14} className="text-indigo-400" /> New Leads
             </div>
             <div className="text-2xl font-bold text-white">
               <CountUp to={482} />
             </div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
             <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
               <TrendingUp size={14} className="text-amber-400" /> Conversion
             </div>
             <div className="text-2xl font-bold text-white">
               <CountUp to={12.4} decimals={1} suffix="%" />
             </div>
          </div>
        </div>
      </div>
      
      {/* Glass reflection effect */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
    </div>
  );
};