import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src="/CC_logo.png" alt="CodeCatalyst Solutions" className="h-10 w-auto" />
              <h3 className="text-2xl font-bold">CodeCatalyst Solutions</h3>
            </div>
            <p className="mt-4 text-gray-400">
              Premium technology and business support solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-brand-gold transition">Software Development</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition">Cloud Solutions</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition">Business Compliance</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition">Company Registration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-brand-gold transition">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-gold transition">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-gold transition">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:davidbmotsoeneng.dev@gmail.com" className="hover:text-brand-gold transition">
                  davidbmotsoeneng.dev@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+27638149146" className="hover:text-brand-gold transition">
                  +27 63 814 9146
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-500">
          © 2026 CodeCatalyst Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
