import { getAssetPath } from "@/utils/assetPath";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Background image & gradient overlay */}
            <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={getAssetPath("/hero-bg.png")}
                    alt=""
                    className="w-full h-full object-cover opacity-60 blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">

                    {/* Text Content */}
                    <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <div>
                            <h2 className="text-apit-blue font-bold tracking-widest uppercase text-sm mb-3">Smart Ideas, Smarter Solutions.</h2>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                                RIGAYU <span className="text-apit-blue italic"> </span> <span className="text-apit-yellow italic">INNOVATIONS</span>
                            </h1>
                            <div className="mt-8 space-y-6">
                                <p className="text-xl text-gray-300 leading-relaxed font-medium">
                                    Rigayu is redefining how the world eats healthy. Born in India and inspired by ancient nutrition, we fuse real food with smart innovation to make wellness effortless in today’s fast-paced life.
                                </p>
                                <p className="text-lg text-gray-400 leading-relaxed">
                                    We exist to break the myth that healthy living is complicated. It’s not — it’s about access, consistency, and better choices every day. Rigayu isn’t just a brand, it’s a movement towards cleaner eating, stronger living, and a smarter future of nutrition.
                                </p>
                                <div className="pt-2">
                                    <span className="inline-block text-apit-yellow font-bold text-xl tracking-wide border-l-4 border-apit-yellow pl-4 italic">
                                        Fuel better. Live sharper. Choose Rigayu. 🌱
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/about" className="bg-apit-blue text-white font-bold px-8 py-4 rounded-full hover:bg-apit-dark-blue transition-all shadow-lg shadow-apit-blue/20 hover:scale-105 active:scale-95">
                                Know More
                            </Link>
                            <Link href="/express-interest" className="bg-white/5 backdrop-blur-sm text-white border border-white/10 font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                                Express Interest
                            </Link>
                        </div>
                    </div>

                    {/* Visual Content - Food Plant Image */}
                    <div className="mt-16 lg:mt-0 relative animate-in fade-in slide-in-from-right duration-1000 delay-300">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-apit-blue/10 border-2 border-border-color">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={getAssetPath("/hero-plant.png")}
                                alt="Rigayu Food Processing Plant"
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
