import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Copy, Check, Sparkles, AlertCircle, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { validateContactForm, generateMailtoLink, ContactFormData, ValidationErrors } from '../utils/portfolio';

interface ContactProps {
  onNotify?: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const { profile } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<ValidationErrors>({ isValid: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    setErrors(validation);

    if (!validation.isValid) {
      return;
    }

    setIsSubmitting(true);
    // Smooth transition simulation for form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      if (onNotify) {
        onNotify('Message prepared! Click "Send via Email Client" to dispatch directly.');
      }
    }, 600);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    if (onNotify) {
      onNotify('Copied ' + profile.email);
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailtoLink = submittedData
    ? generateMailtoLink(profile.email, submittedData.subject, submittedData.message, submittedData.name, submittedData.email)
    : generateMailtoLink(profile.email, formData.subject, formData.message, formData.name, formData.email);

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#101626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5 text-violet-600 dark:text-cyan-400" />
            <span>Let's Connect</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight mb-4">
            "Have an Interesting Idea? Let's Build Something Together."
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            I'm always interested in connecting with developers, researchers, students, and creative thinkers. Feel free to reach out for collaboration, projects, or research discussions.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-4">
                Direct Channels
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Prefer direct communication? Reach out via email or connect with me on GitHub and LinkedIn.
              </p>

              {/* Email Card with Copy Affordance */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200/80 dark:border-slate-800/80 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-mono text-slate-400 uppercase">Public Email</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                      {profile.email}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy Email address"
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/80 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200/80 dark:border-slate-800/80 mb-4 flex items-center justify-between hover:border-violet-500/40 dark:hover:border-cyan-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">GitHub Profile</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-cyan-300 transition-colors">
                      saiduzzamanhorof123-crypto
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-violet-500 transition-colors" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between hover:border-violet-500/40 dark:hover:border-cyan-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-cyan-300 transition-colors">
                      Saiduzzaman Horof
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 transition-colors" />
              </a>
            </div>

            {/* University & Location Badge */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Academic Affiliation: </span>
              Department of Computer Science & Engineering, Hamdard University Bangladesh.
            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-md">
              
              {submittedData ? (
                /* Success & Dispatch State */
                <div className="text-left animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mb-6">
                    <Check className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-2">
                    Message Ready for Saiduzzaman!
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900 dark:text-white">{submittedData.name}</span>. Your message regarding <span className="font-semibold text-slate-900 dark:text-white">"{submittedData.subject}"</span> has been formatted. Choose how you would like to dispatch it:
                  </p>

                  {/* Summary Box */}
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 mb-6 font-mono space-y-1.5">
                    <div><span className="text-slate-400">To:</span> {profile.email}</div>
                    <div><span className="text-slate-400">From:</span> {submittedData.name} ({submittedData.email})</div>
                    <div><span className="text-slate-400">Subject:</span> {submittedData.subject}</div>
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 italic">
                      "{submittedData.message}"
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-md transition-all duration-200"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via Default Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(submittedData.message);
                        if (onNotify) onNotify('Message body copied to clipboard!');
                      }}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                      <span>Copy Message Text</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* Form Input State */
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <MessageSquare className="w-4 h-4 text-violet-500" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Send a Direct Message
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Full Name <span className="text-violet-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alan Turing"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-[#101626] border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500/20'
                            : 'border-slate-200 dark:border-slate-800 focus:border-violet-500 focus:ring-violet-500/20'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Email Address <span className="text-violet-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. alan@cambridge.edu"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-[#101626] border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500/20'
                            : 'border-slate-200 dark:border-slate-800 focus:border-violet-500 focus:ring-violet-500/20'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-5">
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Subject <span className="text-violet-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Research Collaboration on Bangla NLP"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-[#101626] border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-slate-200 dark:border-slate-800 focus:border-violet-500 focus:ring-violet-500/20'
                      }`}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Message <span className="text-violet-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your inquiry, project proposal, or collaboration thoughts here..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-[#101626] border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-slate-200 dark:border-slate-800 focus:border-violet-500 focus:ring-violet-500/20'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-md hover:shadow-cyan-500/20 active:scale-[0.99] disabled:opacity-50 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Validating Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
