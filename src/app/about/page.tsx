"use client";

import { useEffect } from "react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Minimal Header Spacer */}
            <div className="h-[80px]"></div>

            {/* Hero Section - Compact & High-Impact */}
            <section id="about" className="relative overflow-hidden py-24 px-[5vw] reveal">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-lime text-dark font-syne text-[0.75rem] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6">
                        Rigayu Innovations
                    </div>
                    <h1 className="font-syne text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-dark mb-4">
                        Shaping a <span className="text-green">Smarter</span>,<br />Healthier Future.
                    </h1>
                    <p className="text-lg text-[#5a6e5c] max-w-2xl mx-auto leading-relaxed font-medium">
                        A forward-thinking Indian deep-tech startup built on innovation, responsibility, and long-term impact.
                    </p>
                </div>
            </section>

            {/* Our Story / Who We Are - Layout aligned with homepage */}
            <section className="bg-dark text-white rounded-[3rem] mx-[2vw] my-12 reveal overflow-hidden">
                <div className="max-w-7xl mx-auto px-[5vw] py-[7rem] grid grid-cols-1 lg:grid-cols-2 gap-[5rem] items-start">
                    <div className="space-y-6">
                        <div className="section-tag font-syne text-[0.7rem] font-bold tracking-[0.15em] uppercase text-lime mb-4 block">Who We Are</div>
                        <h2 className="font-syne text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold leading-[1.1] tracking-tight">
                            Driven by Innovation,<br />Guided by Impact.
                        </h2>
                        <div className="space-y-4 text-white/60 leading-relaxed font-medium text-[1.05rem]">
                            <p>
                                Founded with an entrepreneurial spirit and a deep understanding of evolving consumer lifestyles, Rigayu stands at the intersection of technology, sustainability, and modern convenience.
                            </p>
                            <p>
                                At Rigayu, innovation is not just a function — it is our mindset. We challenge conventional systems, rethink everyday experiences, and design solutions that reflect efficiency, accessibility, and conscious progress.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 lg:p-12 h-full">
                        <div className="space-y-6 text-white/75 leading-relaxed font-medium">
                            <p>
                                Our team brings together diverse expertise and a shared commitment to building systems that are scalable, responsible, and future-ready.
                            </p>
                            <p>
                                As we continue to grow, Rigayu Innovations Pvt. Ltd. remains committed to bridging the gap between ancient health wisdom and modern lifestyle needs through intelligent machinery.
                            </p>
                            <div className="pt-6">
                                <div className="text-lime font-syne text-sm font-bold tracking-widest uppercase mb-4">Born in India 🇮🇳</div>
                                <div className="h-[2px] w-12 bg-green"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission - Color Block Style */}
            <section className="py-24 px-[5vw] reveal">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Vision */}
                    <div className="group bg-white border border-black/5 rounded-[2.5rem] p-10 transition-all duration-300 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:translate-y-[-5px]">
                        <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mb-8">
                            <span className="text-3xl">🔭</span>
                        </div>
                        <h3 className="font-syne text-2xl font-extrabold text-dark mb-6">Our Vision</h3>
                        <p className="text-[#5a6e5c] leading-relaxed font-medium">
                            To become a transformative force in the world&apos;s evolving innovation ecosystem. We aspire to build a future where technology, sustainability, and accessibility work together seamlessly to enhance everyday living.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="group bg-dark border border-white/5 shadow-2xl rounded-[2.5rem] p-10 transition-all duration-300 hover:translate-y-[-5px] text-white">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                            <span className="text-3xl">🚀</span>
                        </div>
                        <h3 className="font-syne text-2xl font-extrabold mb-6">Our Mission</h3>
                        <p className="text-white/60 leading-relaxed font-medium">
                            To design and implement forward-looking solutions that address modern lifestyle challenges with intelligence and responsibility. We uphold transparency, integrity, and ethical business practices in every model we build.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values - Bento Grid Style */}
            <section className="bg-cream py-24 px-[5vw] reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="section-tag font-syne text-[0.7rem] font-bold tracking-[0.15em] uppercase text-green mb-4 block">Core Principles</div>
                        <h2 className="font-syne text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-dark mb-6">What We Stand For</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "💡", title: "Innovation with Purpose", desc: "We believe innovation must solve real-world challenges with relevance and practicality." },
                            { icon: "🤝", title: "Integrity & Transparency", desc: "Trust is our foundation. We uphold the highest ethical standards in every partnership." },
                            { icon: "🌱", title: "Sustainability", desc: "Our approach emphasizes long-term value creation and mindful social impact." },
                            { icon: "⭐", title: "Excellence", desc: "We strive for precision and quality in everything we do. Excellence is our standard." },
                            { icon: "❤️", title: "User-Centric", desc: "Understanding evolving needs allows us to remain relevant and impactful." },
                            { icon: "🤲", title: "Collaboration", desc: "Mutual respect and teamwork are central to our innovative culture." }
                        ].map((v, i) => (
                            <div key={i} className="bg-white border border-black/5 rounded-[2rem] p-8 transition-all duration-300 hover:shadow-xl hover:border-green/10 group">
                                <div className="text-3xl mb-6">{v.icon}</div>
                                <h4 className="font-syne text-lg font-bold text-dark mb-3 group-hover:text-green transition-colors">{v.title}</h4>
                                <p className="text-sm text-[#5a6e5c] leading-relaxed font-medium">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
