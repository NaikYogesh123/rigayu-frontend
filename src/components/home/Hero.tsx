import { getAssetPath } from "@/utils/assetPath";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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

            <div className="w-full pl-6 sm:pl-12 lg:pl-20 xl:pl-32 pr-4 relative z-10">
                <div className="max-w-4xl xl:max-w-[1100px] mr-auto pt-10">

                    {/* Text Content */}
                    <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <div>
                            <h2 className="text-apit-blue font-bold tracking-widest uppercase text-xl lg:text-2xl mb-4">Smart Ideas, Smarter Solutions.</h2>
                            <h1 className="text-7xl lg:text-9xl font-extrabold text-white leading-tight">
                                RIGAYU <span className="text-apit-blue italic"> </span> <span className="text-apit-yellow italic">INNOVATIONS</span>
                            </h1>
                            <div className="mt-10 space-y-8">
                                <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed font-medium">
                                    Rigayu is redefining how the world eats healthy. Born in India and inspired by ancient nutrition, we fuse real food with smart innovation to make wellness effortless in today’s fast-paced life.
                                </p>
                                <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed">
                                    We exist to break the myth that healthy living is complicated. It’s not — it’s about access, consistency, and better choices every day. Rigayu isn’t just a brand, it’s a movement towards cleaner eating, stronger living, and a smarter future of nutrition.
                                </p>
                                <div className="pt-4">
                                    <span className="inline-block text-apit-yellow font-bold text-2xl lg:text-3xl tracking-wide border-l-4 border-apit-yellow pl-6 italic">
                                        Fuel better. Live sharper. Choose Rigayu. 🌱
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-6 pt-6">
                            <Link href="/about" className="bg-apit-blue text-white font-bold px-12 py-5 text-xl rounded-full hover:bg-apit-dark-blue transition-all shadow-lg shadow-apit-blue/20 hover:scale-105 active:scale-95">
                                Know More
                            </Link>
                            <Link href="/express-interest" className="bg-white/5 backdrop-blur-sm text-white border border-white/10 font-bold px-12 py-5 text-xl rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                                Express Interest
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
