import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const scriptLines = [
  "> npx create-react-app my-new-project",
  "> cd my-new-project",
  "> npm install tailwindcss lucide-react",
  "> ",
  "> // Starting development server...",
  "> npm run dev",
  "> ",
  "> VITE v6.2.0  ready in 120 ms",
  "> ",
  "> ➜  Local:   http://localhost:3000/",
  "> ➜  Network: use --host to expose",
  "> ➜  press h + enter to show help",
];

export const Terminal = () => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let currentLine = 0;
    setLines([]); // Reset on mount
    
    const interval = setInterval(() => {
      if (currentLine < scriptLines.length) {
        const newLine = scriptLines[currentLine];
        setLines(prev => newLine ? [...prev, newLine] : prev);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-900 rounded-lg shadow-2xl overflow-hidden border border-slate-800 font-mono text-sm leading-relaxed relative group">
      {/* Terminal Header */}
      <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="text-slate-400 text-xs flex items-center gap-1">
          <Play size={10} className="text-emerald-500" />
          bash
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-[280px] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/10 pointer-events-none" />
        {lines.map((line, i) => (
          <div key={i} className="text-slate-300">
            {line && (
              <>
                <span className="text-indigo-400 mr-2">{line.startsWith('>') ? '' : ''}</span>
                {line}
              </>
            )}
          </div>
        ))}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-emerald-500">➜</span>
          <span className="text-slate-100">_</span>
          <span className="animate-cursor w-2 h-4 bg-slate-400 block ml-1" />
        </div>
      </div>
      
      {/* Glass reflection effect */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
    </div>
  );
};