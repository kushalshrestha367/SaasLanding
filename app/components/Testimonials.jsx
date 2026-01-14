"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "John Doe", text: "This SaaS platform boosted our productivity!" },
  { name: "Jane Smith", text: "Amazing UI and performance. Highly recommended." },
  { name: "Alex Johnson", text: "Best tool I have used for project management." },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="bg-gray-100 p-6 rounded-lg shadow"
          >
            <p className="mb-4">"{t.text}"</p>
            <h3 className="font-semibold">{t.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
