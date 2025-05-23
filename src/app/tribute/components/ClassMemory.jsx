"use client";
import { motion } from "framer-motion";
import { Users, Heart, Sparkles } from "lucide-react";

export default function ClassMemory() {
  return (
    // <section className="fixed inset-0 flex items-center justify-center overflow-hidden" 
    //   style={{
    //     background: 'radial-gradient(circle at 75% 30%, #1e1b4b 0%, #000000 70%)'
    //   }}
    // >
    //   {/* Floating decorative elements */}
    //   <div className="absolute inset-0 overflow-hidden pointer-events-none">
    //     {Array.from({ length: 15 }).map((_, i) => (
    //       <motion.div
    //         key={i}
    //         className="absolute text-yellow-300"
    //         style={{
    //           top: `${Math.random() * 100}%`,
    //           left: `${Math.random() * 100}%`,
    //           width: '18px',
    //           height: '18px',
    //           opacity: 0.3,
    //         }}
    //         animate={{
    //           y: [0, -20, 0],
    //           rotate: [0, 180, 360],
    //         }}
    //         transition={{
    //           duration: 10 + Math.random() * 10,
    //           repeat: Infinity,
    //           ease: "linear",
    //         }}
    //       >
    //         <Sparkles className="w-full h-full" />
    //       </motion.div>
    //     ))}
    //   </div>

    //   <div className="w-full h-full max-w-6xl px-6 py-12 relative z-10 overflow-y-auto">
    //     {/* Section header */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8 }}
    //       viewport={{ once: true }}
    //       className="text-center mb-8 md:mb-12"
    //     >
    //       <motion.div
    //         className="flex justify-center mb-4"
    //         whileHover={{ scale: 1.1 }}
    //         transition={{ type: "spring", stiffness: 400, damping: 10 }}
    //       >
    //         <div className="bg-indigo-700 p-3 md:p-4 rounded-full inline-flex items-center justify-center shadow-lg">
    //           <Users className="w-7 h-7 md:w-8 md:h-8 text-yellow-300" />
    //         </div>
    //       </motion.div>
    //       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4">
    //         Our Batch, Our Family <span className="text-yellow-300">🧑‍💻👩‍💻</span>
    //       </h2>
    //       <p className="text-lg md:text-xl text-indigo-300 max-w-2xl mx-auto">
    //         From awkward introductions to tearful goodbyes — this journey was pure magic
    //       </p>
    //     </motion.div>

    //     {/* Main memory card */}
    //     <motion.div
    //       initial={{ scale: 0.95, opacity: 0, y: 30 }}
    //       whileInView={{ scale: 1, opacity: 1, y: 0 }}
    //       transition={{ 
    //         duration: 0.8,
    //         type: "spring",
    //         stiffness: 100,
    //         damping: 10
    //       }}
    //       viewport={{ once: true }}
    //       className="bg-white/5 p-6 md:p-8 rounded-3xl backdrop-blur-lg shadow-2xl border border-white/10 max-w-4xl mx-auto relative mb-12"
    //     >
    //       {/* Decorative corner */}
    //       <div className="absolute top-0 right-0 w-12 md:w-16 h-12 md:h-16 border-t-2 border-r-2 border-yellow-300 rounded-bl-2xl opacity-70" />
          
    //       {/* Class photo */}
    //       <div className="relative overflow-hidden rounded-xl mb-6">
    //         <img
    //           src="/images/classphoto.jpg"
    //           alt="Class Group Photo"
    //           className="w-full h-auto max-h-[50vh] object-cover rounded-xl"
    //         />
    //         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    //         <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded-full text-xs md:text-sm">
    //           📸 Memory Unlocked
    //         </div>
    //       </div>

    //       {/* Memory text */}
    //       <div className="space-y-4 md:space-y-5 text-indigo-100">
    //         <motion.p 
    //           className="text-base md:text-lg"
    //           initial={{ opacity: 0 }}
    //           whileInView={{ opacity: 1 }}
    //           transition={{ delay: 0.3 }}
    //           viewport={{ once: true }}
    //         >
    //           <span className="text-yellow-300 font-semibold">🎉 3 Years of BCA</span> — A wild ride of code marathons, canteen gossip, bunked lectures, and last-minute submissions that somehow always worked out.
    //         </motion.p>

    //         <motion.p 
    //           className="text-base md:text-lg"
    //           initial={{ opacity: 0 }}
    //           whileInView={{ opacity: 1 }}
    //           transition={{ delay: 0.4 }}
    //           viewport={{ once: true }}
    //         >
    //           <span className="text-yellow-300 font-semibold">😂 The Eternal Questions:</span> "Attendance kitni chahiye?", "Yaar, project ka code share karoge?", "Exam mein yeh chapter aayega kya?"
    //         </motion.p>

    //         <motion.p 
    //           className="text-base md:text-lg"
    //           initial={{ opacity: 0 }}
    //           whileInView={{ opacity: 1 }}
    //           transition={{ delay: 0.5 }}
    //           viewport={{ once: true }}
    //         >
    //           <span className="text-yellow-300 font-semibold">💙 This photo</span> isn't just an image — it's a time capsule of inside jokes, shared struggles, and that one friend who always had charger.
    //         </motion.p>

    //         <motion.div
    //           className="pt-4 border-t border-white/10 flex items-center gap-2"
    //           initial={{ opacity: 0 }}
    //           whileInView={{ opacity: 1 }}
    //           transition={{ delay: 0.6 }}
    //           viewport={{ once: true }}
    //         >
    //           <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-400 fill-pink-400" />
    //           <p className="italic text-sm md:text-base text-indigo-300">
    //             // We didn't just earn degrees — we collected unforgettable moments and lifelong friendships.
    //           </p>
    //         </motion.div>
    //       </div>

    //       {/* Floating elements */}
    //       <div className="absolute -bottom-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-yellow-300/10 rounded-full blur-xl"></div>
    //       <div className="absolute -top-4 -left-4 w-12 md:w-16 h-12 md:h-16 bg-indigo-500/20 rounded-full blur-xl"></div>
    //     </motion.div>

    //     {/* Closing element */}
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       whileInView={{ opacity: 1 }}
    //       transition={{ delay: 0.8 }}
    //       viewport={{ once: true }}
    //       className="text-center pb-12"
    //     >
    //       <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/10">
    //         <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
    //         <span className="text-sm md:text-base text-indigo-100">Forever grateful for this journey</span>
    //         <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>
    <></>
  );
}