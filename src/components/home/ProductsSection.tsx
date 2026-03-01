import Image from "next/image";

const products = [
    {
        title: "Standard Sprout Bowl",
        description: "Elegant and reliable automated vending for fresh sprout bowls. Features a clean wood-panelled design that fits perfectly in office hubs and cafes.",
        image: "/rigayu-frontend/vending-sprout-1.jpg",
        tags: ["Fresh", "Elegant", "Automated"]
    },
    {
        title: "Premium Emerald Kiosk",
        description: "A high-end, luxury vending experience with a sleek deep green finish and premium UI. Optimized for high-traffic corporate environments.",
        image: "/rigayu-frontend/vending-sprout-2.jpg",
        tags: ["Gourmet", "Luxury", "Smart UI"]
    },
    {
        title: "Informative Sprout Station",
        description: "Our comprehensive station featuring educational graphics on the sprouting process and health benefits, perfect for wellness centers.",
        image: "/rigayu-frontend/vending-sprout-3.jpg",
        tags: ["Healthy", "Educational", "Wellness"]
    }
];

export default function ProductsSection() {
    return (
        <section id="products" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom duration-1000">
                    <h2 className="text-apit-blue font-bold tracking-widest uppercase text-sm mb-4">Our Products</h2>
                    <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Smart Sprout Solutions</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Discover our range of automated vending machines designed to deliver fresh, nutritious sprout bowls with a seamless, premium experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="group bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-apit-blue/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-1000"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                    {product.tags.map((tag) => (
                                        <span key={tag} className="bg-white/90 backdrop-blur-md text-apit-blue text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-apit-blue transition-colors">
                                    {product.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                                    {product.description}
                                </p>
                                <button className="flex items-center text-apit-blue font-bold hover:gap-3 transition-all">
                                    Learn More
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Visual Background Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-apit-blue/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-apit-yellow/5 rounded-full blur-3xl -z-10"></div>
            </div>
        </section>
    );
}
