import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const MotionIcon = motion(FontAwesomeIcon);

export default function Footer() {
  const [filled, setFilled] = useState(false);

  return (
    <footer className="w-full py-4 mt-10 text-gray-400 text-center text-sm">
      <span>
        Made with{" "}
        <MotionIcon
          icon={filled ? faHeartSolid : faHeartRegular}
          className="inline-block text-red-500 cursor-pointer"
          onClick={() => setFilled((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
        />{" "}
        by Ivan.
      </span>
    </footer>
  );
}
