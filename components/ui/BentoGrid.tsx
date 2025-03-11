"use client";
import { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
// import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import dynamic from "next/dynamic";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

// Import GridGlobe as a dynamic import with ssr: false
const GridGlobe = dynamic(() => import("./GridGlobe"), {
  ssr: false,
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true when component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    if (isMounted && typeof navigator !== "undefined") {
      const text = "hkstyles1212@gmail.com";
      navigator.clipboard.writeText(text);
      setCopied(true);
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-neutral-200 group/bento transition duration-300 shadow-md justify-between flex flex-col space-y-4 hover:shadow-xl hover:border-neutral-300",
        // Add explicit height handling for globe cell
        id === 2 ? "h-full min-h-[400px]" : "",
        className
      )}
      style={{
        background: "rgb(248,250,252)",
        backgroundImage:
          "linear-gradient(120deg, rgba(248,250,252,1) 0%, rgba(241,245,249,1) 100%)",
      }}
    >
      <div
        className={`${id === 6 ? "flex justify-center" : ""} h-full w-full ${
          id === 2 ? "min-h-[400px] dark:bg-indigo-800 shadow-xl" : ""
        }`}
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={title?.toString() || "Bento grid item"}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 dark:bg-indigo-900  ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt="Decorative image"
              className="object-cover object-center w-full h-full z-10"
            />
          )}
        </div>

        {id === 6 && isMounted && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-black font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        {id === 2 && isMounted && (
          <div className="absolute inset-0 w-full h-full">
            <GridGlobe />
          </div>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-medium md:max-w-32 md:text-xs lg:text-base text-sm text-neutral-700 z-10 backdrop-blur-sm bg-white/60 p-2 rounded-md inline-block">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-neutral-800 backdrop-blur-sm bg-white/60 p-2 rounded-md inline-block mt-2`}
          >
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 dark:bg-indigo-800">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-80 
                    lg:opacity-100 rounded-lg text-center bg-slate-100 text-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-slate-100"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-slate-100"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-80 
                    lg:opacity-100 rounded-lg text-center bg-slate-100 text-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && isMounted && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {/* <Lottie options={defaultOptions} height={200} width={400} /> */}
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-slate-200 text-slate-800 hover:!bg-slate-300 transition-colors duration-300"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
