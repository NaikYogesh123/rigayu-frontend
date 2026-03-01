export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-apit-blue rounded-[3rem] overflow-hidden shadow-2xl">
                    <div className="flex flex-col items-center justify-center p-12 lg:p-20 text-white space-y-12 text-center">
                        <div className="max-w-2xl">
                            <h2 className="text-apit-yellow font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
                            <h3 className="text-4xl font-extrabold mb-6">Let's Discuss Your Project</h3>
                            <p className="text-blue-100 text-lg">
                                Have questions about our solutions or need a custom consultation? Our team is ready to help you optimize your process.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl">📍</span>
                                </div>
                                <h4 className="font-bold text-xl mb-3">Our Location</h4>
                                <p className="text-blue-100 text-sm max-w-xs">#2nd Floor, Manjunatha Complex, 11th Cross, C-Block, Building No. 36, MKK Main Road, Gayatri Nagar, Bangalore – 560021, Karnataka, India</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl">📧</span>
                                </div>
                                <h4 className="font-bold text-xl mb-3">Email Us</h4>
                                <p className="text-blue-100 text-lg">info@rigayu.co.in</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl">📞</span>
                                </div>
                                <h4 className="font-bold text-xl mb-3">Call Support</h4>
                                <p className="text-blue-100 text-lg font-bold italic text-apit-yellow">Toll Free: 1800 309 5555</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
