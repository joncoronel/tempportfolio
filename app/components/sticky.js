"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./sticky.module.css";

function isScrollAnimationNotSupported() {
  return (
    !("animation" in document.documentElement.style) ||
    typeof ScrollTimeline === "undefined"
  );
}

function MotionSticky({ title, index, children, motion }) {
  const ref = useRef(null);

  const { scrollYProgress } = motion.useScroll({
    target: ref,
    offset: ["end start", "1 .7"],
  });

  const y = motion.useTransform(scrollYProgress, [1, 0], [0, 200]);

  const opacity = motion.useTransform(scrollYProgress, [1, 0], [1, 0]);

  return (
    <motion.motion.div
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
    </motion.motion.div>
  );
}

export default function Sticky({ title, index, children }) {
  const [motion, setMotion] = useState(null);

  useEffect(() => {
    async function loadMotion() {
      if (isScrollAnimationNotSupported()) {
        const { motion, useScroll, useTransform, easeOut } = await import(
          "framer-motion"
        );
        setMotion({ motion, useScroll, useTransform, easeOut });
      }
    }
    loadMotion();
  }, []);

  if (motion) {
    return (
      <MotionSticky title={title} index={index} motion={motion}>
        {children}
      </MotionSticky>
    );
  }

  return (
    <div
      className={`relative scale-100 ${styles.sticky}`}
      style={{
        zIndex: index,
      }}
      id={title}
    >
      {children}
    </div>
  );
}
