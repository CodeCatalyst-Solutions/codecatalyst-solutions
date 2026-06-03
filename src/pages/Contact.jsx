import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mbdwrrje", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-40 pb-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-6xl font-bold">Contact Us</h1>
          <p className="mt-6 text-gray-400">Let's build your next solution together.</p>

          <div className="mt-12 space-y-4 text-gray-400">
            <p>
              <a href="mailto:info@codecatalystsolutions.com" className="hover:text-brand-gold transition">
                info@codecatalystsolutions.com
              </a>
            </p>
            <p>
              <a href="tel:+27638149146" className="hover:text-brand-gold transition">
                +27 63 814 9146
              </a>
            </p>
            <p>Gauteng, South Africa</p>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          {status === "success" && (
            <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400">
              Message sent! We'll be in touch shortly.
            </div>
          )}
          {status === "error" && (
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400">
              Something went wrong. Please try again or email us directly.
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-gold transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-gold transition"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-gold transition"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-gold transition"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-4 rounded-2xl bg-brand-gold text-brand-navy font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
