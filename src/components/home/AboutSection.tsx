import { getAssetPath } from "@/utils/assetPath";
import Link from "next/link";

export default function AboutSection() {
    const values = [
        {
            icon: (
                <svg className="w-8 h-8 text-apit-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            title: "Vision",
            text: "To become a transformative force in the world's evolving innovation ecosystem, making technology and sustainability enhance everyday living."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-apit-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Mission",
            text: "Designing forward-looking solutions that address modern lifestyle challenges with intelligence, responsibility, and transparency."
        }
    ];

    return (
        <section id="about" className="py-24 bg-surface relative overflow-hidden text-white">
            {/* Background image overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={getAssetPath("/hero-bg.png")}
                    alt=""
                    className="w-full h-full object-cover opacity-5"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center mb-20">
                    <div className="animate-in fade-in slide-in-from-left duration-1000">
                        <h2 className="text-apit-blue font-bold tracking-widest uppercase text-sm mb-4">About Us</h2>
                        <h3 className="text-4xl lg:text-5xl font-extrabold mb-8">Rigayu Innovations Pvt. Ltd.</h3>
                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                            <p>
                                Rigayu Innovations Pvt. Ltd. is a forward-thinking Indian company built on the foundation of innovation, responsibility, and long-term impact. We are driven by the belief that businesses today must go beyond profitability and contribute meaningfully to society.
                            </p>
                            <p>
                                Founded with an entrepreneurial spirit and a deep understanding of evolving consumer lifestyles, Rigayu stands at the intersection of technology, sustainability, and modern convenience.
                            </p>
                        </div>
                        <div className="mt-10">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 bg-apit-blue text-white font-semibold px-8 py-3.5 rounded-full hover:bg-apit-dark-blue transition-all duration-300 shadow-lg shadow-apit-blue/25 hover:shadow-xl hover:shadow-apit-blue/30 hover:scale-105 group"
                            >
                                Know More
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 lg:mt-0 relative animate-in fade-in slide-in-from-right duration-1000">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border-2 border-border-color">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={getAssetPath("/hero-bg.png")}
                                alt="Futuristic Innovation"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Vision/Mission Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
                    {values.map((item, idx) => (
                        <div key={idx} className="bg-surface-light p-8 rounded-3xl border border-border-color hover:border-apit-blue/30 transition-all group">
                            <div className="w-14 h-14 bg-apit-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-apit-blue transition-colors">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                            <p className="text-gray-400 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 w-96 h-96 bg-apit-blue/5 rounded-full blur-3xl -z-10"></div>
        </section>
    );
}
