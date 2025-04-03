import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import myImage from "../assets/images/formal_photo_vidya.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "40+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "React,js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Vue.js", level: 35 },
    {name:"Node.js",level:40}
  ];

  return (
    <section id="about" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-indigo-400/30 rounded-xl"></div>
              <div className="relative z-10 bg-neutral-800 rounded-xl overflow-hidden">
                <img
                  src={myImage}
                  alt="Profile"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About <span className="text-indigo-400">Me</span>
            </h2>

            <div className="prose prose-invert max-w-none mb-10">
              <p className="text-lg mb-4">
                I'm a passionate digital designer and developer with over 5
                years of experience creating immersive digital experiences that
                blend aesthetic appeal with technical excellence.
              </p>
              <p className="text-lg mb-4">
                My approach combines user-centered design principles with
                cutting-edge development techniques to deliver solutions that
                are not only visually stunning but also highly functional and
                accessible.
              </p>
              <p className="text-lg">
                When I'm not crafting digital experiences, you can find me
                exploring new design trends, contributing to open-source
                projects, or hiking in the mountains.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-neutral-800/50 p-4 rounded-lg text-center"
                >
                  <p className="text-3xl font-bold text-indigo-400 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-neutral-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-neutral-300">{skill.name}</span>
                    <span className="text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
