import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, FolderOpen, DollarSign, Mail } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/portfolio", label: "Portfolio", icon: FolderOpen },
  { to: "/pricing", label: "Pricing", icon: DollarSign },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-t border-white/10">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isActive ? "text-brand-gold" : "text-gray-400 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
