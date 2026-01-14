"use client";

import { motion } from "framer-motion";
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section className="py-20 bg-gray-100">
      <h1 className="text-center text-3xl font-bold mb-12">Features</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {["Fast Performance", "Secure Data", "Easy Integration"].map((item,i)=>(
          <motion.div
          key={item}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          variants={cardVariants}
          transition={{delay:i*0.2}}
          className="bg-white p-6 rounded-lg border border-gray-600 shadow"
          >
          <h3 className="text-xl text-center font-semibold mb-2">{item}</h3>
          <p className="text-center font-light">Optimized for modern Saas Products.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
