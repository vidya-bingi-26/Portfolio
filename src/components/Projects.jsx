import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "A modern e-commerce solution with seamless checkout experience",
    image: "/project1.jpg",
    link: "#",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Mobile App Design",
    category: "UI/UX Design",
    description: "Health tracking app with intuitive user interface",
    image: "/project2.jpg",
    link: "#",
    tags: ["Figma", "Prototyping", "User Research"],
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Visual Design",
    description: "Complete brand identity for a tech startup",
    image: "/project3.jpg",
    link: "#",
    tags: ["Logo Design", "Typography", "Brand Guidelines"],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Selected <span className="text-indigo-400">Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mb-6"></div>
          <p className="text-neutral-400 max-w-2xl">
            A curated selection of my recent projects showcasing my design and
            development expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-900"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-indigo-400 mb-2">{project.category}</p>
                  <p className="text-neutral-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neutral-800/50 text-neutral-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-white group-hover:text-indigo-400 transition-colors"
                  >
                    View Case Study
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border border-indigo-400/30 text-indigo-400 rounded-lg hover:bg-indigo-400/10 transition-colors"
          >
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
