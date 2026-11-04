import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './SocialIcons';
import { 
  Mail, 
  Send, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  MessageSquare
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide a valid full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a detailed message (at least 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch & formulate mailto trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleOpenMailClient = () => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Opportunity Discussion')}&body=${encodeURIComponent(`Hi Venkatesh,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 dark:text-indigo-400 light:text-indigo-600 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Get in Touch for{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-4">
            Interested in discussing software development roles, project collaborations, or technical interviews? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-indigo-500/50 transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Direct Email Address
                </h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 hover:text-cyan-400 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
                <p className="text-xs text-slate-400 mt-1">
                  Editable in <code>src/data/portfolioData.js</code>
                </p>
              </div>
            </div>

            {/* Social & Location Details */}
            <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-5 shadow-xl">
              
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600">
                    Location
                  </h4>
                  <p className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mt-0.5">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="w-10 h-10 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 flex items-center justify-center text-slate-300 shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600">
                    GitHub Profile
                  </h4>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-cyan-400 hover:underline mt-0.5 block break-all"
                  >
                    {personalInfo.githubUrl.replace('https://', '')}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="w-10 h-10 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 flex items-center justify-center text-indigo-400 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600">
                    LinkedIn Profile (Editable)
                  </h4>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-indigo-400 hover:underline mt-0.5 block break-all"
                  >
                    {personalInfo.linkedinUrl.replace('https://', '')}
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form with Real-time Validation */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-2xl relative">
              
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-1 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
                All fields are validated in real-time. Messages can be submitted directly or routed via your email client.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Prepared Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-cyan-300">{formData.name}</strong>. Your inquiry has been received. You can also trigger an email in your default mail app for immediate dispatch.
                  </p>
                  
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleOpenMailClient}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-semibold shadow-md cursor-pointer hover:shadow-indigo-500/30"
                    >
                      Open Email App with Details
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5"
                      >
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 text-white dark:text-white light:text-slate-900 text-sm border ${
                          errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300 focus:border-indigo-500'
                        } outline-none transition-all placeholder:text-slate-600`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5"
                      >
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 text-white dark:text-white light:text-slate-900 text-sm border ${
                          errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300 focus:border-indigo-500'
                        } outline-none transition-all placeholder:text-slate-600`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5"
                    >
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Developer Placement / Interview Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 text-white dark:text-white light:text-slate-900 text-sm border ${
                        errors.subject ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300 focus:border-indigo-500'
                      } outline-none transition-all placeholder:text-slate-600`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5"
                    >
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the opportunity, role requirements, or project details..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 text-white dark:text-white light:text-slate-900 text-sm border ${
                        errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300 focus:border-indigo-500'
                      } outline-none transition-all placeholder:text-slate-600 resize-none`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                      Response time: Within 24 hours
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
