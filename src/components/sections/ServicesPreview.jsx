import { useContext } from "react";
import { ServiceModeContext } from "../../context/ServiceModeContext";

import { techServices } from "../../data/techServices";
import { businessServices } from "../../data/businessServices";

import ServiceCard from "../cards/ServiceCard";

export default function ServicesPreview() {
  const { mode } = useContext(ServiceModeContext);

  const services =
    mode === "tech"
      ? techServices
      : businessServices;

  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Featured Services
        </h2>

        <p className="mt-6 text-gray-400">
          Premium solutions designed for growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
          />
        ))}
      </div>
    </section>
  );
}