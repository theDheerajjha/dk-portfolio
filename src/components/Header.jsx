import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const Header = () => {
  const [displayText, setDisplayText] = useState("");
  const introText = "Hi, I'm Dheeraj! 👋";
  const subtitleTexts = [
    "Crafting Digital Experiences 🚀",
    "Turning Code into Magic ✨",
    "Web Wizard at Your Service 🧙‍♂️",
  ];
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    let currentText = "";
    let index = 0;
    let subtitleTimer;


    const typeWriter = setInterval(() => {
      if (index < introText.length) {
        currentText += introText.charAt(index);
        setDisplayText(currentText);
        index++;
      } else {
        clearInterval(typeWriter);
        subtitleTimer = setInterval(() => {
          setSubtitleIndex((prev) => (prev + 1) % subtitleTexts.length);
        }, 3000);
      }
    }, 100);

    return () => {
      clearInterval(typeWriter);
      clearInterval(subtitleTimer);
    };
  }, []);

  const technologies = React.useMemo(
    () => [
      "React",
      "TypeScript",
      "Vue",
      "NextJS",
      "MaterialUI",
      "Tailwind CSS",
    ],
    []
  );

  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col bg-neutral-900 overflow-hidden"
    >
      <Navbar />

      {/* Background Geometric Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent-400/10 rounded-full blur-3xl animate-float"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="container mx-auto px-4 flex-grow flex items-center justify-center text-center relative z-10"
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-cosmic">
            {displayText}
            <span className="animate-blink">|</span>
          </h1>

          {/* Subtitle with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.p
              key={subtitleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto"
            >
              {subtitleTexts[subtitleIndex]}
            </motion.p>
          </AnimatePresence>

          {/* Technologies List */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-neutral-700 text-brand-300 rounded-full text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.a
              href="#about"
              aria-label="Explore My Journey"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-brand-300 text-white rounded-lg hover:bg-brand-400 transition duration-300 shadow-cosmic"
            >
              Explore My Journey
            </motion.a>
            <motion.a
              href="#contact"
              aria-label="Contact Me"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 border-2 border-neutral-300 text-neutral-300 rounded-lg hover:bg-neutral-700 transition duration-300"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Links with Tooltips */}
          <div className="flex justify-center space-x-4 mt-6">
            {[
              {
                name: "LinkedIn",
                url: "https://linkedin.com/in/dheeraj-jha-65b2231b7",
                icon: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
              },
              {
                name: "GitHub",
                url: "https://github.com/theDheerajjha",
                icon: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zM248,8C106.1,8,0,113.3,0,252s69.8,205.8,169.5,239.2...",
              },
              // Add additional social icons here
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.name} profile`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-neutral-300 hover:text-brand-300 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  className="w-6 h-6 fill-current"
                >
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
