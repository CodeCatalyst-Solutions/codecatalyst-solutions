import Hero from "../components/sections/Hero";
import ServicesPreview from "../components/sections/ServicesPreview";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ProcessSection from "../components/sections/ProcessSection";
import Testimonials from "../components/sections/Testimonials";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
