import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Bot, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  ShoppingBag, 
  GraduationCap 
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/PortfolioData';
import type { ProjectItem } from '../types';

const CATEGORIES = ["All", "AI & Automation", "Fintech", "E-Commerce", "EdTech"] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((project) => project.tag === selectedCategory);

  const getCategoryIcon = (tag?: string) => {
    switch (tag) {
      case "AI & Automation":
        return <Bot size={16} className="text-emerald-400" />;
      case "Fintech":
        return <TrendingUp size={16} className="text-emerald-400" />;
      case "E-Commerce":
        return <ShoppingBag size={16} className="text-emerald-400" />;
      case "EdTech":
        return <GraduationCap size={16} className="text-emerald-400" />;
      default:
        return <Layers size={16} className="text-emerald-400" />;
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] px-4 py-12 md:px-8 max-w-6xl mx-auto w-full">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs font-mono text-emerald-400">
          <Sparkles size={13} className="text-emerald-400" />
          <span>Engineered Systems</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Featured Projects
        </h1>
        <p className="font-sans text-[#8a94a6] text-sm sm:text-base leading-relaxed">
          Production applications, agentic workflows, scalable API architectures, and fintech dashboards built by {PERSONAL_INFO.name}.
        </p>

        {/* Category filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            const count = category === "All" 
              ? PROJECTS.length 
              : PROJECTS.filter(p => p.tag === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-emerald-500 text-black font-semibold shadow-[0_0_16px_rgba(52,211,153,0.3)]"
                    : "bg-[#0a0a0c]/80 text-[#8a94a6] hover:text-white border border-white/[0.08] hover:border-white/[0.2]"
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? "bg-black/20 text-black" : "bg-white/[0.06] text-slate-400"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: ProjectItem) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between rounded-3xl bg-[#0a0a0c]/80 border border-white/[0.08] backdrop-blur-xl p-7 hover:border-emerald-500/30 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Header tag & links */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                    {getCategoryIcon(project.tag)}
                    <span>{project.tag || "Full-Stack"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
                        aria-label="View source code on GitHub"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-colors"
                        aria-label="Visit live website"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project title and subtitle */}
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="font-mono text-xs text-slate-400 mt-1 mb-3">
                    {project.subtitle}
                  </p>
                )}

                {/* Project description */}
                <p className="text-sm text-[#8a94a6] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key engineering points */}
                {project.points && project.points.length > 0 && (
                  <ul className="space-y-2 mb-6 border-l-2 border-emerald-500/30 pl-3">
                    {project.points.map((point, index) => (
                      <li key={index} className="text-xs text-slate-300 leading-normal">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom: Tech Stack & Action button */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors self-start sm:self-auto"
                  >
                    <span>Launch</span>
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500">
                    Production Architecture
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom CTA Card */}
      <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#0a0a0c] via-[#0a0a0c] to-emerald-950/20 border border-white/[0.08] p-8 text-center relative overflow-hidden z-10 shadow-2xl">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
          Have a project or opportunity in mind?
        </h3>
        <p className="text-[#8a94a6] text-sm max-w-lg mx-auto mb-6">
          I am currently open to full-stack and AI engineering opportunities, contracts, and collaborations.
        </p>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all active:scale-95"
        >
          <span>Get in Touch</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
