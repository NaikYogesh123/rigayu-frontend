import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - RIGAYU Innovations",
    description:
        "Learn about Rigayu Innovations Pvt. Ltd. — a forward-thinking Indian company built on innovation, responsibility, and long-term impact.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Banner */}
            <section className="relative bg-gradient-to-br from-apit-blue via-blue-700 to-blue-900 py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 animate-in fade-in slide-in-from-bottom duration-700">
                        About Us
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                        Shaping a smarter, healthier, and more responsible future
                    </p>
                </div>
            </section>

            {/* About Us Content */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="animate-in fade-in slide-in-from-bottom duration-1000">
                        <h2 className="text-apit-blue font-bold tracking-widest uppercase text-sm mb-4">
                            Who We Are
                        </h2>
                        <h3 className="text-4xl font-extrabold text-gray-900 mb-8">
                            Rigayu Innovations Pvt. Ltd.
                        </h3>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Rigayu Innovations Pvt. Ltd. is a forward-thinking Indian company built on the foundation of innovation, responsibility, and long-term impact. We are driven by the belief that businesses today must go beyond profitability and contribute meaningfully to society.
                            </p>
                            <p>
                                Founded with an entrepreneurial spirit and a deep understanding of evolving consumer lifestyles, Rigayu stands at the intersection of technology, sustainability, and modern convenience. Our approach is rooted in research, adaptability, and continuous improvement — ensuring that we stay aligned with the changing needs of the world.
                            </p>
                            <p>
                                At Rigayu, innovation is not just a function — it is our mindset. We challenge conventional systems, rethink everyday experiences, and design solutions that reflect efficiency, accessibility, and conscious progress. Our team brings together diverse expertise and a shared commitment to building systems that are scalable, responsible, and future-ready.
                            </p>
                            <p>
                                As we continue to grow, Rigayu Innovations Pvt. Ltd. remains committed to shaping a smarter, healthier, and more responsible future for the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <div className="bg-gray-50 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-apit-blue transition-colors">
                                <span className="text-3xl group-hover:scale-110 transition-transform">🔭</span>
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h4>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    At Rigayu Innovations Pvt. Ltd., our vision is to become a transformative force in the world&apos;s evolving innovation ecosystem. We aspire to build a future where technology, sustainability, and accessibility work together seamlessly to enhance everyday living.
                                </p>
                                <p>
                                    We envision a world where progressive thinking drives responsible growth, where businesses create measurable social impact, and where innovation is used as a tool to improve quality of life across communities. Our long-term goal is to shape systems that are not only efficient and scalable but also ethical and future-ready.
                                </p>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="bg-gray-50 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-apit-blue transition-colors">
                                <span className="text-3xl group-hover:scale-110 transition-transform">🚀</span>
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h4>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our mission is to design and implement forward-looking solutions that address modern lifestyle challenges with intelligence and responsibility. We are committed to:
                            </p>
                            <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                                <li>Fostering a culture of innovation, research, and continuous improvement</li>
                                <li>Upholding transparency, integrity, and ethical business practices</li>
                                <li>Building scalable and sustainable models that adapt to changing societal needs</li>
                                <li>Creating long-term value for stakeholders, partners, and communities</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                Through strategic thinking, collaborative partnerships, and a relentless focus on impact, we aim to contribute meaningfully to India&apos;s growth story while maintaining global standards of excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-apit-blue font-bold tracking-widest uppercase text-sm mb-4">
                            What We Stand For
                        </h2>
                        <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Core Values</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At Rigayu Innovations Pvt. Ltd., our values define who we are, how we operate, and what we stand for. They guide our decisions, shape our culture, and drive our long-term vision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "💡",
                                title: "Innovation with Purpose",
                                desc: "We believe innovation must solve real-world challenges. Every idea we pursue is rooted in relevance, practicality, and meaningful impact.",
                            },
                            {
                                icon: "🤝",
                                title: "Integrity & Transparency",
                                desc: "We uphold the highest standards of honesty, ethics, and accountability. Trust is the foundation of our relationships—with partners, stakeholders, and the communities we serve.",
                            },
                            {
                                icon: "🌱",
                                title: "Sustainability & Responsibility",
                                desc: "We are committed to responsible growth. Our approach emphasizes long-term value creation while being mindful of environmental and social impact.",
                            },
                            {
                                icon: "⭐",
                                title: "Excellence in Execution",
                                desc: "We strive for precision, quality, and continuous improvement in everything we do. Excellence is not a goal—it is our standard.",
                            },
                            {
                                icon: "❤️",
                                title: "Customer-Centric Thinking",
                                desc: "We place people at the centre of our decision-making. Understanding evolving needs allows us to remain relevant, adaptive, and impactful.",
                            },
                            {
                                icon: "🤲",
                                title: "Collaboration & Respect",
                                desc: "We value diverse perspectives and believe collective intelligence drives stronger outcomes. Mutual respect and teamwork are central to our culture.",
                            },
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-apit-blue transition-colors">
                                    <span className="text-2xl group-hover:scale-110 transition-transform">
                                        {value.icon}
                                    </span>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
