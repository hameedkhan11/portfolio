import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, ReactNode } from "react";

interface Item {
  title: string;
  description: string;
  link: string;
}

interface HoverEffectProps {
  items: Item[];
  className?: string;
}

interface CardProps {
  className?: string;
  children: ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: ReactNode;
}

interface CardDescriptionProps {
  className?: string;
  children: ReactNode;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({
  items,
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.title}
          className="relative group block p-2 h-full w-full shadow-xl"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-white border border-neutral-200 dark:bg-slate-950 dark:border-slate-800 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle: React.FC<CardTitleProps> = ({
  className,
  children,
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-800 dark:text-zinc-100 font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn("mt-2 text-zinc-500 dark:text-zinc-400 text-sm", className)}
    >
      {children}
    </p>
  );
};
