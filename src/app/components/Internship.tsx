import React from "react";
import { motion } from "motion/react";
import hadoopImg from "../../assets/Hadoop.jpg";
import goalStreetImg from "../../assets/GoalStreet.jpg";

type InternshipItem = {
  title: string;
  org: string;
  timeline: string;
  image: string;
};

const internships: InternshipItem[] = [
  {
    title: "Hadoop Big Data Internship",
    org: "Neemii Technology Private Limited",
    timeline: "Certificate",
    image: hadoopImg,
  },
  {
    title: "Machine Learning with Python",
    org: "GoalStreet",
    timeline: "Certificate",
    image: goalStreetImg,
  },
];

export const Internship = () => {
  return (
    <section
      id="internship"
      className="py-20 bg-black text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Internships
          </h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Internship certificates and milestones showcasing hands-on learning and real-world experience.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {internships.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden
                         hover:shadow-2xl transition duration-300"
            >
              {/* image frame */}
              <div className="p-5">
                <div className="bg-black/30 border border-white/10 rounded-xl p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[320px] md:h-[360px] object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>

                {/* text */}
                <div className="mt-5">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-1">
                    {item.org} • {item.timeline}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};