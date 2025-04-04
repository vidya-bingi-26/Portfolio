import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ecommerce from "../assets/images/ecommerce.png";

const projects = [
  {
    id: 1,
    title: "ONDC Buyer App",
    category: "Web Development",
    description: `Shopzia – ONDC Buyer App (Sponsored by Innobytes)
Currently working on an ONDC-compliant buyer app using the MERN stack, sponsored by Innobytes, as part of an industry-level project. The app focuses on enhancing user experience through AI/ML-powered product recommendations, including related items and recently viewed products based on user interactions.

Planned future enhancements include:
- Image-based product search using computer vision
- Style suggestions tailored to user’s body type and preferred color palette
- Makeup shade recommendations based on skin tone detection

The project aims to blend intelligent shopping with personalized fashion & beauty guidance.`,
    image: ecommerce,
    link: "#",
    tags: ["React", "Node.js", "MongoDB"],
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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-purple-600 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-semibold mb-2 tracking-wide uppercase text-sm">
                    {project.category}
                  </p>

                  <p className="text-neutral-300 mb-4 overflow-y-auto max-h-40 pr-2 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900 scrollbar-hide">
                    {project.description}
                  </p>
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-indigo-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.547-1.387-1.335-1.756-1.335-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.107-.775.418-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.302-.535-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.137 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.654.243 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.823 1.096.823 2.21v3.285c0 .32.192.694.8.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
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

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-indigo-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mb-6"></div>
          <p className="text-neutral-300 max-w-2xl">
            I'm in the process of organizing and uploading my projects to
            GitHub. Meanwhile, feel free to explore my skills and experience!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
