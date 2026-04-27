import { getAssetPath } from "@/utils/assetPath";
import Link from "next/link";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white p-[5rem_5vw_2rem] mt-[5rem]">
            <div className="footer-top flex flex-col md:flex-row justify-between gap-[3rem]">
                <div className="footer-brand max-w-[300px]">
                    <div className="logo font-syne text-[1.8rem] font-[800] tracking-[-0.03em] mb-[1rem]">RIGA<span className="text-green">YU</span></div>
                    <p className="text-[0.95rem] text-[rgba(255,255,255,0.45)] leading-[1.6]">
                        Redefining nutrition through smart automation and deep tech innovation.
                    </p>
                    <div className="flex gap-[1rem] mt-[1.5rem]">
                        {[
                            { icon: "💬", link: "https://api.whatsapp.com/send/?phone=919480340163" },
                            { icon: "👤", link: "https://www.facebook.com/share/1GQFwYrNUr/" },
                            { icon: "📸", link: "https://www.instagram.com/rigayu_innovations" }
                        ].map((social, i) => (
                            <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="text-[1.2rem] opacity-50 hover:opacity-100 transition-opacity">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-links flex flex-wrap gap-[4rem]">
                    <div className="link-col space-y-4">
                        <h4 className="font-syne text-[0.8rem] font-[700] tracking-[0.1em] uppercase text-white mb-[1.5rem]">Company</h4>
                        <Link href="/#home" className="block text-[0.9rem] text-[rgba(255,255,255,0.45)] no-underline hover:text-green transition-colors">Home</Link>
                        <Link href="/#about" className="block text-[0.9rem] text-[rgba(255,255,255,0.45)] no-underline hover:text-green transition-colors">About</Link>
                    </div>
                    <div className="link-col space-y-4">
                        <h4 className="font-syne text-[0.8rem] font-[700] tracking-[0.1em] uppercase text-white mb-[1.5rem]">Solutions</h4>
                        <Link href="/#products" className="block text-[0.9rem] text-[rgba(255,255,255,0.45)] no-underline hover:text-green transition-colors">Vending Machines</Link>
                        <Link href="/#contact" className="block text-[0.9rem] text-[rgba(255,255,255,0.45)] no-underline hover:text-green transition-colors">Consultation</Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom mt-[4rem] pt-[2rem] border-t border-[rgba(255,255,255,0.06)] text-center text-[rgba(255,255,255,0.4)] text-[0.85rem]">
                <p>&copy; {currentYear} Rigayu Innovations. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
