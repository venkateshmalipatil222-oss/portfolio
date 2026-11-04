import React, { useState } from 'react';
import { technicalSkills } from '../data/portfolioData';
import { 
  Code, 
  Layers, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Terminal,
  Sparkles
} from 'lucide-react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'Tools & Platforms'];

  const categoryIcons = {
    Programming: <Code className="w-5 h-5 text-indigo-400" />,
    Frontend: <Layers className="w-5 h-5 text-cyan-400" />,
    Backend: <Server className="w-5 h-5 text-emerald-400" />,
    Database: <Database className="w-5 h-5 text-amber-400" />,
    'Tools & Platforms': <Wrench className="w-5 h-5 text-purple-400" />
  };

  const getLevelBadge = (level) => {
    switch (level.toLowerCase()) {
      case 'advanced':
        return {
          label: 'Advanced',
          className: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
        };
      case 'proficient':
      default:
        return {
          label: 'Proficient',
          className: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
        };
    }
  };

  const filteredCategories = activeCategory === 'All'
    ? technicalSkills
    : technicalSkills.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 dark:text-cyan-400 light:text-indigo-600 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Core Technical{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Proficiencies & Toolset
            </span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-4">
            Hands-on technical skills demonstrated through real-world backend architectures, databases, and responsive web applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-[1.02]'
                  : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-400 hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl glass-panel border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 group-hover:scale-110 transition-transform">
                      {categoryIcons[group.category] || <Code className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                        {group.category}
                      </h3>
                      <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
                        {group.skills.length} core competencies
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Item List */}
                <div className="space-y-4">
                  {group.skills.map((skill) => {
                    const badgeInfo = getLevelBadge(skill.level);
                    return (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/80 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80 hover:border-indigo-500/30 transition-all"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-sm text-slate-100 dark:text-slate-100 light:text-slate-800 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border ${badgeInfo.className}`}>
                            {badgeInfo.label}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 pl-3">
                          {skill.highlight}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 italic">
                {group.description}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Architecture Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                Placement-Ready Technical Stack
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                Proficient in building end-to-end applications from database relational modeling in MySQL to Python server-side APIs and interactive React frontends.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 hover:border-indigo-500/50 hover:text-cyan-400 transition-all shrink-0 cursor-pointer"
          >
            See Them in Action ↓
          </a>
        </div>

      </div>
    </section>
  );
};
