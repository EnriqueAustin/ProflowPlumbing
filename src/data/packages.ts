export interface ServicePackage {
    id: number;
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    featured: boolean;
    cta: string;
}

export const packages: ServicePackage[] = [
    {
        id: 1,
        name: "Maintenance",
        price: "$29",
        period: "/month",
        description: "Essential coverage for your home plumbing — peace of mind, affordable price.",
        features: [
            "Annual plumbing inspection",
            "Priority scheduling",
            "10% off all repairs",
            "Drain cleaning (1x/year)",
            "Phone support (business hours)",
        ],
        featured: false,
        cta: "Get Started",
    },
    {
        id: 2,
        name: "Premium",
        price: "$59",
        period: "/month",
        description: "Our most popular plan — comprehensive protection and priority emergency service.",
        features: [
            "Bi-annual plumbing inspection",
            "Same-day emergency response",
            "20% off all repairs",
            "Drain cleaning (2x/year)",
            "Water heater flush (1x/year)",
            "24/7 phone support",
            "No overtime charges",
        ],
        featured: true,
        cta: "Choose Premium",
    },
    {
        id: 3,
        name: "Elite",
        price: "$99",
        period: "/month",
        description: "Total protection — unlimited service calls, full coverage, and VIP treatment.",
        features: [
            "Quarterly plumbing inspection",
            "Guaranteed 30-min response",
            "30% off all repairs",
            "Unlimited drain cleaning",
            "Water heater flush (2x/year)",
            "Pipe insulation check",
            "24/7 VIP support line",
            "No overtime charges",
            "Annual fixture upgrade credit ($200)",
        ],
        featured: false,
        cta: "Go Elite",
    },
];
