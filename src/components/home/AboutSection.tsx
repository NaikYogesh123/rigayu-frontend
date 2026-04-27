import { getAssetPath } from "@/utils/assetPath";
import Link from "next/link";

export default function AboutSection() {
    const aboutCards = [
        {
            icon: "🔭",
            title: "Our Vision",
            text: "To become a transformative force in the world's evolving innovation ecosystem, making technology and sustainability enhance everyday living."
        },
        {
            icon: "🎯",
            title: "Our Mission",
            text: "Designing forward-looking solutions that address modern lifestyle challenges with intelligence, responsibility, and transparency."
        },
        {
            icon: "🌱",
            title: "Our Values",
            text: "Clean ingredients. Honest processes. Sustainable future. Every machine we build reflects our commitment to people and planet."
        }
    ];

    return (
        <section id="about" className="bg-dark text-white rounded-[3rem] mx-[2vw] my-12 reveal relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-[5vw] py-[7rem] grid grid-cols-1 lg:grid-cols-2 gap-[5rem] items-center">
                <div className="about-text space-y-6">
                    <div className="section-tag font-syne text-[0.7rem] font-[700] tracking-[0.15em] uppercase text-lime mb-[1rem] block">Sustainable Wellness</div>
                    <h2 className="font-syne text-[clamp(2.5rem,3.5vw,3.5rem)] font-[800] leading-[1.1] tracking-[-0.03em] text-white">
                        Healthy Habits,<br />Automated.
                    </h2>
                    <div className="space-y-4 text-[rgba(255,255,255,0.65)] leading-[1.8] font-medium text-[1rem] mt-[1.5rem]">
                        <p>
                            We are a DeepTech startup focused on revolutionizing how people consume fresh sprouts. Our automated systems blend traditional nutrition with smart technology to ensure you get the best, every single time.
                        </p>
                        <p>
                            Our mission is to bridge the gap between ancient health wisdom and modern lifestyle needs through intelligent machinery.
                        </p>
                    </div>
                </div>

                <div className="about-cards flex flex-col gap-[1.5rem] mt-12 lg:mt-0">
                    {aboutCards.map((card, i) => (
                        <div key={i} className="about-card bg-[rgba(255,255,255,0.05)] border border-[rgba(181,255,58,0.15)] rounded-[1.5rem] p-[1.8rem] transition-all duration-300 hover:bg-[rgba(181,255,58,0.08)] hover:border-[rgba(181,255,58,0.4)] group">
                            <div className="about-card-icon text-[1.8rem] mb-[0.8rem]">{card.icon}</div>
                            <h3 className="font-syne text-[1.1rem] font-[700] text-lime mb-[0.5rem]">{card.title}</h3>
                            <p className="text-[0.9rem] text-[rgba(255,255,255,0.55)] leading-[1.6]">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
