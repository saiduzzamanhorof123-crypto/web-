import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-[#080B14] border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100 dark:border-slate-800/80">
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow">
                SH
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
                SAIDUZZAMAN HOROF
              </span>
            </div>

            <p className="text-sm font-medium text-slate-600 dark:text-slate-300 italic mb-4 max-w-sm">
              "Exploring Technology. Building Intelligence. Creating Impact."
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Computer Science & Engineering Student at Hamdard University Bangladesh. Passionate about Artificial Intelligence, Bangla NLP research, and modern software development.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-sm">
              <a href="#home" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">About Me</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">Toolkit</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">Selected Projects</a>
              <a href="#research" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">Research & NLP</a>
              <a href="#education" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">Education</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Channels & Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Connect With Me
            </h4>
            
            <div className="flex items-center gap-3 mb-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Send direct email"
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate">
              {profile.email}
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <div>
            © {currentYear} Saiduzzaman Horof. All rights reserved.
          </div>

          <button
            type="button"
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
