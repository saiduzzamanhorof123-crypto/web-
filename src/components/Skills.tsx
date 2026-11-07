import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Cpu,
  Binary,
  Brain,
  Network,
  Layers,
  MessageSquareText,
  BarChart2,
  Sparkles,
  GitBranch,
  Github,
  TerminalSquare,
  FileCode,
  Globe,
  Palette,
  Image,
  PenTool,
  Film,
  Wand2,
  Wrench
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

// Icon resolver map
const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Terminal,
  Cpu,
  Binary,
  Code,
  Brain,
  Network,
  Layers,
  MessageSquareText,
  BarChart2,
  Sparkles,
  GitBranch,
  Github,
  TerminalSquare,
  FileCode,
  Globe,
  Palette,
  Image,
  PenTool,
  Film,
  Wand2
};

export const Skills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredCategories = selectedFilter === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.categoryKey === selectedFilter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Wrench className="w-3.5 h-3.5 text-violet-600 dark:text-cyan-400" />
            <span>My Technical Toolkit</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight mb-4">
            Technologies & Methodologies
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            A comprehensive overview of programming languages, artificial intelligence research frameworks, engineering tools, and creative production suites.
          </p>
        </div>

        {/* Category Filter Tabs (Zero-Pill interactive controls) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-200 ${
              selectedFilter === 'all'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Categories ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.categoryKey}
              type="button"
              onClick={() => setSelectedFilter(cat.categoryKey)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                selectedFilter === cat.categoryKey
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.title} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category: SkillCategory) => (
            <div
              key={category.categoryKey}
              className="p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-violet-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {category.skills.length} competencies
                  </span>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-6">
                  {category.description}
                </p>

                {/* Skill Badges & Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => {
                    const IconComponent = ICON_MAP[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        className="group p-3.5 rounded-xl bg-slate-50 dark:bg-[#101626] border border-slate-200/80 dark:border-slate-800/80 hover:border-violet-400/60 dark:hover:border-cyan-400/60 transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-7 h-7 rounded-lg bg-violet-500/10 dark:bg-cyan-500/10 text-violet-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading group-hover:text-violet-600 dark:group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {skill.highlight}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
