"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FinalGoodbye() {
  return (
    <section 
      className="fixed inset-0 bg-gradient-to-b from-indigo-950 to-black flex items-center justify-center text-white"
      style={{
        background: 'radial-gradient(circle at 75% 30%, #1e1b4b 0%, #000000 70%)'
      }}
    >
      <div className="max-w-2xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Heart className="w-12 h-12 mx-auto text-pink-400 fill-pink-400/20 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thank You <span className="text-yellow-300">❤️</span>
          </h2>
          <p className="text-lg text-indigo-200 mb-6">
            For being part of our journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <p className="text-indigo-100 mb-4">
            &quotThe memories we've created will last forever&quot
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-indigo-300">
            <Heart className="w-4 h-4 text-pink-400" />
            <span>BCA Final Batch 2025</span>
            <Heart className="w-4 h-4 text-pink-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}