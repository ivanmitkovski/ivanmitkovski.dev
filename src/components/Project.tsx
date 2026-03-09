import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { ProjectItem, ProjectStatus } from "../data/projects";

type ProjectProps = ProjectItem;

const getStatusStyles = (status: ProjectStatus) => {
  switch (status) {
    case "LIVE":
      return "bg-emerald-500/15 text-emerald-300 border border-emerald-400/40";
    case "WIP":
      return "bg-amber-500/10 text-amber-200 border border-amber-400/40";
    case "COMING_SOON":
      return "bg-sky-500/10 text-sky-200 border border-sky-400/40";
    case "ARCHIVED":
    default:
      return "bg-zinc-700/40 text-zinc-300 border border-zinc-500/40";
  }
};

export default function Project({
  projectName,
  projectDescription,
  demoLink,
  codeRepoLink,
  status,
  statusLabel,
}: ProjectProps) {
  const isActionAvailable = demoLink !== "#" || codeRepoLink !== "#";
  const isNonWorking = demoLink === "#" && codeRepoLink === "#";

  return (
    <motion.div className="group h-full flex-1 rounded-3xl bg-[#121318] p-[1px] shadow-xl hover:shadow-2xl transition-all duration-500">
      <div
        className={`relative w-full h-full min-h-[230px] md:min-h-[260px] rounded-3xl bg-[#1b1d21] p-5 md:p-6 flex flex-col justify-between transition-all duration-500 group-hover:bg-[#202227] ${
          isNonWorking ? "blur-sm hover:blur-none" : ""
        }`}
      >
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <h4 className="text-white text-lg md:text-2xl lg:text-3xl font-semibold tracking-tight">
              {projectName}
            </h4>
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] md:text-xs font-medium tracking-wide ${getStatusStyles(
                status,
              )}`}
            >
              {statusLabel}
            </span>
          </div>
          <p className="text-[#D1D5DB] text-sm md:text-base leading-relaxed">
            {projectDescription}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 justify-between">
          {isActionAvailable ? (
            <div className="flex flex-wrap gap-4">
              {demoLink !== "#" && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 text-sm md:text-base"
                >
                  <ExternalLink size={18} />
                  <span className="underline underline-offset-4">Demo</span>
                </a>
              )}
              {codeRepoLink !== "#" && (
                <a
                  href={codeRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 text-sm md:text-base"
                >
                  <Github size={18} />
                  <span className="underline underline-offset-4">Code</span>
                </a>
              )}
            </div>
          ) : (
            <span className="text-xs md:text-sm text-zinc-400">
              More details coming soon.
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
