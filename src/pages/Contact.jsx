import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="pt-40 pb-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-gray-400">
            Let's build your next solution together.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          {sent && (
            <p className="text-green-400 font-medium">Message sent! We'll be in touch.</p>
          )}

          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
          />

          <button type="submit" className="w-full py-4 rounded-2xl bg-tech-gradient font-semibold">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}