"use client";

import { motion } from "framer-motion";

import { useState, useEffect, useCallback } from "react";

import throttle from "lodash.throttle";

export default function Sticky({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  const checkIfMobile = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  useEffect(() => {
    checkIfMobile();
    const throttledCheckIfMobile = throttle(checkIfMobile, 200);
    window.addEventListener("resize", throttledCheckIfMobile);
    return () => window.removeEventListener("resize", throttledCheckIfMobile);
  }, [checkIfMobile]);

  if (isMobile) {
    return <div className="flex w-full justify-center">{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{
        margin: "-100px",
        once: true,
      }}
      className="relative flex w-full justify-center"
    >
      {children}
    </motion.div>
  );
}
