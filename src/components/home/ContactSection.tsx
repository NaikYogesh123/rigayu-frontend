"use client";

import { getAssetPath } from "@/utils/assetPath";

export default function ContactSection() {
    return (
        <section id="contact" className="bg-[linear-gradient(135deg,#1DB954_0%,#0fa040_100%)] rounded-[3rem] mx-[2vw] my-12 reveal relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-[5vw] py-[7rem] grid grid-cols-1 lg:grid-cols-2 gap-[5rem] items-center">
                <div className="contact-text space-y-6 text-white">
                    <div className="section-tag font-syne text-[0.7rem] font-[700] tracking-[0.15em] uppercase text-lime mb-[1rem] block">Let&apos;s Connect</div>
                    <h2 className="font-syne text-[clamp(2.5rem,3.5vw,3.5rem)] font-[800] leading-[1.1] tracking-[-0.03em] text-white">
                        Ready to Bring<br />Wellness to Your Space?
                    </h2>
                    <p className="text-[rgba(255,255,255,0.75)] mt-[1rem] leading-[1.7] text-[1rem]">
                        Have questions about our solutions or need a custom consultation? Our team is ready to help you find the right fit.
                    </p>
                    <div className="contact-details mt-[2rem] flex flex-col gap-[1rem]">
                        {[
                            { icon: "📍", label: "Location", value: "2nd Floor, Manjunatha Complex, Gayatri Nagar, Bangalore – 560021" },
                            { icon: "📧", label: "Email", value: "info@rigayu.com" },
                            { icon: "📞", label: "Phone", value: "9480340163" }
                        ].map((item, i) => (
                            <div key={i} className="cd-item flex items-start gap-[1rem] bg-[rgba(255,255,255,0.1)] rounded-[1rem] p-[1.2rem]">
                                <div className="cd-icon text-[1.2rem] flex-shrink-0">{item.icon}</div>
                                <div className="cd-info">
                                    <label className="block text-[0.7rem] font-[700] tracking-[0.1em] uppercase text-lime mb-[0.2rem]">{item.label}</label>
                                    <span className="text-[0.9rem] text-[rgba(255,255,255,0.8)]">{item.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contact-form bg-white rounded-[2rem] p-[2.5rem] text-dark shadow-2xl">
                    <h3 className="font-syne text-[1.3rem] font-[700] mb-[1.5rem]">Express Your Interest</h3>
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group mb-[1.2rem]">
                            <label className="block text-[0.8rem] font-[600] mb-[0.4rem] text-[#3a5a3c]">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full p-[0.8rem_1rem] border-[1.5px] border-[#e0ede0] rounded-[0.8rem] text-[0.9rem] bg-[#f8fdf8] outline-none focus:border-green transition-colors"
                            />
                        </div>
                        <div className="form-group mb-[1.2rem]">
                            <label className="block text-[0.8rem] font-[600] mb-[0.4rem] text-[#3a5a3c]">Email Address</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full p-[0.8rem_1rem] border-[1.5px] border-[#e0ede0] rounded-[0.8rem] text-[0.9rem] bg-[#f8fdf8] outline-none focus:border-green transition-colors"
                            />
                        </div>
                        <div className="form-group mb-[1.2rem]">
                            <label className="block text-[0.8rem] font-[600] mb-[0.4rem] text-[#3a5a3c]">Message</label>
                            <textarea
                                placeholder="Tell us about your space and requirements..."
                                rows={3}
                                className="w-full p-[0.8rem_1rem] border-[1.5px] border-[#e0ede0] rounded-[0.8rem] text-[0.9rem] bg-[#f8fdf8] outline-none focus:border-green transition-colors resize-vertical min-h-[100px]"
                            ></textarea>
                        </div>
                        <button className="form-submit w-full p-[0.9rem] bg-dark text-lime rounded-[100px] font-syne text-[0.95rem] font-[700] tracking-[0.03em] border-none cursor-pointer transition-all hover:bg-green hover:text-white hover:-translate-y-[2px]">
                            Send Message →
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
