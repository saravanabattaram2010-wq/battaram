import React from "react";
import { motion } from "motion/react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange to-gold w-24 h-24 flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="/SA.png" alt="SA" className="w-full h-full object-contain absolute inset-0 mix-blend-screen" onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block'; }} />
          <span style={{ display: 'none' }}>SA</span>
        </motion.div>
        
        <motion.div 
          className="mt-6 h-[2px] bg-white/10 rounded-full overflow-hidden w-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-orange to-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>
        
        <motion.div
          className="mt-4 text-xs font-mono tracking-[0.2em] text-white/50 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Initializing Systems
        </motion.div>
      </div>
    </motion.div>
  );
}
