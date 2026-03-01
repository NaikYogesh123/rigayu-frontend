import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative bg-white overflow-hidden py-10 lg:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">

                    {/* Text Content */}
                    <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <div>
                            <h2 className="text-apit-blue font-bold tracking-widest uppercase text-sm mb-3">Smart Ideas, Smarter Solutions.</h2>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                                RIGAYU <span className="text-apit-blue italic"> </span> <span className="text-apit-yellow italic">INNOVATIONS</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-600 max-w-xl leading-relaxed">
                                Experience next-level sprout production with automated cleaning, soaking, germination, and collection, ensuring consistently hygienic sprouts. Built for industrial strength and high efficiency, it processes large quantities with minimal labor and energy consumption. Made from food-grade materials for safe, contamination-free operation, with easy maintenance and durability for commercial setups. Ideal for sprout production units, food processing plants, and health food manufacturers – delivering fresh, high-quality sprouts every time.
                            </p>
                        </div>

                        {/* <div className="flex flex-wrap gap-4">
                            <button className="bg-apit-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-apit-dark-blue transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                                Explore Technology
                            </button>
                            <button className="border-2 border-apit-blue text-apit-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-apit-blue hover:text-white transition-all">
                                Download Brochure
                            </button>
                        </div> */}
                        {/*    
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                            <div>
                                <p className="text-3xl font-bold text-apit-blue">99.9%</p>
                                <p className="text-gray-500 text-sm font-medium">Accuracy Rate</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-apit-blue">24/7</p>
                                <p className="text-gray-500 text-sm font-medium">Monitoring</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-apit-blue">0.1s</p>
                                <p className="text-gray-500 text-sm font-medium">Response Time</p>
                            </div>
                        </div> */}

                    </div>

                    {/* Visual Content */}
                    <div className="mt-16 lg:mt-0 relative animate-in fade-in slide-in-from-right duration-1000 delay-300">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src="/rigayu-frontend/Model1.jpg"
                                alt="RIGAYU Innovations"
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-apit-yellow/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-apit-blue/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
