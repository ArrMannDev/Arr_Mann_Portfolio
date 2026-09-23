import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  Certificate,
  CheckCircle,
  Code,
  FileText,
  GithubLogo,
  HandWaving,
  SquaresFour,
  Stack,
  X,
} from "@phosphor-icons/react";
import { portfolioData as data } from "../data";
import { navigationLinks as links } from "../navigation";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

const technologyCount = new Set(Object.values(data.skills).flat()).size;
const stats = [
  {
    value: data.projects.length,
    label: "Portfolio projects",
    icon: Code,
    color: "purple",
  },
  {
    value: new Set(data.projects.map((project) => project.category)).size,
    label: "Areas of focus",
    icon: CheckCircle,
    color: "green",
  },
  {
    value: data.certificates.length,
    label: "Certificates earned",
    icon: Certificate,
    color: "amber",
  },
  { value: technologyCount, label: "Technologies", icon: Stack, color: "pink" },
];

function SectionPanel({ section }: { section: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  const title =
    links.find(([, path]) => path === `/${section}`)?.[0] ?? "Page not found";
  return (
    <dialog
      ref={dialog}
      className="section-dialog"
      aria-labelledby="panel-title"
      onCancel={(event) => {
        event.preventDefault();
        navigate("/");
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) navigate("/");
      }}
    >
      <div className="panel-inner">
        <header>
          <h2 id="panel-title">{title}</h2>
          <Link to="/" className="icon-button" aria-label="Close panel">
            <X size={23} />
          </Link>
        </header>
        {section === "about" && (
          <>
            <p>{data.person.about}</p>
            <p>
              Based in {data.person.location}. {data.person.availability}.
            </p>
          </>
        )}
        {section === "skills" &&
          Object.entries(data.skills).map(([group, skills]) => (
            <div className="panel-group" key={group}>
              <h3>{group.replace(/([A-Z])/g, " $1")}</h3>
              <div className="skill-tags">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        {!links.some(([, path]) => path === `/${section}`) && (
          <p>
            This page does not exist. <Link to="/">Return home</Link>.
          </p>
        )}
      </div>
    </dialog>
  );
}

export default function HeroPage() {
  const { section } = useParams();
  const { key: navigationKey } = useLocation();
  useEffect(() => {
    if (
      section !== "about" &&
      section !== "projects" &&
      section !== "education" &&
      section !== "contact"
    )
      return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    document.getElementById(section)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [section, navigationKey]);

  return (
    <>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="greeting">
              <HandWaving size={18} weight="duotone" /> Hello, I’m
            </div>
            <h1 id="hero-title" aria-label={data.person.name}>
              Arr <span>Mann</span>
            </h1>
            <h2>Full Stack Developer</h2>
            <p className="hero-description">
              I build thoughtful digital experiences that are
              <br className="desktop-break" /> fast, accessible, and easy to
              use.
              <br className="desktop-break" /> Let’s build something amazing
              together!
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">
                Hire Me <ArrowRight size={23} />
              </Link>
              <Link className="button button-secondary" to="/projects">
                View Projects <SquaresFour size={21} />
              </Link>
            </div>
            <div className="social-links">
              <span>Connect with me</span>
              <a
                href={data.person.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Arr Mann on GitHub"
              >
                <GithubLogo size={24} weight="fill" />
              </a>
              <a
                href={data.person.resumePdf}
                target="_blank"
                rel="noreferrer"
                aria-label="Read my resume"
              >
                <FileText size={24} weight="fill" />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img
              className="hero-portrait"
              src={data.person.profileImage}
              alt="Arr Mann Win Myint"
              width="1447"
              height="1087"
              fetchPriority="high"
            />
            <div className="floating-stat floating-stat-left">
              <Code size={21} />
              <strong>{technologyCount}+</strong>
              <span>
                Technologies
                <br />
                in my toolkit
              </span>
            </div>
            <div className="floating-stat floating-stat-right">
              <CheckCircle size={20} />
              <strong>{data.projects.length}</strong>
              <span>
                Portfolio
                <br />
                projects
              </span>
            </div>
          </div>
        </section>
        <section className="stats-bar" aria-label="Portfolio at a glance">
          {stats.map(({ value, label, icon: Icon, color }) => (
            <div className="stat" key={label}>
              <span className={`stat-icon ${color}`}>
                <Icon size={29} />
              </span>
              <div>
                <strong>
                  {value}
                  {label === "Technologies" ? "+" : ""}
                </strong>
                <span>{label}</span>
              </div>
            </div>
          ))}
        </section>
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      {section &&
        section !== "about" &&
        section !== "projects" &&
        section !== "education" &&
        section !== "contact" && (
        <SectionPanel key={section} section={section} />
      )}
    </>
  );
}
