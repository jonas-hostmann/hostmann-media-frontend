import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTA";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <BlogPreview />
      <CTASection />
      <ContactSection />
    </>
  );
}
