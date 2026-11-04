import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Github } from './SocialIcons';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  CheckCircle,
  Eye
} from 'lucide-react';

export const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const filterTabs = [
    { label: 'All Projects', key: 'all' },
    { label: 'AI & Machine Learning', key: 'ai' },
    { label: 'Full Stack & Web', key: 'fullstack' },
    { label: 'Python & Backend', key: 'backend' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.filterKey === selectedFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 dark:text-indigo-400 light:text-indigo-600 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Real-World Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Featured Projects &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Software Systems
            </span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-4">
            Production-grade systems built with Python, FastAPI, Flask, React.js, and relational databases.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedFilter(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedFilter === tab.key
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-[1.02]'
                  : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-400 hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl glass-panel border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 overflow-hidden flex flex-col justify-between hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-300 group shadow-xl shadow-black/20"
            >
              <div>
                
                {/* Visual Preview Header */}
                <div className={`p-6 bg-gradient-to-br ${project.previewGradient} relative border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-[11px] font-semibold text-cyan-400 border border-cyan-500/30 uppercase tracking-wider">
                      {project.badge}
                    </span>
                    <button
                      onClick={() => setActiveProject(project)}
                      className="p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80 transition-colors cursor-pointer"
                      title="Inspect Architecture"
                    >
                      <Eye className="w-4 h-4 text-cyan-400" />
                    </button>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-slate-200 mt-2 line-clamp-2 font-light">
                    {project.summary}
                  </p>
                </div>

                {/* Project Details Content */}
                <div className="p-6 space-y-5">
                  
                  {/* Highlights from actual implementation */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600 mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Key Capabilities</span>
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((f, i) => (
                        <li 
                          key={i} 
                          className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                          <span className="line-clamp-2">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Stack</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-lg bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 text-[11px] font-mono text-cyan-300 dark:text-cyan-300 light:text-indigo-600 border border-slate-800 dark:border-slate-800 light:border-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-2 py-0.5 text-[10px] text-slate-400">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                </div>

              </div>

              {/* Action Buttons (Bottom) */}
              <div className="p-6 pt-0 mt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex items-center justify-between gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 dark:text-indigo-400 light:text-indigo-600 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white text-xs font-semibold border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-indigo-500/50 transition-all cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-semibold hover:shadow-md transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for In-Depth Project Review */}
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}

      </div>
    </section>
  );
};
