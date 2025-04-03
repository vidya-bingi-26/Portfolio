import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sihIcon from "../assets/images/sih icon.png"; // Make sure path is correct

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "Cavista Hackathon 2025 Winner",
      description:
        "Developed an AI-powered home healthcare platform featuring symptom analysis, medical chatbot, doctor video calls, and real-time medical facility locator.",
      tags: ["AI Integration", "Full-Stack Development", "Team Collaboration"],
      icon: "🏆",
      date: "2025",
    },
    {
      title: "SIH Finalist (National Level)",
      description:
        "Selected among top teams nationwide in Smart India Hackathon, promoted by Hon. Prime Minister Narendra Modi Ji. Worked on problem Panel generation with Relevancy score calculation by DRDO.",
      tags: ["National Recognition", "Innovation", "Government Tech"],
      icon: "image", // Special marker for image
      date: "2024",
    },
    {
      title: "3rd Prize - RedHat Sponsored Poster Presentation Competition",
      description:
        "Secured 3rd position at MITAOE's tech presentation with teammate Vishal Kesharwani on cutting-edge open-source solutions.",
      tags: ["Technical Communication", "Research", "RedHat Ecosystem"],
      icon: "🥉",
      date: "2025",
    },
    {
      title: "Mahatech Volunteer (Business Exhibition)",
      description:
        "Developed soft skills in public speaking, multitasking, and collaborative teamwork while organizing large-scale tech events.",
      tags: ["Public Speaking", "Event Management", "Leadership"],
      icon: "🎤",
      date: "2025",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-indigo-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mb-6"></div>
          <p className="text-neutral-400 max-w-2xl">
            Highlights from hackathons, competitions, and leadership experiences
            that shaped my technical and professional journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-neutral-800/50 rounded-xl overflow-hidden border border-neutral-700/50 hover:border-indigo-400/30 transition-all"
            >
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl mt-1">
                    {achievement.icon === "image" ? (
                      <img
                        src={sihIcon}
                        alt="SIH Logo"
                        className="w-35 h-35 object-contain border-indigo-400/20"
                      />
                    ) : (
                      achievement.icon
                    )}
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {achievement.title}
                      </h3>
                      <span className="text-xs bg-indigo-900/50 text-indigo-400 px-3 py-1 rounded-full">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-neutral-400 mb-4">
                      {achievement.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-neutral-900/50 text-indigo-400 rounded-full border border-indigo-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
