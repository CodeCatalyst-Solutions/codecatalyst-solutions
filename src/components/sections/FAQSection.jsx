import { useState } from "react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer software development and business compliance services.",
  },
  {
    q: "Can I switch between services?",
    a: "Yes, the platform is designed with a dual-mode experience.",
  },
  {
    q: "Do you support startups?",
    a: "Yes, we specialize in startup-friendly solutions.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        FAQs
      </h2>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-2xl p-5"
          >
            <button
              className="w-full text-left font-semibold"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {f.q}
            </button>

            {open === i && (
              <p className="mt-3 text-gray-400">{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}