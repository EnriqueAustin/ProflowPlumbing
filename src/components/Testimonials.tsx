"use client";

import { testimonials } from "@/data/testimonials";
import SectionReveal from "./SectionReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const visibleCount = 3;
    const pages = Math.ceil(testimonials.length / visibleCount);

    return (
        <section id="testimonials" className="py-24 sm:py-32 bg-off-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 text-sm font-body font-medium text-sky bg-sky/10 rounded-full mb-4">
                            Customer Reviews
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy tracking-tight mb-4">
                            Trusted by{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-teal">
                                Homeowners
                            </span>
                        </h2>
                        <p className="text-lg font-body text-warm-gray max-w-2xl mx-auto">
                            Don&apos;t just take our word for it — hear from the families
                            we&apos;ve proudly served.
                        </p>
                    </div>
                </SectionReveal>

                {/* Testimonial cards */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                        >
                            {testimonials
                                .slice(
                                    activeIndex * visibleCount,
                                    activeIndex * visibleCount + visibleCount
                                )
                                .map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="bg-white rounded-2xl p-8 border border-cream shadow-sm hover:shadow-lg transition-all duration-300"
                                    >
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4">
                                            {Array.from({ length: testimonial.rating }).map(
                                                (_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-5 h-5 text-amber-400"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                )
                                            )}
                                        </div>

                                        {/* Quote */}
                                        <p className="text-sm font-body text-navy/80 leading-relaxed mb-6">
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky to-teal flex items-center justify-center">
                                                <span className="text-sm font-heading font-bold text-white">
                                                    {testimonial.initials}
                                                </span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-heading font-bold text-navy">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-xs font-body text-warm-gray">
                                                    {testimonial.location} •{" "}
                                                    {testimonial.service}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination dots */}
                    {pages > 1 && (
                        <div className="flex justify-center gap-2 mt-10">
                            {Array.from({ length: pages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    aria-label={`Show reviews page ${i + 1}`}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i
                                            ? "bg-gradient-to-r from-sky to-teal w-8"
                                            : "bg-navy/20 hover:bg-navy/40"
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
