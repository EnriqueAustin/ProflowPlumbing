"use client";

import SectionReveal from "./SectionReveal";

const highlights = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "24/7 Emergency Response",
        description:
            "Burst pipe at 2 AM? We're there. Our emergency team responds within 30 minutes, any time of day or night.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: "Licensed & Insured Techs",
        description:
            "Every ProFlow technician is fully licensed, insured, background-checked and continuously trained.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        ),
        title: "Transparent Upfront Pricing",
        description:
            "Get a detailed quote before any work begins. No surprises, no hidden fees. We guarantee it in writing.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438a2.25 2.25 0 01-1.228 2.412 2.25 2.25 0 01-.399.169l-.009-.003a8.963 8.963 0 01-5.521-4.865" />
            </svg>
        ),
        title: "Eco-Friendly Options",
        description:
            "We offer water-saving fixtures, energy-efficient systems, and sustainable solutions to reduce your footprint.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        ),
        title: "100% Satisfaction Guarantee",
        description:
            "Not happy? We'll make it right — free of charge. Our 100% satisfaction guarantee means zero risk for you.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
            </svg>
        ),
        title: "Local Family-Owned",
        description:
            "We're your neighbors. A family-owned business proudly serving this community for over 15 years.",
    },
];

export default function WhyChoose() {
    return (
        <section id="why-proflow" className="py-24 sm:py-32 bg-off-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 text-sm font-body font-medium text-teal bg-teal/10 rounded-full mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy tracking-tight mb-4">
                            The ProFlow{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-emerald">
                                Difference
                            </span>
                        </h2>
                        <p className="text-lg font-body text-warm-gray max-w-2xl mx-auto">
                            We don&apos;t just fix pipes — we build lasting relationships with
                            every homeowner we serve.
                        </p>
                    </div>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {highlights.map((item, index) => (
                        <SectionReveal key={item.title} delay={index * 0.08}>
                            <div className="group relative bg-white rounded-2xl p-8 border border-cream shadow-sm hover:shadow-xl hover:shadow-teal/10 transition-all duration-300 hover:-translate-y-1 h-full">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky/10 via-teal/10 to-emerald/10 flex items-center justify-center text-teal mb-5 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-sky/20 group-hover:via-teal/20 group-hover:to-emerald/20 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-heading font-bold text-navy mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-body text-warm-gray leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
