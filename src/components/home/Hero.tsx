"use client";

import { getAssetPath } from "@/utils/assetPath";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-[5vw] py-[8rem] lg:py-[4rem] relative overflow-hidden gap-[3rem]">
            <div className="hero-bg-blobs absolute inset-0 pointer-events-none z-0">
                <div className="blob blob-1 absolute rounded-full blur-[80px] opacity-[0.35] animate-[blobFloat_8s_ease-in-out_infinite] w-[500px] h-[500px] bg-lime -top-[100px] -right-[100px]"></div>
                <div className="blob blob-2 absolute rounded-full blur-[80px] opacity-[0.35] animate-[blobFloat_8s_ease-in-out_infinite_3s] w-[350px] h-[350px] bg-orange bottom-0 -left-[80px]"></div>
                <div className="blob blob-3 absolute rounded-full blur-[80px] opacity-[0.35] animate-[blobFloat_8s_ease-in-out_infinite_5s] w-[250px] h-[250px] bg-amber top-[40%] left-[35%]"></div>
            </div>

            <div className="hero-text relative z-[1]">
                <div className="hero-tag inline-flex items-center gap-[0.5rem] bg-lime text-dark font-syne text-[0.75rem] font-[700] tracking-[0.1em] uppercase px-[1rem] py-[0.4rem] rounded-[100px] mb-[1.5rem] animate-fade-up">
                    Born in India · Powered by Nature
                </div>
                <h1 className="font-syne text-[clamp(2.8rem,5vw,4.5rem)] font-[800] leading-[1.05] tracking-[-0.04em] mb-[1.5rem] animate-fade-up [animation-delay:0.1s]">
                    Smart Ideas,<br /><span className="text-green">Smarter</span><br /><span className="text-stroke">Solutions.</span>
                </h1>
                <p className="hero-sub mt-[1.5rem] text-[1.05rem] leading-[1.7] text-[#3a5a3c] max-w-[500px] animate-fade-up [animation-delay:0.2s]">
                    Rigayu is redefining how the world eats healthy. We fuse real food with smart innovation to make wellness effortless in today&apos;s fast-paced life.
                </p>
                <div className="hero-actions flex gap-[1rem] mt-[2.5rem] flex-wrap animate-fade-up [animation-delay:0.3s]">
                    <Link href="/#about" className="btn-primary bg-green text-white px-[2rem] py-[0.9rem] rounded-[100px] font-syne text-[0.95rem] font-[700] no-underline tracking-[0.01em] transition-all duration-200 shadow-[0_8px_30px_rgba(29,185,84,0.35)] hover:translate-y-[-2px] hover:shadow-[0_14px_40px_rgba(29,185,84,0.45)] hover:bg-[#18a348]">
                        Discover More
                    </Link>
                    <Link href="/#contact" className="btn-secondary bg-transparent text-dark px-[2rem] py-[0.9rem] rounded-[100px] border-[2px] border-dark font-syne text-[0.95rem] font-[700] no-underline tracking-[0.01em] transition-all duration-200 hover:bg-dark hover:text-lime">
                        Express Interest
                    </Link>
                </div>
            </div>

            <div className="hero-visual relative z-[1] flex items-center justify-center animate-fade-up [animation-delay:0.2s]">
                <div className="hero-card bg-mid rounded-[2.5rem] p-[3rem_2.5rem] text-white relative overflow-hidden w-full max-w-[420px] shadow-[0_30px_80px_rgba(13,26,15,0.25)]">
                    <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-lime rounded-full opacity-[0.12]"></div>
                    <div className="hc-label text-[0.75rem] tracking-[0.12em] uppercase text-lime font-[600] mb-[0.5rem]">Our Promise</div>
                    <div className="hc-big font-syne text-[2rem] font-[800] leading-[1.1] mb-[1.5rem]">Fuel Better.<br />Live Sharper.</div>
                    <div className="hc-stats grid grid-cols-2 gap-[1rem] mb-[1.5rem]">
                        <div className="hc-stat bg-[rgba(255,255,255,0.07)] rounded-[1rem] p-[1rem]">
                            <div className="hc-stat-num font-syne text-[1.6rem] font-[800] text-lime">3+</div>
                            <div className="hc-stat-label text-[0.75rem] text-[rgba(255,255,255,0.55)] mt-[0.2rem]">Smart Products</div>
                        </div>
                        <div className="hc-stat bg-[rgba(255,255,255,0.07)] rounded-[1rem] p-[1rem]">
                            <div className="hc-stat-num font-syne text-[1.6rem] font-[800] text-lime">100%</div>
                            <div className="hc-stat-label text-[0.75rem] text-[rgba(255,255,255,0.55)] mt-[0.2rem]">Natural Sprouts</div>
                        </div>
                        <div className="hc-stat bg-[rgba(255,255,255,0.07)] rounded-[1rem] p-[1rem]">
                            <div className="hc-stat-num font-syne text-[1.6rem] font-[800] text-lime">0</div>
                            <div className="hc-stat-label text-[0.75rem] text-[rgba(255,255,255,0.55)] mt-[0.2rem]">Preservatives</div>
                        </div>
                        <div className="hc-stat bg-[rgba(255,255,255,0.07)] rounded-[1rem] p-[1rem]">
                            <div className="hc-stat-num font-syne text-[1.6rem] font-[800] text-lime">24/7</div>
                            <div className="hc-stat-label text-[0.75rem] text-[rgba(255,255,255,0.55)] mt-[0.2rem]">Automated</div>
                        </div>
                    </div>
                    <div className="hc-pill inline-flex items-center gap-[0.5rem] bg-green rounded-[100px] px-[1rem] py-[0.5rem] text-[0.8rem] font-[600]">
                        Bangalore, India 🇮🇳
                    </div>
                </div>
            </div>
        </section>
    );
}
