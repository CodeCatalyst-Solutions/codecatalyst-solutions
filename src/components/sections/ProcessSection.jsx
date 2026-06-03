const steps = [
  { title: "Discovery", desc: "We understand your needs clearly." },
  { title: "Planning", desc: "We design the right solution." },
  { title: "Execution", desc: "We build with precision." },
  { title: "Delivery", desc: "We deploy and support." },
];

export default function ProcessSection() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Process
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.title}
            className="p-6 rounded-3xl border border-white/10 bg-white/5"
          >
            <h3 className="font-bold text-lg">{step.title}</h3>
            <p className="text-gray-400 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}