import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, PROJECTS } from '../data/PortfolioData';
import haleemImg from '../assets/Haleem.png';

export default function BentoHero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] px-4 py-10 md:px-8 max-w-6xl mx-auto w-full flex flex-col gap-8 justify-center">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* TOP ROW: Hero Intro Card + Portrait Photo Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
        
        {/* LEFT: Intro Bio Card (Spans 7 cols on desktop) */}
        <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#0e0e12]/90 via-[#0a0a0c]/85 to-[#06140e]/40 border border-white/[0.08] backdrop-blur-xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Full-Stack & AI Roles
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.2]">
              Hello, I’m <span className="text-emerald-400">Haleem</span>, a Full-Stack Developer & AI Builder with 3 years of experience.
            </h1>

            <p className="mt-6 text-[#8a94a6] text-sm sm:text-base leading-relaxed max-w-xl">
              I care a lot about building intelligent autonomous agents, resilient backend systems, and crafting user-centric, delightful digital experiences.
            </p>
          </div>

          {/* Actions & Social Links Row */}
          <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] active:scale-95 flex items-center gap-2"
            >
              <span>Contact me</span>
              <ArrowUpRight size={16} />
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/haleemakintayo"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="h-10 w-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95"
                aria-label="Send Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Haleem's Portrait Photo Card (Spans 5 cols on desktop) */}
        <div className="lg:col-span-5 rounded-3xl bg-[#0a0a0c]/80 border border-white/[0.08] overflow-hidden shadow-2xl relative group flex items-center justify-center min-h-[380px] lg:min-h-full">
          <img
            src={haleemImg}
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="font-heading text-sm font-semibold text-white tracking-wide">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-emerald-400 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
              Full-Stack & AI
            </span>
          </div>
        </div>

      </div>

      {/* BOTTOM ROW: Featured Projects Cards Matching Reference Layout */}
      <div className="relative z-10 mt-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white">Selected Works</h2>
            <p className="text-xs font-mono text-slate-400 mt-0.5">Flagship engineering and applications</p>
          </div>
          <Link
            to="/projects"
            className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
          >
            <span>View all ({PROJECTS.length})</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#0a0a0c]/80 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                      {project.tag}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="h-10 w-10 rounded-full bg-white text-black hover:bg-emerald-400 flex items-center justify-center transition-all shrink-0 active:scale-95 shadow-md"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  ) : (
                    <Link
                      to="/projects"
                      className="h-10 w-10 rounded-full bg-white/[0.08] hover:bg-emerald-400 hover:text-black text-white flex items-center justify-center transition-all shrink-0 active:scale-95"
                      aria-label={`View details for ${project.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  )}
                </div>

                <p className="text-sm text-[#8a94a6] leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-1.5 flex-wrap">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
