import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Terminal, Layers, Cpu, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onNotify?: (message: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNotify }) => {
  const { profile } = PORTFOLIO_DATA;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Animated typing effect
  useEffect(() => {
    const fullText = profile.typingRoles[currentRoleIndex];
    const typingSpeed = isDeleting ? 45 : 95;
    const pauseBeforeDelete = 2000;
    const pauseBeforeNext = 400;

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === fullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % profile.typingRoles.length);
      timer = setTimeout(() => {}, pauseBeforeNext);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, profile.typingRoles]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    if (onNotify) {
      onNotify('Email copied to clipboard: ' + profile.email);
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden futuristic-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full glow-purple -z-10 pointer-events-none opacity-60 dark:opacity-80 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full glow-cyan -z-10 pointer-events-none opacity-50 dark:opacity-70 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Small Label with futuristic kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-semibold tracking-wider uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
              <span>{profile.label}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading leading-tight mb-4">
              <span className="bg-gradient-to-r from-slate-900 via-violet-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-cyan-200 bg-clip-text text-transparent">
                {profile.title}
              </span>
            </h1>

            {/* Professional Subtitle */}
            <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 mb-4 max-w-2xl">
              {profile.subtitles}
            </p>

            {/* Animated Typing Text Box */}
            <div className="flex items-center gap-2 py-2 px-4 rounded-xl bg-slate-100/90 dark:bg-[#111827]/90 border border-slate-300/80 dark:border-slate-800 backdrop-blur-md mb-6 w-full max-w-lg">
              <Terminal className="w-4 h-4 text-violet-600 dark:text-cyan-400 shrink-0" />
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 shrink-0">
                Focus:
              </span>
              <span className="text-sm sm:text-base font-semibold font-mono text-violet-700 dark:text-cyan-300 min-h-[1.5rem] flex items-center">
                {displayedText}
                <span className="inline-block w-2 h-4 ml-1 bg-cyan-500 dark:bg-cyan-400 animate-blink" />
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg max-w-2xl mb-8">
              {profile.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-lg shadow-violet-500/25 dark:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-[#111827]/80 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Copy Email */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full max-w-lg">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Connect:
              </span>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-200/60 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-cyan-400 hover:bg-slate-300/60 dark:hover:bg-slate-700/70 transition-all"
                title="GitHub: saiduzzamanhorof123-crypto"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-200/60 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-cyan-400 hover:bg-slate-300/60 dark:hover:bg-slate-700/70 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy Email"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-200/60 dark:bg-slate-800/70 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-cyan-400 hover:bg-slate-300/60 dark:hover:bg-slate-700/70 transition-all"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Mail className="w-3.5 h-3.5" />}
                <span className="font-mono text-[11px] truncate max-w-[170px]">{profile.email}</span>
                <Copy className="w-3 h-3 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Futuristic AI Visual Framing with Real Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Visual container with holographic border frame */}
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] group">
              
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />

              {/* Main Photo Card Frame */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60 shadow-2xl flex flex-col justify-end">
                
                {/* Real User Photo */}
                <img
                  src={profile.avatarUrl}
                  alt="Saiduzzaman Horof — Computer Science & Engineering Student and AI Developer"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Ambient Scrim at bottom */}
                <div className="relative z-10 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-base font-heading tracking-wide">
                        Saiduzzaman Horof
                      </h3>
                      <p className="text-cyan-300 text-xs font-mono">
                        Hamdard Univ. Bangladesh (CSE)
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono text-cyan-200">
                      Undergrad
                    </div>
                  </div>
                </div>

                {/* Subtle digital scanning lines accent */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none opacity-40" />
              </div>

              {/* Floating Technology Badges around photo */}
              <div className="absolute -top-4 -left-4 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-300 dark:border-slate-700/80 shadow-lg flex items-center gap-2 transform -rotate-3 hover:rotate-0 transition-transform">
                <Cpu className="w-4 h-4 text-violet-500" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">BanglaBERT NLP</span>
              </div>

              <div className="absolute top-1/2 -right-6 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-300 dark:border-slate-700/80 shadow-lg flex items-center gap-2 transform rotate-3 hover:rotate-0 transition-transform">
                <Layers className="w-4 h-4 text-cyan-500" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">PyTorch & Transformers</span>
              </div>

              <div className="absolute -bottom-4 left-6 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-300 dark:border-slate-700/80 shadow-lg flex items-center gap-2 transform -rotate-2 hover:rotate-0 transition-transform">
                <Terminal className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Python · C++ · Java</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
