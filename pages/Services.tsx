import React from 'react';
import { SERVICES } from '../constants';
import { Section } from '../components/ui';
import { FadeIn } from '../components/FadeIn';
import { motion } from 'motion/react';

const ServiceRow: React.FC<{ service: any }> = ({ service }) => (
  <motion.div 
    whileHover={{ scale: 1.01, x: 5 }}
    className="group flex flex-col md:flex-row md:items-baseline border-b border-slate-200 py-4 hover:bg-white hover:shadow-sm transition-all px-4 -mx-4 rounded-md cursor-default"
  >
    <div className="md:w-1/4 mb-1 md:mb-0">
      <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{service.name}</span>
    </div>
    <div className="md:w-3/4">
      <p className="text-slate-600 text-sm leading-relaxed">{service.context}</p>
    </div>
  </motion.div>
);

export default function Services() {
  const web = SERVICES.filter(s => s.category === 'web');
  const app = SERVICES.filter(s => s.category === 'app');
  const design = SERVICES.filter(s => s.category === 'design');
  const ai = SERVICES.filter(s => s.category === 'ai');
  const support = SERVICES.filter(s => s.category === 'support');

  return (
    <div>
      <FadeIn>
        <div className="max-w-3xl mb-12 md:mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">My Services</h1>
          <p className="text-lg md:text-xl text-slate-600">
            I handle the tech side of your business completely, so you can focus on your clients and sales.
          </p>
        </div>
      </FadeIn>

      <Section title="Web Development">
        <div className="flex flex-col">
           {web.map((s, i) => (
             <FadeIn key={i} delay={i * 100}>
               <ServiceRow service={s} />
             </FadeIn>
           ))}
        </div>
      </Section>

      <Section title="App Development">
        <div className="flex flex-col">
           {app.map((s, i) => (
             <FadeIn key={i} delay={i * 100}>
               <ServiceRow service={s} />
             </FadeIn>
           ))}
        </div>
      </Section>

      <Section title="AI Automation">
        <div className="flex flex-col">
           {ai.map((s, i) => (
             <FadeIn key={i} delay={i * 100}>
               <ServiceRow service={s} />
             </FadeIn>
           ))}
        </div>
      </Section>

      <Section title="UI/UX Design">
        <div className="grid md:grid-cols-2 gap-4">
           {design.map((s, i) => (
             <FadeIn key={i} delay={i * 100}>
               <motion.div 
                 whileHover={{ scale: 1.03, y: -5 }}
                 className="bg-white p-4 rounded border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors h-full"
               >
                 <span className="block font-bold text-slate-900 mb-1">{s.name}</span>
                 <span className="text-xs text-slate-500">{s.context}</span>
               </motion.div>
             </FadeIn>
           ))}
        </div>
      </Section>

      <Section title="Maintenance & Support">
        <div className="grid md:grid-cols-1 gap-4">
           {support.map((s, i) => (
             <FadeIn key={i} delay={i * 100}>
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="bg-indigo-50/50 p-6 rounded-lg border border-indigo-100 shadow-sm hover:border-indigo-300 transition-colors cursor-default"
               >
                 <span className="block font-bold text-indigo-900 mb-2 text-lg">{s.name}</span>
                 <span className="text-sm text-indigo-700/80 leading-relaxed">{s.context}</span>
               </motion.div>
             </FadeIn>
           ))}
        </div>
      </Section>
    </div>
  );
}