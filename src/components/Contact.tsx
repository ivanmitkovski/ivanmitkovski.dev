import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="contact" className="px-7 pt-20 pb-16 scroll-mt-24">
      <motion.h3
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-5xl md:text-7xl font-semibold mb-10"
      >
        Contact
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
}
