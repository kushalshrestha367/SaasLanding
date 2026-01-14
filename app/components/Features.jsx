"use client";

import { motion } from "framer-motion";
import { Plug, ShieldCheck, Zap } from "lucide-react";
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Features() {
const features = [
  {
    title: "Fast Performance",
    desc: "Lightning-fast load times optimized for modern SaaS products.",
    icon: Zap,
  },
  {
    title: "Secure Data",
    desc: "Enterprise-grade security to keep your data safe and private.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Integration",
    desc: "Seamlessly integrates with your existing tools and workflows.",
    icon: Plug,
  },
];
  return (
    <section id="features" className="py-20 bg-gray-100 ">
      <h1 className="text-center text-3xl font-bold mb-12">Powerful Features</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {features.map((feature, i) => {
          const Icon = feature.icon;
       return(
          <motion.div
          key={feature.title}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          variants={cardVariants}
          transition={{delay:i*0.2}}
          className="bg-white p-6 rounded-lg border border-gray-600 shadow"
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 tezt-green-600">
            <Icon className="w-12 h-12 text-green-500 mx-auto"/>
            </div>
          <h3 className="text-xl text-center font-semibold mb-2">{feature.title}</h3>
          <p className="text-center font-light">{feature.desc}  </p>
          </motion.div>
       )
        
})}
      </div>
    </section>
  );
}
