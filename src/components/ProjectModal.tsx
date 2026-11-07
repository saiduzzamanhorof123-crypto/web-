import React from 'react';
import { X, Github, ExternalLink, Cpu, CheckCircle, ShieldCheck } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-left my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with category and close button */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold uppercase text-violet-600 dark:text-cyan-400">
              {project.category}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Status: {project.status}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <h3 id="modal-project-title" className="text-2xl font-bold text-slate-900 dark:text-white font-heading mt-4 mb-2">
          {project.name}
        </h3>

        {/* Long Narrative Description */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {project.longDescription}
        </p>

        {/* Metric Highlights Strip */}
        {project.metricHighlights && (
          <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200/80 dark:border-slate-800/80">
            {project.metricHighlights.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">{m.label}</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-heading mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Architecture & Engineering Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-cyan-500" />
            Key Architecture & Methodological Highlights
          </h4>
          <div className="space-y-2.5">
            {project.architectureHighlights.map((point) => (
              <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-violet-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Badges */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Honest academic & development status</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700/80 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Repository</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-colors"
              >
                <span>Live View</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
