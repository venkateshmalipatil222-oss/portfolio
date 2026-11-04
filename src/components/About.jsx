import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  Cpu, 
  Globe, 
  Sparkles, 
  CheckCircle, 
  Code2, 
  BookOpen, 
  Compass, 
  Target 
} from 'lucide-react';

export const About = () => {
  const pillars = [
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-400" />,
      title: "Computer Science Foundation",
      description:
        "Strong academic grounding in Data Structures, Algorithms, DBMS, Operating Systems, and Object-Oriented Software Architecture from Visvesvaraya Technological University (VTU)."
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: "Python & Backend Systems",
      description:
        "Specialized in Python programming, crafting high-performance REST APIs with FastAPI & Flask, relational schema design with MySQL, and secure server-side logic."
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: "Full Stack Integration",
      description:
        "Seamlessly connecting modern React.js frontend interfaces with robust backend endpoints, focusing on responsiveness, state management, and user-centric design."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "AI & Applied Intelligence",
      description:
        "Building practical AI-enhanced applications, including NLP resume classifiers, vision-based integrity tracking (YOLOv8 & MediaPipe), and statistical anomaly detection."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 dark:text-indigo-400 light:text-indigo-600 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Engineering Practical Solutions with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Clean Architecture
            </span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-4">
            Get to know my academic background, programming passion, and approach to software development.
          </p>
        </div>

        {/* Story & Background Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Biography Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-3xl glass-panel border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-5">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>My Journey in Software Engineering</span>
              </h3>

              {personalInfo.aboutParagraphs.map((para, idx) => (
                <p 
                  key={idx} 
                  className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed"
                >
                  {para}
                </p>
              ))}

              {/* Career Goal Banner */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-indigo-500/15 via-indigo-600/10 to-cyan-500/15 border border-indigo-500/30 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-indigo-500/20 text-cyan-400 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                    Placement & Career Objective:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">
                    Actively seeking entry-level roles as a <strong className="text-cyan-400 font-semibold">{personalInfo.careerGoal}</strong> where I can apply strong Python skills, design performant REST backends, build dynamic web applications, and contribute to innovative engineering teams.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Interests Section */}
            <div className="p-6 rounded-3xl glass-panel border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600 mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-400" />
                <span>Core Professional Interests</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {personalInfo.professionalInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-800 text-xs font-medium border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-indigo-500/50 hover:text-cyan-300 transition-colors"
                  >
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 4 Core Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-panel border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
