import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './SocialIcons';
import { 
  Code2, 
  Mail, 
  Heart, 
  ArrowUp, 
  ExternalLink 
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-[#05070e] dark:bg-[#05070e] light:bg-slate-100 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
          
          {/* Brand & Introduction */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-[#0a0f1d] rounded-[9px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
                {personalInfo.displayName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-sm">
              Computer Science & Engineering graduate from Visvesvaraya Technological University (VTU) passionate about Python, scalable backend architectures, and modern web applications.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{personalInfo.statusText}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-indigo-600 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700">
              Connect Online
            </h4>
            
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-indigo-400 border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-emerald-400 border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-cyan-400 transition-colors pt-2 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
          <div>
            © {new Date().getFullYear()} <strong className="text-white dark:text-white light:text-slate-900 font-semibold">{personalInfo.name} ({personalInfo.displayName})</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px]">
            <span>Crafted with React, Tailwind CSS & Vite</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
