import { getAssetPath } from "@/utils/assetPath";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Public Hub Kiosk - RIGAYU Products",
    description: "Engineered for public gathering spots like shopping districts and transit stations, bringing nutritious sprout salads to busy urban environments.",
};

export default function PublicHubKiosk() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative bg-[#FFF8EE] py-20 overflow-hidden border-b border-black/5">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-72 h-72 bg-apit-blue/10 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/#products" className="inline-flex items-center text-apit-blue font-bold text-sm mb-8 group">
                        <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Back to Products
                    </Link>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Public Spaces", "Urban", "High Traffic"].map(tag => (
                            <span key={tag} className="text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-apit-blue/20 bg-apit-blue/5 text-apit-blue">{tag}</span>
                        ))}
                    </div>
                    <h1 className="font-syne text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-4">
                        Public Hub<br />Kiosk
                    </h1>
                    <p className="text-lg text-[#5a6e5c] max-w-2xl leading-relaxed font-medium">
                        Healthy nutrition meets urban convenience. Nutrition for busy, people-friendly environments.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Image */}
                        <div className="rounded-[2.5rem] overflow-hidden border border-black/5 shadow-2xl shadow-black/5">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={getAssetPath("/products/product-2.png")}
                                alt="Public Hub Kiosk"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Details */}
                        <div className="space-y-10">
                            <div>
                                <span className="font-syne text-[0.7rem] font-bold tracking-[0.15em] uppercase text-apit-blue mb-4 block">Product Overview</span>
                                <p className="text-[#5a6e5c] text-lg leading-relaxed font-medium">
                                    Engineered for public gathering spots like shopping districts and transit stations. This kiosk brings nutritious sprout salads to busy urban environments with effortless convenience.
                                </p>
                            </div>

                            <div className="bg-apit-yellow/10 rounded-[2rem] p-8 border border-apit-yellow/20">
                                <h3 className="font-syne text-xl font-bold text-foreground mb-6">Key Features</h3>
                                <ul className="grid grid-cols-1 gap-4">
                                    {[
                                        "Optimized for shopping districts and transit hubs",
                                        "Weather-resistant build for outdoor placement",
                                        "Eye-catching design to attract passing traffic",
                                        "Quick-serve mechanism for on-the-go nutrition",
                                        "Smart inventory tracking for efficient management",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start text-[#3a5a3c] text-[0.95rem] font-medium">
                                            <span className="text-apit-blue mr-3 mt-1">✦</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-4">
                                <Link href="/#contact" className="inline-flex items-center gap-3 bg-foreground text-apit-yellow font-syne font-bold px-10 py-5 rounded-full hover:bg-apit-blue hover:text-white transition-all duration-300 shadow-xl shadow-black/5 hover:translate-y-[-2px]">
                                    Get a Quote
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
