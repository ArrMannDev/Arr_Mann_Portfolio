import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { ProjectShowProps } from "../type/type";
import gymImg from "../assets/img/ygn-gym.png";

const projects: ProjectShowProps[] = [
  {
    id: "1",
    title: "YGN GYM",
    description:
      "A full-stack mobile-responsive web application for gym management system with admin dashboard panel.",
    image: gymImg,
    techStack: ["React", "Tailwind", "Nest.js", "PostgreSQL", "Prisma"],
    githubUrl: "#",
    demoUrl: "#",
    category: "Web",
  },
  {
    id: "2",
    title: "Fitness Tracker App",
    description:
      "A mobile-responsive application for tracking workouts, nutrition, and personal progress with interactive charts.",
    image: "",
    techStack: ["React Native", "Firebase", "TypeScript"],
    githubUrl: "#",
    demoUrl: "#",
    category: "Mobile",
  },
  {
    id: "3",
    title: "AI Image Generator",
    description:
      "An interface for generating unique digital art using advanced AI models, featuring a community gallery.",
    image: "",
    techStack: ["Next.js", "OpenAI API", "Tailwind CSS"],
    githubUrl: "#",
    demoUrl: "#",
    category: "Web",
  },
];

export default function ProjectShow() {
  return (
    <section
      id="projects"
      className="py-24 px-6 dark:bg-(--color-bg) bg-[#f8fafc] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-(--color-text-secondary) font-DMMono-regular text-sm tracking-widest uppercase">
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-SG-medium text-(--color-text)">
              Selected Projects
            </h3>
          </div>
          <p className="text-(--color-text-secondary) font-DMMono-regular max-w-md">
            A collection of my recent work across various technologies and
            platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-(--color-card)/30 backdrop-blur-md rounded-3xl border border-(--color-text-secondary)/10 overflow-hidden hover:border-(--color-accent)/30 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-linear-to-br from-(--color-accent)/20 to-(--color-text-secondary)/10">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full"
                  />
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-(--color-accent) hover:text-black transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demoUrl}
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-(--color-accent) hover:text-black transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-DMMono-regular text-(--color-accent) uppercase tracking-tighter">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-SG-medium text-(--color-text) group-hover:text-(--color-accent) transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-(--color-text-secondary) font-DMMono-regular line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-[10px] font-DMMono-regular rounded-md border border-(--color-text-secondary)/20 text-(--color-text-secondary) group-hover:border-(--color-accent)/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <button className="px-8 py-3 rounded-xl border border-(--color-text-secondary)/20 text-(--color-text) font-DMMono-regular hover:bg-(--color-accent) hover:text-black hover:border-(--color-accent) transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
