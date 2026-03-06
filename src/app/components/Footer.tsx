import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8"
        >

          {/* Name + Tagline */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 tracking-wide
              drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]">
              SowmyaNagula.dev
            </h2>
            <p className="text-gray-400">
              Software Engineer | Full-Stack Developer | Cloud & DevOps
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">

            <motion.a
              href="https://github.com/SOWMYANAGULA"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-fuchsia-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.7)]"
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sowmya-n-0889a5301/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-fuchsia-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.7)]"
            >
              <Linkedin size={24} />
            </motion.a>

            <motion.a
              href="mailto:nagulasowmya5@gmail.com"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-fuchsia-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.7)]"
            >
              <Mail size={24} />
            </motion.a>

          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} Sowmya Nagula. All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};