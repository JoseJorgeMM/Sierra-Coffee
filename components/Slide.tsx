import React from 'react';
import { motion } from 'framer-motion';
import { SlideContent } from '../types';
import { ArrowRight } from 'lucide-react';

interface SlideProps {
  data: SlideContent;
  isActive: boolean;
}

export const Slide: React.FC<SlideProps> = ({ data, isActive }) => {
  if (!isActive) return null;

  const alignClass = {
    left: 'items-start text-left md:pl-24',
    right: 'items-end text-right md:pr-24',
    center: 'items-center text-center',
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className={`relative z-20 w-full h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto ${alignClass[data.align]}`}>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gold-500 tracking-[0.2em] text-sm md:text-base font-bold uppercase mb-4"
        >
          {data.subtitle}
        </motion.h3>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"
        >
          {data.title}
        </motion.h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className={`h-1 bg-gold-500 mb-8 ${data.align === 'center' ? 'mx-auto' : data.align === 'right' ? 'ml-auto' : ''}`}
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="font-sans text-lg md:text-xl text-coffee-50 max-w-xl leading-relaxed drop-shadow-md"
        >
          {data.description}
        </motion.p>

        {data.cta && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 group relative px-8 py-3 bg-transparent border border-gold-500/50 text-white overflow-hidden rounded-full hover:bg-gold-500 hover:text-coffee-900 transition-all duration-300"
          >
            <span className="relative flex items-center gap-3 font-bold tracking-wider">
              {data.cta} <ArrowRight className="w-4 h-4" />
            </span>
          </motion.button>
        )}
      </div>
    </div>
  );
};