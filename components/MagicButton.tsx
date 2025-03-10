import React from "react";

/**
 * Enhanced magic button with improved visual effects
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Glass morphism effect with improved styling */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-gradient-to-r from-neutral-950 to-neutral-900 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 
             shadow-[0_0_15px_rgba(138,43,226,0.2)] ${otherClasses}`}
      >
        {position === "left" && <span className="animate-pulse">{icon}</span>}
        <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-medium">
          {title}
        </span>
        {position === "right" && <span className="animate-pulse">{icon}</span>}
      </span>
    </button>
  );
};

export default MagicButton;
