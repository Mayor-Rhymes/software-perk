"use client"

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion";
import { useRef } from "react";
import useOnScreen from "@/lib/hooks";

export function QuestionAnswers() {
   const ref = useRef<HTMLDivElement>(null);
   const isVisible = useOnScreen(ref);

   return (
      <div ref={ref} className="flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
         <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-alegreya text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
         >
            Frequently Asked Questions
         </motion.h2>
         
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
         >
            <Accordion type="single" collapsible className="w-full">
               <AccordionItem value="item-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-semibold">What do we do?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                     We build websites, web apps, and everything in between. Our expertise covers a wide range of digital solutions to meet your business needs.
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-semibold">How long does a project take?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                     It depends on the scope of the project. We can deliver small projects in a week or two, while larger, more complex projects may take several months. We&apos;ll provide a detailed timeline during our initial consultation.
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-semibold">Do we do mobile apps?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                     Yes, we develop mobile apps for both iOS and Android platforms. We can create native apps or cross-platform solutions depending on your requirements and budget.
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-semibold">How much does it cost?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                     We offer a wide range of pricing options. From basic to enterprise-level solutions, we&apos;re here to help you get the most out of your digital presence.
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-5" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-semibold">What if I need help?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                     We&apos;re here to help. Give us a call or send us an email and we&apos;ll get back to you as soon as possible.
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
         </motion.div>
      </div>
   )
}
