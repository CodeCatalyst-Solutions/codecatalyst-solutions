import { motion } from "framer-motion";

export default function TestimonialCard({ name, role, text }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <p className="text-gray-300 italic">"{text}"</p>

      <div className="mt-4">
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </motion.div>
  );
}