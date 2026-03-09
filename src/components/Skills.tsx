import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import Skill from "./Skill";
import {
  faHtml5,
  faJs,
  faReact,
  faLaravel,
  faGitAlt,
  faFlutter,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const techSkills = [
  {
    icon: faHtml5,
    name: "HTML / CSS / Tailwind",
    color: "#f16a30",
  },
  {
    icon: faJs,
    name: "JavaScript / TypeScript",
    color: "#fed600",
  },
  {
    icon: faReact,
    name: "React / Next.js",
    color: "#01d6ff",
  },
  {
    icon: faJs,
    name: "Node.js / Express.js",
    color: "#facc15",
  },
  {
    icon: faLaravel,
    name: "PHP / Laravel",
    color: "#ff3325",
  },
  {
    icon: faGitAlt,
    name: "Git / GitHub",
    color: "#f97316",
  },
  {
    icon: faDatabase,
    name: "MySQL / MongoDB",
    color: "#6b6b6b",
  },
  {
    icon: faFlutter,
    name: "Flutter",
    color: "#38bdf8",
  },
  {
    icon: null,
    name: "Dart",
    color: "#0ea5e9",
  },
];

const softSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Creativity",
  "Team Collaboration",
  "Attention to Detail",
  "Adaptability",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [activeCategory, setActiveCategory] = useState<"core" | "tech">("core");

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-7 py-12 sm:py-16"
      id="skills"
    >
      <h3 className="text-white text-5xl md:text-7xl font-semibold mb-4">
        Skills
      </h3>
      <p className="text-sm md:text-base text-zinc-400 max-w-2xl">
        A blend of core engineering strengths and a modern full-stack toolkit,
        focused on building reliable, production-ready products.
      </p>

      <div className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs sm:text-sm">
        <button
          type="button"
          onClick={() => setActiveCategory("core")}
          className={`px-4 py-1.5 rounded-full transition text-xs sm:text-sm ${
            activeCategory === "core"
              ? "bg-white text-black"
              : "text-zinc-300 hover:text-white"
          }`}
        >
          Core strengths
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory("tech")}
          className={`px-4 py-1.5 rounded-full transition text-xs sm:text-sm ${
            activeCategory === "tech"
              ? "bg-white text-black"
              : "text-zinc-300 hover:text-white"
          }`}
        >
          Tech stack
        </button>
      </div>

      <div className="mt-10">
        {activeCategory === "core" && (
          <motion.div
            key="core"
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {softSkills.map((name) => (
              <motion.div
                key={name}
                variants={itemVariants}
                className="cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Skill
                  skillIcon={
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-white font-semibold">
                      {getInitials(name)}
                    </div>
                  }
                  skillName={name}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeCategory === "tech" && (
          <motion.div
            key="tech"
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {techSkills.map(({ icon, name, color }) => (
              <motion.div
                key={name}
                variants={itemVariants}
                className="cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <Skill
                  skillIcon={
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center">
                      {name === "Dart" ? (
                        <img
                          src="/images/dart-logo.png"
                          alt="Dart"
                          className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 object-contain"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={icon as any}
                          className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12"
                          color={color}
                        />
                      )}
                    </div>
                  }
                  skillName={name}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
