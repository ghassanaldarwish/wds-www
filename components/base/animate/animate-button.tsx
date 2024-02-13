"use client";
import { motion } from "framer-motion";

export default function AnimateButton({ children, ...props }: any) {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.3 }}
      whileTap={{
        scale: [null, 1, 0.94],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
