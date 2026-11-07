import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Sparkles, FolderGit2, Info, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#101626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-violet-600 dark:text-cyan-400" />
            <span>Selected Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight mb-4">
            AI Research & Software Engineering
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Featured academic research, intelligent student utility concepts, and responsive software solutions designed with modern software engineering principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-violet-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header / Visual Preview Container */}
              <div>
                <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-[#101626] p-6 flex flex-col justify-between overflow-hidden border-b border-slate-100 dark:border-slate-800">
                  {/* Subtle Grid in card visual */}
                  <div className="absolute inset-0 futuristic-grid opacity-30 pointer-events-none" />

                  {/* Top metadata within preview */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-cyan-300 tracking-wider">
                      {project.category}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${
                        project.status === 'Completed'
                          ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                          : project.status === 'In Progress'
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                          : 'bg-violet-500/15 text-violet-300 border-violet-500/30'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Icon illustration in preview */}
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-violet-300 transition-all">
                      {project.id === 'rs-chaf-net' ? (
                        <Sparkles className="w-6 h-6" />
                      ) : project.id === 'ai-student-super-app' ? (
                        <Code2 className="w-6 h-6" />
                      ) : (
                        <FolderGit2 className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400">ID: {project.id}</span>
                      <h4 className="text-white font-bold text-base font-heading line-clamp-1">
                        {project.name.split('—')[0]}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading mb-2.5 group-hover:text-violet-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-lg text-[11px] font-mono text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="w-full mb-3 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-violet-500 dark:text-cyan-400" />
                  <span>Architecture & Deep Dive</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700/80 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span
                      title="Ongoing research / concept prototype"
                      className="py-2 px-3 rounded-xl text-[11px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 cursor-default"
                    >
                      In Development
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Architecture Details */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
