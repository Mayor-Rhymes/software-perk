'use client';

import { TechnologiesCard } from './technologies-card';
import { TechnologiesStore } from '@/lib/frontend-tech-data';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useOnScreen from '@/lib/hooks';
import { backendStore } from '@/lib/backend-tech-data';
import { fullstackStore } from '@/lib/fullstack-tech-data';

export default function Technologies() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10"
    >
      <motion.p
        className="text-2xl sm:text-3xl md:text-4xl font-alegreya text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        Our Technology Stack ⚙️
      </motion.p>

      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        <p className="text-center text-xl sm:text-2xl font-semibold md:text-start lg:text-start">
          Front End
        </p>
        <motion.div
          className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {TechnologiesStore.map((tech) => (
            <motion.div key={tech.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <TechnologiesCard {...tech} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        <p className="text-center text-xl sm:text-2xl font-semibold md:text-start lg:text-start">
          Back End
        </p>
        <motion.div
          className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
        >
          {backendStore.map((tech) => (
            <motion.div key={tech.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <TechnologiesCard {...tech} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        <p className="text-center text-xl sm:text-2xl font-semibold md:text-start lg:text-start">
          FullStack
        </p>
        <motion.div
          className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
        >
          {fullstackStore.map((tech) => (
            <motion.div key={tech.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <TechnologiesCard {...tech} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
