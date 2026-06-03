import { useContext } from "react";
import { motion } from "framer-motion";
import { ServiceModeContext } from "../context/ServiceModeContext";
import { techServices } from "../data/techServices";
import { businessServices } from "../data/businessServices";
import ServiceCard from "../components/cards/ServiceCard";
import SectionHeading from "../components/common/SectionHeading";

export default function Services() {
  const { mode } = useContext(ServiceModeContext);
  const isBusiness = mode === "business";
  const services = isBusiness ? businessServices : techServices;

  return (
    <div className="pt-40 pb-24 max-w-7xl mx-auto px-6">
      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <SectionHeading
          title={isBusiness ? "Business Services" : "Tech Solutions"}
          subtitle={
            isBusiness
              ? "Startup registration, compliance, and business administration support."
              : "Custom software, web development, cloud, and automation solutions."
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
