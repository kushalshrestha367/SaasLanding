"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Hari",
      text: "This SaaS platform boosted our productivity!",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Suresh",
      text: "Amazing UI and performance. Highly recommended",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Ramesh",
      text: "Outstanding support and features. A game-changer!",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
    },
    
  ];
  return (
    <section id="testimonials" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {testimonials.map((testimonials, index) => (
          <motion.div
          key={testimonials.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
           transition={{ delay: index * 0.2, duration: 0.6 }}
          className=" bg-gray-100 p-6 rounded-lg shadow-md text-center"
          >
            <img src={testimonials.image} alt={testimonials.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
            <p className="text-gray-700 italic mb-4">"{testimonials.text}"</p>
            <h3 className="text-lg font-semibold text-center">{testimonials.name}</h3>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
