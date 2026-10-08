import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Bot, 
  TrendingUp, 
  ShoppingBag, 
  GraduationCap, 
  Layers, 
  Briefcase, 
  Calendar, 
  Database, 
  CheckCircle2, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';
import { PROJECTS } from '../data/PortfolioData';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [selectedScreenshotIdx, setSelectedScreenshotIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const projectIndex = PROJECTS.findIndex(p => p.id === id);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  const screenshots = project.screenshots && project.screenshots.length > 0 
    ? project.screenshots 
    : project.imageUrl 
      ? [project.imageUrl] 
      : [];

  const getCategoryIcon = (tag?: string) => {
    switch (tag) {
      case "AI & Automation":
        return <Bot size={15} className="text-emerald-400" />;
      case "Fintech":
        return <TrendingUp size={15} className="text-emerald-400" />;
      case "E-Commerce":
        return <ShoppingBag size={15} className="text-emerald-400" />;
      case "EdTech":
        return <GraduationCap size={15} className="text-emerald-400" />;
      case "Fandom & Web":
        return <Sparkles size={15} className="text-emerald-400" />;
      default:
        return <Layers size={15} className="text-emerald-400" />;
    }
  };

  const nextScreenshot = () => {
    if (screenshots.length > 0) {
      setSelectedScreenshotIdx((prev) => (prev + 1) % screenshots.length);
    }
  };

  const prevScreenshot = () => {
    if (screenshots.length > 0) {
      setSelectedScreenshotIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] px-4 py-10 md:px-8 max-w-5xl mx-auto w-full">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Back Navigation Bar */}
      <div className="relative z-10 mb-8 flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0c]/80 border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-emerald-500/30 transition-all shadow-md active:scale-95"
        >
          <ArrowLeft size={14} />
          <span>Back to Projects</span>
        </Link>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-all active:scale-95"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-mono shadow-[0_0_16px_rgba(52,211,153,0.3)] transition-all active:scale-95"
            >
              <span>Launch Live</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Main Header Banner Card */}
      <div className="relative z-10 rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-8 sm:p-12 mb-10 shadow-2xl overflow-hidden">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
            {getCategoryIcon(project.tag)}
            <span>{project.tag || "Engineering"}</span>
          </span>
          {project.timeline && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono">
              <Calendar size={13} className="text-emerald-400" />
              <span>{project.timeline}</span>
            </span>
          )}
          {project.role && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono">
              <Briefcase size={13} className="text-emerald-400" />
              <span>{project.role}</span>
            </span>
          )}
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
          {project.title}
        </h1>
        {project.subtitle && (
          <p className="font-sans text-lg sm:text-xl text-slate-300 font-medium mb-6">
            {project.subtitle}
          </p>
        )}
        <p className="text-sm sm:text-base text-[#8a94a6] leading-relaxed max-w-3xl">
          {project.overview || project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/[0.06]">
          {project.techStack.map(tech => (
            <span
              key={tech}
              className="text-xs font-mono px-3 py-1 rounded-lg bg-[#050505] border border-white/[0.08] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Screenshot Gallery Viewer */}
      {screenshots.length > 0 && (
        <div className="relative z-10 mb-12 rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
              <span>Visual Interface & Gallery</span>
              <span className="text-xs font-mono text-slate-400 font-normal">
                ({selectedScreenshotIdx + 1} of {screenshots.length})
              </span>
            </h2>
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
              title="Expand full screen"
            >
              <Maximize2 size={16} />
            </button>
          </div>

          {/* Main Screenshot Stage */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050505] group">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedScreenshotIdx}
                src={screenshots[selectedScreenshotIdx]}
                alt={`${project.title} screenshot ${selectedScreenshotIdx + 1}`}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full object-cover object-top"
              />
            </AnimatePresence>

            {screenshots.length > 1 && (
              <>
                <button
                  onClick={prevScreenshot}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black/90 border border-white/10 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextScreenshot}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black/90 border border-white/10 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails Row */}
          {screenshots.length > 1 && (
            <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-2">
              {screenshots.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedScreenshotIdx(idx)}
                  className={`relative flex-shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-xl overflow-hidden border transition-all ${
                    selectedScreenshotIdx === idx
                      ? "border-emerald-400 ring-2 ring-emerald-400/30 shadow-lg scale-102"
                      : "border-white/[0.08] opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Lightbox Full Screen Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.1] hover:bg-white/[0.2] text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="relative max-w-6xl max-h-[85vh] w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
              <img
                src={screenshots[selectedScreenshotIdx]}
                alt="Full size view"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Challenge & Engineering Solution */}
      {(project.challenge || project.solution) && (
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {project.challenge && (
            <div className="rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-8 shadow-xl">
              <h3 className="font-heading text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span>The Challenge</span>
              </h3>
              <p className="text-sm text-[#8a94a6] leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}

          {project.solution && (
            <div className="rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-8 shadow-xl">
              <h3 className="font-heading text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>The Engineering Solution</span>
              </h3>
              <p className="text-sm text-[#8a94a6] leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Key Features Breakdown */}
      {project.features && project.features.length > 0 && (
        <div className="relative z-10 mb-12 rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-8 sm:p-10 shadow-2xl">
          <h2 className="font-heading text-2xl font-bold text-white mb-6">
            Core Features & Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#050505] border border-white/[0.06] hover:border-emerald-500/20 transition-all"
              >
                <div className="flex items-center gap-2 mb-2 text-white font-semibold text-base font-heading">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <h4>{feature.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#8a94a6] leading-relaxed pl-6">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Database Schema & Key Entities */}
      {project.databaseEntities && project.databaseEntities.length > 0 && (
        <div className="relative z-10 mb-12 rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-8 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Database size={20} className="text-emerald-400" />
            <h2 className="font-heading text-2xl font-bold text-white">
              Database Design & Entity Relationships
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8a94a6] mb-6">
            Relational model entities, primary keys, and foreign key structures engineered for referential integrity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.databaseEntities.map((entity, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#050505] border border-white/[0.06] font-mono text-xs text-slate-300 flex items-start gap-2"
              >
                <span className="text-emerald-400 font-bold">0{idx + 1}.</span>
                <span>{entity}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Architecture Highlights */}
      {project.architecturePoints && project.architecturePoints.length > 0 && (
        <div className="relative z-10 mb-12 rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-8 sm:p-10 shadow-2xl">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">
            Architecture Highlights
          </h2>
          <ul className="space-y-3">
            {project.architecturePoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#8a94a6] leading-relaxed">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Next / Previous Project Footer Navigation */}
      <div className="relative z-10 pt-8 border-t border-white/[0.08] flex items-center justify-between gap-4">
        <Link
          to={`/projects/${prevProject.id}`}
          className="group flex flex-col items-start p-4 rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.06] hover:border-white/[0.18] transition-all max-w-[45%]"
        >
          <span className="text-[10px] font-mono uppercase text-slate-500 flex items-center gap-1 group-hover:text-emerald-400 transition-colors">
            <ChevronLeft size={12} /> Previous Project
          </span>
          <span className="font-heading text-sm sm:text-base font-bold text-white truncate w-full mt-1">
            {prevProject.title}
          </span>
        </Link>

        <Link
          to={`/projects/${nextProject.id}`}
          className="group flex flex-col items-end p-4 rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.06] hover:border-white/[0.18] transition-all max-w-[45%] text-right"
        >
          <span className="text-[10px] font-mono uppercase text-slate-500 flex items-center gap-1 group-hover:text-emerald-400 transition-colors">
            Next Project <ChevronRight size={12} />
          </span>
          <span className="font-heading text-sm sm:text-base font-bold text-white truncate w-full mt-1">
            {nextProject.title}
          </span>
        </Link>
      </div>

    </div>
  );
}
