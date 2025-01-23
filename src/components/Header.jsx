import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

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
    () => ["React", "Vue", "NextJS", "NodeJS"],
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

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mt-6">
            {[
              {
                name: "LinkedIn",
                url: "https://linkedin.com/in/dheeraj-jha-65b2231b7",
                icon: <FaLinkedin />,
              },
              {
                name: "GitHub",
                url: "https://github.com/theDheerajjha",
                icon: <FaGithub />,
              },
              {
                name: "Email",
                url: "mailto:the.dheeraj.jha@gmail.com",
                icon: <FaEnvelope />,
              },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.name}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-neutral-300 hover:text-brand-300 transition duration-300"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
