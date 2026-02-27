"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=2400&h=1400&fit=crop')",
                }}
            >
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy-dark/90" />
            </div>

            {/* Animated water lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky/30 to-transparent animate-[water-flow_8s_ease-in-out_infinite]" />
                <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent animate-[water-flow_12s_ease-in-out_infinite_reverse]" />
                <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent animate-[water-flow_10s_ease-in-out_infinite]" />
                <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky/15 to-transparent animate-[water-flow_14s_ease-in-out_infinite_reverse]" />
            </div>

            {/* Soft teal blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky/10 via-teal/8 to-emerald/5 blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
                <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                        <span className="text-sm font-body text-white/80">
                            Licensed & Insured — Serving Since 2009
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6"
                    >
                        Plumbing You Can{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-light via-teal-light to-emerald-light">
                            Trust.
                        </span>
                        <br />
                        Every Time.
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="text-lg sm:text-xl font-body text-white/70 max-w-xl mb-10 mx-auto lg:mx-0"
                    >
                        24/7 emergency response. Same-day availability. Transparent pricing
                        with no hidden fees. Your trusted local plumbing experts for
                        residential and light-commercial service.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <a
                            href="#quote"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-body font-semibold text-base text-white rounded-2xl bg-gradient-to-r from-sky via-teal to-emerald shadow-xl shadow-sky/25 hover:shadow-sky/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                        >
                            <span className="relative z-10">Get Free Quote</span>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky via-teal to-emerald opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center px-8 py-4 font-body font-semibold text-base text-white rounded-2xl border-2 border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 active:scale-[0.98] transition-all duration-200 gap-2"
                        >
                            See Our Services
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="mt-14 flex flex-wrap gap-8 justify-center lg:justify-start"
                    >
                        {[
                            { value: "15+", label: "Years Experience" },
                            { value: "10K+", label: "Jobs Completed" },
                            { value: "4.9★", label: "Average Rating" },
                            { value: "30min", label: "Response Time" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl sm:text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-light to-teal-light">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm font-body text-white/50 mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
