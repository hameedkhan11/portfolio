"use client";

import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContentItem {
  title: string;
  description: string;
  content: React.ReactNode;
  color?: string;
}

interface StickyScrollProps {
  content: ContentItem[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardIndex = Math.min(Math.floor(latest * cardLength), cardLength - 1);
    setActiveCard(cardIndex);
  });

  return (
    <motion.div
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-4"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-800 dark:text-slate-200"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mt-2"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: content[activeCard].color || "var(--neutral-900)",
        }}
        className={cn(
          "w-full rounded-lg sticky top-0 h-80 sm:h-[24rem] overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content}
      </motion.div>
    </motion.div>
  );
};
