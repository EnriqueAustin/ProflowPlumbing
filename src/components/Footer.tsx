"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white">
            {/* Main footer */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky to-teal flex items-center justify-center shadow-lg">
                                <span className="text-white font-heading font-bold text-lg">PF</span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-heading font-bold text-lg tracking-tight">PROFLOW</span>
                                <span className="text-xs tracking-[0.2em] uppercase text-sky-light">Plumbing</span>
                            </div>
                        </div>
                        <p className="text-sm font-body text-white/60 leading-relaxed mb-4 max-w-xs">
                            Reliable, licensed, and insured plumbing services for residential
                            and light-commercial properties. Proudly family-owned since 2009.
                        </p>
                        <div className="text-xs font-body text-white/40">
                            License #PLB-2024-19847
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white/80 mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: "Services", href: "#services" },
                                { label: "Why ProFlow", href: "#why-proflow" },
                                { label: "Service Plans", href: "#packages" },
                                { label: "Reviews", href: "#testimonials" },
                                { label: "Get a Quote", href: "#quote" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-sm font-body text-white/60 hover:text-sky-light transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white/80 mb-4">
                            Service Areas
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                "Downtown Metro",
                                "Oakwood Heights",
                                "Riverside Estates",
                                "Cedar Grove",
                                "Maple Hills",
                                "Birchwood Commons",
                            ].map((area) => (
                                <li key={area} className="text-sm font-body text-white/60">
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white/80 mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:+15551234567" className="text-sm font-body text-white/60 hover:text-sky-light transition-colors flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    (555) 123-4567
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@proflowplumbing.com" className="text-sm font-body text-white/60 hover:text-sky-light transition-colors flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    hello@proflowplumbing.com
                                </a>
                            </li>
                            <li className="text-sm font-body text-white/60 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                24/7 Emergency Service
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs font-body text-white/40">
                        © {currentYear} ProFlow Plumbing. All rights reserved.
                    </p>
                    <p className="text-xs font-body text-white/30">
                        Images via{" "}
                        <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-light transition-colors underline">
                            Unsplash
                        </a>
                        . Used under the Unsplash License.
                    </p>
                </div>
            </div>
        </footer>
    );
}
