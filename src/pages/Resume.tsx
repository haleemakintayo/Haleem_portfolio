import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink, FileText, Sparkles, CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, HONORS } from '../data/PortfolioData';

export default function Resume() {
  const [activeTab, setActiveTab] = useState<'preview' | 'structured'>('preview');
  const resumePdfPath = '/Akintayo_Haleem_Opeyemi_Resume.pdf';

  return (
    <div className="relative min-h-[calc(100vh-4rem)] px-4 py-10 md:px-8 max-w-5xl mx-auto w-full">
      {/* Ambient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Top Header / Actions Bar */}
      <div className="relative z-10 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0c]/80 border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-emerald-500/30 transition-all shadow-md active:scale-95 self-start"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        {/* View / Download Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href={resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-all active:scale-95"
          >
            <ExternalLink size={14} />
            <span>Open in Tab</span>
          </a>

          <a
            href={resumePdfPath}
            download="Akintayo_Haleem_Opeyemi_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-mono shadow-[0_0_16px_rgba(52,211,153,0.3)] transition-all active:scale-95"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="relative z-10 rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-10 mb-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <Sparkles size={13} />
              <span>Curriculum Vitae & Credentials</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-emerald-400 mt-1">
              {PERSONAL_INFO.role}
            </p>
            <p className="text-xs sm:text-sm text-[#8a94a6] mt-2 max-w-xl">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Tab Switcher (PDF Preview vs Structured View) */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[#050505] border border-white/[0.08] text-xs font-mono self-start md:self-auto">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === 'preview'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText size={13} />
              <span>PDF Document</span>
            </button>
            <button
              onClick={() => setActiveTab('structured')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === 'structured'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase size={13} />
              <span>Structured View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10">
        {activeTab === 'preview' ? (
          /* Live PDF Embedded Viewer */
          <div className="rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-3 sm:p-5 shadow-2xl overflow-hidden">
            <div className="w-full h-[75vh] sm:h-[85vh] rounded-2xl overflow-hidden bg-[#050505] border border-white/[0.06]">
              <iframe
                src={`${resumePdfPath}#toolbar=1&navpanes=0`}
                title="Akintayo Haleem Resume PDF"
                className="w-full h-full border-0"
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono text-slate-500">
              <span>PDF Viewer</span>
              <a
                href={resumePdfPath}
                download="Akintayo_Haleem_Opeyemi_Resume.pdf"
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>Download direct copy</span>
                <Download size={12} />
              </a>
            </div>
          </div>
        ) : (
          /* Structured Overview Breakdown */
          <div className="space-y-6">
            
            {/* Education */}
            <div className="rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-white font-heading text-xl font-bold">
                <GraduationCap size={18} className="text-emerald-400" />
                <h3>Education</h3>
              </div>
              <div className="p-4 rounded-2xl bg-[#050505] border border-white/[0.06]">
                <h4 className="font-heading text-base font-bold text-white">
                  {PERSONAL_INFO.education.school}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-400 mt-0.5">
                  {PERSONAL_INFO.education.degree}
                </p>
                <span className="inline-block text-[11px] font-mono text-slate-400 mt-2 bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.06]">
                  {PERSONAL_INFO.education.graduationYear}
                </span>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-white font-heading text-xl font-bold">
                <CheckCircle2 size={18} className="text-emerald-400" />
                <h3>Technical Competencies</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILLS.map((category) => (
                  <div key={category.category} className="p-4 rounded-2xl bg-[#050505] border border-white/[0.06]">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2 font-semibold">
                      {category.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-white font-heading text-xl font-bold">
                <Briefcase size={18} className="text-emerald-400" />
                <h3>Work Experience</h3>
              </div>
              <div className="space-y-4">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#050505] border border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="font-heading text-base font-bold text-white">
                        {exp.role} · <span className="text-emerald-400">{exp.company}</span>
                      </h4>
                      <span className="text-xs font-mono text-slate-400">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5 my-3 pl-3 border-l-2 border-emerald-500/20">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="text-xs sm:text-sm text-[#8a94a6] leading-relaxed">
                          {ach}
                        </li>
                      ))}
                    </ul>
                    {exp.techStack && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
                        {exp.techStack.map(t => (
                          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Awards */}
            {HONORS && HONORS.length > 0 && (
              <div className="rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 shadow-xl">
                <div className="flex items-center gap-2 mb-4 text-white font-heading text-xl font-bold">
                  <Award size={18} className="text-emerald-400" />
                  <h3>Leadership & Honors</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {HONORS.map((h, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#050505] border border-white/[0.06]">
                      <div className="text-sm font-bold text-white">{h.title}</div>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">{h.organization}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}
      </div>

    </div>
  );
}
