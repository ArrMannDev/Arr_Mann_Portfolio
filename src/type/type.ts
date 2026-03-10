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