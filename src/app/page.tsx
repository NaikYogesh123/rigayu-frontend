import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
    </div>
  );
}
