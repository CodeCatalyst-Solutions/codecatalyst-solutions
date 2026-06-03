import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ServiceModeContext } from "../context/ServiceModeContext";
import { techServices } from "../data/techServices";
import { businessServices } from "../data/businessServices";
import ServiceCard from "../components/cards/ServiceCard";
import ServiceModal from "../components/common/ServiceModal";
import SectionHeading from "../components/common/SectionHeading";

export default function Services() {
  const { mode } = useContext(ServiceModeContext);
  const [selectedService, setSelectedService] = useState(null);
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
              ? "Click any service to see details and pricing."
              : "Click any service to see details and pricing."
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              {...service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </motion.div>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </div>
  );
}
