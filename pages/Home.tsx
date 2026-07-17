import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Search, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react';
import { HERO_DATA } from '../constants';
import { Button, Card } from '../components/ui';
import { FadeIn } from '../components/FadeIn';
import { Terminal } from '../components/Terminal';
import { motion } from 'motion/react';

import Services from './Services';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

export default function Home() {
  const navigate = useNavigate();
  const icons = [
    <Layout key="1" size={24} />, 
    <Search key="2" size={24} />, 
    <Smartphone key="3" size={24} />,
    <ShieldCheck key="4" size={24} />
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + (id === 'home' ? '' : id));
    }
  };

  return (
    <div className="space-y-24 md:space-y-32" id="home">
      {/* Hero Section */}
      <div className="space-y-16 md:space-y-24">
        <div className="pt-4 md:pt-20 pb-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <FadeIn delay={100} duration={0.8}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-6 tracking-wide">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                ACCEPTING NEW CLIENTS
              </div>
            </FadeIn>
            <FadeIn delay={250} duration={0.8}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.15]">
                {HERO_DATA.headline}
              </h1>
            </FadeIn>
            <FadeIn delay={400} duration={0.8}>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
                {HERO_DATA.subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={550} duration={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button onClick={() => scrollTo('projects')} className="group">
                  See My Results 
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight size={18} className="ml-2" />
                  </motion.div>
                </Button>
                <Button variant="outline" onClick={() => scrollTo('contact')}>
                  Book a Free Consultation
                </Button>
              </div>
            </FadeIn>
          </div>
          
          {/* Right side visual: Dashboard Graphic */}
          <div className="hidden md:block flex-1 w-full max-w-lg perspective-1000">
            <FadeIn delay={700} direction="left" duration={1}>
               <motion.div 
                  whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
                  initial={{ rotateY: -10, rotateX: 5 }}
                  animate={{ rotateY: -5, rotateX: 5, y: [0, -10, 0] }}
                  transition={{ 
                     rotateY: { type: "spring", stiffness: 200, damping: 20 },
                     rotateX: { type: "spring", stiffness: 200, damping: 20 },
                     scale: { type: "spring", stiffness: 200, damping: 20 },
                     y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="transform-gpu"
               >
                  <Terminal />
                  {/* Decorative blob behind */}
                  <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl -z-10 rounded-full" />
               </motion.div>
            </FadeIn>
          </div>
        </div>

        {/* Value Blocks */}
        <div className="grid sm:grid-cols-2 gap-6 pb-16">
          {HERO_DATA.values.map((item, idx) => (
            <FadeIn key={idx} delay={500 + (idx * 100)}>
              <Card className="h-full group">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-50 transition-colors"
                >
                  {icons[idx]}
                </motion.div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.content}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>

      <div id="services" className="scroll-mt-24 pt-8">
        <Services />
      </div>

      <div id="projects" className="scroll-mt-24 pt-8">
        <Projects />
      </div>

      <div id="about" className="scroll-mt-24 pt-8">
        <About />
      </div>

      <div id="contact" className="scroll-mt-24 pt-8 pb-12">
        <Contact />
      </div>
    </div>
  );
}