import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ModeSwitcher from "../mode/ModeSwitcher";

const links = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur z-50 p-4 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/CC_logo.png" alt="CodeCatalyst Solutions" className="h-8 w-auto" />
          <span className="font-bold text-xl text-brand-gold">CodeCatalyst Solutions</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-gray-200">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className="hover:text-brand-gold transition">
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop mode switcher */}
        <div className="hidden md:block">
          <ModeSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4 pb-4 bg-black/80 rounded-2xl">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-brand-gold transition py-2 border-b border-white/10"
            >
              {label}
            </Link>
          ))}
          <div className="pt-2">
            <ModeSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
