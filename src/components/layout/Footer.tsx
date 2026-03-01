import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-apit-blue text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand and Description */}
                    <div className="space-y-6">
                        <div className="flex items-center group">
                            <div className="relative animate-glint group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/rigayu-frontend/logo_transparent.png"
                                    alt="RIGAYU Logo"
                                    width={180}
                                    height={50}
                                    className="h-12 w-auto brightness-0 invert"
                                />
                            </div>
                        </div>
                        <p className="text-blue-100 text-sm leading-relaxed">
                            RIGAYU Innovations Pvt Ltd – Efficient, hygienic, and automated sprout processing.
                            High-quality sprouts for commercial setups, processed safely and reliably.
                            Innovating food solutions with precision, safety, and industrial-grade performance.
                        </p>

                        {/* Social Media Links */}
                        <div className="flex space-x-4 pt-4">
                            <a href="https://wa.me/9118003095555" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-all group" title="WhatsApp">
                                <span className="text-xl group-hover:scale-110 transition-transform">💬</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 transition-all group" title="Instagram">
                                <span className="text-xl group-hover:scale-110 transition-transform">📸</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all group" title="LinkedIn">
                                <span className="text-xl group-hover:scale-110 transition-transform">💼</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-black transition-all group" title="Twitter / X">
                                <span className="text-xl group-hover:scale-110 transition-transform">𝕏</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all group" title="Facebook">
                                <span className="text-xl group-hover:scale-110 transition-transform">👤</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:ml-auto">
                        <h3 className="text-lg font-bold mb-6 text-apit-yellow uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="hover:text-apit-yellow transition-colors">Home</Link></li>
                            <li><Link href="#about" className="hover:text-apit-yellow transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-apit-yellow transition-colors">Contact Us</Link></li>
                            <li><Link href="#solutions" className="hover:text-apit-yellow transition-colors">Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:ml-auto">
                        <h3 className="text-lg font-bold mb-6 text-apit-yellow uppercase tracking-wider">Contact Us</h3>
                        <div className="space-y-4 text-blue-100 text-sm">
                            <p className="flex items-start">
                                <span className="mr-3 mt-1">📍</span>
                                <span>Rigayu Innovations Pvt Ltd<br />#2nd floor, Manjunatha Complex<br />11th Cross, 'C'-Block <br />
                                    Building No 36, MKK Main Road <br />Gayatri Nagar, Bangalore - 560021 <br />Karnataka, India</span>
                            </p>
                            <p className="flex items-center">
                                <span className="mr-3">📧</span>
                                <a href="mailto:info@rigayu.co.in" className="hover:text-apit-yellow transition-colors">info@rigayu.co.in</a>
                            </p>
                            <p className="flex items-center">
                                <span className="mr-3">📞</span>
                                <span>Toll Free: 1800 309 5555</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
                    <p>© {currentYear} RIGAYU INNOVATIONS</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
