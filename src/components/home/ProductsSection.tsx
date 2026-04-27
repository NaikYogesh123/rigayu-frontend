import Link from "next/link";

const products = [
    {
        slug: "corporate-campus-station",
        title: "Corporate Campus Station",
        description: "A smart machine designed for corporate campus environments, providing fresh and healthy sprout salads to professionals in high-footfall areas.",
        tags: ["Corporate", "Smart Vending", "Automated"],
        icon: "🏢",
        gradient: "from-[#0D1A0F] to-[#1a3a1f]"
    },
    {
        slug: "public-hub-kiosk",
        title: "Public Hub Kiosk",
        description: "Engineered for shopping districts and transit stations. This kiosk brings nutritious sprout salads to busy urban environments effortlessly.",
        tags: ["Public Spaces", "Urban", "High Traffic"],
        icon: "🏙️",
        gradient: "from-[#FF6B2B] to-[#ff8c55]"
    },
    {
        slug: "community-wellness-unit",
        title: "Community Wellness Unit",
        description: "Ideal for community halls, fitness centres, and wellness spaces. A compact unit delivering fresh sprout-based nutrition in friendly environments.",
        tags: ["Wellness", "Fitness", "Community"],
        icon: "🏋️",
        gradient: "from-[#1DB954] to-[#47d47a]"
    },
];

export default function ProductsSection() {
    return (
        <section id="products" className="bg-cream py-[7rem] reveal">
            <div className="max-w-7xl mx-auto px-[5vw]">
                <div className="products-header flex flex-col md:flex-row items-end justify-between mb-[3.5rem] flex-wrap gap-[1rem]">
                    <div className="space-y-4">
                        <div className="section-tag font-syne text-[0.7rem] font-[700] tracking-[0.15em] uppercase text-green mb-[1rem] block">Our Solutions</div>
                        <h2 className="font-syne text-[clamp(2rem, 3.5vw, 3.5rem)] font-[800] leading-[1.1] tracking-[-0.03em] text-dark">
                            Engineered for<br />Every Environment.
                        </h2>
                    </div>
                </div>

                <div className="products-grid grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
                    {products.map((product, i) => (
                        <div key={i} className="product-card rounded-[2rem] overflow-hidden bg-white border border-[rgba(0,0,0,0.07)] transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_30px_60px_rgba(13,26,15,0.12)] cursor-pointer group">
                            <div className={`pc-top h-[200px] p-[2rem] flex flex-col justify-between relative overflow-hidden bg-gradient-to-br ${product.gradient}`}>
                                <div className="absolute bottom-[-40px] right-[-40px] w-[130px] h-[130px] rounded-full bg-white/10"></div>
                                <div className="pc-emoji text-[3rem] drop-shadow-md">{product.icon}</div>
                                <div className="pc-badges flex gap-[0.4rem] flex-wrap relative z-10">
                                    {product.tags.map((tag, j) => (
                                        <div key={j} className="pc-badge text-[0.65rem] font-[700] tracking-[0.05em] px-[0.75rem] py-[0.35rem] rounded-[100px] bg-white/20 text-white backdrop-blur-sm uppercase">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pc-body p-[1.8rem]">
                                <h3 className="font-syne text-[1.25rem] font-[700] mb-[0.6rem] text-dark group-hover:text-green transition-colors">{product.title}</h3>
                                <p className="text-[0.9rem] text-[#5a6e5c] leading-[1.6] mb-[1.5rem] font-medium">{product.description}</p>
                                <Link
                                    href={`/products/${product.slug}`}
                                    className="pc-link inline-flex items-center gap-[0.4rem] font-syne text-[0.85rem] font-[700] text-green no-underline border-b-2 border-lime pb-[2px] transition-all hover:gap-[0.8rem]"
                                >
                                    View Product
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
