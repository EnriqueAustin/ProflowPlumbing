export interface Service {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: string;
    image: string;
    quickFacts: string[];
    icon: string;
}

export const services: Service[] = [
    {
        id: 1,
        name: "Emergency Leak Repair",
        slug: "emergency-leak-repair",
        description:
            "Fast, reliable response to burst pipes, leaks, and flooding — 24/7, 365 days a year.",
        price: "Starting at $149",
        image:
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=900&fit=crop",
        quickFacts: [
            "30-minute response time",
            "24/7 availability",
            "Damage assessment included",
        ],
        icon: "🚨",
    },
    {
        id: 2,
        name: "Bathroom Renovation",
        slug: "bathroom-renovation",
        description:
            "Complete bathroom plumbing for remodels — fixtures, drains, showers, tubs, and vanities.",
        price: "Starting at $899",
        image:
            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=900&fit=crop",
        quickFacts: [
            "Free design consultation",
            "Licensed installers",
            "2-year warranty",
        ],
        icon: "🚿",
    },
    {
        id: 3,
        name: "Kitchen Plumbing",
        slug: "kitchen-plumbing",
        description:
            "Sink installations, faucet upgrades, garbage disposals, and dishwasher hookups.",
        price: "Starting at $249",
        image:
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=900&fit=crop",
        quickFacts: [
            "Same-day service",
            "Top-brand fixtures",
            "Clean job guaranteed",
        ],
        icon: "🍳",
    },
    {
        id: 4,
        name: "Water Heater Install",
        slug: "water-heater-install",
        description:
            "Tank and tankless water heater installation, replacement, and maintenance.",
        price: "Starting at $599",
        image:
            "https://images.unsplash.com/photo-1585128792020-803d29415281?w=1200&h=900&fit=crop",
        quickFacts: [
            "Energy-efficient models",
            "Same-day install available",
            "10-year warranty options",
        ],
        icon: "🔥",
    },
    {
        id: 5,
        name: "Drain & Sewer Cleaning",
        slug: "drain-sewer-cleaning",
        description:
            "Professional drain clearing, hydro-jetting, and sewer line inspection with camera technology.",
        price: "Starting at $199",
        image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=900&fit=crop",
        quickFacts: [
            "Video camera inspection",
            "No-dig technology",
            "Preventive maintenance plans",
        ],
        icon: "🔧",
    },
    {
        id: 6,
        name: "Pipe Leak Detection",
        slug: "pipe-leak-detection",
        description:
            "Non-invasive electronic leak detection for hidden pipe leaks in walls, floors, and slabs.",
        price: "Starting at $179",
        image:
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=900&fit=crop",
        quickFacts: [
            "Non-destructive methods",
            "Precision pinpointing",
            "Detailed report included",
        ],
        icon: "🔍",
    },
];
