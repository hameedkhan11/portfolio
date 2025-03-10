import React from "react";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

interface GridItem {
  id: number;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  img?: string;
  className: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

const Grid: React.FC = () => {
  // Deep clone and modify gridItems
  const modifiedGridItems: GridItem[] = JSON.parse(
    JSON.stringify(gridItems)
  ).map((item: GridItem) => {
    return {
      ...item,
      className: item.className,
      imgClassName: item.imgClassName,
      titleClassName: item.titleClassName,
    };
  });

  return (
    <section id="about" className="relative">
      {/* Background elements */}
      <div className="absolute -z-10 top-40 left-20 w-72 h-72 bg-indigo-200/60 dark:bg-indigo-800/30 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute -z-10 bottom-40 right-20 w-80 h-80 bg-cyan-200/60 dark:bg-cyan-800/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute -z-10 top-60 right-40 w-64 h-64 bg-pink-100/50 dark:bg-pink-800/30 rounded-full blur-[90px]" />

      <BentoGrid className="w-full py-20 relative z-10 grid-rows-[auto] h-full">
        {modifiedGridItems.map((item: GridItem, i: number) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={`${
              item.className
            } hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm ${
              !item.className.includes("dark:bg-")
                ? "bg-gradient-to-br from-white/95 to-neutral-100/90 dark:from-indigo-900/80 dark:to-slate-900/90 border border-neutral-200/80 dark:border-indigo-800/50 shadow-lg"
                : ""
            }`}
            img={item.img}
            imgClassName={`${
              item.imgClassName || ""
            } filter brightness-105 dark:brightness-90`}
            titleClassName={`${
              item.titleClassName || ""
            } text-neutral-800 dark:text-neutral-100 font-bold`}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
