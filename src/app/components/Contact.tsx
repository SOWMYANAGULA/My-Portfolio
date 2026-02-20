import React, { useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

type Status = "idle" | "loading" | "success" | "error";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  // ✅ Your EmailJS IDs (keep them here or move to env)
  const SERVICE_ID = "service_yvrrz49";
  const TEMPLATE_ID = "template_q3kg4hf";
  const PUBLIC_KEY = "apF6wBvEI0d4t4lPm";

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "loading") return; // prevent double submit
    if (!formRef.current) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      // ✅ Recommended: init once before send (safe even if called again)
      emailjs.init(PUBLIC_KEY);

      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current
      );

      // Optional: see status in console
      console.log("EmailJS success:", result.status, result.text);

      setStatus("success");
      formRef.current.reset();

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: any) {
      console.error("EmailJS error:", err);

      // EmailJS error often has: err.text or err.message
      const msg =
        err?.text ||
        err?.message ||
        "Failed to send message. Please try again.";

      setErrorMsg(msg);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-black text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-6 relative">
        {/* Toast Notifications */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              className="fixed top-6 right-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-xl z-50"
            >
              🎉 Message Sent Successfully!
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              className="fixed top-6 right-6 bg-red-500 text-white px-6 py-4 rounded-xl shadow-xl z-50 max-w-md"
            >
              ❌ Failed to send message.
              {errorMsg ? (
                <div className="text-sm mt-1 opacity-90">({errorMsg})</div>
              ) : (
                <div className="text-sm mt-1 opacity-90">(Try again.)</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* LEFT SIDE */}
          <div className="md:w-1/3 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-600 p-3 rounded-lg text-white">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-bold text-white">Email</h3>
                <p className="text-gray-400">nagulasowmya5@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-indigo-600 p-3 rounded-lg text-white">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-bold text-white">Location</h3>
                <p className="text-gray-400">United States</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="md:w-2/3 bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-800">
            <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />

              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />

              {/* ✅ Many EmailJS templates expect reply_to */}
              <input type="hidden" name="reply_to" />

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />

              <textarea
                name="message"
                rows={4}
                required
                placeholder="Your Message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                {status === "loading" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>

            {/* ✅ Optional: show error under form too */}
            {status === "error" && errorMsg && (
              <div className="mt-4 text-sm text-red-400">
                Error: {errorMsg}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};