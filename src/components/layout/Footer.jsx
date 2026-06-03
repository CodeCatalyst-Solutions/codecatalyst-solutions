import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 pb-24 md:pb-12">
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
            <a
              href="https://web.facebook.com/profile.php?id=61590836720482"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gray-400 hover:text-brand-gold transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
              <span className="text-sm">Follow us on Facebook</span>
            </a>
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
