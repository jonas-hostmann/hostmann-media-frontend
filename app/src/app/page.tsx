import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import PuckPageRenderer from "@/components/PuckPageRenderer";

export default function Home() {
  return (
    <PuckPageRenderer
      path="/"
      fallback={
        <>
          <Hero />
          <Services />
          <About />
          <BlogPreview />
          <CTASection />
          <ContactSection />
        </>
      }
    />
  );
}
