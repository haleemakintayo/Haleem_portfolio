import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export function WavePhysicsLoader({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  const numBars = 15;
  const barWidth = 12; 
  const barGap = 8; 
  const barTotalWidth = barWidth + barGap;
  
  const numFrames = 201;
  const B = 4; 
  const maxBounce = 60; 
  const baseBarH = 16;
  const wavePeakH = 48; 

  const { bars, ballX, ballY, ballScaleX, ballScaleY, times } = useMemo(() => {
    const barsData = Array.from({ length: numBars }).map(() => ({ 
      heights: [] as string[],
      colors: [] as string[],
    }));
    const bX: string[] = [];
    const bY: string[] = [];
    const bScaleX: number[] = [];
    const bScaleY: number[] = [];
    const tArr: number[] = [];
    
    for (let k = 0; k < numFrames; k++) {
      const t = k / (numFrames - 1);
      tArr.push(t);
      
      const x_frac = t < 0.5 ? t / 0.5 : (1 - t) / 0.5;
      const ball_idx = x_frac * (numBars - 1);
      
      bX.push(`${ball_idx * barTotalWidth}px`);
      
      let bounce_f = (x_frac * B) % 1.0;
      if (x_frac === 1 || x_frac === 0) bounce_f = 0;
      
      const bounce_h = 4 * bounce_f * (1 - bounce_f);
      const height_factor = Math.max(0, 1 - bounce_h * 2);
      
      const ball_indent = height_factor * 20; 
      const ball_y = (baseBarH + wavePeakH - ball_indent) + bounce_h * maxBounce;
      bY.push(`-${ball_y}px`);
      
      const squish = height_factor; 
      bScaleY.push(1 - squish * 0.3);
      bScaleX.push(1 + squish * 0.25);
      
      for (let i = 0; i < numBars; i++) {
        const dist = Math.abs(i - ball_idx);
        
        let wave_val = 0;
        if (dist < 3) {
          wave_val = Math.cos((dist / 3) * (Math.PI / 2));
        }
        
        let indent = 0;
        if (dist < 1.5) {
          const indent_dist = Math.cos((dist / 1.5) * (Math.PI / 2));
          indent = indent_dist * height_factor * 20;
        }
        
        const bar_h = baseBarH + wave_val * wavePeakH - indent;
        barsData[i].heights.push(`${Math.max(4, bar_h)}px`); 
        
        // Colors for Light / Dark Theme
        const isDark = theme === 'dark';
        let r, g, b;
        if (isDark) {
          r = Math.round(51 + wave_val * (255 - 51));
          g = Math.round(65 + wave_val * (255 - 65));
          b = Math.round(85 + wave_val * (255 - 85));
        } else {
          r = Math.round(228 - wave_val * (228 - 39));
          g = Math.round(228 - wave_val * (228 - 39));
          b = Math.round(231 - wave_val * (231 - 42));
        }
        barsData[i].colors.push(`rgb(${r}, ${g}, ${b})`);
      }
    }
    
    return { bars: barsData, ballX: bX, ballY: bY, ballScaleX: bScaleX, ballScaleY: bScaleY, times: tArr };
  }, [theme]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full scale-[0.75] sm:scale-90 md:scale-100">
      <div className="relative flex items-end justify-start h-48 space-x-2 w-[292px]">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className="w-3 rounded-full origin-bottom"
            style={{ height: '16px', backgroundColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(228, 228, 231)' }}
            animate={{
              height: bar.heights,
              backgroundColor: bar.colors,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              times: times,
              ease: 'linear',
            }}
          />
        ))}
        
        <motion.div
          className="absolute w-3.5 h-3.5 bg-blue-500 rounded-full z-10 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
          style={{ bottom: 0, left: 0, transformOrigin: 'bottom center' }}
          animate={{
            x: ballX,
            y: ballY,
            scaleX: ballScaleX,
            scaleY: ballScaleY,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            times: times,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  );
}

interface LoaderProps {
  duration?: number; // duration in ms, defaults to 5000 (5 seconds)
  onComplete?: () => void;
}

export default function Loader({ duration = 5000, onComplete }: LoaderProps) {
  const [percentage, setPercentage] = useState<number>(1);

  useEffect(() => {
    const startTime = performance.now();
    let animationFrameId: number;
    let completionTimer: ReturnType<typeof setTimeout>;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // Calculate smooth percentage from 1 to 100
      const currentPercent = Math.max(1, Math.min(100, Math.floor(progressRatio * 100)));
      setPercentage(currentPercent);

      if (progressRatio < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setPercentage(100);
        completionTimer = setTimeout(() => {
          if (onComplete) {
            onComplete();
          }
        }, 300);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (completionTimer) clearTimeout(completionTimer);
    };
  }, [duration, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 0.98,
        filter: 'blur(8px)',
        transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white select-none overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
        
        {/* Brand Name on top */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center space-x-2"
        >
          <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Haleem<span className="text-blue-500">.dev</span>
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
        </motion.div>

        {/* Middle: Wave Physics Loader */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center justify-center py-2"
        >
          <WavePhysicsLoader theme="dark" />
        </motion.div>

        {/* Bottom: Percentage Progress Counter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center space-y-2 w-48"
        >
          <div className="flex items-center justify-between w-full text-xs font-mono text-slate-400">
            <span className="tracking-widest uppercase text-[10px] text-slate-500">Loading</span>
            <span className="tabular-nums font-semibold text-blue-400">{percentage}%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/40">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"
              style={{ width: `${percentage}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
