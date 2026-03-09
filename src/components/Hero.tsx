import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const fullText = "FULL STACK SOFTWARE ENGINEER";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [dots, setDots] = useState("");
  const [spin, setSpin] = useState(false);
  const [clickedSpin, setClickedSpin] = useState(0);

  useEffect(() => {
    let i = 0;
    const typeNext = () => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
        const delay = Math.random() * 120 + 50;
        setTimeout(typeNext, delay);
      } else {
        setIsTyping(false);
      }
    };
    typeNext();
  }, []);

  useEffect(() => {
    if (!isTyping) {
      const dotCycle = ["", ".", "..", "..."];
      let d = 0;
      const interval = setInterval(() => {
        setDots(dotCycle[d % dotCycle.length]);
        d++;
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isTyping]);

  useEffect(() => {
    setSpin(true);
  }, []);

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    }),
  };

  const renderAnimatedText = (text: string) =>
    [...text].map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        initial="hidden"
        animate="visible"
        variants={letterVariant}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold tracking-wide text-white leading-tight"
        >
          {renderAnimatedText("Ivan")}
          <br />
          {renderAnimatedText("Mitkovski")}
        </motion.h1>

        <h2 className="mt-6 text-sm sm:text-lg md:text-xl lg:text-2xl font-thin tracking-[0.25em] flex flex-wrap justify-center lg:justify-start items-center font-mono text-green-400">
          {displayedText}
          <span className="w-[1ch] ml-1 animate-cursor flex-shrink-0">|</span>
          {!isTyping && (
            <span className="ml-2 animate-dots hidden sm:inline-block flex-shrink-0">
              {dots}
            </span>
          )}
        </h2>
      </div>

      <div className="mt-8 lg:mt-0 w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 perspective-[1000px] z-10">
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: spin ? 360 + clickedSpin * 360 : 0 }}
          initial={{ rotateY: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 3,
          }}
          onClick={() => setClickedSpin((prev) => prev + 1)}
        >
          <img
            src="/images/ivanAvatar.png"
            alt="Ivan Mitkovski avatar"
            className="w-full h-full object-cover rounded-full border-4 border-green-400"
          />
        </motion.div>
      </div>
    </div>
  );
}
