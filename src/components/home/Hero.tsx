

export default function Hero() {
    return (
        <section id="home" className="relative bg-background overflow-hidden py-10 lg:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">

                    {/* Text Content */}
                    <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <div>
                            <h2 className="text-apit-blue font-bold tracking-widest uppercase text-sm mb-3">Smart Ideas, Smarter Solutions.</h2>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                                RIGAYU <span className="text-apit-blue italic"> </span> <span className="text-apit-yellow italic">INNOVATIONS</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-400 max-w-xl leading-relaxed">
                                Experience next-level sprout production with automated cleaning, soaking, germination, and collection, ensuring consistently hygienic sprouts. Built for industrial strength and high efficiency, it processes large quantities with minimal labor and energy consumption. Made from food-grade materials for safe, contamination-free operation, with easy maintenance and durability for commercial setups. Ideal for sprout production units, food processing plants, and health food manufacturers – delivering fresh, high-quality sprouts every time.
                            </p>
                        </div>

                    </div>

                    {/* Visual Content */}
                    <div className="mt-16 lg:mt-0 relative animate-in fade-in slide-in-from-right duration-1000 delay-300">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-apit-blue/10 border-2 border-border-color">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="./Model1.jpg"
                                alt="RIGAYU Innovations"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-apit-yellow/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-apit-blue/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
