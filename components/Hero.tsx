import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/* Enhanced spotlights with theme-aware colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="rgba(255, 255, 255, 0.3)"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="rgba(147, 51, 234, 0.3)"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="rgba(59, 130, 246, 0.3)"
        />

        {/* Additional decorative elements - visible in both themes */}
        <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl opacity-20" />
        <div className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-xl opacity-20" />
      </div>

      {/* Background grid with theme-aware styling */}
      <div
        className="h-screen w-full dark:bg-neutral-950 bg-gray-50 dark:bg-grid-white/[0.03] bg-grid-black/[0.03]
        absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container - different for light/dark */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center 
          dark:bg-neutral-950 bg-gray-50
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="px-4 py-1 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-full border border-indigo-500/20 mb-6">
            <p className="uppercase tracking-widest text-xs text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-medium">
              Crafting Digital Experiences
            </p>
          </div>

          <TextGenerateEffect
            words="Hi I am Hameed Khan a Full Stack Web Developer"
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold bg-gradient-to-r dark:from-white dark:to-neutral-400 from-black to-neutral-700 bg-clip-text text-transparent"
          />

          <p className="text-center md:tracking-wider my-6 text-sm md:text-lg lg:text-2xl dark:text-neutral-400 text-neutral-600">
            Fullstack | Devops | UX Enthusiast
          </p>

          <a href="#about">
            <MagicButton
              title="Explore My Work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
