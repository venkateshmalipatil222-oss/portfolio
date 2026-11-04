import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './SocialIcons';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Code, 
  GraduationCap, 
  Layers, 
  Zap, 
  CheckCircle2,
  FileText
} from 'lucide-react';

export const Hero = ({ onOpenResume }) => {
  // Animated Typewriter effect
  const roles = personalInfo.animatedRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          // Pause before deleting
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(90);
        }
      } else {
        // Deleting backward
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const statIcons = {
    Code: <Code className="w-5 h-5 text-indigo-400" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-cyan-400" />,
    Layers: <Layers className="w-5 h-5 text-emerald-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100/90 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-300 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium tracking-wide">
                {personalInfo.statusText}
              </span>
            </div>

            {/* Main Greeting & Display Name */}
            <div className="space-y-1 mb-4">
              <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-cyan-400 light:text-indigo-600">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
                {personalInfo.name}{' '}
                <span className="block sm:inline bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  ({personalInfo.displayName})
                </span>
              </h1>
            </div>

            {/* Dynamic Typewriter Heading */}
            <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 mb-6">
              <span className="mr-2 text-slate-400 light:text-slate-500 font-normal">I am a</span>
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent border-b-2 border-cyan-400/80 pb-0.5">
                {displayText}
              </span>
              <span className="w-0.5 h-6 ml-1 bg-cyan-400 animate-pulse"></span>
            </div>

            {/* Professional Introduction (Exact Prompt Specification) */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl mb-8">
              "{personalInfo.professionalIntroduction}"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* View Projects */}
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download Resume Button */}
              <a
                href={personalInfo.resumePath}
                download="Venkatesh_Malipatil_Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-white dark:hover:text-white light:hover:text-black font-semibold text-sm border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 hover:border-indigo-500/50 hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* View Resume in Modal */}
              <button
                type="button"
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 dark:text-indigo-400 light:text-indigo-600 font-semibold text-sm border border-indigo-500/30 hover:border-indigo-500/60 transition-all cursor-pointer"
                title="Preview interactive resume"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Preview</span>
              </button>
            </div>

            {/* Social Icons & Email */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-cyan-500/50 hover:scale-110 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-indigo-400 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-indigo-500/50 hover:scale-110 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-emerald-400 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-emerald-500/50 hover:scale-110 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Avatar & Interactive Terminal Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Interactive Terminal Window */}
            <div className="w-full max-w-md rounded-2xl glass-panel shadow-2xl shadow-indigo-950/30 overflow-hidden border border-slate-800 dark:border-slate-800 light:border-slate-200">
              
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>v3nkey@engineer:~</span>
                </div>
                <div className="w-10"></div>
              </div>

              {/* Developer Profile Header inside Card */}
              <div className="p-5 pb-3 flex items-center gap-4 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/50 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                <div className="relative group">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-indigo-500/50 p-0.5 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 shadow-md">
                    <img 
                      src={personalInfo.avatarUrl} 
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover rounded-[14px]"
                      onError={(e) => {
                        // Fallback avatar icon if image not found
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-slate-900 flex items-center justify-center font-bold text-cyan-400 text-lg">VK</div>';
                      }}
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-slate-900" title="Active"></span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-1.5">
                    {personalInfo.name}
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </h3>
                  <p className="text-xs text-indigo-400 font-medium">
                    {personalInfo.careerGoal}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    VTU (CSE) • CGPA 8.59
                  </p>
                </div>
              </div>

              {/* Code Snippet in Terminal */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-800 bg-[#090e1b] dark:bg-[#090e1b] light:bg-slate-100/90 overflow-x-auto">
                <div className="text-slate-500 select-none">// Developer Profile Model</div>
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-amber-300">"{personalInfo.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">alias:</span>{' '}
                  <span className="text-amber-300">"{personalInfo.displayName}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span>{' '}
                  <span className="text-amber-300">"B.E. CSE @ VTU"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreTech:</span> [
                  <span className="text-emerald-400">"Python"</span>,{' '}
                  <span className="text-emerald-400">"FastAPI"</span>,{' '}
                  <span className="text-emerald-400">"React"</span>,{' '}
                  <span className="text-emerald-400">"MySQL"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">openToOpportunities:</span>{' '}
                  <span className="text-indigo-400">true</span>
                </div>
                <div>&#125;;</div>
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Ready for Deployment
                  </span>
                  <span className="text-slate-500">UTF-8 • JavaScript</span>
                </div>
              </div>

              {/* Floating Skill Badges */}
              <div className="p-4 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50/80 border-t border-slate-800/80 flex flex-wrap gap-2 justify-center">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 text-[11px] font-medium">
                  🐍 Python 3.13
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-[11px] font-medium">
                  ⚡ FastAPI & Flask
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/30 text-[11px] font-medium">
                  ⚛️ React.js
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[11px] font-medium">
                  🐬 MySQL
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
          {personalInfo.quickStats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-2xl glass-panel text-center hover:border-indigo-500/40 transition-all group hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 group-hover:scale-110 transition-transform">
                  {statIcons[stat.icon] || <Code className="w-5 h-5 text-indigo-400" />}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
