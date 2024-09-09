'use client';

import { DesignCard } from './design-card';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useOnScreen from '@/lib/hooks';

export default function Designs() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10"
    >
      <motion.p
        className="text-2xl sm:text-3xl md:text-4xl font-alegreya text-center mb-4 sm:mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        We make designs that will make you go 😲
      </motion.p>
      {/* Uncomment and add DesignCard components as needed */}
    </div>
  );
}
