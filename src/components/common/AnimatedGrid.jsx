export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 opacity-10 grid grid-cols-12 gap-2">
      {Array.from({ length: 144 }).map((_, i) => (
        <div key={i} className="border border-white/10" />
      ))}
    </div>
  );
}