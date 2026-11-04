import React, { useEffect } from 'react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  FileText,
  Sparkles 
} from 'lucide-react';

export const CertificateModal = ({ cert, fileData, onClose }) => {
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

  if (!cert) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl my-8 rounded-3xl glass-panel bg-slate-900/95 dark:bg-slate-900/95 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-indigo-500/20 via-cyan-500/15 to-purple-500/20 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 relative">
          <button
            onClick={onClose}
            aria-label="Close certificate modal"
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 text-cyan-400 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Verified Credential
          </span>

          <h2 className="text-2xl font-bold text-white tracking-tight">
            {cert.title}
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Issued to <strong className="text-cyan-300 font-semibold">Venkatesh Malipatil</strong>
          </p>
        </div>

        {/* Certificate Content Preview */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {fileData ? (
            <div className="rounded-2xl border border-slate-700 overflow-hidden bg-slate-950 p-4 text-center">
              {fileData.type.startsWith('image/') ? (
                <img 
                  src={fileData.url} 
                  alt="Uploaded Certificate" 
                  className="max-h-96 mx-auto rounded-xl object-contain shadow-lg"
                />
              ) : (
                <div className="p-8 flex flex-col items-center justify-center gap-3">
                  <FileText className="w-16 h-16 text-indigo-400" />
                  <p className="text-sm font-semibold text-slate-200">{fileData.name}</p>
                  <a
                    href={fileData.url}
                    download={fileData.name}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
                  >
                    Download Uploaded PDF
                  </a>
                </div>
              )}
            </div>
          ) : (
            /* Digital Certificate Representation */
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0c1222] to-[#080d19] border-2 border-indigo-500/30 shadow-inner relative text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 mx-auto flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-indigo-500/30">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400">
                  Certificate of Competency
                </span>
                <h3 className="text-xl font-extrabold text-white mt-1">
                  {cert.title}
                </h3>
              </div>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                {cert.description}
              </p>
              
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-center gap-2">
                {cert.skillsGained.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-cyan-300 border border-indigo-500/20 text-xs font-medium"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Description & Competencies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600 mb-2">
              Verified Technical Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cert.skillsGained.map((skill) => (
                <div
                  key={skill}
                  className="p-2.5 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Status: Authenticated Record
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

