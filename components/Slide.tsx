import React from 'react';
import { motion } from 'framer-motion';
import { SlideContent } from '../types';
import { ArrowRight } from 'lucide-react';

interface SlideProps {
  data: SlideContent;
  isActive: boolean;
}

export const Slide: React.FC<SlideProps> = ({ data, isActive }) => {
  // Alignment styles
  const alignClass = {
    left: 'items-start text-left md:pl-24',
    right: 'items-end text-right md:pr-24',
    center: 'items-center text-center',
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background Image with Parallax-like scale effect on active */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: isActive ? 1.05 : 1.1 }}
        transition={{ duration: 10, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply" /> {/* Darken overlay */}
        <div className="absolute inset-0 bg-coffee-900/30 z-10 mix-blend-overlay" /> {/* Color tint */}
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Container */}
      <div className={`relative z-20 w-full h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto ${alignClass[data.align]}`}>
        <AnimatePresenceWrapper isActive={isActive}>
          
          {/* Subtitle */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gold-500 tracking-[0.2em] text-sm md:text-base font-bold uppercase mb-4"
          >
            {data.subtitle}
          </motion.h3>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-xl"
          >
            {data.title}
          </motion.h1>

          {/* Description line (Decoration) */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className={`h-1 bg-gold-500 mb-8 ${data.align === 'center' ? 'mx-auto' : data.align === 'right' ? 'ml-auto' : ''}`}
          />

          {/* Description Text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="font-sans text-lg md:text-xl text-coffee-100 max-w-xl leading-relaxed drop-shadow-md"
          >
            {data.description}
          </motion.p>

          {/* CTA Button */}
          {data.cta && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-10 group relative px-8 py-3 bg-transparent border border-white/30 text-white overflow-hidden rounded-full hover:border-gold-500 transition-colors duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gold-500/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              <span className="relative flex items-center gap-3 font-bold tracking-wider">
                {data.cta} <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>
          )}

        </AnimatePresenceWrapper>
      </div>
    </div>
  );
};

// Wrapper to handle unmounting animations simply
const AnimatePresenceWrapper: React.FC<{ isActive: boolean; children: React.ReactNode }> = ({ isActive, children }) => {
  if (!isActive) return null;
  return <>{children}</>;
}
