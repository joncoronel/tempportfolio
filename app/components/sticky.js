"use client";

import { useRef } from "react";
// import styles from "./sticky.module.css";

import { motion, useScroll, useTransform, easeOut } from "framer-motion";

// function isScrollAnimationNotSupported() {
//   return (
//     !("animation" in document.documentElement.style) ||
//     typeof ScrollTimeline === "undefined"
//   );
// }

function MotionSticky({ title, index, children, motion }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "1 .7"],
  });

  const y = useTransform(scrollYProgress, [1, 0], [0, 200]);

  const opacity = useTransform(scrollYProgress, [1, 0], [1, 0]);

  return (
    <motion.div
      ref={ref}
      className={`relative scale-100`}
      style={{
        zIndex: index,
        y: y,
        originY: 1,
        translateZ: 0,
        scale: 1,
        opacity: opacity,
      }}
      id={title}
    >
      {children}
    </motion.div>
  );
}

export default function Sticky({ title, index, children }) {
  return (
    <MotionSticky title={title} index={index} motion={motion}>
      {children}
    </MotionSticky>
  );
}
