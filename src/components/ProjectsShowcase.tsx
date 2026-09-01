import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bot, TrendingUp, ShoppingBag, GraduationCap, Layers, ArrowUpRight, Terminal } from 'lucide-react';
import { PROJECTS } from '../data/PortfolioData';
import type { ProjectItem } from '../types';

interface ProjectsShowcaseProps {
  projects?: ProjectItem[];
}

export default function ProjectsShowcase({ projects = PROJECTS }: ProjectsShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  // Keep active index in bounds when project list changes
  useEffect(() => {
    if (activeIndex >= projects.length) {
      setActiveIndex(0);
    }
    setActiveScreenshotIdx(0);
  }, [projects, activeIndex]);

  const activeProject = projects[activeIndex] || projects[0];

  const toPrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex(prev => Math.max(0, prev - 1));
    setActiveScreenshotIdx(0);
  }, []);

  const toNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex(prev => Math.min(projects.length - 1, prev + 1));
    setActiveScreenshotIdx(0);
  }, [projects.length]);

  const toSlide = (index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex(index);
    setActiveScreenshotIdx(0);
  };

  // Keyboard navigation (Left / Right Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') toPrev();
      if (e.key === 'ArrowRight') toNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toPrev, toNext]);

  const getCategoryIcon = (tag?: string) => {
    switch (tag) {
      case 'AI & Automation':
        return <Bot size={14} className="text-emerald-400" />;
      case 'Fintech':
        return <TrendingUp size={14} className="text-emerald-400" />;
      case 'E-Commerce':
        return <ShoppingBag size={14} className="text-emerald-400" />;
      case 'EdTech':
        return <GraduationCap size={14} className="text-emerald-400" />;
      default:
        return <Layers size={14} className="text-emerald-400" />;
    }
  };

  if (!activeProject) return null;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Side-by-side on desktop, stacked on mobile */}
      <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT: 3D Cover Flow — 7 cols on xl */}
        <div 
          className="xl:col-span-7 w-full flex flex-col items-center justify-center relative overflow-hidden select-none py-6 min-h-[340px] sm:min-h-[380px]" 
          style={{ perspective: '1000px' }}
        >
          <div 
            className="w-full flex justify-center items-center relative h-[240px] sm:h-[300px] md:h-[340px]" 
            style={{ transformStyle: 'preserve-3d' }}
          >
            {projects.map((item, i) => {
              const isActive = activeIndex === i;
              const offset = i - activeIndex;
              const absOffset = Math.abs(offset);
              const isPast = i < activeIndex;
              
              return (
                <motion.div 
                  key={item.id}
                  className="absolute w-[280px] sm:w-[360px] md:w-[400px] aspect-[16/10] cursor-pointer"
                  initial={false}
                  animate={{ 
                    x: offset * 145,
                    rotateY: isActive ? 0 : (isPast ? 38 : -38),
                    z: isActive ? 50 : -absOffset * 50,
                    scale: isActive ? 1.1 : 1 - (absOffset * 0.08),
                    opacity: absOffset > 2 ? 0 : 1 - (absOffset * 0.25)
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  style={{ zIndex: 100 - absOffset }}
                  onClick={(e) => toSlide(i, e)}
                >
                  {item.imageUrl ? (
                    /* Screenshot Card */
                    <div className={`relative w-full h-full bg-[#0a0a0c] rounded-2xl overflow-hidden flex flex-col justify-between group/card shadow-2xl border ${
                      isActive ? 'border-white/30' : 'border-white/[0.08]'
                    }`}>
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/15 to-black/30 pointer-events-none" />

                      {/* Browser chrome */}
                      <div className="relative z-10 w-full px-3.5 py-2 bg-[#0a0a0c]/80 backdrop-blur-sm border-b border-white/[0.06] flex items-center justify-between pointer-events-none">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 truncate max-w-[160px]">
                          {item.liveUrl ? item.liveUrl.replace('https://', '') : `${item.id}.dev`}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          0{i + 1}/0{projects.length}
                        </span>
                      </div>

                      {/* Bottom title overlay */}
                      <div className="relative z-10 p-4 sm:p-5 text-left pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-emerald-400 text-[11px] font-mono font-medium mb-1.5 backdrop-blur-sm">
                          {getCategoryIcon(item.tag)}
                          <span>{item.tag || 'Project'}</span>
                        </span>
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    /* Mockup Card for non-screenshot projects */
                    <div className={`w-full h-full rounded-2xl overflow-hidden flex flex-col justify-between bg-[#0c0c12] p-5 sm:p-6 text-left relative shadow-2xl border ${
                      isActive ? 'border-white/30' : 'border-white/[0.08]'
                    }`}>
                      {/* Browser chrome */}
                      <div className="flex items-center justify-between w-full relative z-10 pb-2.5 border-b border-white/[0.06]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                        </div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-slate-400 text-[10px] font-mono">
                          {getCategoryIcon(item.tag)}
                          <span>{item.tag || 'Project'}</span>
                        </span>
                      </div>

                      {/* Mockup content */}
                      <div className="my-auto relative z-10 py-2">
                        {item.id === 'bukka-ai' ? (
                          <div className="rounded-lg bg-[#07070a] border border-white/[0.05] p-3 font-mono text-[11px] space-y-2">
                            <div className="flex items-center justify-between text-emerald-400 font-semibold">
                              <div className="flex items-center gap-1.5">
                                <Terminal size={12} />
                                <span>Agent Pipeline</span>
                              </div>
                              <span className="text-[9px] text-slate-500">FastAPI</span>
                            </div>
                            <p className="text-slate-400 text-[10px]">Processing webhook orders & conversational state...</p>
                          </div>
                        ) : (
                          <div className="rounded-lg bg-[#07070a] border border-white/[0.05] p-3 font-mono text-[11px] space-y-2">
                            <div className="flex items-center justify-between text-slate-300 font-semibold">
                              <span>{item.tag} Architecture</span>
                              <span className="text-[9px] text-emerald-400">REST</span>
                            </div>
                            <p className="text-slate-400 text-[10px] line-clamp-2">{item.description}</p>
                          </div>
                        )}
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight mt-3">
                          {item.title}
                        </h3>
                      </div>

                      {/* Tech pills */}
                      <div className="flex items-center gap-1.5 flex-wrap relative z-10 pt-2.5 border-t border-white/[0.05]">
                        {item.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.04]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center gap-3 bg-[#0a0a0c]/90 backdrop-blur-md border border-white/[0.08] px-4 py-2 rounded-full z-20">
            <button 
              onClick={(e) => toPrev(e)} 
              className="p-1.5 hover:bg-white/[0.08] rounded-full text-slate-400 hover:text-white transition-colors active:scale-95 cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5 items-center">
              {projects.map((_, i) => (
                <button 
                  key={i} 
                  onClick={(e) => toSlide(i, e)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i 
                      ? 'w-6 bg-white' 
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={(e) => toNext(e)} 
              className="p-1.5 hover:bg-white/[0.08] rounded-full text-slate-400 hover:text-white transition-colors active:scale-95 cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT: Details Panel — 5 cols on xl */}
        <div className="xl:col-span-5 w-full xl:sticky xl:top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="bg-[#0a0a0c]/80 border border-white/[0.08] rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-xl relative overflow-hidden text-left"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-white/[0.04] border border-white/[0.08] text-emerald-400 text-[11px] font-mono rounded-full font-medium">
                  {getCategoryIcon(activeProject.tag)}
                  <span>{activeProject.tag || 'Architecture'}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">Case Study</span>
              </div>

              {/* Screenshot gallery */}
              {activeProject.screenshots && activeProject.screenshots.length > 0 && (
                <div className="mb-5 rounded-xl overflow-hidden border border-white/[0.06] bg-[#050505]">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <img 
                      src={activeProject.screenshots[activeScreenshotIdx] || activeProject.screenshots[0]} 
                      alt={`${activeProject.title} preview`} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {activeProject.screenshots.length > 1 && (
                    <div className="p-2 bg-[#0a0a0c] border-t border-white/[0.05] flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-slate-500">Views:</span>
                      <div className="flex items-center gap-1.5">
                        {activeProject.screenshots.map((_, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => setActiveScreenshotIdx(sIdx)}
                            className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-all ${
                              activeScreenshotIdx === sIdx
                                ? 'bg-white text-black font-semibold'
                                : 'bg-white/[0.05] text-slate-400 hover:bg-white/[0.1]'
                            }`}
                          >
                            {sIdx + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-1.5 tracking-tight">
                {activeProject.title}
              </h3>
              {activeProject.subtitle && (
                <p className="text-sm sm:text-base text-slate-300 mb-4 font-medium font-sans">
                  {activeProject.subtitle}
                </p>
              )}
              
              <div className="space-y-3 mb-6">
                <p className="text-[#8a94a6] text-sm leading-relaxed">
                  {activeProject.description}
                </p>
                {activeProject.points && activeProject.points.length > 0 && (
                  <ul className="text-xs text-slate-300 space-y-1.5 border-l-2 border-emerald-500/30 pl-3">
                    {activeProject.points.map((point, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {activeProject.techStack.map(tech => (
                  <span key={tech} className="px-2.5 py-0.5 text-[11px] font-mono bg-[#050505] border border-white/[0.06] text-slate-300 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                {activeProject.githubUrl && (
                  <a 
                    href={activeProject.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Source Code</span>
                  </a>
                )}
                {activeProject.liveUrl && (
                  <a 
                    href={activeProject.liveUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs shadow-md transition-all active:scale-95"
                  >
                    <span>Launch Live</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {!activeProject.liveUrl && !activeProject.githubUrl && (
                  <span className="text-[11px] font-mono text-slate-500">
                    Production & Proprietary
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
