import React from 'react';
import { Cpu, Sparkles, Compass, Lightbulb, Target } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const PILLAR_ICONS = [Cpu, Sparkles, Compass];

export const Vision: React.FC = () => {
  const { vision } = PORTFOLIO_DATA;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Target className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Professional Horizon</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight mb-6">
            {vision.heading}
          </h2>

          <blockquote className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto italic">
            "{vision.quote}"
          </blockquote>
        </div>

        {/* 3 Animated Vision Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vision.pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] || Lightbulb;
            return (
              <div
                key={pillar.number}
                className="group relative p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-violet-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-extrabold font-mono text-slate-300 dark:text-slate-600 group-hover:text-violet-500 dark:group-hover:text-cyan-400 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-violet-500/10 dark:bg-cyan-500/10 text-violet-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-3 group-hover:text-violet-600 dark:group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-violet-500 dark:group-hover:text-cyan-400 transition-colors">
                  <span>Pillar {pillar.number} Commit</span>
                  <span className="text-slate-300 dark:text-slate-600">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
