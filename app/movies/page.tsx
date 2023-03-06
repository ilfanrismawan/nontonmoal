"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Movies = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="relative h-screen lg:h-[140vh]"
    >
      <Link href="/">Movies</Link>
    </motion.div>
  );
};

export default Movies;
