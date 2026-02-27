"use client";

import { useState, FormEvent } from "react";
import SectionReveal from "./SectionReveal";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";

const serviceOptions = [
    "Emergency Repair",
    "Bathroom Renovation",
    "Kitchen Plumbing",
    "Water Heater",
    "Drain Cleaning",
    "Leak Detection",
    "Other",
];

const urgencyOptions = [
    { value: "emergency", label: "🚨 Emergency — Need help NOW" },
    { value: "urgent", label: "⚡ Urgent — Within 24 hours" },
    { value: "standard", label: "📋 Standard — This week" },
    { value: "flexible", label: "📅 Flexible — I can wait" },
];

interface FormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    services: string[];
    urgency: string;
    date: string;
    notes: string;
}

interface FormErrors {
    [key: string]: string;
}

export default function QuoteForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "", email: "", phone: "", address: "",
        services: [], urgency: "", date: "", notes: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [showToast, setShowToast] = useState(false);

    const validate = (): boolean => {
        const e: FormErrors = {};
        if (!formData.name.trim()) e.name = "Name is required";
        if (!formData.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Invalid email";
        if (!formData.phone.trim()) e.phone = "Phone is required";
        else if (!/^[\d\s\-().+]+$/.test(formData.phone)) e.phone = "Invalid phone";
        if (formData.services.length === 0) e.services = "Select at least one service";
        if (!formData.urgency) e.urgency = "Select urgency";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        if (!validate()) return;
        setShowToast(true);
        setFormData({ name: "", email: "", phone: "", address: "", services: [], urgency: "", date: "", notes: "" });
        setErrors({});
        setTimeout(() => setShowToast(false), 5000);
    };

    const toggleService = (s: string) =>
        setFormData((p) => ({ ...p, services: p.services.includes(s) ? p.services.filter((x) => x !== s) : [...p.services, s] }));

    const ic = (field: string) =>
        cn("w-full px-4 py-3 rounded-xl border font-body text-sm text-navy bg-white transition-all duration-200 placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky",
            errors[field] ? "border-red-300 bg-red-50/50" : "border-cream");

    return (
        <section id="quote" className="py-24 sm:py-32 bg-white relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <SectionReveal direction="left">
                        <div className="lg:sticky lg:top-32">
                            <span className="inline-block px-4 py-1.5 text-sm font-body font-medium text-sky bg-sky/10 rounded-full mb-4">Get a Quote</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy tracking-tight mb-4">
                                Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-teal">Started?</span>
                            </h2>
                            <p className="text-lg font-body text-warm-gray mb-8">
                                Fill out the form and we&apos;ll get back to you within 15 minutes. No obligation, no pressure.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { icon: "📞", title: "Call Us Anytime", info: "(555) 123-4567", sub: "24/7 Emergency Line" },
                                    { icon: "📧", title: "Email Us", info: "hello@proflowplumbing.com", sub: "We respond within 1 hour" },
                                    { icon: "📍", title: "Service Area", info: "Greater Metro Area", sub: "30-mile radius from downtown" },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky/10 to-teal/10 flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                                        <div>
                                            <div className="text-sm font-heading font-bold text-navy">{item.title}</div>
                                            <div className="text-sm font-body text-sky font-medium">{item.info}</div>
                                            <div className="text-xs font-body text-warm-gray">{item.sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SectionReveal>

                    <SectionReveal direction="right">
                        <form onSubmit={handleSubmit} className="bg-off-white rounded-3xl p-8 sm:p-10 border border-cream shadow-sm" noValidate>
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-body font-medium text-navy mb-1.5">Full Name *</label>
                                    <input id="name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={ic("name")} placeholder="John Smith" />
                                    {errors.name && <p className="text-xs text-red-500 mt-1 font-body">{errors.name}</p>}
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-body font-medium text-navy mb-1.5">Email *</label>
                                        <input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={ic("email")} placeholder="john@example.com" />
                                        {errors.email && <p className="text-xs text-red-500 mt-1 font-body">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-body font-medium text-navy mb-1.5">Phone *</label>
                                        <input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={ic("phone")} placeholder="(555) 123-4567" />
                                        {errors.phone && <p className="text-xs text-red-500 mt-1 font-body">{errors.phone}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="address" className="block text-sm font-body font-medium text-navy mb-1.5">Service Address</label>
                                    <input id="address" type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className={ic("address")} placeholder="123 Main St, Anytown USA" />
                                </div>
                                <div>
                                    <label className="block text-sm font-body font-medium text-navy mb-2">Service Needed *</label>
                                    <div className="flex flex-wrap gap-2">
                                        {serviceOptions.map((s) => (
                                            <button key={s} type="button" onClick={() => toggleService(s)}
                                                className={cn("px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200",
                                                    formData.services.includes(s) ? "bg-gradient-to-r from-sky to-teal text-white shadow-sm" : "bg-white text-navy/70 border border-cream hover:border-sky/30 hover:text-sky")}>
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                    {errors.services && <p className="text-xs text-red-500 mt-1 font-body">{errors.services}</p>}
                                </div>
                                <div>
                                    <label htmlFor="urgency" className="block text-sm font-body font-medium text-navy mb-1.5">Urgency *</label>
                                    <select id="urgency" value={formData.urgency} onChange={(e) => setFormData({ ...formData, urgency: e.target.value })} className={cn(ic("urgency"), "appearance-none")}>
                                        <option value="">Select urgency level...</option>
                                        {urgencyOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                                    </select>
                                    {errors.urgency && <p className="text-xs text-red-500 mt-1 font-body">{errors.urgency}</p>}
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-body font-medium text-navy mb-1.5">Preferred Date</label>
                                    <input id="date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className={ic("date")} />
                                </div>
                                <div>
                                    <label htmlFor="notes" className="block text-sm font-body font-medium text-navy mb-1.5">Additional Notes</label>
                                    <textarea id="notes" rows={4} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className={cn(ic("notes"), "resize-none")} placeholder="Tell us about your issue..." />
                                </div>
                                <button type="submit" className="w-full py-4 px-6 font-body font-semibold text-base text-white rounded-2xl bg-gradient-to-r from-sky via-teal to-emerald shadow-lg shadow-sky/25 hover:shadow-sky/40 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200">
                                    Request Free Quote
                                </button>
                                <p className="text-xs text-center font-body text-warm-gray">We&apos;ll call you within 15 minutes. Your info is secure and never shared.</p>
                            </div>
                        </form>
                    </SectionReveal>
                </div>
            </div>

            <AnimatePresence>
                {showToast && (
                    <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.95 }} className="fixed bottom-6 right-6 z-50 max-w-sm">
                        <div className="bg-white rounded-2xl shadow-2xl border border-cream p-6 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-heading font-bold text-navy">Quote Request Received!</h4>
                                <p className="text-xs font-body text-warm-gray mt-1">Thank you! We&apos;ll call you within 15 minutes.</p>
                            </div>
                            <button onClick={() => setShowToast(false)} className="text-warm-gray hover:text-navy transition-colors" aria-label="Close notification">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
