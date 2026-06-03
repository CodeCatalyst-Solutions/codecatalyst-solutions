import { useContext } from "react";
import { motion } from "framer-motion";
import { ServiceModeContext } from "../context/ServiceModeContext";
import { techPortfolio, businessSuccessStories } from "../data/portfolio";
import PortfolioCard from "../components/cards/PortfolioCard";
import SectionHeading from "../components/common/SectionHeading";

export default function Portfolio() {
  const { mode } = useContext(ServiceModeContext);
  const isBusiness = mode === "business";
  const items = isBusiness ? businessSuccessStories : techPortfolio;

  return (
    <div className="pt-40 pb-24 max-w-7xl mx-auto px-6">
      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <SectionHeading
          title={isBusiness ? "Success Stories" : "Portfolio"}
          subtitle={
            isBusiness
              ? "Real businesses we've helped register, comply, and grow."
              : "A selection of projects we've designed, built, and delivered."
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {items.map((item, i) => (
            <PortfolioCard key={i} {...item} />
          ))}
        </div>

        {/* Note for example work */}
        <p className="mt-16 text-center text-sm text-gray-500">
          {isBusiness
            ? "* Stories are representative examples of the type of work we assist with."
            : "* Projects shown are representative examples of our capabilities and approach."}
        </p>
      </motion.div>
    </div>
  );
}
