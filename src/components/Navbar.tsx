"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why ProFlow", href: "#why-proflow" },
    { label: "Packages", href: "#packages" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#quote" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href.replace("#", "#")))
            .filter(Boolean) as Element[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: "-20% 0px -70% 0px" }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled
                        ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-navy/5"
                        : "bg-transparent"
                )}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 sm:h-20 items-center justify-between">
                        {/* Logo */}
                        <a
                            href="#"
                            className="flex items-center gap-2 group"
                            aria-label="ProFlow Plumbing home"
                        >
                            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-sky to-teal flex items-center justify-center shadow-lg shadow-sky/20 group-hover:shadow-sky/40 transition-shadow">
                                <span className="text-white font-heading font-bold text-base sm:text-lg">
                                    PF
                                </span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span
                                    className={cn(
                                        "font-heading font-bold text-base sm:text-lg tracking-tight transition-colors",
                                        scrolled ? "text-navy" : "text-white"
                                    )}
                                >
                                    PROFLOW
                                </span>
                                <span
                                    className={cn(
                                        "text-[10px] sm:text-xs font-body tracking-[0.2em] uppercase transition-colors",
                                        scrolled ? "text-sky" : "text-sky-light"
                                    )}
                                >
                                    Plumbing
                                </span>
                            </div>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium font-body rounded-lg transition-all",
                                        activeSection === link.href
                                            ? scrolled
                                                ? "text-sky"
                                                : "text-sky-light"
                                            : scrolled
                                                ? "text-navy/70 hover:text-navy"
                                                : "text-white/80 hover:text-white"
                                    )}
                                >
                                    {link.label}
                                    {activeSection === link.href && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 rounded-lg bg-sky/10"
                                            transition={{
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 0.6,
                                            }}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="tel:+15551234567"
                                className={cn(
                                    "text-sm font-body font-medium transition-colors flex items-center gap-1.5",
                                    scrolled
                                        ? "text-navy/70 hover:text-navy"
                                        : "text-white/80 hover:text-white"
                                )}
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                (555) 123-4567
                            </a>
                            <a
                                href="#quote"
                                className="relative inline-flex items-center justify-center px-6 py-2.5 font-body font-semibold text-sm text-white rounded-full bg-gradient-to-r from-sky via-teal to-emerald shadow-lg shadow-sky/25 hover:shadow-sky/40 hover:scale-105 active:scale-95 transition-all duration-200"
                            >
                                Get Free Quote
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={cn(
                                "lg:hidden p-2 rounded-lg transition-colors",
                                scrolled ? "text-navy" : "text-white"
                            )}
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileOpen}
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                {mobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl shadow-xl lg:hidden border-t border-cream"
                    >
                        <div className="px-4 py-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={cn(
                                        "block px-4 py-3 text-base font-body font-medium rounded-xl transition-colors",
                                        activeSection === link.href
                                            ? "text-sky bg-sky/10"
                                            : "text-navy/70 hover:text-navy hover:bg-cream"
                                    )}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-4 space-y-3">
                                <a
                                    href="tel:+15551234567"
                                    className="flex items-center gap-2 px-4 py-3 text-navy/70 font-body"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    (555) 123-4567
                                </a>
                                <a
                                    href="#quote"
                                    onClick={() => setMobileOpen(false)}
                                    className="block w-full text-center px-6 py-3 font-body font-semibold text-white rounded-full bg-gradient-to-r from-sky via-teal to-emerald shadow-lg"
                                >
                                    Get Free Quote
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
