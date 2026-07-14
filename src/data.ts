import type { ProjectShowProps } from "./type/type";

import gymImg from "../assets/img/ygn-gym.png";
import AI_Model_Scaling from "../assets/img/AI_Model_Scaling.png";
import Snap_Zone from "../assets/img/Snap Zone.png";

export const projects: ProjectShowProps[] = [
  {
    id: "1",
    title: "YGN GYM",
    description:
      "A full-stack mobile-responsive web application for a gym management system with an admin dashboard panel.",
    image: gymImg,
    techStack: [
      "React",
      "Tailwind",
      "Nest.js",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
    ],
    githubUrl: "https://github.com/ArrMannDev/ygn_frontend.git",
    demoUrl: "https://ygngym.vercel.app/",
    category: "Web",
  },
  {
    id: "2",
    title: "AI Model Scaling Calculator",
    description:
      "A mobile-responsive calculator for exploring AI model scaling relationships with interactive charts and visual data.",
    image: AI_Model_Scaling,
    techStack: ["React", "Tailwind", "Recharts"],
    githubUrl: "https://github.com/ArrMannDev/Model-Scaling-Calculator",
    demoUrl: "https://model-scaling-calculator.vercel.app/",
    category: "ML",
  },
  {
    id: "3",
    title: "Photo Uploader",
    description:
      "A web application that allows users to upload, store, and manage their images.",
    image: Snap_Zone,
    techStack: ["EJS", "Tailwind", "Express.js", "MySQL"],
    githubUrl: "https://github.com/ArrMannDev/Photo-Uploader",
    demoUrl: "https://github.com/ArrMannDev/Photo-Uploader",
    category: "Web",
  },
];