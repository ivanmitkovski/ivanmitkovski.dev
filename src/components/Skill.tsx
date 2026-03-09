import { JSX } from "react";

type Skill = {
  skillIcon: JSX.Element;
  skillName: string;
};

export default function Skill({ skillIcon, skillName }: Skill) {
  return (
    <div className="relative group overflow-hidden rounded-2xl w-full mx-auto">
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 bg-[#1E2024] rounded-2xl shadow-md hover:shadow-lg transition duration-300">
        <div className="text-xl sm:text-2xl md:text-3xl flex-shrink-0">
          {skillIcon}
        </div>
        <span className="text-white font-semibold text-sm sm:text-base md:text-lg break-words">
          {skillName}
        </span>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_0.65s_ease-in-out]" />
      </div>
    </div>
  );
}
