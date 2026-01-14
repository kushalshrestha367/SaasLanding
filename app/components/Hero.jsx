"use client";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold"
      >
        Grow your Business Faster
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-4 text-lg max-w-xl"
      >
        A powerfull saas platform to manage your workflow and analytics.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 transition"
      >
        Get Started
      </motion.button>
    </section>
  );
}

export default Hero;
