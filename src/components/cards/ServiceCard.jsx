import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ icon: Icon, title, description, benefits = [], cta }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="p-8 rounded-3xl border border-white/10 backdrop-blur-xl bg-white/5 shadow-premium flex flex-col"
    >
      <Icon className="w-10 h-10 mb-4 text-brand-gold" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm flex-1">{description}</p>

      {benefits.length > 0 && (
        <ul className="mt-4 space-y-1">
          {benefits.map((b) => (
            <li key={b} className="text-xs text-gray-300 flex gap-2 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block" />
              {b}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => navigate("/contact")}
        className="mt-6 text-sm font-semibold text-brand-gold hover:underline text-left"
      >
        {cta} →
      </button>
    </motion.div>
  );
}
