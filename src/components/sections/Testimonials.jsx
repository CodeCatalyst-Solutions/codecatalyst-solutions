import { testimonials } from "../../data/testimonials";
import TestimonialCard from "../cards/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}