import StatCard from "../cards/StatCard";
import { Shield, Zap, Layers } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose CodeCatalyst Solutions
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard
          icon={Zap}
          value="Fast Delivery"
          label="Efficient execution across all projects"
        />
        <StatCard
          icon={Layers}
          value="Dual Expertise"
          label="Tech + Business administration under one roof"
        />
        <StatCard
          icon={Shield}
          value="Trusted Partner"
          label="Reliable systems and compliance support"
        />
      </div>
    </section>
  );
}