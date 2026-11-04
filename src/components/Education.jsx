import React from 'react';
import { educationList, personalInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  MapPin, 
  CheckCircle,
  FileCode2
} from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 dark:text-cyan-400 light:text-indigo-600 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Education &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-4">
            Formal training in Computer Science and Engineering under Visvesvaraya Technological University (VTU).
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-indigo-500/40 transition-all duration-300 relative group shadow-lg"
            >
              {/* Highlight ribbon for primary degree */}
              {idx === 0 && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Primary Degree • Distinction</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-indigo-400 dark:text-indigo-400 light:text-indigo-600 mt-1">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono mt-0.5">
                    Affiliated to {edu.university}
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs font-mono text-cyan-300 dark:text-cyan-300 light:text-slate-700">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {edu.duration}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                    {edu.score}
                  </span>
                </div>
              </div>

              {/* Highlights & Coursework */}
              <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <ul className="space-y-2">
                  {edu.highlights.map((h, i) => (
                    <li 
                      key={i} 
                      className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Note on Configurability */}
        <div className="max-w-4xl mx-auto mt-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">
            <FileCode2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Editable configuration available in <code>src/data/portfolioData.js</code></span>
          </div>
        </div>

      </div>
    </section>
  );
};
