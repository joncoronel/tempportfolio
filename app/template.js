"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
};

export default function Template({ children }) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      variants={variants}
      initial="hidden"
      animate="enter"
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
