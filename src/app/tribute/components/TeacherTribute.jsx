"use client";
import { motion } from "framer-motion";
import { BookOpenCheck, Heart, Quote } from "lucide-react";
import teachers from "./data/teachers";

export default function TeacherTribute() {
  return (
    <section className="bg-gradient-to-b from-indigo-950 to-indigo-900 py-20 px-6 text-white relative overflow-hidden" 
     style={{
    background: 'radial-gradient(circle at 75% 30%, #1e1b4b 0%, #000000 70%)'
  }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-indigo-700 rounded-full"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex justify-center mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="bg-indigo-700 p-4 rounded-full inline-flex items-center justify-center">
              <BookOpenCheck className="w-8 h-8 text-yellow-300" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Guiding Lights <span className="text-yellow-300">👩‍🏫👨‍🏫</span>
          </h2>
          <p className="text-xl text-indigo-300 max-w-2xl mx-auto">
            A heartfelt tribute to the mentors who shaped our minds and characters
          </p>
        </motion.div>

        {/* Teachers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-indigo-600/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-lg border border-white/10 shadow-xl h-full relative overflow-hidden transition-all duration-300 group-hover:border-yellow-300/30">
                {/* Teacher image */}
                <div className="relative overflow-hidden rounded-xl mb-6 h-48">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Teacher info */}
                <div>
                  <h3 className="text-2xl font-bold mb-1">{teacher.name}</h3>
                  <p className="text-indigo-300 flex items-center gap-2">
                    <BookOpenCheck className="w-5 h-5 text-yellow-300" /> 
                    {teacher.subject}
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-6 relative">
                  <Quote className="absolute -top-2 left-0 w-5 h-5 text-yellow-300/30" />
                  <p className="text-indigo-100 pl-6 italic relative">
                    "{teacher.message}"
                  </p>
                  <div className="flex justify-end mt-2">
                    <Heart className="w-4 h-4 text-pink-400" />
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-yellow-300 rounded-bl-2xl opacity-70" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-xl text-indigo-300 max-w-3xl mx-auto">
            Thank you for being more than just teachers - for being our mentors, guides, and inspiration.
          </p>
          <div className="flex justify-center mt-6 gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}