"use client";

import { packages } from "@/data/packages";
import SectionReveal from "./SectionReveal";
import { cn } from "@/lib/cn";

export default function Packages() {
    return (
        <section id="packages" className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 text-sm font-body font-medium text-emerald bg-emerald/10 rounded-full mb-4">
                            Service Plans
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy tracking-tight mb-4">
                            Protect Your Home{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-teal">
                                Year-Round
                            </span>
                        </h2>
                        <p className="text-lg font-body text-warm-gray max-w-2xl mx-auto">
                            Choose a maintenance plan that fits your needs. No long-term
                            contracts — cancel anytime.
                        </p>
                    </div>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
                    {packages.map((pkg, index) => (
                        <SectionReveal key={pkg.id} delay={index * 0.12}>
                            <div
                                className={cn(
                                    "relative rounded-3xl p-8 transition-all duration-300 h-full",
                                    pkg.featured
                                        ? "bg-gradient-to-br from-navy via-navy-light to-navy text-white shadow-2xl shadow-navy/30 scale-[1.02] md:scale-105 border-2 border-sky/20"
                                        : "bg-white border border-cream shadow-sm hover:shadow-lg hover:-translate-y-1"
                                )}
                            >
                                {/* Featured badge */}
                                {pkg.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-body font-semibold text-white bg-gradient-to-r from-sky via-teal to-emerald shadow-lg">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {/* Header */}
                                <div className="text-center mb-8">
                                    <h3
                                        className={cn(
                                            "text-xl font-heading font-bold mb-2",
                                            pkg.featured ? "text-white" : "text-navy"
                                        )}
                                    >
                                        {pkg.name}
                                    </h3>
                                    <p
                                        className={cn(
                                            "text-sm font-body mb-6",
                                            pkg.featured ? "text-white/70" : "text-warm-gray"
                                        )}
                                    >
                                        {pkg.description}
                                    </p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span
                                            className={cn(
                                                "text-5xl font-heading font-bold",
                                                pkg.featured
                                                    ? "text-transparent bg-clip-text bg-gradient-to-r from-sky-light to-teal-light"
                                                    : "text-navy"
                                            )}
                                        >
                                            {pkg.price}
                                        </span>
                                        <span
                                            className={cn(
                                                "text-lg font-body",
                                                pkg.featured ? "text-white/50" : "text-warm-gray"
                                            )}
                                        >
                                            {pkg.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <svg
                                                className={cn(
                                                    "w-5 h-5 flex-shrink-0 mt-0.5",
                                                    pkg.featured ? "text-teal-light" : "text-emerald"
                                                )}
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
                                            <span
                                                className={cn(
                                                    "text-sm font-body",
                                                    pkg.featured ? "text-white/80" : "text-navy/70"
                                                )}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href="#quote"
                                    className={cn(
                                        "block w-full text-center px-6 py-3.5 font-body font-semibold text-base rounded-2xl transition-all duration-200",
                                        pkg.featured
                                            ? "bg-gradient-to-r from-sky via-teal to-emerald text-white shadow-lg shadow-sky/25 hover:shadow-sky/40 hover:scale-[1.02] active:scale-[0.98]"
                                            : "bg-navy text-white hover:bg-navy-light hover:scale-[1.02] active:scale-[0.98]"
                                    )}
                                >
                                    {pkg.cta}
                                </a>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
