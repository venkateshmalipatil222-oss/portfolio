import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code2, 
  FileText, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section calculation
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80 shadow-lg shadow-black/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 dark:from-white dark:via-slate-200 dark:to-indigo-300 light:from-slate-900 light:via-indigo-950 light:to-indigo-600 bg-clip-text text-transparent">
                {personalInfo.displayName}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] font-medium text-emerald-400/90 tracking-wide">
                  Available for Hire
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/30'
                      : 'text-slate-400 hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-slate-800/40 light:hover:bg-slate-200/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons (Right) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-indigo-500/50 transition-all duration-200 cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Quick Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 dark:text-indigo-400 light:text-indigo-600 border border-indigo-500/30 hover:border-indigo-500/60 transition-all cursor-pointer shadow-sm hover:shadow-indigo-500/10"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Hire Me / Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-300"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-300 cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 mt-3 glass-panel border-b border-slate-800/80 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-300 border-l-2 border-cyan-400'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/50 light:hover:bg-slate-200/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-400 dark:text-indigo-400 light:text-indigo-600 border border-indigo-500/30"
              >
                <FileText className="w-4 h-4" />
                View & Download Resume
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
              >
                Get In Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
