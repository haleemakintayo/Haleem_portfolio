import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCES, HONORS } from '../data/PortfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 px-4 md:px-8 max-w-6xl mx-auto w-full relative z-10">
      
      {/* Section Header */}
      <div className="mb-14 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <Sparkles size={13} className="text-emerald-400" />
          <span>Career Journey</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Work Experience
        </h2>
        <p className="text-[#8a94a6] text-sm sm:text-base mt-2 max-w-2xl font-sans leading-relaxed">
          My professional track record building scalable backends, autonomous AI agents, and production web applications.
        </p>
      </div>

      {/* The Timeline Container */}
      <div className="relative border-l-2 border-white/[0.08] pl-6 md:pl-10 space-y-10">
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative group"
          >
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 h-4 w-4 rounded-full bg-[#050505] border-2 border-slate-600 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.8)] transition-all duration-300">
              <div className="absolute inset-1 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Experience Card */}
            <div className="bg-[#0a0a0c]/85 border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-xl group-hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
              
              {/* Header: Role & Company */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm sm:text-base font-semibold text-emerald-400 mt-0.5 mb-3 font-sans">
                    {exp.company}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-emerald-400" /> 
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-emerald-400" /> 
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>
                
                {/* Icon Badge */}
                <div className="hidden sm:flex h-11 w-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 items-center justify-center text-emerald-400 shrink-0">
                  <Briefcase size={18} />
                </div>
              </div>

              {/* Achievements List */}
              <ul className="space-y-2.5 mb-6 border-l-2 border-emerald-500/20 pl-3.5">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              {exp.techStack && (
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {exp.techStack.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-0.5 rounded-lg bg-[#050505] border border-white/[0.06] text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

            </div>
          </motion.div>
        ))}
      </div>

      {/* Leadership & Honors Section */}
      {HONORS && HONORS.length > 0 && (
        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-6">
            Leadership & Honors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HONORS.map((honor, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#0a0a0c]/60 border border-white/[0.06] flex items-center justify-between gap-3"
              >
                <div>
                  <h4 className="text-sm font-semibold text-white">{honor.title}</h4>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">{honor.organization}</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-400/80 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}