import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, BookOpen, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Experience = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="experience"
      className="py-20 bg-black text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Publication
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional experience and published work so far.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* ---------------- LEFT SIDE - EXPERIENCE ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-indigo-400" />
                <h3 className="text-xl font-bold text-white">
                  Software Engineer
                </h3>
              </div>

              <h4 className="text-lg text-indigo-400 font-medium mb-3">
                Wells Fargo
              </h4>

              <div className="flex flex-col gap-2 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> Feb 2024 - Present
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> Dallas, TX
                </span>
              </div>

              <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                <li>
                  Architected and developed scalable backend services and APIs using Java, Python, and Spring Boot.
                </li>
                <li>
                  Built API-first microservices supporting reliability, security, and performance across distributed systems.
                </li>
                <li>
                  Improved observability through logging, monitoring, automated testing, and CI/CD pipelines.
                </li>
                <li>
                  Reduced incident resolution time by ~35% through improved debugging workflows.
                </li>
                <li>
                  Contributed to engineering standards, code reviews, and SDLC best practices.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* ---------------- RIGHT SIDE - PUBLICATION ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-indigo-700 relative overflow-hidden h-full">
              {/* Ribbon Badge */}
              <div className="absolute top-5 right-[-45px] rotate-45 bg-indigo-600 text-white px-14 py-1 font-bold text-sm shadow-lg">
                Published
              </div>

              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <BookOpen className="text-indigo-400" size={28} />
                </motion.div>

                <h3 className="text-xl font-bold text-white">
                  Scopus Journal Publication
                </h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                <span className="font-semibold text-white">
                  Instant Augmented Reality Converter Tool
                </span>{" "}
                — contributed to a web app that enables users to upload 3D models, apply textures,
                and convert to mobile-ready formats (GLTF for Android and USDZ for iOS).
              </p>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  View Publication Details
                </button>

                <a
                  href="https://gisscience.net/VOLUME-8-ISSUE-6-2021/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all flex items-center gap-2"
                >
                  Official Page <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------------- MODAL ---------------- */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 max-w-2xl w-full p-8 rounded-2xl shadow-2xl border border-gray-800"
              >
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Instant Augmented Reality Converter Tool
                </h2>

                <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                  <p>
                    Published in a Scopus-indexed international journal (Paper ID: <strong>GSJ4300</strong>).
                  </p>

                  <p>
                    Built a web app allowing users to upload OBJ models, apply textures,
                    and export into <strong>GLTF</strong> (Android) and <strong>USDZ</strong> (iOS).
                  </p>

                  <div className="bg-indigo-900/40 p-4 rounded-xl mt-4 border border-indigo-700">
                    <strong className="text-white">Tools & Tech Used:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>JavaScript, Node.js</li>
                      <li>OBJ Models & Local Server Hosting</li>
                      <li>ARCore & ARKit</li>
                      <li>GLTF & USDZ</li>
                      <li>Depth Sensing Camera</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <button
                    onClick={() => setOpen(false)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};