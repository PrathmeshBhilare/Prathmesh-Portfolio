import React from 'react';
import { TIMELINE, STRENGTHS } from '../constants';
import { Section, Card, Badge } from '../components/ui';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export default function About() {
  return (
    <div>
      <FadeIn>
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Journey</h1>
          <p className="text-xl text-slate-600">
            A timeline of decisions, pivots, and technical evolution.
          </p>
        </div>
      </FadeIn>

      <Section title="Timeline">
        <div className="relative border-l border-slate-200 ml-4 space-y-12 pb-4">
          {[...TIMELINE].reverse().map((event, idx) => (
            <FadeIn key={idx} delay={idx * 100} direction="left">
              <div className="relative pl-8 md:pl-12">
                <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ring-4 ring-slate-50 ${idx === 0 ? 'bg-indigo-600 animate-pulse' : 'bg-white border border-slate-400'}`} />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                  <span className="font-mono text-indigo-600 font-bold">{event.year}</span>
                  <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                  <Badge color={event.type === 'learning' ? 'green' : event.type === 'pivot' ? 'indigo' : 'slate'}>
                    {event.type.toUpperCase()}
                  </Badge>
                </div>
                <p className="text-slate-600 max-w-2xl leading-relaxed">
                  {event.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section title="Personal Strengths">
        <div className="grid md:grid-cols-3 gap-6">
          {STRENGTHS.map((strength, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <Card className="h-full">
                <div className="flex items-center gap-2 mb-3 text-slate-900">
                  <CheckCircle2 size={18} className="text-indigo-600" />
                  <h3 className="font-bold">{strength.title}</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  {strength.desc}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}