import React from 'react';
import { motion } from 'framer-motion';

const VoiceVisualizer: React.FC = () => {
  // We will create a series of bars that animate their height
  const bars = Array.from({ length: 24 });

  return (
    <div className="relative w-full max-w-sm aspect-square mx-auto flex items-center justify-center">
      {/* Glowing background effects - softer for light mode */}
      <div className="absolute inset-0 bg-primary-500/10 blur-[80px] rounded-full animate-pulse" />
      
      <div className="relative z-10 flex items-center justify-center gap-1.5 h-48">
        {bars.map((_, i) => {
            return (
                <VisualizerBar key={i} index={i} total={bars.length} />
            )
        })}
      </div>

      {/* Center icon/status */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 shadow-lg shadow-slate-200/50"
      >
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs font-medium text-slate-600">Echo is listening</span>
      </motion.div>
    </div>
  );
};

const VisualizerBar: React.FC<{ index: number; total: number }> = ({ index, total }) => {
    // Generate random animation durations and heights
    // Middle bars should be generally taller
    const center = total / 2;
    const distance = Math.abs(index - center);
    const maxBaseHeight = 100 - (distance * 5); 
    const minHeight = 20;

    return (
        <motion.div
            className="w-2 rounded-full bg-gradient-to-t from-primary-600 to-primary-300"
            animate={{
                height: [
                    `${Math.max(minHeight, maxBaseHeight * 0.3)}%`,
                    `${Math.max(minHeight, maxBaseHeight * (0.8 + Math.random() * 0.5))}%`,
                    `${Math.max(minHeight, maxBaseHeight * 0.3)}%`
                ],
            }}
            transition={{
                duration: 0.4 + Math.random() * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.05 // Stagger effect
            }}
            style={{
                opacity: 1 - (distance / (total / 1.8)) // Fade out edges
            }}
        />
    );
}

export default VoiceVisualizer;