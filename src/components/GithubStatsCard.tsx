import { useEffect, useState } from 'react';
import { Star, GitFork, Code2, Loader2, ArrowUpRight } from 'lucide-react';

interface GithubStats {
  publicRepos: number;
  totalStars: number;
  topLanguages: string[];
}

interface GithubRepo {
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

interface GithubStatsCardProps {
  username?: string;
}

export default function GithubStatsCard({ username = 'haleemakintayo' }: GithubStatsCardProps) {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        setLoading(true);
        setError(false);

        // Fetch user public repos (up to 100)
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );

        if (!reposRes.ok) throw new Error('Failed to fetch repos');

        const repos: GithubRepo[] = await reposRes.json();

        // 1. Calculate total earned stars across non-forked repos
        const totalStars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);

        // 2. Tally languages and pick top 3
        const langCounts: Record<string, number> = {};
        repos.forEach((repo) => {
          if (repo.language && !repo.fork) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          }
        });

        const topLanguages = Object.entries(langCounts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 3)
          .map(([lang]) => lang);

        setStats({
          publicRepos: repos.length,
          totalStars,
          topLanguages,
        });
      } catch (err) {
        console.error('GitHub API error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (username) {
      fetchGithubData();
    }
  }, [username]);

  return (
    <div className="rounded-3xl bg-[#0a0a0c]/85 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between group hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
      
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white font-heading font-bold text-base hover:text-emerald-300 transition-colors"
          >
            <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub Activity</span>
          </a>
          <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        </div>

        <p className="text-xs text-[#8a94a6] leading-relaxed mb-4">
          Real-time open-source repositories, engineering contributions, and language distribution.
        </p>
      </div>

      {/* Body: Loading / Error / Content */}
      {loading ? (
        <div className="my-6 flex items-center justify-center gap-2 text-slate-500 text-xs font-mono py-4">
          <Loader2 size={15} className="animate-spin text-emerald-400" />
          <span>Fetching stats...</span>
        </div>
      ) : error || !stats ? (
        <div className="my-6 text-xs font-mono text-slate-500 text-center py-4">
          Activity metrics temporarily unavailable
        </div>
      ) : (
        <div className="my-2 space-y-3">
          {/* Numeric Counters */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-2xl bg-[#050505] border border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-mono">
                <GitFork size={12} className="text-emerald-400" />
                <span>REPOSITORIES</span>
              </div>
              <div className="text-xl font-bold text-white mt-1 font-mono">
                {stats.publicRepos}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-[#050505] border border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-mono">
                <Star size={12} className="text-amber-400" />
                <span>STARS</span>
              </div>
              <div className="text-xl font-bold text-white mt-1 font-mono">
                {stats.totalStars}
              </div>
            </div>
          </div>

          {/* Top Languages */}
          {stats.topLanguages.length > 0 && (
            <div className="pt-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 mb-1.5">
                <Code2 size={12} className="text-emerald-400" />
                <span>TOP STACKS</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {stats.topLanguages.map((lang) => (
                  <span
                    key={lang}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer link */}
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-mono text-slate-400 hover:text-white transition-colors flex items-center justify-between pt-3 mt-3 border-t border-white/[0.06] group/link"
      >
        <span className="text-slate-500 group-hover/link:text-slate-300">@{username}</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <span>View Profile</span>
          <ArrowUpRight size={12} />
        </span>
      </a>
    </div>
  );
}
