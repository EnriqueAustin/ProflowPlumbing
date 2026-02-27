"use client";

import { services } from "@/data/services";
import SectionReveal from "./SectionReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesGrid() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section id="services" className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 text-sm font-body font-medium text-sky bg-sky/10 rounded-full mb-4">
                            Our Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy tracking-tight mb-4">
                            Expert Plumbing{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-teal">
                                Solutions
                            </span>
                        </h2>
                        <p className="text-lg font-body text-warm-gray max-w-2xl mx-auto">
                            From emergency repairs to full renovations — we deliver reliable,
                            professional plumbing services you can count on.
                        </p>
                    </div>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <SectionReveal key={service.id} delay={index * 0.1}>
                            <div
                                className="group relative bg-white rounded-2xl border border-cream overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky/10 transition-all duration-300 hover:-translate-y-1"
                                onMouseEnter={() => setHoveredId(service.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${service.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />

                                    {/* Icon badge */}
                                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-2xl shadow-lg">
                                        {service.icon}
                                    </div>

                                    {/* Price badge */}
                                    <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm">
                                        <span className="text-sm font-body font-semibold text-navy">
                                            {service.price}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-heading font-bold text-navy mb-2 group-hover:text-sky transition-colors">
                                        {service.name}
                                    </h3>
                                    <p className="text-sm font-body text-warm-gray leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    {/* Quick facts reveal */}
                                    <AnimatePresence>
                                        {hoveredId === service.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 border-t border-cream space-y-2">
                                                    {service.quickFacts.map((fact) => (
                                                        <div
                                                            key={fact}
                                                            className="flex items-center gap-2 text-sm font-body text-navy/70"
                                                        >
                                                            <svg
                                                                className="w-4 h-4 text-emerald flex-shrink-0"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                strokeWidth={2.5}
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M5 13l4 4L19 7"
                                                                />
                                                            </svg>
                                                            {fact}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Learn more link */}
                                    <div className="mt-4 flex items-center gap-1 text-sm font-body font-semibold text-sky group-hover:gap-2 transition-all">
                                        Learn more
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
