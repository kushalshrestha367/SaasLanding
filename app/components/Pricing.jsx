"use client";
import { motion } from "framer-motion";
const pricingPlans = [
  {
    name: "Basic",
    price: "$9/mo",
    features: ["Feature A", "Feature B", "Feature C"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: ["Feature A", "Feature B", "Feature C", "Feature D"],
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    features: ["All Features", "Priority Support", "Custom Solutions"],
  },
];

function Pricing() {
  return (
    <section className="py-20 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-12">pricing plans</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {pricingPlans.map((plan, i) => {
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow text-center"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
             <ul className="mb-4">
              {plan.features.map((features,i) => {
                return(<li key={i}>{features}</li>)
              })}
             </ul>
             <button className="px-6 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600 transition">
              Choose Plan
             </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Pricing;
