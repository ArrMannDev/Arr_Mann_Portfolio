import { useRef, useState } from "react";
import { ArrowUpRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
import type { Project, ProjectCategory } from "../data";
import { portfolioData } from "../data";

const projectsPerPage = 4;
const filters: Array<{ label: string; value: "All" | ProjectCategory }> = [
  { label: "All", value: "All" },
  { label: "Web", value: "Web" },
  { label: "Machine Learning", value: "Machine Learning" },
  { label: "Automation", value: "Automation" },
];

function getProjectUrl(project: Project) {
  return project.demoUrl ?? project.githubUrl;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>(
    "All",
  );
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const filteredProjects = portfolioData.projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter,
  );
  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);
  const visibleProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage,
  );

  function selectFilter(filter: "All" | ProjectCategory) {
    setActiveFilter(filter);
    setCurrentPage(1);
  }

  function selectPage(page: number) {
    setCurrentPage(page);
    requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      gridRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }

  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <header className="projects-heading">
        <h2 id="projects-title">Recent Projects</h2>
        <p>
          A curated mix of projects: scalable, practical, and built with care,
          blending thoughtful interfaces with reliable code.
        </p>
      </header>

      <div className="project-filters" aria-label="Filter projects by type">
        {filters.map(({ label, value }) => (
          <button
            className={activeFilter === value ? "active" : ""}
            type="button"
            key={value}
            aria-pressed={activeFilter === value}
            onClick={() => selectFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="projects-grid" ref={gridRef}>
        {visibleProjects.map((project) => {
          const projectUrl = getProjectUrl(project);

          return (
            <article className="project-card" key={project.id}>
              {projectUrl ? (
                <a
                  className="project-preview"
                  href={projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="project-preview">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                  />
                </div>
              )}

              <div className="project-details">
                <div className="project-meta">
                  <span>{project.role}</span>
                  {projectUrl && <ArrowUpRight size={18} aria-hidden="true" />}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      {pageCount > 1 && (
        <nav className="project-pagination" aria-label="Project pages">
          <button
            type="button"
            aria-label="Previous project page"
            disabled={currentPage === 1}
            onClick={() => selectPage(currentPage - 1)}
          >
            <CaretLeft size={17} aria-hidden="true" />
          </button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map(
            (page) => (
              <button
                className={currentPage === page ? "active" : ""}
                type="button"
                key={page}
                aria-label={`Project page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
                onClick={() => selectPage(page)}
              >
                {page}
              </button>
            ),
          )}
          <button
            type="button"
            aria-label="Next project page"
            disabled={currentPage === pageCount}
            onClick={() => selectPage(currentPage + 1)}
          >
            <CaretRight size={17} aria-hidden="true" />
          </button>
        </nav>
      )}
    </section>
  );
}
