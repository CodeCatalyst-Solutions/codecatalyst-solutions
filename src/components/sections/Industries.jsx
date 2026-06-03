const industries = [
  "Startups",
  "SMEs",
  "Enterprises",
  "Finance",
  "Retail",
  "Logistics",
];

export default function Industries() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-8">
        Industries We Serve
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {industries.map((i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-full bg-white/10"
          >
            {i}
          </span>
        ))}
      </div>
    </section>
  );
}