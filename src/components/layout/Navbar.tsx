"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the middle of the viewport
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

    const navLinks = [
        { name: "Home", href: "#home", id: "home" },
        { name: "About Us", href: "#about", id: "about" },
        { name: "Our Products", href: "#products", id: "products" },
        { name: "Contact Us", href: "#contact", id: "contact" }
    ];

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center group overflow-hidden rounded-lg">
                            <div className="relative animate-glint group-hover:scale-105 transition-transform duration-300 animate-in fade-in zoom-in duration-1000">
                                <Image
                                    src="/rigayu-frontend/logo_transparent.png"
                                    alt="RIGAYU Logo"
                                    width={150}
                                    height={40}
                                    className="h-10 w-auto"
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.id === "home" ? "/" : link.href}
                                className={`font-medium transition-all duration-300 relative py-2 ${activeSection === link.id
                                    ? "text-apit-blue"
                                    : "text-gray-700 hover:text-apit-blue"
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-apit-blue animate-in fade-in slide-in-from-left duration-500"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-apit-blue focus:outline-none"
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
                <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.id === "home" ? "/" : link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 font-medium transition-colors ${activeSection === link.id
                                    ? "text-apit-blue bg-blue-50 rounded-lg"
                                    : "text-gray-700 hover:text-apit-blue"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="#interest" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-apit-blue font-bold">Express Interest</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
