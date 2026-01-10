const baseImages = [
    "/assets/images/home/women.jpg",
    "/assets/images/home/wildlife.jpg",
    "/assets/images/home/solar.jpg",
];

const baseInfo = [
    "Turnaround: 1–3 weeks",
    "Crew size: 3–6",
    "Deliverables: Final edit + socials",
];

const baseExtras = [
    "Storyboarding & treatment",
    "Location scouting",
    "On‑set BTS coverage",
];

const makeService = (title, summary) => ({
    title,
    summary,
    images: baseImages,
    tiers: [
        {
            title: "Starter",
            copy: "Lean setup for quick turnarounds and tight budgets.",
            details:
                "Lightweight production focused on essentials, ideal for fast delivery and minimal crew.",
            info: ["Turnaround: 1 week", "Crew size: 2–3", "Deliverables: 1 final edit"],
            extras: ["Basic edit pass", "Simple color balance", "1 round of notes"],
            policy: ["50% deposit to book", "1 revision included", "Delivery in 7 days"],
        },
        {
            title: "Signature",
            copy: "Balanced package with creative direction and polish.",
            details:
                "Creative direction plus full production support, built for high‑quality releases.",
            info: ["Turnaround: 2 weeks", "Crew size: 3–5", "Deliverables: 1 main + socials"],
            extras: ["Storyboard outline", "Location scouting", "2 rounds of notes"],
            policy: ["50% deposit to book", "2 revisions included", "Delivery in 14 days"],
        },
        {
            title: "Elite",
            copy: "Full‑scale production built for premium campaigns.",
            details:
                "Full‑scale package with elevated visuals, expanded crew, and full rollout assets.",
            info: ["Turnaround: 3 weeks", "Crew size: 6+", "Deliverables: full edit + cutdowns"],
            extras: ["Treatment deck", "Multiple setups", "3 rounds of notes"],
            policy: ["60% deposit to book", "3 revisions included", "Delivery in 21 days"],
        },
    ],
});

export const serviceDetails = {
    videography: makeService(
        "Videography",
        "Cinematic video services for releases, campaigns, and live moments."
    ),
    photography: makeService(
        "Photography",
        "Portrait, promo, and campaign stills with studio‑grade polish."
    ),
    studio: makeService(
        "Studio",
        "Book studio space with lighting, crew, and set support."
    ),
    promotion: makeService(
        "Promotion",
        "Rollout strategy and content support for launches."
    ),
    campaign: makeService(
        "Campaign Development",
        "Targeted creative and distribution for measurable growth."
    ),
    digitalcourse: makeService(
        "Digital Course",
        "Learn the workflow behind a full ProjectTitle production."
    ),
};

export const serviceKeys = Object.keys(serviceDetails);
