export interface Testimonial {
    id: number;
    name: string;
    location: string;
    rating: number;
    quote: string;
    service: string;
    initials: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Mitchell",
        location: "Oakwood Heights",
        rating: 5,
        quote:
            "ProFlow saved us during a midnight pipe burst. They arrived in 25 minutes and had everything fixed before sunrise. Truly exceptional emergency service — I can't recommend them enough.",
        service: "Emergency Leak Repair",
        initials: "SM",
    },
    {
        id: 2,
        name: "James & Linda Park",
        location: "Riverside Estates",
        rating: 5,
        quote:
            "Our bathroom renovation turned out absolutely stunning. The ProFlow team was professional, tidy, and finished ahead of schedule. The attention to detail was remarkable.",
        service: "Bathroom Renovation",
        initials: "JP",
    },
    {
        id: 3,
        name: "Michael Torres",
        location: "Cedar Grove",
        rating: 5,
        quote:
            "Transparent pricing, no hidden fees, and the work was top-notch. They installed our tankless water heater and the energy savings have been incredible. Best plumber we've ever hired.",
        service: "Water Heater Install",
        initials: "MT",
    },
    {
        id: 4,
        name: "Emily Rodriguez",
        location: "Maple Hills",
        rating: 5,
        quote:
            "I've been on the Premium plan for a year now and it's been worth every penny. Regular inspections caught a small issue before it became a big problem. Peace of mind is priceless.",
        service: "Premium Package",
        initials: "ER",
    },
    {
        id: 5,
        name: "David & Rachel Kim",
        location: "Birchwood Commons",
        rating: 5,
        quote:
            "From the initial quote to final cleanup, ProFlow was incredible. They re-plumbed our entire kitchen during a renovation and it was seamless. True professionals.",
        service: "Kitchen Plumbing",
        initials: "DK",
    },
    {
        id: 6,
        name: "Patricia Hoffman",
        location: "Sunset Valley",
        rating: 5,
        quote:
            "Their camera inspection found a root intrusion in our sewer line that two other companies missed. Fixed it with minimal disruption to our yard. Honest, skilled, and fairly priced.",
        service: "Drain & Sewer Cleaning",
        initials: "PH",
    },
];
