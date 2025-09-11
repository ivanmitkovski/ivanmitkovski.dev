import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Project from "./Project";

type ProjectItem = {
  projectName: string;
  projectDescription: string;
  demoLink: string;
  codeRepoLink: string;
  releaseDate: string;
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const projects: ProjectItem[] = [
    {
      projectName: "🕵️ Inspector Gadget",
      projectDescription:
        "You found the blur? Now find the real secrets: practice and patience.",
      demoLink: "#",
      codeRepoLink: "#",
      releaseDate: "2026-01-01T00:00:00",
    },
    {
      projectName: "🍪 Cookie Thief",
      projectDescription:
        "No cookies here, just crumbs of knowledge. Bake your own code.",
      demoLink: "#",
      codeRepoLink: "#",
      releaseDate: "2026-01-01T00:00:00",
    },
    {
      projectName: "🧩 Puzzle Master",
      projectDescription:
        "Solving puzzles beats hacking CSS. Level up your skills.",
      demoLink: "#",
      codeRepoLink: "#",
      releaseDate: "2026-01-01T00:00:00",
    },
    {
      projectName: "🧙‍♂️ Code Wizard",
      projectDescription:
        "Magic isn't in blur removal. It's in your fingertips. Cast some code spells.",
      demoLink: "#",
      codeRepoLink: "#",
      releaseDate: "2026-01-01T00:00:00",
    },
  ];

  return (
    <section ref={ref} className="px-7 py-10 mt-18">
      <motion.h3
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-5xl md:text-7xl font-semibold mb-10"
      >
        Projects
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="flex flex-wrap -mx-2 mt-28"
      >
        {projects.map((project) => (
          <div key={project.projectName} className="w-full sm:w-1/2 px-2 mb-6">
            <Project {...project} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
