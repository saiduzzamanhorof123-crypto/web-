import React, { useState } from 'react';
import { Microscope, FileText, Sparkles, Copy, Check, ArrowRight, Layers, Eye, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { generateBibtexCitation } from '../utils/portfolio';

interface ResearchProps {
  onNotify?: (message: string) => void;
}

export const Research: React.FC<ResearchProps> = ({ onNotify }) => {
  const { research } = PORTFOLIO_DATA;
  const { paper } = research;
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [showAbstractModal, setShowAbstractModal] = useState(false);

  const bibtexString = generateBibtexCitation(
    paper.bibtexKey,
    paper.title,
    paper.authors.join(', '),
    paper.institution,
    2026,
    paper.interests.slice(0, 4)
  );

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(bibtexString);
    setCopiedBibtex(true);
    if (onNotify) {
      onNotify('BibTeX citation copied to clipboard');
    }
    setTimeout(() => setCopiedBibtex(false), 2500);
  };

  return (
    <section id="research" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Microscope className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Research & Innovation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight mb-4">
            RS-CHAF-Net Framework
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {paper.description}
          </p>
        </div>

        {/* Featured Research Card */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Paper Metadata & Abstract Summary */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-3">
                <span>Working Paper</span>
                <span>·</span>
                <span>Hamdard University Bangladesh</span>
                <span>·</span>
                <span>Ongoing Academic Investigation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading mb-3">
                {paper.title}
              </h3>

              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-5">
                {paper.subtitle}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200/80 dark:border-slate-800/80 mb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold text-slate-900 dark:text-white font-heading">Abstract Summary: </span>
                {paper.abstract}
              </div>

              {/* Research Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowAbstractModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Manuscript Abstract</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyBibtex}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  {copiedBibtex ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedBibtex ? 'BibTeX Copied!' : 'Copy BibTeX'}</span>
                </button>

                <div
                  title="Paper is undergoing academic preparation and review"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 bg-slate-100/50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 cursor-default"
                >
                  <FileText className="w-4 h-4" />
                  <span>PDF in Peer Review</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Key Research Topic Tags & Honest Disclaimers */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full p-6 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200/80 dark:border-slate-800/80">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                  Core Research Interests
                </h4>

                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-[#111827] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-xs"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Research Integrity Notice: </span>
                In accordance with academic standards, results and metrics are subject to empirical verification and peer-review prior to formal publication release.
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Methodology Pipeline Visual */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 mb-8 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-cyan-500" />
                RS-CHAF-Net Methodology Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Click each stage below to explore the internal architectural pipeline.
              </p>
            </div>

            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
              Interactive 4-Stage Architecture
            </div>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {paper.methodologySteps.map((step, idx) => (
              <button
                key={step.step}
                type="button"
                onClick={() => setSelectedStep(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                  selectedStep === idx
                    ? 'bg-violet-500/10 dark:bg-cyan-500/10 border-violet-500 dark:border-cyan-400 shadow-sm'
                    : 'bg-slate-50 dark:bg-[#101626] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${selectedStep === idx ? 'text-violet-600 dark:text-cyan-400' : 'text-slate-400'}`}>
                    STAGE {step.step}
                  </span>
                  {selectedStep === idx && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white font-heading line-clamp-1">
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Detail Visual Container */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xl shrink-0 font-mono shadow-md">
              {paper.methodologySteps[selectedStep].step}
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white font-heading mb-2">
                {paper.methodologySteps[selectedStep].title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {paper.methodologySteps[selectedStep].detail}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Abstract Modal */}
      {showAbstractModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowAbstractModal(false)}
        >
          <div
            className="w-full max-w-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-mono uppercase text-cyan-500 font-semibold">Manuscript Abstract</span>
              <button
                type="button"
                onClick={() => setShowAbstractModal(false)}
                className="text-xs font-mono text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Close [ESC]
              </button>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mt-4 mb-3">
              {paper.title}
            </h3>

            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
              Authors: Saiduzzaman Horof · Affiliation: Hamdard University Bangladesh (CSE)
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-h-60 overflow-y-auto">
              {paper.abstract}
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={handleCopyBibtex}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
              >
                {copiedBibtex ? 'BibTeX Copied!' : 'Copy Citation'}
              </button>
              <button
                type="button"
                onClick={() => setShowAbstractModal(false)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-violet-600 text-white hover:bg-violet-500 transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
