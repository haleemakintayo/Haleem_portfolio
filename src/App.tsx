import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import { GridPattern } from '@/registry/magicui/grid-pattern';
import { cn } from '@/lib/utils';
import BentoHero from './components/HeroSection';
import Projects from './pages/Projects';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <div className="relative min-h-screen bg-[#050505] text-[#ededed] selection:bg-emerald-500/30 selection:text-emerald-300 overflow-x-hidden flex flex-col justify-between">
        {/* Ambient moody glow matching the reference design */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-slate-800/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-emerald-950/15 blur-[120px] rounded-full pointer-events-none" />

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

        <AnimatePresence mode="wait">
          {isLoading && (
            <Loader 
              duration={5000} 
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
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<BentoHero />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<BentoHero />} />
              </Routes>
            </main>
          </motion.div>
        )}
      </div>
    </Router>
  );
}





