import React, { useState } from 'react';
import { certifications } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { 
  Award, 
  Upload, 
  FileCheck, 
  ExternalLink, 
  CheckCircle, 
  FileText, 
  Trash2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState({});

  const handleFileUpload = (e, certId) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setUploadedFiles(prev => ({
        ...prev,
        [certId]: {
          name: file.name,
          url: fileUrl,
          type: file.type,
          size: (file.size / 1024).toFixed(1) + ' KB'
        }
      }));
    }
  };

  const handleRemoveFile = (certId, e) => {
    e.stopPropagation();
    setUploadedFiles(prev => {
      const copy = { ...prev };
      delete copy[certId];
      return copy;
    });
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-600 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Professional{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-4">
            Recognized certifications validating specialized knowledge in Python development and SQL relational databases.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => {
            const uploaded = uploadedFiles[cert.id];

            return (
              <div
                key={cert.id}
                className="p-8 rounded-3xl glass-panel border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-[11px] font-mono text-cyan-400 border border-slate-800 dark:border-slate-800 light:border-slate-300">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-400 dark:text-indigo-400 light:text-indigo-600 mt-1">
                    {cert.issuer}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 mt-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Tagged */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cert.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 text-xs text-slate-300 dark:text-slate-300 light:text-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>

                  {/* Upload Notification Box if uploaded */}
                  {uploaded && (
                    <div className="mt-5 p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-indigo-300 font-medium truncate">
                        <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="truncate">{uploaded.name}</span>
                        <span className="text-[10px] text-slate-400">({uploaded.size})</span>
                      </div>
                      <button
                        onClick={(e) => handleRemoveFile(cert.id, e)}
                        className="p-1 hover:text-rose-400 text-slate-400 transition-colors"
                        title="Remove uploaded file"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                </div>

                {/* Card Actions (Bottom) */}
                <div className="mt-8 pt-5 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  
                  {/* Upload Certificate Button */}
                  <label className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 hover:bg-slate-800 text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-indigo-500/50 cursor-pointer transition-all">
                    <Upload className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{uploaded ? 'Change File' : 'Upload File / PDF'}</span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileUpload(e, cert.id)}
                      className="hidden"
                    />
                  </label>

                  {/* View Details Button */}
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all cursor-pointer"
                  >
                    <span>{uploaded ? 'Preview Upload' : 'View Certificate'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                </div>

              </div>
            );
          })}
        </div>

        {/* Modal for Certificate Inspection */}
        {activeCert && (
          <CertificateModal
            cert={activeCert}
            fileData={uploadedFiles[activeCert.id]}
            onClose={() => setActiveCert(null)}
          />
        )}

      </div>
    </section>
  );
};

