import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import animeAvatar from "../../assets/sowmya.jpg";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  /* ---------------- Typing Setup ---------------- */
  // We only type the ROLE line like your screenshot
  const roleText = "Experienced Software Engineer";
  const typingSpeed = 40;

  const [typedRole, setTypedRole] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);

  /* ---------------- Typing Animation ---------------- */
  useEffect(() => {
    if (!isInView) return;

    let roleIndex = 0;

    const typeRole = setInterval(() => {
      roleIndex++;
      setTypedRole(roleText.slice(0, roleIndex));

      if (roleIndex >= roleText.length) {
        clearInterval(typeRole);
        setShowSubtitle(true);
      }
    }, typingSpeed);

    return () => clearInterval(typeRole);
  }, [isInView]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-black pt-32 md:pt-36 transition-colors duration-500 overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.12),transparent_55%)]" />

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left">
          {/* Small top text */}
          <p className="text-xl tracking-[0.2em] text-white uppercase mb-3">
            HELLO, I’M
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-fuchsia-500">Sowmya</span>{" "}
            <span className="text-white">Nagula</span>
          </h1>

          {/* Role line (typed) */}
          <div className="mt-3 text-2xl md:text-4xl font-bold text-fuchsia-500 flex items-center justify-center md:justify-start">
            <span>{typedRole}</span>

            {/* Cursor */}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block ml-2 w-[3px] h-6 md:h-9 bg-fuchsia-500 align-middle rounded"
            />
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mt-6 text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed space-y-3"
          >
            <p>
              Full-Stack Software Engineer building scalable web platforms, 
              cloud-native services, and modern user experiences.

            </p>
            <p>
              Focused on React, TypeScript, Java, Python, and cloud 
              technologies to deliver reliable and high-performance applications.
            </p>
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-10">
            {}
            <a
   href={`${import.meta.env.BASE_URL}resume.pdf`}
  download="Sowmya_Nagula_Resume.pdf"
  className="px-8 py-4 bg-fuchsia-500 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition"
>
  Download Resume
</a>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent text-white border border-white/15 rounded-lg font-semibold hover:bg-white/5 hover:border-white/25 transition"
            >
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-gray-400">
            <a
              href="https://github.com/SOWMYANAGULA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-400 transition hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.55)]"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/sowmya-n-0889a5301/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-400 transition hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.55)]"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:nagulasowmya5@gmail.com"
              className="hover:text-fuchsia-400 transition hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.55)]"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px]">
            {/* outer ring */}
            <div className="absolute inset-0 rounded-full border-[6px] border-fuchsia-500 shadow-[0_0_30px_rgba(236,72,153,0.35)]" />

            {/* pink bottom plate */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[78%] h-[34%] bg-fuchsia-500 rounded-b-full z-[1]" />

            {/* inner circle with image */}
            <div className="absolute inset-[10px] rounded-full overflow-hidden bg-black z-[2]">
              <img
                src={animeAvatar}
                alt="Sowmya Nagula"
                className="w-full h-full object-cover object-[50%_18%]"
              />
            </div>

            {/* soft glow behind */}
            <div className="absolute -inset-12 rounded-full blur-3xl bg-fuchsia-600/10 -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-gray-500" />
      </motion.div>
    </section>
  );
};