import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold">
          Ready to Build Something Powerful?
        </h2>

        <p className="text-gray-400 mt-4">
          Whether it's software systems or business compliance,
          CodeCatalyst Solutions is your partner.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="mt-8 px-8 py-4 rounded-2xl bg-brand-navy hover:bg-brand-gold hover:text-brand-navy transition font-semibold"
        >
          Get Started
        </button>
      </motion.div>
    </section>
  );
}