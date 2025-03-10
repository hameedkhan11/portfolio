import { cn } from "@/lib/utils";
import React from "react";

interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className,
  containerClassName,
  as: Component = "div",
}) => {
  return (
    <Component
      className={cn(
        "relative p-[2px] bg-transparent rounded-xl overflow-hidden",
        containerClassName
      )}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transform animate-gradient"
        style={{
          transform: "translateY(0)",
          opacity: 0.5,
          filter: "blur(7px)",
        }}
      />

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center bg-slate-950 rounded-lg backdrop-blur-xl overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    </Component>
  );
};

export default BackgroundGradient;
