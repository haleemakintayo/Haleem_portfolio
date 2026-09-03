import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import { GridPattern } from '@/registry/magicui/grid-pattern';
import { cn } from '@/lib/utils';
import BentoHero from './components/HeroSection';
import Projects from './pages/Projects';
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Smooth scroll listener for hash anchor links across routes
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null;
}

// Home Page Component with Hero & Experience sections
function HomePage() {
  return (
    <>
      <BentoHero />
      <ExperienceTimeline />
      <Footer />
    </>
  );
}

// Dedicated Experience Route Component
function ExperiencePage() {
  return (
    <div className="pt-6">
      <ExperienceTimeline />
      <Footer />
    </div>
  );
}

// Projects Route with Footer
function ProjectsPage() {
  return (
    <>
      <Projects />
      <Footer />
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToHash />
      <CustomCursor />
      <div className="relative min-h-screen bg-[#050505] text-[#ededed] selection:bg-emerald-500/30 selection:text-emerald-300">
        {/* Pinned background layer with strict overflow clipping to eliminate extra scrollbars */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Ambient moody glow */}
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-slate-800/20 blur-[140px] rounded-full" />
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-emerald-950/15 blur-[120px] rounded-full" />

          {/* Background Grid Pattern */}
          <GridPattern
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [5, 3],
              [5, 5],
              [10, 10],
              [12, 15],
              [15, 10],
              [10, 15],
              [15, 10],
              [10, 15],
              [15, 10],
            ]}
            className={cn(
              "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 stroke-white/[0.05] fill-emerald-500/[0.03]"
            )}
          />
        </div>

        <AnimatePresence mode="wait">
          {isLoading && (
            <Loader 
              duration={2000} 
              onComplete={() => setIsLoading(false)} 
            />
          )}
        </AnimatePresence>

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 min-h-screen flex flex-col"
          >
            <Navbar />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
          </motion.div>
        )}
      </div>
    </Router>
  );
}





