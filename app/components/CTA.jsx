"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 bg-green-500 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-4"
      >
        Ready to start?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-6"
      >
        Sign up today and experience the full power of our platform.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-white text-green-500 font-semibold rounded-lg hover:bg-gray-200 transition"
      >
        Get Started
      </motion.button>
    </section>
  );
}
