"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
const pricingPlans = [
  {
    name: "Basic",
    price: "Rs. 999/mo",
    features: ["Essential Features", "Basic Support", "Single User","Limited Analytics"],
  },
  {
    name: "Pro",
    price: "Rs. 2999/mo",
    features: [
      "All Basic Features",
      "Advanced Analytics",
      "Priority Support",
      "Multi User",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Rs. 9999/mo",
    features: [
      "All Pro Features",
      "Dedicated Manager",
      "Custom Solutions",
      "24/7 Support",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-12">Simple & Transparent Pricing</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-4">
        {pricingPlans.map((plan, i) => {
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-white p-8  rounded-xl shadow-lg text-center border
              ${plan.popular ? "border-green-500 scale-105" : "border-gray-200"}`}
            >
               {plan.popular && (
              <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6 text-green-600">{plan.price}</p>
                <ul className="mb-6 space-y-3 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <Check className="text-green-500" size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-lg font-semibold transition
                ${
                  plan.popular
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-800 text-white hover:bg-gray-900"
                }
              `}
            >
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
