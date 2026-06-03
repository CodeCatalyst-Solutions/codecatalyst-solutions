import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";
import { websitePricing, addOnPricing, maintenancePricing, businessBundles, businessServices } from "../data/pricing";
import { useContext } from "react";
import { ServiceModeContext } from "../context/ServiceModeContext";

function PricingCard({ title, price, period, description, features, cta, popular, note }) {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`rounded-3xl p-8 border backdrop-blur-xl shadow-premium flex flex-col ${
        popular ? "border-brand-gold bg-brand-gold/10" : "border-white/10 bg-white/5"
      }`}
    >
      {popular && (
        <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-3">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold">{title}</h3>
      {description && <p className="text-sm text-gray-400 mt-2">{description}</p>}
      <p className="text-3xl font-extrabold mt-4">{price}</p>
      {period && <p className="text-xs text-gray-500 mt-1">{period}</p>}
      <ul className="mt-6 space-y-3 text-gray-300 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2 items-start">
            <Check className="w-4 h-4 mt-1 text-green-400 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      {note && <p className="text-xs text-gray-500 mt-3 italic">{note}</p>}
      <button
        onClick={() => navigate("/contact")}
        className="mt-8 w-full py-3 rounded-2xl bg-brand-navy hover:bg-brand-gold hover:text-brand-navy transition font-semibold"
      >
        {cta || "Get Started"}
      </button>
    </motion.div>
  );
}

export default function Pricing() {
  const { mode } = useContext(ServiceModeContext);
  const isBusiness = mode === "business";

  return (
    <div className="pt-40 pb-24 max-w-7xl mx-auto px-6 space-y-24">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-6xl font-bold">Rate Card 2026</h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          {isBusiness
            ? "Affordable startup & compliance assistance for South African businesses."
            : "Transparent pricing for modern websites, software, and ongoing support."}
        </p>
      </div>

      {isBusiness ? (
        <>
          {/* Business Bundles */}
          <section>
            <SectionHeading title="Popular Bundles" subtitle="Save with our complete business packages" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {businessBundles.map((bundle, i) => (
                <PricingCard key={i} {...bundle} />
              ))}
            </div>
          </section>

          {/* Individual Services by Category */}
          {Object.entries(businessServices).map(([category, services]) => (
            <section key={category}>
              <SectionHeading title={category} subtitle="Individual service pricing" />
              <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                {services.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center px-8 py-5 ${
                      i !== services.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <span className="text-gray-300">{item.service}</span>
                    <span className="font-semibold text-brand-gold">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Disclaimer */}
          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>⚠️ All prices are introductory rates and may be reviewed as we grow.</p>
            <p>Government fees (CIPC, SARS, CIDB, etc.) are not included unless stated.</p>
            <p>Existing clients receive discounted rates for BO Filing and Annual Returns.</p>
          </div>
        </>
      ) : (
        <>
          {/* Website Development */}
          <section>
            <SectionHeading title="Website Development" subtitle="From landing pages to full web applications" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {websitePricing.map((plan, i) => (
                <PricingCard key={i} {...plan} />
              ))}
            </div>
          </section>

          {/* Add-On Services */}
          <section>
            <SectionHeading title="Add-On Services" subtitle="Enhance your website with optional extras" />
            <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              {addOnPricing.map((item, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-8 py-5 ${
                    i !== addOnPricing.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="text-gray-300">{item.service}</span>
                  <span className="font-semibold text-brand-gold">{item.price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Maintenance & Support */}
          <section>
            <SectionHeading title="Maintenance & Support Plans" subtitle="Keep your website running at its best" />
            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              {maintenancePricing.map((plan, i) => (
                <PricingCard key={i} {...plan} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
