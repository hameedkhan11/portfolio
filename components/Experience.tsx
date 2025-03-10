import React, { useEffect, useState } from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Detect system theme preference on component mount
  useEffect(() => {
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
    <div className="py-20 w-full relative">
      {/* Background gradient - different for light/dark mode */}
      <div
        className={`absolute top-0 left-0 w-full h-full pointer-events-none ${
          theme === "dark"
            ? "bg-gradient-radial from-indigo-500/5 to-transparent opacity-30"
            : "bg-gradient-radial from-indigo-300/10 to-transparent opacity-40"
        }`}
      />

      <h1
        className={`heading relative z-10 ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        My <span className="text-gradient">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 5000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                theme === "dark"
                  ? "rgba(10,15,40,0.9)"
                  : "rgba(245,248,255,0.9)",
              backgroundImage:
                theme === "dark"
                  ? "linear-gradient(135deg, rgba(15,20,50,0.9) 0%, rgba(10,15,40,0.95) 100%)"
                  : "linear-gradient(135deg, rgba(245,248,255,0.9) 0%, rgba(235,238,245,0.95) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
              boxShadow:
                theme === "dark"
                  ? "0 10px 30px -10px rgba(0,0,0,0.5)"
                  : "0 10px 30px -10px rgba(0,0,0,0.15)",
            }}
            className={`flex-1 hover:scale-[1.02] transition-transform duration-300 ${
              theme === "dark"
                ? "text-white border-neutral-700/30"
                : "text-gray-800 border-neutral-200/50"
            }`}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div
                className={`lg:w-32 md:w-20 w-16 p-3 rounded-xl flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-neutral-800 to-neutral-900"
                    : "bg-gradient-to-br from-gray-100 to-gray-200"
                }`}
              >
                <Image
                  src={card.thumbnail}
                  width={100}
                  height={100}
                  alt={card.thumbnail}
                  className="lg:w-28 md:w-16 w-12 filter drop-shadow-lg"
                />
              </div>
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p
                  className={`text-start mt-3 font-normal ${
                    theme === "dark" ? "text-neutral-300" : "text-gray-600"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
