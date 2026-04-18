import Link from "next/link";

const products = [
    {
        slug: "corporate-campus-station",
        title: "Corporate Campus Station",
        description: "A Rigayu smart machine designed for corporate campus environments, providing fresh and healthy sprout salads to professionals. Built for high-footfall areas with seamless automated dispensing.",
        tags: ["Corporate", "Smart Vending", "Automated"],
    },
    {
        slug: "public-hub-kiosk",
        title: "Public Hub Kiosk",
        description: "Engineered for public gathering spots like shopping districts and transit stations. This kiosk brings nutritious sprout salads to busy urban environments with effortless convenience.",
        tags: ["Public Spaces", "Urban", "High Traffic"],
    },
    {
        slug: "community-wellness-unit",
        title: "Community Wellness Unit",
        description: "Ideal for community halls, fitness centres, and wellness spaces. This compact unit delivers fresh sprout-based nutrition in enclosed, people-friendly environments.",
        tags: ["Wellness", "Fitness", "Community"],
    },
];

export default function ProductsSection() {
    return (
        <section id="products" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
                    <h2 className="text-apit-blue font-bold tracking-widest uppercase text-sm mb-4">Our Products</h2>
                    <h3 className="text-4xl font-extrabold text-white mb-6">Smart Sprout Solutions</h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Discover our range of automated machines designed to deliver fresh, nutritious sprout salads with a seamless, premium experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            className="group bg-surface rounded-3xl p-8 border border-border-color hover:border-apit-blue/30 transition-all duration-500 hover:shadow-2xl hover:shadow-apit-blue/10 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-1000"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-apit-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-apit-blue transition-colors">
                                <span className="text-2xl group-hover:scale-110 transition-transform">
                                    {index === 0 ? "🏢" : index === 1 ? "🏙️" : "🏋️"}
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {product.tags.map((tag) => (
                                    <span key={tag} className="text-apit-blue text-xs font-bold px-3 py-1 rounded-full border border-apit-blue/20 bg-apit-blue/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-apit-blue transition-colors">
                                {product.title}
                            </h4>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                                {product.description}
                            </p>

                            {/* CTA */}
                            <span className="flex items-center text-apit-blue font-bold group-hover:gap-3 transition-all">
                                View Product
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Background elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-apit-blue/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-apit-yellow/5 rounded-full blur-3xl -z-10"></div>
            </div>
        </section>
    );
}
