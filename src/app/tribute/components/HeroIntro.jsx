"use client";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Sparkles } from "lucide-react";

export default function HeroIntro() {
  return (
    <div className="fixed inset-0 flex items-center justify-center text-white overflow-hidden" 
      style={{
        background: 'radial-gradient(circle at 75% 30%, #1e1b4b 0%, #000000 70%)'
      }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '16px',
              height: '16px'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-full h-full" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-6xl px-6 relative z-10"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <GraduationCap className="w-16 h-16 mx-auto text-yellow-300" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 px-4"
            initial={{ letterSpacing: "0px" }}
            animate={{ letterSpacing: "2px" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            To Our Beloved Teachers
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mt-6 px-4 text-indigo-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            On this bittersweet Monday, May 25th 2025, our BCA 2022 batch gathers
            one last time to express what words can barely contain...
          </motion.p>
          
          <motion.div
            className="flex justify-center items-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
            <p className="text-sm md:text-base text-indigo-200 italic">
              &quotFor every lesson, every patience, every belief you gave us...&quot
            </p>
            <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
          </motion.div>
          
          <motion.div
            className="pt-8 w-full max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              className="w-12 h-1 bg-yellow-300 mx-auto mb-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            />
            <motion.button
              className="w-full px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin Our Farewell
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scrolling animation cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-xs text-indigo-200 animate-pulse">Scroll down to continue</div>
        <div className="w-4 h-4 border-b-2 border-r-2 border-indigo-200 rotate-45 mx-auto mt-1"></div>
      </motion.div>
    </div>
  );
}