import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const skills = [
  {
    category: "Frontend & Web",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Component-based UI Architecture",
      "State Management",
      "Routing",
      "Client-side Performance Optimization",
      "Frontend Testing & Observability",
      "JSON",
    ],
  },
  {
    category: "Backend & Systems",
    items: [
      "Java",
      "Python",
      "Go",
      "Node.js",
      "C++",
      "RESTful APIs",
      "Microservices Architecture",
      "Distributed Systems",
      "System Design",
      "High Availability Services",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Jenkins",
      "GitHub",
      "Dev/Test/Prod Environments",
      "Cloud-Native Development",
    ],
  },
  {
    category: "Testing & Automation",
    items: [
      "JUnit",
      "TestNG",
      "Selenium",
      "pytest",
      "Unit Testing",
      "Integration Testing",
      "Regression Testing",
      "Automation Frameworks",
      "Static Analysis",
      "Performance Testing",
      "QA & Test Automation",
    ],
  },
  {
    category: "AI/ML & GenAI",
    items: [
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "Model Evaluation",
      "Natural Language Processing (NLP)",
      "Conversational AI systems",
      "Machine Learning pipelines",
      "AI system monitoring",
    ],
  },
  {
    category: "SDLC / Methodologies & Tools",
    items: [
      "Agile (Scrum)",
      "JIRA",
      "SDLC",
      "Sprint Planning",
      "Defect Tracking",
      "SQL",
    ],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-black text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive list of the technologies I work with.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                y: -8,
                boxShadow: "0px 20px 40px rgba(99, 102, 241, 0.25)",
              }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800">
                {skillGroup.category}
              </h3>

              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-300"
                  >
                    <CheckCircle className="w-4 h-4 text-fuchsia-400 mr-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};