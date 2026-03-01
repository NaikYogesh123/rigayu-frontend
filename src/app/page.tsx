import Image from "next/image";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import InterestSection from "@/components/home/InterestSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <ProductsSection />
      <InterestSection />
      <ContactSection />
    </div>
  );
}
