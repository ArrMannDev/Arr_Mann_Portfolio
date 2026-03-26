import type { IconType } from "react-icons";

export interface NavLink {
    title: string;
    href: string;
}

export type HeroProps = {
    name: string;
    introText: string;
    image: string;
}

export type SkillShowcaseProps = {
  className: string;
  showCaseText: string;
  techIcons: {
    icon: IconType;
    color: string;
  }[];
};

export interface ProjectShowProps{
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: "Web" | "Mobile" | "Design" | "Other";
}

export type EducationItem = {
  id: number;
  title: string;
  institution: string;
  year: string;
  description: string;
};


