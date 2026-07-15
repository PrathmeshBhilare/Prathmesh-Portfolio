import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Smartphone, PenTool, ArrowRight, Atom, Server, Figma, Bot, Wrench } from 'lucide-react';
import { HERO_DATA } from '../constants';
import { Button, Card } from '../components/ui';
import { FadeIn } from '../components/FadeIn';
import { Terminal } from '../components/Terminal';

export default function Home() {
  const navigate = useNavigate();
  const icons = [
    <Layout key="1" size={24} />, 
    <Smartphone key="2" size={24} />, 
    <PenTool key="3" size={24} />,
    <Bot key="4" size={24} />,
    <Wrench key="5" size={24} />
  ];

  const SKILLS_SHOWCASE = [
    {
      icon: <Atom className="text-blue-500 mb-4" size={32} />,
      name: "React & Next.js",
      desc: "Modern web applications"
    },
    {
      icon: <Smartphone className="text-cyan-500 mb-4" size={32} />,
      name: "Flutter & React Native",
      desc: "Cross-platform mobile apps"
    },
    {
      icon: <Server className="text-green-500 mb-4" size={32} />,
      name: "Node.js & Backend",
      desc: "Scalable APIs and servers"
    },
    {
      icon: <Figma className="text-purple-500 mb-4" size={32} />,
      name: "Figma & UI/UX",
      desc: "Wireframes to polished designs"
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero */}
      <div className="pt-4 md:pt-20 pb-8 md:pb-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-6 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              OPEN TO WORK
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.15]">
              {HERO_DATA.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
              {HERO_DATA.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button onClick={() => navigate('/projects')} className="group">
                View Projects 
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" onClick={() => navigate('/contact')}>
                Contact Me
              </Button>
            </div>
          </FadeIn>
        </div>
        
        {/* Right side visual: Code Terminal */}
        <div className="hidden md:block flex-1 w-full max-w-lg perspective-1000">
          <FadeIn delay={400} direction="left">
             <div className="transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-500">
                <Terminal />
                {/* Decorative blob behind */}
                <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl -z-10 rounded-full" />
             </div>
          </FadeIn>
        </div>
      </div>

      {/* Value Blocks */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {HERO_DATA.values.map((item, idx) => (
          <FadeIn key={idx} delay={500 + (idx * 100)}>
            <Card className="h-full group hover:border-indigo-300 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-50 group-hover:scale-110 transition-all">
                {icons[idx]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.content}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>

      {/* Visual Skills Section */}
      <FadeIn delay={800}>
        <div className="pt-8 pb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Tech Stack & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS_SHOWCASE.map((skill, i) => (
              <Card key={i} className="text-center p-6 hover:-translate-y-2 transition-all duration-300 border-slate-100 hover:border-indigo-200 hover:shadow-lg">
                <div className="flex justify-center">{skill.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{skill.name}</h3>
                <p className="text-xs text-slate-500">{skill.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}