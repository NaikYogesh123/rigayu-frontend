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
        const sections = ["home", "about", "products", "interest", "contact"];

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
        <nav className="bg-surface border-b border-border-color sticky top-0 z-50 shadow-lg shadow-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        {/* Logo links to /#about as requested in document */}
                        <Link
                            href="/#about"
                            onClick={(e) => handleNavClick(e, "/#about")}
                            className="flex-shrink-0 flex items-center group overflow-hidden rounded-lg"
                        >
                            <div className="relative animate-glint group-hover:scale-105 transition-transform duration-300 animate-in fade-in zoom-in duration-1000">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={getAssetPath("/logo_transparent.png")}
                                    alt="RIGAYU Logo"
                                    className="h-10 w-auto brightness-0 invert"
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`font-medium transition-all duration-300 relative py-2 ${activeSection === link.id
                                    ? "text-apit-blue"
                                    : "text-gray-400 hover:text-apit-blue"
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-apit-blue animate-in fade-in slide-in-from-left duration-500"></span>
                                )}
                            </Link>
                        ))}

                        <div className="flex items-center space-x-4 pl-4 border-l border-white/10 ml-2">
                            {/* E-Brochure Icon */}
                            <button
                                title="Download E-Brochure"
                                className="p-2 text-gray-400 hover:text-apit-yellow transition-colors relative group"
                                onClick={() => { /* Placeholder for download logic */ }}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-surface border border-border-color text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">E-Brochure</span>
                            </button>

                            {/* Language Selector */}
                            <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest border border-white/10 rounded-lg px-2 py-1.5 hover:border-apit-blue transition-colors cursor-pointer group">
                                <span className="text-apit-blue mr-1">EN</span>
                                <svg className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-apit-blue focus:outline-none"
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
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-surface border-b border-border-color animate-in slide-in-from-top duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={(e) => { handleNavClick(e, link.href); setIsOpen(false); }}
                                className={`block px-3 py-2 font-medium transition-colors ${activeSection === link.id
                                    ? "text-apit-blue bg-apit-blue/10 rounded-lg"
                                    : "text-gray-400 hover:text-apit-blue"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/#interest" onClick={(e) => { handleNavClick(e, "/#interest"); setIsOpen(false); }} className="block px-3 py-2 text-apit-blue font-bold">Express Interest</Link>

                        <div className="flex items-center justify-between px-3 py-4 border-t border-white/10 mt-2">
                            <span className="text-gray-400 text-sm">Download Brochure</span>
                            <button className="text-apit-yellow">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
