import React from "react";
import { BookOpen, Code2, CloudCog, Palette } from "lucide-react";
import { motion } from "motion/react";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-black text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              I'm a{" "}
              <span className="font-semibold text-white">
                Software Engineer with a Master’s in Computer Science from the University of North Texas
              </span>
              , with 3+ years of experience building scalable backend systems and full-stack web
              applications.
            </p>

            <p>
              Currently at{" "}
              <span className="font-semibold text-indigo-400">Wells Fargo</span>, I design and
              develop cloud-native microservices using Java, Python, and Spring Boot, focusing on
              distributed systems, high availability, performance optimization, and secure
              architectures.
            </p>

            <p>
              Previously, I worked at Zaven IT Solutions and Accenture, where I developed full-stack
              applications using React, TypeScript, Node.js, REST APIs, and PostgreSQL, while
              supporting AWS and Azure cloud deployments.
            </p>

            <p>
              I’m also a published contributor—my work includes an{" "}
              <span className="font-semibold text-white">
                Instant Augmented Reality Converter Tool
              </span>{" "}
              (Scopus International Journal Publication), focused on enabling 3D model uploads,
              applying textures/skins, and converting models into mobile-ready formats (GLTF for
              Android and USDZ for iOS).
            </p>
          </motion.div>

          {/* RIGHT SIDE - CARDS */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[
              {
                icon: Code2,
                title: "Full-Stack Developer",
                desc: "React, TypeScript, Node.js, REST APIs, PostgreSQL",
                color: "text-indigo-400",
              },
              {
                icon: CloudCog,
                title: "Cloud & DevOps",
                desc: "AWS, Azure, Docker, Kubernetes, CI/CD",
                color: "text-amber-400",
              },
              {
                icon: BookOpen,
                title: "Publication",
                desc: "Instant AR Converter Tool (Scopus) — GLTF (Android) & USDZ (iOS)",
                color: "text-purple-400",
              },
              {
                icon: Palette,
                title: "Lifestyle",
                desc: "Movies, Music, Painting & Exploring",
                color: "text-emerald-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <item.icon className={`w-10 h-10 ${item.color} mx-auto mb-4`} />
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};