import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingCard({
  title,
  price,
  features = [],
  featured,
  cta,
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`rounded-3xl p-8 border backdrop-blur-xl shadow-premium ${
        featured
          ? "border-brand-gold bg-brand-gold/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="text-4xl font-extrabold mt-4">{price}</p>

      <ul className="mt-6 space-y-3 text-gray-300">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2 items-start">
            <Check className="w-4 h-4 mt-1 text-green-400" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate("/contact")}
        className="mt-8 w-full py-3 rounded-2xl bg-brand-navy hover:bg-brand-gold hover:text-brand-navy transition font-semibold"
      >
        {cta || "Get Started"}
      </button>
    </motion.div>
  );
}