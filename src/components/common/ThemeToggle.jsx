import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-2 border border-white/20 rounded-lg text-sm flex items-center gap-2"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}