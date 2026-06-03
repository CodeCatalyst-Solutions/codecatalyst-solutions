import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-bold">
        Let’s Work Together
      </h2>

      <p className="text-gray-400 mt-4">
        Get in touch and let’s build or fix your systems.
      </p>

      <Link
        to="/contact"
        className="inline-block mt-8 px-8 py-4 bg-brand-navy hover:bg-brand-gold hover:text-brand-navy transition font-semibold rounded-2xl"
      >
        Contact Us
      </Link>
    </section>
  );
}