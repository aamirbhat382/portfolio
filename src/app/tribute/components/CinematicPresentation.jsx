'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeroIntro from './HeroIntro';
import TeacherPopup from './TeacherPopup';
import ClassMemory from './ClassMemory';
import FinalGoodbye from './FinalGoodbye';

const scenes = [
  { component: HeroIntro, bgMusic: '/audio/hero.mp3', duration: 10000 },
//   { component: ClassMemory, bgMusic: '/audio/memories.mp3', duration: 6000 }
];

export default function CinematicPresentation({ teachers }) {
  const [currentScene, setCurrentScene] = useState(0);
  const [currentTeacherIndex, setCurrentTeacherIndex] = useState(0);
  const [audio, setAudio] = useState(null);
  const [phase, setPhase] = useState('intro'); // intro → teachers → goodbye

  // Scene progression logic
  useEffect(() => {
    const sceneDuration = phase === 'intro' 
      ? scenes[currentScene].duration 
      : phase === 'teachers' 
        ? 10000 // 10sec per teacher
        : 20000; // Final goodbye duration

    const timer = setTimeout(() => {
      if (phase === 'intro') {
        if (currentScene < scenes.length - 1) {
          setCurrentScene(prev => prev + 1);
        } else {
          setPhase('teachers');
        }
      } 
      else if (phase === 'teachers') {
        if (currentTeacherIndex < teachers.length - 1) {
          setCurrentTeacherIndex(prev => prev + 1);
        } else {
          setPhase('goodbye');
        }
      }
    }, sceneDuration);

    return () => clearTimeout(timer);
  }, [currentScene, phase, currentTeacherIndex]);

  // Music management
  useEffect(() => {
    if (audio) audio.pause();
    
    let musicPath;
    if (phase === 'intro') musicPath = scenes[currentScene].bgMusic;
    else if (phase === 'teachers') musicPath = teachers[currentTeacherIndex].music;
    else musicPath = '/audio/goodbye.mp3';

    const newAudio = new Audio(musicPath);
    newAudio.volume = 0.5;
    newAudio.play();
    setAudio(newAudio);

    return () => newAudio.pause();
  }, [currentScene, phase, currentTeacherIndex]);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {phase === 'intro' ? (
          <motion.div
            key={`scene-${currentScene}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col"
          >
            {(() => {
              const SceneComponent = scenes[currentScene].component;
              return <SceneComponent />;
            })()}
          </motion.div>
        ) : phase === 'teachers' ? (
          <TeacherPopup 
            teacher={teachers[currentTeacherIndex]}
            index={currentTeacherIndex}
            total={teachers.length}
          />
        ) : (
          <FinalGoodbye />
        )}
      </AnimatePresence>
    </div>
  );
}