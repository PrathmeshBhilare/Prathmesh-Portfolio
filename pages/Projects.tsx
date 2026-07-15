import React from 'react';
import { PROJECTS } from '../constants';
import { Section, Card, Badge } from '../components/ui';
import { Github, ExternalLink, AlertTriangle, Lightbulb, Sparkles, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export default function Projects() {
  return (
    <div>
      <FadeIn>
       <div className="max-w-3xl mb-12 md:mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Featured Portfolio</h1>
        <p className="text-xl text-slate-600">
          Case studies of digital products I've crafted for clients.
        </p>
       </div>
      </FadeIn>

      <div className="space-y-16 md:space-y-24">
        {PROJECTS.map((project, idx) => (
          <FadeIn key={project.id} delay={idx * 100}>
            <Section className="scroll-mt-24">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 border-b border-slate-200 pb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-indigo-600 text-sm">0{idx + 1}</span>
                    <h2 className="text-3xl font-bold text-slate-900">{project.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-4">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} color="slate">{tag}</Badge>)}
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.repoLink && (
                     <a href={project.repoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-slate-300 text-sm font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors shadow-sm group">
                       <Github size={16} /> 
                       <span>Code</span>
                     </a>
                  )}
                  {project.demoLink && (
                     <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm hover:shadow-indigo-500/30 group">
                       <ExternalLink size={16} /> 
                       <span>Live</span>
                     </a>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                {/* Left Column: Context */}
                <div className="md:col-span-4 space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Problem</h4>
                    <p className="text-slate-700 leading-relaxed">{project.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Why It Matters</h4>
                    <p className="text-slate-700 leading-relaxed">{project.caseStudy.importance}</p>
                  </div>
                  <div>
                     <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Tech Stack</h4>
                     <ul className="space-y-1">
                       {project.caseStudy.stack.map(s => <li key={s} className="text-slate-700 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" /> {s}</li>)}
                     </ul>
                  </div>
                </div>

                {/* Right Column: Execution */}
                <div className="md:col-span-8 space-y-8">
                  {/* Approach Card - Interactive */}
                  <Card className="bg-slate-50/50 border-slate-200 hover:bg-white hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <ArrowUpRight size={18} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
                      Approach & Decisions
                    </h4>
                    <p className="text-slate-700 mb-6 leading-relaxed">{project.caseStudy.approach}</p>
                    <ul className="space-y-3">
                      {project.caseStudy.technicalDecisions.map((decision, i) => (
                        <li key={i} className="flex gap-3 text-slate-600 text-sm group-hover:text-slate-800 transition-colors">
                          <span className="font-mono text-indigo-400 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">{'>'}</span>
                          {decision}
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {/* Outcome / Failure - Interactive Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-emerald-50/50 border border-emerald-100 p-5 rounded-lg shadow-sm hover:shadow-md hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300">
                      <h4 className="text-emerald-700 font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                         Outcome
                      </h4>
                      <p className="text-emerald-900 text-sm">{project.caseStudy.outcome}</p>
                    </div>
                    
                    {project.caseStudy.failure && (
                      <div className="bg-amber-50/50 border border-amber-100 p-5 rounded-lg shadow-sm hover:shadow-md hover:border-amber-400 hover:-translate-y-1 transition-all duration-300">
                         <h4 className="text-amber-700 font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                           <AlertTriangle size={14} /> Failure / Pivot
                         </h4>
                         <p className="text-amber-900 text-sm">{project.caseStudy.failure}</p>
                      </div>
                    )}
                  </div>

                  {/* Key Learning - Visually Distinct (Dark Mode Block) */}
                  <div className="relative overflow-hidden bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-800 group hover:shadow-indigo-500/30 hover:border-indigo-400 hover:-translate-y-1 transition-all duration-300">
                      {/* Decorative background glow */}
                      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
                      
                      <h4 className="relative z-10 text-indigo-400 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                           <Sparkles size={14} className="text-indigo-300" /> Key Engineering Insight
                      </h4>
                      <div className="relative z-10 flex gap-4">
                        <div className="w-1 bg-indigo-500/50 rounded-full shrink-0 group-hover:bg-indigo-400 transition-colors"></div>
                        <p className="text-slate-300 text-sm italic leading-relaxed group-hover:text-slate-100 transition-colors">
                          "{project.caseStudy.learnings}"
                        </p>
                      </div>
                  </div>
                </div>
              </div>
            </Section>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}