import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import ContactSection from "@/components/home/ContactSection";
import { getAssetPath } from "@/utils/assetPath";

export default function Home() {
  return (
    <div className="flex flex-col relative w-full h-full overflow-hidden bg-black text-white">
      {/* Universal Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={getAssetPath("/hero-bg.png")} 
            className="w-full h-full object-cover opacity-60 blur-[2px]" 
            alt="Dashboard Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
      </div>
    </div>
  );
}
