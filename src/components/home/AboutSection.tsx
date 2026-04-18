import Link from "next/link";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-surface relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000">
                    <h2 className="text-apit-blue font-bold tracking-widest uppercase text-sm mb-4">About Us</h2>
                    <h3 className="text-4xl font-extrabold text-white mb-6">Rigayu Innovations Pvt. Ltd.</h3>
                    <p className="text-lg text-gray-400 leading-relaxed mb-4">
                        Rigayu Innovations Pvt. Ltd. is a forward-thinking Indian company built on the foundation of innovation, responsibility, and long-term impact. We are driven by the belief that businesses today must go beyond profitability and contribute meaningfully to society.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed mb-10">
                        Founded with an entrepreneurial spirit and a deep understanding of evolving consumer lifestyles, Rigayu stands at the intersection of technology, sustainability, and modern convenience.
                    </p>
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 bg-apit-blue text-white font-semibold px-8 py-3.5 rounded-full hover:bg-apit-dark-blue transition-all duration-300 shadow-lg shadow-apit-blue/25 hover:shadow-xl hover:shadow-apit-blue/30 hover:scale-105 group"
                    >
                        Know More
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
