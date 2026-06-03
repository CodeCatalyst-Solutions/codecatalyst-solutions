import { motion } from "framer-motion";

export default function PortfolioCard({ title, type, summary, stack = [], outcomes = [] }) {
  const isBusiness = type === "Business Service";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col"
    >
      <span className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isBusiness ? "text-brand-gold" : "text-brand-gold"}`}>
        {type}
      </span>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm flex-1">{summary}</p>

      <div className="mt-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          {isBusiness ? "Process" : "Tech Stack"}
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Outcomes</p>
        <ul className="text-sm text-gray-300 space-y-1">
          {outcomes.map((o) => (
            <li key={o} className="flex gap-2 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block" />
              {o}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
