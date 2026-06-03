import { useContext } from "react";
import { ServiceModeContext } from "../../context/ServiceModeContext";

export default function ModeSwitcher() {
  const { mode, setMode } = useContext(ServiceModeContext);

  return (
    <div className="relative flex bg-white/10 rounded-full p-1 text-sm">
      {/* Sliding pill */}
      <span
        className={`absolute top-1 bottom-1 w-1/2 rounded-full transition-all duration-300 ${
          mode === "tech" ? "left-1 bg-brand-navy" : "left-[calc(50%)] bg-brand-gold"
        }`}
      />
      <button
        onClick={() => setMode("tech")}
        className={`relative z-10 px-5 py-2 transition-colors duration-300 ${mode === "tech" ? "text-white" : "text-gray-300"}`}
      >
        Tech Solutions
      </button>
      <button
        onClick={() => setMode("business")}
        className={`relative z-10 px-5 py-2 transition-colors duration-300 ${mode === "business" ? "text-brand-navy font-semibold" : "text-gray-300"}`}
      >
        Business Services
      </button>
    </div>
  );
}
