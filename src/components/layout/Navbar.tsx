"use client";

import { getAssetPath } from "@/utils/assetPath";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const pathname = usePathname();

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        const sections = ["home", "about", "products", "contact"];

        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        // Only handle hash links like /#products, /#contact
        if (!href.startsWith("/#")) return; // let Next.js handle /about normally

        const hash = href.replace("/", ""); // gives #products, #contact, etc.
        const sectionId = hash.replace("#", "");

        if (pathname === "/") {
            // On homepage — scroll to section directly
            e.preventDefault();
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", hash);
            }
        } else {
            // On another page — use window.location for a full navigation
            e.preventDefault();
            window.location.href = getAssetPath("/") + hash;
        }
    };

    const navLinks = [
        { name: "Home", href: "/#home", id: "home" },
        { name: "About Us", href: "/about", id: "about" },
        { name: "Our Products", href: "/#products", id: "products" },
        { name: "Contact Us", href: "/#contact", id: "contact" }
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5vw] py-[1.2rem] bg-[rgba(255,248,238,0.88)] backdrop-blur-[14px] border-b-[1.5px] border-[rgba(29,185,84,0.15)] transition-all duration-300">
                <div className="flex items-center">
                    <Link
                        href="/#home"
                        onClick={(e) => handleNavClick(e, "/#home")}
                        className="font-syne text-[1.5rem] font-[800] tracking-[-0.03em] text-dark no-underline"
                    >
                        RIGA<span className="text-green">YU</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center">
                    <ul className="flex gap-[2rem] list-none">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`text-[0.9rem] font-[500] tracking-[0.02em] no-underline transition-colors duration-200 ${activeSection === link.id
                                        ? "text-green"
                                        : "text-dark hover:text-green"
                                        } ${link.id === 'contact' ? 'bg-dark !text-lime px-[1.3rem] py-[0.55rem] rounded-[100px] !font-[600] border-none transition-all duration-200 hover:!bg-green hover:!text-dark' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-green focus:outline-none"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden fixed top-[70px] left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border-color z-[90] animate-in slide-in-from-top duration-300">
                    <div className="px-5 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={(e) => { handleNavClick(e, link.href); setIsOpen(false); }}
                                className={`block px-3 py-3 text-lg font-bold font-syne transition-colors ${activeSection === link.id
                                    ? "text-green"
                                    : "text-dark hover:text-green"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
