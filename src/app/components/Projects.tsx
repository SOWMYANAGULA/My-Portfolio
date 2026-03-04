import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  timeline: string;
};

/**
 * Map skill/tag names to logo URLs.
 * - Uses Devicon where available.
 * - Uses simple icon fallbacks for items without official logos.
 * - If a tag isn't mapped, it will render the tag text as fallback.
 */
const tagLogos: Record<string, string> = {
  // Automation / Testing
  Selenium:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  TestNG: "https://seeklogo.com/images/T/testng-logo-8F9C3A9F4B-seeklogo.com.png",
  JUnit: "https://avatars.githubusercontent.com/u/874086?s=200&v=4",

  // Languages / Tools
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

  // “Concept” items (no standard dev logos)
  POM: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
  XPath: "https://cdn-icons-png.flaticon.com/512/2721/2721271.png",

  // ML / Research
  "Machine Learning": "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
  "Tensor Model (STM)":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Social Media Mining": "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
  "User Study": "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",

  // SNMDD doesn’t have an official logo → choose a simple “network/brain” style icon
  SNMDD: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
};

const projects: Project[] = [
  {
    title: "iCARE – Intelligent Clinical Assignment and Record Entry System",
    timeline: "Aug 2022 — Dec 2022",
    description:
      "Developed and executed automated test cases for the iCARE healthcare system using Selenium WebDriver with Java/Python, validating pen-based login, patient assignment, and document creation workflows. Created robust UI test scripts for admin/doctor/nurse roles to ensure accurate dynamic rendering, form validation, and access control using XPath, TestNG, and POM (Page Object Model). Integrated Selenium testing into the development cycle using JUnit/TestNG and GitHub for version control, contributing to regression testing and ensuring high system reliability across multiple browsers and screen resolutions.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1080",
    tags: ["Selenium", "Java", "Python", "TestNG", "JUnit", "POM", "XPath", "GitHub"],
    github: "https://github.com/SOWMYANAGULA/iCARE-Intelligent-Clinical-Assignment-and-Record-Entry-System",
    live: "",
  },
  {
    title: "A Comprehensive Study on SNMDs via Online Social Media Mining",
    timeline: "Jul 2020 — Oct 2020",
    description:
      "Proposed a machine learning framework—Social Network Mental Disorder Detection (SNMDD)—that exploits features extracted from social network data to identify potential cases of SNMDs. Proposed an SNMD-based Tensor Model (STM) to improve accuracy and evaluated the framework via a user study with 3126 online social network users.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1080",
    tags: ["Machine Learning", "Social Media Mining", "SNMDD", "Tensor Model (STM)", "User Study"],
    github: "https://github.com/SOWMYANAGULA/A-Comprehensive-Study-on-SNMDs-via-Online-Social-Media-Mining",
    live: "",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-black text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selected academic projects aligned with my background in software engineering,
            test automation, and applied machine learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:bg-indigo-500 hover:text-white transition-colors duration-300"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  ) : null}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:bg-indigo-500 hover:text-white transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  {project.timeline}
                </p>

                <p className="text-gray-300 mb-6 flex-1">
                  {project.description}
                </p>

                {}
                <div className="flex flex-wrap gap-4 mt-2">
                  {project.tags.map((tag) => {
                    const logo = tagLogos[tag];

                    return (
                      <div
                        key={`${project.title}-${tag}`}
                        title={tag}
                        className="w-14 h-14 rounded-full bg-black/40 border border-gray-800
                                   flex items-center justify-center
                                   hover:scale-110 transition-all duration-300
                                   hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                      >
                        {logo ? (
                          <img
                            src={logo}
                            alt={tag}
                            className="w-8 h-8 object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <span className="text-[10px] text-gray-300 text-center px-2">
                            {tag}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!project.github && !project.live ? (
                  <p className="text-xs text-gray-500 mt-4">
                    
                  </p>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Footer */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors"
          >
            See more on GitHub
            <Github size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};