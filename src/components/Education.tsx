import React from 'react';
import { GraduationCap, BookOpen, MapPin, CheckCircle2, Award, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#101626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-violet-600 dark:text-cyan-400" />
            <span>Academic Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight mb-4">
            Education & University Journey
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Rigorous undergraduate studies in Computer Science and Engineering, combining foundational discrete mathematics with modern artificial intelligence systems.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-violet-500/40 dark:border-cyan-500/40 ml-4 sm:ml-6">
            
            {/* Timeline node */}
            <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
              <GraduationCap className="w-4 h-4" />
            </div>

            {/* University Main Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-md mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{education.status}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                    {education.institution}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{education.campus}</span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                    {education.department}
                  </div>
                  <div className="text-xs text-violet-600 dark:text-violet-400 font-mono mt-0.5">
                    {education.degree}
                  </div>
                </div>
              </div>

              {/* Focus narrative */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {education.academicFocus}
              </p>

              {/* Core Coursework Grid */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-violet-500 dark:text-cyan-400" />
                  Key Coursework & Algorithmic Modules
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {education.coreSubjects.map((subject) => (
                    <div
                      key={subject}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#101626] border border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Ethos note */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>
                  Commitment to academic integrity, evidence-based research, and computer science excellence.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
