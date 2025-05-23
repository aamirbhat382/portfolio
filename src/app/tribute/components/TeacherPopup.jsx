'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function TeacherPopup({ teacher, index, total }) {
  const audioRef = useRef(null);

  // Play audio when teacher changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      
      if (teacher.audio) {
        audioRef.current.src = teacher.audio;
        // Note: Most browsers block autoplay unless it's triggered by user interaction
        // We'll attempt to play but catch any errors
        audioRef.current.play().catch(error => {
          console.log("Autoplay was prevented:", error);
          // You might want to show a play button instead
        });
      }
    }
  }, [teacher]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 flex items-center justify-center p-4"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      
      {/* Hidden audio element */}
      <audio 
        ref={audioRef} 
        loop  // If you want the audio to loop
        autoPlay // This may not work in all browsers without user interaction
      />
      
      {/* Teacher card - perfectly centered and sized */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="relative w-full max-w-4xl h-[90vh] max-h-[800px] bg-gradient-to-br from-indigo-900/90 to-black/90 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8"
      >
        {/* Teacher image with perfect aspect ratio */}
        <div className="w-64 h-64 min-w-[256px] rounded-full border-4 border-yellow-300/50 overflow-hidden mb-8 shadow-lg">
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content that never overflows */}
        <div className="text-center max-h-[40vh] px-4 overflow-y-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-300">{teacher.name}</h2>
          <p className="text-xl text-indigo-300 mb-6">{teacher.subject}</p>
          <p className="text-lg italic max-w-prose text-green-600 mx-auto">{teacher.message}</p>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <div 
                key={i}
                className={`h-1 w-8 rounded-full transition-all duration-500 ${i === index ? 'bg-yellow-300' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}