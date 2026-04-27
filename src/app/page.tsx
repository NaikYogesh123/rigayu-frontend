import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Marquee />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
    </div>
  );
}
