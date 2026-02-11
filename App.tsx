import React, { useState, useEffect, useCallback } from 'react';
import { Slide } from './components/Slide';
import { Navbar } from './components/Navbar';
import { AIChat } from './components/AIChat';
import { SLIDES } from './constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const developerLogoUrl = "https://hvekecuybruzwpjusnkp.supabase.co/storage/v1/object/public/Imagenes/LogoDeveloper.svg";

  // Handle scroll events (Mouse Wheel)
  const handleWheel = useCallback((e: WheelEvent) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
      // Scroll Down
      if (currentSlide < SLIDES.length - 1) {
        setIsScrolling(true);
        setCurrentSlide(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 1200); // Debounce time
      }
    } else {
      // Scroll Up
      if (currentSlide > 0) {
        setIsScrolling(true);
        setCurrentSlide(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 1200);
      }
    }
  }, [currentSlide, isScrolling]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // Handle Key Press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        if (currentSlide < SLIDES.length - 1) setCurrentSlide(prev => prev + 1);
      } else if (e.key === 'ArrowUp') {
        if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen bg-coffee-900 overflow-hidden font-sans">
      <Navbar />

      {/* Main Slide Area */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          {SLIDES.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.id}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Slide data={slide} isActive={index === currentSlide} />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination / Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-gold-500 scale-125' 
                : 'bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator (Only on first slide) */}
      <AnimatePresence>
        {currentSlide === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-40 text-white/50 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest">Descubrir</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Developer Footer */}
      <div className="fixed bottom-4 left-6 z-40 flex items-center gap-3 group">
        <div className="flex flex-col items-start transition-opacity duration-300 opacity-60 group-hover:opacity-100">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Developed by</span>
          <span className="text-xs font-bold text-white tracking-wider">Jose Jorge Muñoz M.</span>
        </div>
        <img 
          src={developerLogoUrl} 
          alt="Developer Logo" 
          className="w-8 h-8 object-contain filter brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300"
        />
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 h-1 bg-gold-500 z-50 transition-all duration-1000 ease-out" style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }} />

      {/* AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;
