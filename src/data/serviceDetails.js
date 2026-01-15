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

const makeService = (title, summary, detailHref, packagesHref) => ({
    title,
    summary,
    detailHref,
    packagesHref,
    images: baseImages,
    tiers: [
        {
            title: "Standard",
            copy: "Lean setup for quick turnarounds and tight budgets.",
            details:
                "Lightweight production focused on essentials, ideal for fast delivery and minimal crew.",
            info: ["Turnaround: 1 week", "Crew size: 2–3", "Deliverables: 1 final edit"],
            extras: ["Basic edit pass", "Simple color balance", "1 round of notes"],
            policy: ["50% deposit to book", "1 revision included", "Delivery in 7 days"],
            stripeLink: "",
        },
        {
            title: "Advanced",
            copy: "Balanced package with creative direction and polish.",
            details:
                "Creative direction plus full production support, built for high‑quality releases.",
            info: ["Turnaround: 2 weeks", "Crew size: 3–5", "Deliverables: 1 main + socials"],
            extras: ["Storyboard outline", "Location scouting", "2 rounds of notes"],
            policy: ["50% deposit to book", "2 revisions included", "Delivery in 14 days"],
            stripeLink: "",
        },
        {
            title: "Professional",
            copy: "Full‑scale production built for premium campaigns.",
            details:
                "Full‑scale package with elevated visuals, expanded crew, and full rollout assets.",
            info: ["Turnaround: 3 weeks", "Crew size: 6+", "Deliverables: full edit + cutdowns"],
            extras: ["Treatment deck", "Multiple setups", "3 rounds of notes"],
            policy: ["60% deposit to book", "3 revisions included", "Delivery in 21 days"],
            stripeLink: "",
        },
        {
            title: "Run & Gun",
            copy: "Fast capture for urgent shoots.",
            details:
                "Agile setup with lightweight kit, ideal for rapid turnaround and spontaneous coverage.",
            info: ["Turnaround: 3 days", "Crew size: 1–2", "Deliverables: 1 edit"],
            extras: ["On-location setup", "Single-camera coverage", "1 round of notes"],
            policy: ["50% deposit to book", "1 revision included", "Delivery in 3 days"],
            stripeLink: "",
        },
        {
            title: "Industry Standard",
            copy: "Premium output aligned with benchmarks.",
            details:
                "High-end production with strategic planning, polished visuals, and rollout support.",
            info: ["Turnaround: 4 weeks", "Crew size: 8+", "Deliverables: full campaign suite"],
            extras: ["Brand strategy", "Multi-location shoots", "Dedicated producer"],
            policy: ["60% deposit to book", "4 revisions included", "Delivery in 28 days"],
            stripeLink: "",
        },
    ],
});

export const serviceDetails = {
    videography: makeService(
        "Videography",
        "Cinematic video services for releases, campaigns, and live moments.",
        "/Videography.html",
        "/ServicePackages-Videography.html"
    ),
    bundles: makeService(
        "Bundles & Packages",
        "Cinematic video services for releases, campaigns, and live moments.",
        "/Videography.html",
        "/ServicePackages-Bundles.html"
    ),
    photography: makeService(
        "Photography",
        "Portrait, promo, and campaign stills with studio‑grade polish.",
        "/Photography.html",
        "/ServicePackages-Photography.html"
    ),
    studio: makeService(
        "Studio",
        "Book studio space with lighting, crew, and set support.",
        "/Studio.html",
        "/ServicePackages-Studio.html"
    ),
    promotion: makeService(
        "Promotion",
        "Rollout strategy and content support for launches.",
        "/Promotion.html",
        "/ServicePackages-Promotion.html"
    ),
    campaign: makeService(
        "Campaign Development",
        "Targeted creative and distribution for measurable growth.",
        "/CampaignDevelopment.html",
        "/ServicePackages-CampaignDevelopment.html"
    ),
    digitalcourse: makeService(
        "Digital Course",
        "Learn the workflow behind a full ProjectTitle production.",
        "/DigitalCourse.html",
        "/ServicePackages-DigitalCourse.html"
    ),
};

serviceDetails.promotion.tiers = [
    {
        title: "Campaign",
        copy: "Targeted promotion built for measurable growth.",
        details:
            "Campaign support with creative direction, rollout planning, and launch execution.",
        info: ["Turnaround: 3 weeks", "Crew size: 3–6", "Deliverables: campaign suite"],
        extras: ["Release strategy", "Content calendar", "2 rounds of notes"],
        policy: ["50% deposit to book", "2 revisions included", "Delivery in 21 days"],
        stripeLink: "",
    },
];

serviceDetails.studio.tiers = serviceDetails.studio.tiers.filter(
    (tier) => tier.title !== "Run & Gun"
);

serviceDetails.bundles.tiers = serviceDetails.bundles.tiers.filter(
    (tier) => tier.title !== "Run & Gun"
);

export const serviceKeys = Object.keys(serviceDetails);

const setSimplybookLinks = (service, links) => {
    if (!service?.tiers) return;
    service.tiers.forEach((tier) => {
        const link = links[tier.title];
        if (link) tier.simplybookLink = link;
    });
};

setSimplybookLinks(serviceDetails.videography, {
    "Run & Gun":
        "https://projecttitle.simplybook.it/v2/#book/category/1/service/48/count/1/",
    Standard:
        "https://projecttitle.simplybook.it/v2/#book/category/1/service/10/count/1/",
    Advanced:
        "https://projecttitle.simplybook.it/v2/#book/category/1/service/41/count/1/",
    Professional:
        "https://projecttitle.simplybook.it/v2/#book/category/1/service/42/count/1/",
    "Industry Standard":
        "https://projecttitle.simplybook.it/v2/#book/category/1/service/43/count/1/",
});

setSimplybookLinks(serviceDetails.photography, {
    "Run & Gun":
        "https://projecttitle.simplybook.it/v2/#book/category/9/service/49/count/1/",
    Standard:
        "https://projecttitle.simplybook.it/v2/#book/category/9/service/47/count/1/",
    Advanced:
        "https://projecttitle.simplybook.it/v2/#book/category/9/service/46/count/1/",
    Professional:
        "https://projecttitle.simplybook.it/v2/#book/category/9/service/45/count/1/",
    "Industry Standard":
        "https://projecttitle.simplybook.it/v2/#book/category/9/service/44/count/1/",
});

setSimplybookLinks(serviceDetails.studio, {
    Standard:
        "https://projecttitle.simplybook.it/v2/#book/category/10/service/50/count/1/",
    Advanced:
        "https://projecttitle.simplybook.it/v2/#book/category/10/service/51/count/1/",
    Professional:
        "https://projecttitle.simplybook.it/v2/#book/category/10/service/52/count/1/",
    "Industry Standard":
        "https://projecttitle.simplybook.it/v2/#book/category/10/service/53/count/1/",
});

setSimplybookLinks(serviceDetails.bundles, {
    Standard:
        "https://projecttitle.simplybook.it/v2/#book/category/12/service/55/count/1/",
    Advanced:
        "https://projecttitle.simplybook.it/v2/#book/category/12/service/57/count/1/",
    Professional:
        "https://projecttitle.simplybook.it/v2/#book/category/12/service/56/count/1/",
    "Industry Standard":
        "https://projecttitle.simplybook.it/v2/#book/category/12/service/58/count/1/",
});

setSimplybookLinks(serviceDetails.promotion, {
    Campaign: "https://projecttitle.simplybook.it/v2/#book/category/11/count/1/",
});
