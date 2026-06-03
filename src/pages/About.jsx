import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ServiceModeContext } from "../context/ServiceModeContext";
import { Code2, Building2, Target, Users, Award, Zap } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";

export default function About() {
  const { mode } = useContext(ServiceModeContext);
  const navigate = useNavigate();
  const isBusiness = mode === "business";

  const techContent = {
    hero: {
      title: "Building Digital Solutions That Scale",
      subtitle: "We're a software development team focused on delivering modern, maintainable systems for businesses that need reliable technology partners.",
    },
    story: {
      title: "Our Approach",
      text: "CodeCatalyst Solutions was built to bridge the gap between ambitious business goals and practical software execution. We believe in clean code, clear communication, and delivering systems that work—not just on launch day, but for the long term. Whether you need a high-performance website, a custom web application, or cloud infrastructure support, we bring technical depth and a founder-friendly mindset to every project.",
    },
    values: [
      {
        icon: Code2,
        title: "Technical Excellence",
        description: "We write maintainable, scalable code and follow modern software engineering practices.",
      },
      {
        icon: Target,
        title: "Business-First Mindset",
        description: "Technology should serve your goals. We focus on solutions that drive real business outcomes.",
      },
      {
        icon: Zap,
        title: "Speed & Reliability",
        description: "Fast delivery without cutting corners. We build systems designed to last.",
      },
      {
        icon: Users,
        title: "Clear Communication",
        description: "No jargon. No surprises. Just honest updates and collaborative problem-solving.",
      },
    ],
    cta: {
      title: "Ready to Build Something Great?",
      subtitle: "Let's talk about your project and how we can help you deliver it.",
      button: "Start a Conversation",
    },
  };

  const businessContent = {
    hero: {
      title: "Helping South African Businesses Stay Compliant & Operational",
      subtitle: "We handle the admin so you can focus on building and growing your business.",
    },
    story: {
      title: "Why We Exist",
      text: "Starting and running a business in South Africa comes with a lot of paperwork—company registration, CIPC filings, tax setups, CSD registrations, tender prep, and compliance admin. CodeCatalyst Solutions was created to take that burden off founders and small business owners. We provide affordable, reliable support for all the business admin tasks that slow you down, so you can stay focused on what you do best.",
    },
    values: [
      {
        icon: Building2,
        title: "Startup-Friendly",
        description: "We understand early-stage businesses. Our pricing is designed to be accessible and transparent.",
      },
      {
        icon: Target,
        title: "Compliance Made Easy",
        description: "From registration to annual returns, we guide you through every step with clarity.",
      },
      {
        icon: Award,
        title: "Reliable Support",
        description: "No missed deadlines. No confusion. Just dependable admin help when you need it.",
      },
      {
        icon: Users,
        title: "Founder-Focused",
        description: "We work with real people building real businesses. We're here to help, not complicate.",
      },
    ],
    cta: {
      title: "Let's Get Your Business Set Up Right",
      subtitle: "Whether you're registering a new company or catching up on compliance, we're here to help.",
      button: "Get Started",
    },
  };

  const content = isBusiness ? businessContent : techContent;

  return (
    <div className="pt-40 pb-24 max-w-6xl mx-auto px-6 space-y-24">
      {/* Hero */}
      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">{content.hero.title}</h1>
        <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">{content.hero.subtitle}</p>
      </motion.div>

      {/* Story */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{content.story.title}</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{content.story.text}</p>
      </section>

      {/* Values */}
      <section>
        <SectionHeading title="What We Stand For" subtitle="Our core principles and approach" />
        <div className="grid sm:grid-cols-2 gap-8 mt-12">
          {content.values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <value.icon className="w-10 h-10 text-brand-gold mb-4" />
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <h2 className="text-3xl font-bold">{content.cta.title}</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">{content.cta.subtitle}</p>
        <button
          onClick={() => navigate("/contact")}
          className="mt-8 px-8 py-4 rounded-full bg-brand-gold text-brand-navy font-semibold hover:opacity-90 transition"
        >
          {content.cta.button}
        </button>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {isBusiness ? (
          <>
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-3xl font-bold text-brand-gold">R350</p>
              <p className="text-sm text-gray-400 mt-2">Starting Price</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-3xl font-bold text-brand-gold">Fast</p>
              <p className="text-sm text-gray-400 mt-2">Turnaround</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-3xl font-bold text-brand-gold">Clear</p>
              <p className="text-sm text-gray-400 mt-2">Communication</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-3xl font-bold text-brand-gold">SA</p>
              <p className="text-sm text-gray-400 mt-2">Based</p>
            </div>
          </>
        ) : (
          <>
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-3xl font-bold text-brand-gold">Modern</p>
              <p className="text-sm text-gray-400 mt-2">Tech Stack</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-3xl font-bold text-brand-gold">Clean</p>
              <p className="text-sm text-gray-400 mt-2">Code Base</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-3xl font-bold text-brand-gold">Scalable</p>
              <p className="text-sm text-gray-400 mt-2">Architecture</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-3xl font-bold text-brand-gold">Reliable</p>
              <p className="text-sm text-gray-400 mt-2">Delivery</p>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
