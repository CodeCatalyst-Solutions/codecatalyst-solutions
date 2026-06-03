import { motion } from "framer-motion";

export default function StatCard({ label, value, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-center"
    >
      {Icon && <Icon className="w-6 h-6 mx-auto mb-3 text-brand-gold" />}
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="text-gray-400 mt-1">{label}</p>
    </motion.div>
  );
}