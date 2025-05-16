import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 300; // Character limit for collapsed description
  const isLongDescription = description.length > maxLength;
  
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  
  const displayText = isExpanded || !isLongDescription 
    ? description 
    : `${description.substring(0, maxLength)}...`;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="project-card p-5 sm:w-full w-full flex flex-col md:flex-row gap-5">
        <div className="md:order-2 md:w-1/2">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => source_code_link ? window.open(source_code_link, "_blank") : null}
                className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center ${source_code_link ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                title={source_code_link ? "View Source Code" : "Source Code Not Available"}
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:order-1 md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <div className="mt-2">
              <p className="text-secondary text-[14px] leading-[24px] description-text">
                {displayText}
              </p>
              {isLongDescription && (
                <span 
                  className="read-more-btn" 
                  onClick={toggleReadMore}
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </span>
              )}
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
            
            {live_demo_link && (
              <div className="mt-2">
                <a
                  href={live_demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-[#804dee] text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 inline-block text-center"
                >
                  View Live Demo
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="bg-[#050816] min-h-screen">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. They reflect my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-col gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
