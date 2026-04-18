import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Community Wellness Unit - RIGAYU Products",
    description: "Ideal for community halls, fitness centres, and wellness spaces, delivering fresh sprout-based nutrition in people-friendly environments.",
};

export default function CommunityWellnessUnit() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative bg-surface py-14 overflow-hidden border-b border-border-color">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-72 h-72 bg-apit-blue/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-apit-blue/5 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/#products" className="inline-flex items-center text-gray-400 hover:text-apit-blue transition-colors mb-6 group">
                        <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Back to Products
                    </Link>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Wellness", "Fitness", "Community"].map(tag => (
                            <span key={tag} className="text-apit-blue text-xs font-bold px-3 py-1 rounded-full border border-apit-blue/20 bg-apit-blue/5">{tag}</span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                        Community Wellness Unit
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                        Nutrition for active lifestyles and community spaces
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Image */}
                        <div className="rounded-3xl overflow-hidden border-2 border-border-color shadow-2xl shadow-black/30">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/products/product-3.png"
                                alt="Community Wellness Unit"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Details */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-apit-blue font-bold tracking-widest uppercase text-sm mb-4">Product Overview</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Ideal for community halls, fitness centres, and wellness spaces. This compact unit delivers fresh sprout-based nutrition in enclosed, people-friendly environments.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Compact design perfect for gyms, yoga studios, and community centres",
                                        "Provides post-workout nutrition with protein-rich sprout salads",
                                        "Quiet operation suitable for indoor, people-friendly environments",
                                        "Energy-efficient design with minimal power consumption",
                                        "Easy to maintain with food-grade materials ensuring hygiene and safety",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start text-gray-400">
                                            <span className="text-apit-blue mr-3 mt-0.5">✦</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-4">
                                <Link href="/#contact" className="inline-flex items-center gap-2 bg-apit-blue text-white font-semibold px-8 py-3.5 rounded-full hover:bg-apit-dark-blue transition-all duration-300 shadow-lg shadow-apit-blue/25 hover:shadow-xl hover:scale-105 group">
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
