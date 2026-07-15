import React from 'react';
import { SOCIALS } from '../constants';
import { Card } from '../components/ui';
import { Mail, Github, Linkedin, Copy, Instagram, MessageCircle } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export default function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText(SOCIALS.email);
    alert('Email copied to clipboard');
  };

  const copyWhatsapp = () => {
    navigator.clipboard.writeText(SOCIALS.whatsapp);
    alert('WhatsApp number copied to clipboard');
  };

  return (
    <div className="max-w-2xl mx-auto pt-12">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Get In Touch</h1>
      </FadeIn>
      
      <FadeIn delay={100}>
        <Card className="mb-12 !px-4 sm:!px-8">
          <p className="text-slate-600 text-center mb-8 text-base md:text-lg">
            I'm currently taking on <span className="text-indigo-600 font-bold">Freelance Projects</span> and <span className="text-indigo-600 font-bold">Custom Web & App Development</span>. Let's discuss your business needs.
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded border border-slate-200 group hover:border-indigo-500 transition-colors cursor-pointer" onClick={copyEmail}>
              <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                <Mail className="text-indigo-600 shrink-0" size={20} />
                <span className="text-slate-900 font-mono text-sm sm:text-base truncate">{SOCIALS.email}</span>
              </div>
              <button className="p-1.5 sm:p-2 hover:bg-slate-200 rounded text-slate-400 hover:text-slate-700 transition-colors shrink-0">
                <Copy size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>

            <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded border border-slate-200 group hover:border-green-500 transition-colors cursor-pointer" onClick={copyWhatsapp}>
              <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                <MessageCircle className="text-green-600 shrink-0" size={20} />
                <span className="text-slate-900 font-mono text-sm sm:text-base truncate">{SOCIALS.whatsapp}</span>
              </div>
              <button className="p-1.5 sm:p-2 hover:bg-slate-200 rounded text-slate-400 hover:text-slate-700 transition-colors shrink-0">
                <Copy size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>

            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded border border-slate-200 hover:border-pink-500 transition-colors">
              <div className="flex items-center gap-3 sm:gap-4">
                <Instagram className="text-pink-600 shrink-0" size={20} />
                <span className="text-slate-900 font-bold text-sm sm:text-base">Instagram</span>
              </div>
              <span className="text-slate-500 text-xs sm:text-sm">Follow -&gt;</span>
            </a>

            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded border border-slate-200 hover:border-indigo-500 transition-colors">
              <div className="flex items-center gap-3 sm:gap-4">
                <Github className="text-slate-900 shrink-0" size={20} />
                <span className="text-slate-900 font-bold text-sm sm:text-base">GitHub</span>
              </div>
              <span className="text-slate-500 text-xs sm:text-sm">View Code -&gt;</span>
            </a>

            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded border border-slate-200 hover:border-indigo-500 transition-colors">
              <div className="flex items-center gap-3 sm:gap-4">
                <Linkedin className="text-blue-600 shrink-0" size={20} />
                <span className="text-slate-900 font-bold text-sm sm:text-base">LinkedIn</span>
              </div>
               <span className="text-slate-500 text-xs sm:text-sm">Connect -&gt;</span>
            </a>
          </div>
        </Card>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="text-center text-slate-400 text-sm">
          <p>Looking forward to bringing your ideas to life.</p>
        </div>
      </FadeIn>
    </div>
  );
}