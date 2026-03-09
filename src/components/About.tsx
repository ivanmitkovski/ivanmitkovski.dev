import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import VerticalTimeline from "./VerticalTimeline";
import Experience from "./Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="px-4 sm:px-7 py-8 sm:py-10" id="about">
      <motion.h3
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-7xl mb-18 font-semibold text-left"
      >
        About
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col md:flex-row items-start md:items-center mt-8 md:mt-18 space-y-10 md:space-y-0 md:space-x-10"
      >
        <div className="w-full md:w-1/2">
          <div className="max-w-2xl mx-auto md:mx-0 text-[#E0E0E0] space-y-4">
            <p className="text-base sm:text-lg font-light leading-relaxed tracking-normal text-left">
              I’m a full-stack software engineer dedicated to building
              intuitive, high-performance web applications. I approach every
              project with an eye for clean architecture and efficient
              interfaces whether that means crafting a real-time analytics
              dashboard or designing a scalable API.
            </p>
            <p className="text-base sm:text-lg font-light leading-relaxed tracking-normal text-left">
              When I’m not architecting code, you’ll find me exploring new
              guitar riffs or hiking the trails around Skopje. I believe
              curiosity, creativity, and a willingness to venture beyond your
              comfort zone are the true ingredients of innovation and that’s
              exactly how I tackle every challenge.
            </p>
          </div>
        </div>

        <div className="hidden md:block w-full md:w-auto">
          <VerticalTimeline />
        </div>

        <div className="w-full md:w-1/2 space-y-10">
          <Experience
            experience="IT SUPPORT SPECIALIST & WEB DEVELOPER"
            year={2024}
            description="Built secure e-commerce site and provided daily technical support"
            link="https://www.articbreezesystems.com/"
          />
          <Experience
            experience="PHP INTERN AT PABAU CLINIC SOFTWARE"
            year={2025}
            description="Developed PHP backend and jQuery frontend for optimized healthcare workflows."
            link="https://pabau.com/"
          />
          <Experience
            experience="FULL STACK INTERN AT VALTECH"
            year={2025}
            description="Automated Excel-to-Word documents with robust backend and scalable frontend."
            link="https://www.valtech.com/"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        id="links"
        className="flex flex-wrap justify-center md:justify-start items-center space-x-4 mt-8"
      >
        <a
          href="https://github.com/ivanmitkovski"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
          title="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" color="#E0E0E0" />
        </a>
        <a
          href="https://www.linkedin.com/in/ivan-mitkovski-483555270/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
          title="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="#E0E0E0" />
        </a>
        <a
          href="mailto:contact@ivanmitkovski.dev"
          className="hover:scale-110 transition-transform duration-200"
          title="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" color="#E0E0E0" />
        </a>
        <a
          href="/ivan-mitkovski-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
          title="Resume"
        >
          <FontAwesomeIcon icon={faFileLines} size="2x" color="#E0E0E0" />
        </a>
      </motion.div>
    </section>
  );
}
