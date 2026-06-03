import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Building2, ArrowRight } from "lucide-react";
import { ServiceModeContext } from "../../context/ServiceModeContext";

export default function Hero() {
  const { mode, setMode } = useContext(ServiceModeContext);
  const [showSelector, setShowSelector] = useState(false);
  const navigate = useNavigate();
  const isTech = mode === "tech";

  useEffect(() => {
    const chosen = sessionStorage.getItem("cc_mode_chosen");
    if (!chosen) setShowSelector(true);
  }, []);

  const choose = (selectedMode) => {
    setMode(selectedMode);
    sessionStorage.setItem("cc_mode_chosen", selectedMode);
    setShowSelector(false);
  };

  return (
    <>
      {/* Full-screen mode selector overlay */}
      <AnimatePresence>
        {showSelector && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#080c14] overflow-y-auto px-6 py-16"
          >
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl bg-brand-navy opacity-40" />
              <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl bg-brand-gold opacity-20" />
            </div>

            <div className="relative z-10 flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-12"
            >
              <img src="/CC_logo.png" alt="CodeCatalyst Solutions" className="h-16 w-auto mx-auto mb-6" />
              <h1 className="text-3xl md:text-5xl font-bold text-white">What brings you here today?</h1>
              <p className="text-gray-400 mt-3 text-base">Choose your path and we'll tailor the experience for you.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
              {/* Tech */}
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => choose("tech")}
                className="group text-left p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300"
              >
                <Code2 className="w-10 h-10 text-brand-gold mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">Tech Solutions</h2>
                <p className="text-gray-400 text-sm mb-6">
                  I need a website, web app, or custom software built for my business.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Website Development", "Custom Web Apps", "Software Systems", "Cloud & Automation"].map((item) => (
                    <li key={item} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-brand-gold font-semibold text-sm group-hover:gap-3 transition-all">
                  Get Started <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>

              {/* Business */}
              <motion.button
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => choose("business")}
                className="group text-left p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300"
              >
                <Building2 className="w-10 h-10 text-brand-gold mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">Business Services</h2>
                <p className="text-gray-400 text-sm mb-6">
                  I need help registering my company or staying compliant in South Africa.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Company Registration", "Tax & CSD Registration", "COIDA Assistance", "Compliance Bundles"].map((item) => (
                    <li key={item} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-brand-gold font-semibold text-sm group-hover:gap-3 transition-all">
                  Get Started <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-gray-600 text-sm"
            >
              Not sure?{" "}
              <button onClick={() => choose("tech")} className="text-brand-gold hover:underline">
                Skip for now
              </button>
            </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Regular hero shown after selection */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute w-[500px] h-[500px] rounded-full blur-3xl ${isTech ? "bg-brand-gold" : "bg-brand-navy"}`} />
        </div>

        <div className="relative z-10 max-w-6xl px-6 text-center">
          <motion.h1
            key={mode}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold leading-tight text-white"
          >
            {isTech
              ? "Building Scalable Digital Solutions for Modern Businesses."
              : "Helping Businesses Stay Registered, Compliant, and Operational."}
          </motion.h1>

          <motion.p
            key={`${mode}-sub`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {isTech
              ? "We engineer high-performance software systems, platforms, and scalable digital solutions."
              : "We simplify business administration, compliance, and company registration processes."}
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-4 rounded-full bg-brand-gold text-brand-navy font-semibold hover:opacity-90 transition"
            >
              Explore Services
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:border-brand-gold transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
