import { cn } from "@/lib/utils";
import React from "react";

interface MeteorsProps {
  number?: number;
  className?: string;
}

interface MeteorProps {
  id: number;
  size: string;
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

export const Meteors: React.FC<MeteorsProps> = ({ number, className }) => {
  const meteors: MeteorProps[] = [...Array(number || 20)].map((_, idx) => ({
    id: idx,
    size: Math.floor(Math.random() * 30) + 1 + "px",
    left: Math.floor(Math.random() * 100) + 1 + "%",
    top: Math.floor(Math.random() * 100) + 1 + "%",
    animationDelay: Math.floor(Math.random() * 10) + 1 + "s",
    animationDuration: Math.floor(Math.random() * 20) + 10 + "s",
  }));

  return (
    <>
      {meteors.map((meteor) => (
        <span
          key={`meteor-${meteor.id}`}
          className={cn(
            "absolute top-0 left-0 w-px h-40 bg-gradient-to-b from-transparent via-indigo-400 to-transparent animate-meteor z-0 opacity-40",
            className
          )}
          style={{
            top: meteor.top,
            left: meteor.left,
            width: meteor.size,
            height: `calc(${meteor.size} * 10)`,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        />
      ))}
    </>
  );
};
