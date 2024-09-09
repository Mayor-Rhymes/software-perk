"use client";

import ShowcaseCard from "./showcase-card";
import { ShowcaseStore } from "@/lib/showcase-data";
import { motion } from "framer-motion";
import { useRef } from "react";
import useOnScreen from "@/lib/hooks";

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="flex flex-col gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 lg:px-10">
      <motion.p
        className="text-center text-2xl sm:text-3xl md:text-4xl font-alegreya"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        Our Expertise?
      </motion.p>

      <motion.p
        className="text-center text-xl sm:text-2xl md:text-3xl mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        It is pretty simple. We create digital solutions and build beautiful websites.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {ShowcaseStore.map((card) => (
          <ShowcaseCard key={card.id} {...card} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
}