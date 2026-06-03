export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
}