import { Browser, Database, FlowArrow } from "@phosphor-icons/react";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTypescript,
  SiSupabase
} from "react-icons/si";

const services = [
  { title: "Web Development", icon: Browser },
  { title: "Backend Development", icon: Database },
  { title: "Workflow Automation", icon: FlowArrow },
];

const technologies = [
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "NestJS", icon: SiNestjs, color: "#e0234e" },
  { name: "Express", icon: SiExpress, color: "#f1f1f1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "Prisma", icon: SiPrisma, color: "#d7dce2" },
  { name: "Python", icon: SiPython, color: "#ffd43b" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#f7931e" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
];

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-services" aria-label="Development specialties">
        {services.map(({ title, icon: Icon }) => (
          <div className="about-service" key={title}>
            <span className="about-service-marker" aria-hidden="true" />
            <Icon size={37} weight="thin" aria-hidden="true" />
            <h3>{title}</h3>
          </div>
        ))}
      </div>

      <div className="about-content">
        <h2 id="about-title">About me</h2>
        <p>
          I build maintainable web products from interface to backend. I enjoy
          turning real requirements into practical software, automation and
          applied data work.
        </p>

        <h3 className="about-tech-title">Skills &amp; technologies</h3>
        <ul className="about-tech-stack" aria-label="Technologies I use">
          {technologies.map(({ name, icon: Icon, color }) => (
            <li className="about-tech-logo" key={name} title={name}>
              <Icon color={color} aria-hidden="true" />
              <span className="sr-only">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
