export default function Button({ children }) {
  return (
    <button className="px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-gold hover:text-brand-navy transition font-semibold text-white">
      {children}
    </button>
  );
}