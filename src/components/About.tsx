import React from 'react';
import { Brain, Code2, Microscope, Compass, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const ICONS = [Brain, Code2, Microscope];

export const About: React.FC = () => {
  const { profile, aboutCards } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#101626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>About Me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight mb-4">
            "Curiosity Drives What I Build."
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {profile.extendedBio[0]} {profile.extendedBio[1]}
          </p>
        </div>

        {/* Extended Narrative Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              Academic Journey & Exploration
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
              At Hamdard University Bangladesh, my academic journey is centered on grounding software engineering practices in robust algorithmic theory. Whether implementing graph algorithms in C++ or fine-tuning transformer backbones in Python, I focus on the underlying mathematical logic rather than surface-level abstraction.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {profile.extendedBio[2]} {profile.extendedBio[3]}
            </p>
          </div>

          {/* Quick Academic & Research Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-violet-600 dark:text-violet-400 tracking-wider">Institution</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">Hamdard University</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Bangladesh</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 font-medium">
                Undergraduate Studies
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 tracking-wider">Department</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">Computer Science & Eng.</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">CSE Curriculum</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 font-medium">
                Currently Studying
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">Primary Core</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">AI & Machine Learning</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Neural Architectures & NLP</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 font-medium">
                Deep Learning Focus
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-fuchsia-600 dark:text-fuchsia-400 tracking-wider">Research Area</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">Bangla NLP</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Hierarchical News Categorization</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 font-medium">
                RS-CHAF-Net Framework
              </div>
            </div>
          </div>
        </div>

        {/* The 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card, idx) => {
            const Icon = ICONS[idx] || Brain;
            return (
              <div
                key={card.index}
                className="group relative p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-violet-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Editorial card numbering and icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500">
                      CARD {card.index}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 dark:bg-cyan-500/10 text-violet-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-3 group-hover:text-violet-600 dark:group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Focus areas with clean check markers */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="space-y-2">
                    {card.focus.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 dark:text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
