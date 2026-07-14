import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState } from "react";
import ProjectTag from "./ProjectTag";
import { projects } from "../data";

export default function ProjectShow() {
  const [projectType, setProjectType] = useState<string>("Web");
  const filteredProjects = projects.filter(
    (project) => projectType === project.category
  );
  return (
    <section
      id="projects"
      className="bg-[#f8fafc] px-6 py-24 transition-colors duration-500 dark:bg-(--color-bg)"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-2">
            <h2 className="font-DMMono-regular text-sm uppercase tracking-widest text-(--color-text-secondary)">
              Portfolio
            </h2>

            <h3 className="font-SG-medium text-4xl text-(--color-text) md:text-5xl">
              Selected Projects
            </h3>
          </div>

          <p className="max-w-md font-DMMono-regular text-(--color-text-secondary)">
            A collection of my recent work across various technologies and
            platforms.
          </p>
        </div>

        <ProjectTag props={{setProjectType}}/>

        {/* Project list */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="group grid overflow-hidden rounded-3xl border border-(--color-text-secondary)/10 bg-(--color-card)/30 backdrop-blur-md transition-all duration-500 hover:border-(--color-accent)/30 hover:shadow-xl md:grid-cols-2"
            >
              {/* Project image */}
              <div className="relative min-h-64 overflow-hidden bg-linear-to-br from-(--color-accent)/20 to-(--color-text-secondary)/10 md:min-h-90">
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Image overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="translate-y-4 rounded-full bg-white/10 p-4 text-white opacity-0 backdrop-blur-md transition-all duration-500 hover:bg-(--color-accent) hover:text-black group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <FaGithub size={22} />
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="translate-y-4 rounded-full bg-white/10 p-4 text-white opacity-0 backdrop-blur-md transition-all delay-75 duration-500 hover:bg-(--color-accent) hover:text-black group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <FaExternalLinkAlt size={19} />
                  </a>
                </div>
              </div>

              {/* Project information */}
              <div className="flex flex-col justify-center p-7 sm:p-9 md:p-10">
                <span className="mb-3 font-DMMono-regular text-xs uppercase tracking-widest text-(--color-accent)">
                  {project.category}
                </span>

                <h4 className="mb-4 font-SG-medium text-2xl text-(--color-text) transition-colors duration-300 group-hover:text-(--color-accent) md:text-3xl">
                  {project.title}
                </h4>

                <p className="mb-7 font-DMMono-regular text-sm leading-7 text-(--color-text-secondary) md:text-base">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-(--color-text-secondary)/20 px-3 py-1.5 font-DMMono-regular text-[11px] text-(--color-text-secondary) transition-colors duration-300 group-hover:border-(--color-accent)/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Desktop project links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-(--color-text-secondary)/20 px-5 py-2.5 font-DMMono-regular text-sm text-(--color-text) transition-all duration-300 hover:border-(--color-accent) hover:bg-(--color-accent) hover:text-black"
                  >
                    <FaGithub size={17} />
                    Source Code
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-(--color-accent) px-5 py-2.5 font-DMMono-regular text-sm text-black transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <button
            type="button"
            className="rounded-xl border border-(--color-text-secondary)/20 px-8 py-3 font-DMMono-regular text-(--color-text) transition-all duration-300 hover:border-(--color-accent) hover:bg-(--color-accent) hover:text-black"
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}