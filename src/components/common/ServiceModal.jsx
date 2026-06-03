import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ServiceModal({ isOpen, onClose, service }) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!service) return null;

  const handleContact = () => {
    onClose();
    navigate("/contact");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0f1a] border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Icon */}
            {service.icon && (
              <service.icon className="w-12 h-12 text-brand-gold mb-4" />
            )}

            {/* Title & Description */}
            <h2 className="text-3xl font-bold text-white mb-3">{service.title}</h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">{service.description}</p>

            {/* Pricing */}
            {service.price && (
              <div className="mb-6 p-4 rounded-2xl bg-brand-gold/10 border border-brand-gold/20">
                <p className="text-sm text-gray-400 mb-1">Pricing</p>
                <p className="text-2xl font-bold text-brand-gold">{service.price}</p>
                {service.period && <p className="text-xs text-gray-500 mt-1">{service.period}</p>}
              </div>
            )}

            {/* Benefits/Features */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-2 items-start text-gray-300">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.features && service.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 items-start text-gray-300">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Process */}
            {service.process && (
              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Process
                </h3>
                <p className="text-gray-300 text-sm">{service.process}</p>
              </div>
            )}

            {/* Note */}
            {service.note && (
              <p className="text-xs text-gray-500 italic mb-6">{service.note}</p>
            )}

            {/* CTA */}
            <button
              onClick={handleContact}
              className="w-full py-4 rounded-2xl bg-brand-gold text-brand-navy font-semibold hover:opacity-90 transition"
            >
              {service.cta || "Get Started"}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
