export type ProjectStatus = "LIVE" | "WIP" | "COMING_SOON" | "ARCHIVED";

export type ProjectItem = {
  projectName: string;
  projectDescription: string;
  demoLink: string;
  codeRepoLink: string;
  status: ProjectStatus;
  statusLabel: string;
};

export const projects: ProjectItem[] = [
  {
    projectName: "Chisto.mk",
    projectDescription:
      "Community-powered civic environmental platform for reporting pollution, managing cleanup sites, and tracking impact  currently in active development.",
    demoLink: "#",
    codeRepoLink: "https://github.com/ivanmitkovski/chisto-mk",
    status: "WIP",
    statusLabel: "Work in progress · Civic platform",
  },
  {
    projectName: "Inspector Gadget",
    projectDescription:
      "You found the blur? Now find the real secrets: practice and patience.",
    demoLink: "#",
    codeRepoLink: "#",
    status: "COMING_SOON",
    statusLabel: "Concept · Coming soon",
  },
  {
    projectName: "Cookie Thief",
    projectDescription:
      "No cookies here, just crumbs of knowledge. Bake your own code.",
    demoLink: "#",
    codeRepoLink: "#",
    status: "COMING_SOON",
    statusLabel: "Playground · Coming soon",
  },
  {
    projectName: "Code Wizard",
    projectDescription:
      "Magic isn't in blur removal. It's in your fingertips. Cast some code spells.",
    demoLink: "#",
    codeRepoLink: "#",
    status: "COMING_SOON",
    statusLabel: "Playground · Coming soon",
  },
];

