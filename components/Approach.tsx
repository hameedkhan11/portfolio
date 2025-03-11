"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");

  // Detect system theme preference on component mount
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(isDarkMode ? "dark" : "light");

      // Listen for theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  return (
    <section
      className={`w-full py-20 ${theme === "light" ? "bg-gray-50" : ""}`}
    >
      <h1 className={`heading ${theme === "light" ? "text-gray-800" : ""}`}>
        My <span className="text-gradient">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-8">
        <Card
          title="Planning & Strategy"
          icon={<PhaseIcon order="Phase 1" />}
          des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
          theme={theme}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName={`${
              theme === "light" ? "bg-indigo-200" : "bg-indigo-900"
            } rounded-3xl overflow-hidden`}
            colors={theme === "light" ? [[99, 102, 241, 0.5]] : undefined}
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<PhaseIcon order="Phase 2" />}
          des="Once we agree on the plan, I cue my focus playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
          theme={theme}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName={`${
              theme === "light" ? "bg-rose-200" : "bg-rose-800"
            } rounded-3xl overflow-hidden`}
            colors={
              theme === "light"
                ? [
                    [255, 186, 178, 0.7],
                    [221, 255, 247, 0.7],
                  ]
                : [
                    [255, 186, 178],
                    [221, 255, 247],
                  ]
            }
            dotSize={2}
          />
        </Card>
        <Card
          title="Testing & Launch"
          icon={<PhaseIcon order="Phase 3" />}
          des="This is where the magic happens! After rigorous testing, I'll optimize
          the performance and deploy your website, ensuring a smooth launch and
          handover process."
          theme={theme}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName={`${
              theme === "light" ? "bg-cyan-200" : "bg-cyan-700"
            } rounded-3xl overflow-hidden`}
            colors={
              theme === "light" ? [[125, 211, 252, 0.7]] : [[125, 211, 252]]
            }
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
  theme = "dark",
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  theme?: "light" | "dark";
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border ${
        theme === "light"
          ? "border-gray-200"
          : "dark:border-neutral-800/40 border-gray-200"
      } group/canvas-card flex items-center justify-center
       max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl backdrop-blur-sm`}
      style={{
        background:
          theme === "light"
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(10, 15, 40, 0.8)",
        backgroundImage:
          theme === "light"
            ? "radial-gradient(circle at center, rgba(240, 240, 250, 0.5) 0%, rgba(250, 250, 255, 0.8) 100%)"
            : "radial-gradient(circle at center, rgba(25, 30, 60, 0.5) 0%, rgba(10, 15, 40, 0.8) 100%)",
      }}
    >
      <AccentCorner
        className={`absolute h-10 w-10 -top-3 -left-3 ${
          theme === "light"
            ? "text-neutral-400"
            : "dark:text-neutral-500 text-neutral-400"
        } opacity-30`}
      />
      <AccentCorner
        className={`absolute h-10 w-10 -bottom-3 -left-3 ${
          theme === "light"
            ? "text-neutral-400"
            : "dark:text-neutral-500 text-neutral-400"
        } opacity-30`}
      />
      <AccentCorner
        className={`absolute h-10 w-10 -top-3 -right-3 ${
          theme === "light"
            ? "text-neutral-400"
            : "dark:text-neutral-500 text-neutral-400"
        } opacity-30`}
      />
      <AccentCorner
        className={`absolute h-10 w-10 -bottom-3 -right-3 ${
          theme === "light"
            ? "text-neutral-400"
            : "dark:text-neutral-500 text-neutral-400"
        } opacity-30`}
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className={`${
            theme === "light" ? "text-black" : "dark:text-white text-black"
          } text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200`}
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{
            color: hovered
              ? "#E4ECFF"
              : theme === "light"
              ? "#4B5563"
              : "#E4ECFF",
          }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const PhaseIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full dark:bg-slate-950 bg-white px-5 py-2 text-gradient backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const AccentCorner = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
