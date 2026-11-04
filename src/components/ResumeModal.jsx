import React, { useEffect } from 'react';
import { personalInfo, technicalSkills, projects, educationList } from '../data/portfolioData';
import { Github, Linkedin } from './SocialIcons';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  ExternalLink, 
  Mail, 
  MapPin, 
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl my-6 rounded-3xl glass-panel bg-slate-900/95 dark:bg-slate-900/95 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/15 text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900">
                Curriculum Vitae • {personalInfo.name}
              </h2>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                Placement & Software Developer Candidate Profile
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Print resume"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs font-semibold cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={personalInfo.resumePath}
              download="Venkatesh_Malipatil_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-xs font-semibold shadow-md shadow-indigo-500/25 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-200 text-slate-400 hover:text-white border border-slate-800 dark:border-slate-800 light:border-slate-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090d18] dark:bg-[#090d18] light:bg-slate-50 text-slate-200 dark:text-slate-200 light:text-slate-800 font-sans">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-300 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white dark:text-white light:text-slate-900">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold text-cyan-400 dark:text-cyan-400 light:text-indigo-600 mt-1">
                {personalInfo.careerGoal} • Computer Science and Engineering
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {personalInfo.university}
              </p>
            </div>

            <div className="text-xs space-y-1 text-slate-400 dark:text-slate-400 light:text-slate-600 text-center sm:text-right">
              <div className="flex items-center justify-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline text-cyan-300">
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <span>GitHub: </span>
                <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                  {personalInfo.githubUrl.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-indigo-600 mb-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-300 pb-1">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {personalInfo.professionalIntroduction}
            </p>
          </div>

          {/* Technical Skills Table */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-indigo-600 mb-3 border-b border-slate-800 dark:border-slate-800 light:border-slate-300 pb-1">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 dark:border-slate-800 light:border-slate-300">
                <strong className="text-indigo-300">Languages & Backend:</strong>
                <p className="text-slate-300 mt-1">Python, JavaScript (ES6+), SQL, FastAPI, Flask, REST APIs</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 dark:border-slate-800 light:border-slate-300">
                <strong className="text-cyan-300">Frontend & Database:</strong>
                <p className="text-slate-300 mt-1">React.js, HTML5, CSS3, Tailwind CSS, MySQL</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 dark:border-slate-800 light:border-slate-300">
                <strong className="text-emerald-300">AI / ML & Vision:</strong>
                <p className="text-slate-300 mt-1">NLP Text Classification, TF-IDF Cosine Similarity, RapidOCR, OpenCV, YOLOv8</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 dark:border-slate-800 light:border-slate-300">
                <strong className="text-amber-300">Developer Tools:</strong>
                <p className="text-slate-300 mt-1">Git, GitHub, VS Code, Virtual Environments, Postman</p>
              </div>
            </div>
          </div>

          {/* Highlighted Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-indigo-600 mb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-300 pb-1">
              Software Development Projects
            </h3>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div 
                  key={proj.id}
                  className="p-4 rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                    <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                      {proj.title}
                    </h4>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2 font-mono">
                    Technologies: {proj.technologies.slice(0, 5).join(', ')}
                  </p>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-2">
                    {proj.summary}
                  </p>
                  <ul className="space-y-1">
                    {proj.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="text-[11px] text-slate-400 flex items-start gap-1.5">
                        <span className="text-cyan-400">▪</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-indigo-600 mb-3 border-b border-slate-800 dark:border-slate-800 light:border-slate-300 pb-1">
              Education
            </h3>
            <div className="space-y-3">
              {educationList.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs">
                  <div>
                    <h4 className="font-bold text-white dark:text-white light:text-slate-900">
                      {edu.degree}
                    </h4>
                    <p className="text-slate-400">
                      {edu.institution} • {edu.university}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-emerald-400">{edu.score}</span>
                    <p className="text-slate-500 font-mono text-[11px]">{edu.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {personalInfo.statusText}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumePath}
              download="Venkatesh_Malipatil_Resume.pdf"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-semibold shadow-md"
            >
              Download PDF Version
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
