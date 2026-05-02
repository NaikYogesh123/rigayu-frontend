// Contact Section

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[inset_0_2px_10px_rgba(255,255,255,0.2),0_20px_40px_rgba(0,0,0,0.5)] rounded-[3rem] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                    <div className="flex flex-col items-center justify-center p-12 lg:p-20 text-white space-y-12 text-center relative z-10">
                        <div className="max-w-3xl">
                            <h2 className="text-apit-blue font-bold tracking-widest uppercase text-xl lg:text-2xl mb-4">Get In Touch</h2>
                            <h3 className="text-6xl lg:text-7xl font-extrabold mb-6">Let&apos;s Discuss Your Project</h3>
                            <p className="text-gray-300 text-2xl lg:text-3xl font-medium">
                                Have questions about our solutions or need a custom consultation? Our team is ready to help you optimize your process.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-4xl">📍</span>
                                </div>
                                <h4 className="font-bold text-3xl mb-4">Our Location</h4>
                                <p className="text-gray-300 text-lg lg:text-xl max-w-sm">#2nd Floor, Manjunatha Complex, 11th Cross, C-Block, Building No. 36, MKK Main Road, Gayatri Nagar, Bangalore – 560021, Karnataka, India</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-4xl">📧</span>
                                </div>
                                <h4 className="font-bold text-3xl mb-4">Email Us</h4>
                                <p className="text-gray-300 text-xl lg:text-2xl">info@rigayu.com</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-4xl">📞</span>
                                </div>
                                <h4 className="font-bold text-3xl mb-4">Call Support</h4>
                                <p className="text-gray-300 text-xl lg:text-3xl font-bold italic text-apit-yellow">Toll Free: 9480340163</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
