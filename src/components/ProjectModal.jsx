import React, { useEffect } from 'react';
import { Github } from './SocialIcons';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Layers, 
  Sparkles,
  Terminal,
  Code
} from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl my-8 rounded-3xl glass-panel bg-slate-900/95 dark:bg-slate-900/95 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Preview Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.previewGradient} border-b border-slate-800 dark:border-slate-800 light:border-slate-200 relative`}>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white hover:bg-slate-800 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 text-cyan-400 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {project.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-slate-200 text-sm mt-2 max-w-xl">
            {project.summary}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          
          {/* Key Metrics Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-center"
              >
                <div className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 font-semibold">
                  {m.label}
                </div>
                <div className="text-sm font-bold text-white dark:text-white light:text-slate-900 mt-0.5">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 dark:text-indigo-400 light:text-indigo-600 mb-2 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Project Overview & Architecture</span>
            </h3>
            <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features Checklist */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Implemented Features & Subsystems</span>
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <li 
                  key={idx} 
                  className="p-3 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/80 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Pills */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600 mb-2.5 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Technologies & Libraries Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 text-xs font-mono text-cyan-300 dark:text-cyan-300 light:text-indigo-600 border border-slate-800 dark:border-slate-800 light:border-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
            Source repository on GitHub
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white cursor-pointer"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-md shadow-indigo-500/25 transition-all cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
