"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform, easeOut } from "framer-motion";

function MotionSticky({ title, index, children, motion }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "1 .7"],
  });

  const y = useTransform(scrollYProgress, [1, 0], [0, 200], { ease: easeOut });

  const opacity = useTransform(scrollYProgress, [1, 0], [1, 0], {
    ease: easeOut,
  });

  const scale = useTransform(scrollYProgress, [1, 0], [1, 0.97], {
    ease: easeOut,
  });

  return (
    <motion.div
      ref={ref}
      className={`stabilize-animation relative`}
      style={{
        opacity: opacity,
        originY: 1,
        y: y,
        x: 0,
        scale: scale,
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
