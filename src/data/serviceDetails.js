const baseImages = [
    "/assets/images/Photos/EVENTS/DSC00355.jpg",
    "/assets/images/Photos/EVENTS/DSC00352.jpg",
    "/assets/images/Photos/EVENTS/DSC00335.jpg",
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

const videoPhotoTiers = [
    {
        title: "Run & Gun",
        copy:
            "A fast, efficient shoot focused on capturing raw energy and moments without heavy setup or overplanning.",
        details:
            "Camera: Sony A7iii / A7iv\nEditing: Standard editing and processing included\nTurnaround: Up to 1 week\nCrew Size: 1–3 people",
        info: [
            "1 hour shoot",
            "Outdoor or location of the client’s choice",
            "Minimal setup, quick execution",
            "Best for street visuals, quick content, simple concepts",
        ],
        extras: ["On-location setup", "Single-camera coverage", "1 round of notes"],
        policy: ["50% deposit to book", "1 revision included", "Delivery in 3 days"],
        stripeLink: "",
    },
    {
        title: "Standard",
        copy:
            "A balanced shoot with enough time to properly explore ideas while keeping production clean and straightforward.",
        details:
            "Camera: Sony A7iii / A7iv\nEditing: Standard editing and processing included\nTurnaround: Up to 1 week\nCrew Size: 1–3 people",
        info: [
            "3 hour shoot",
            "Location chosen by the client",
            "Efficient setup with creative flexibility",
            "Best for music videos, promo content, social visuals",
        ],
        extras: ["Basic edit pass", "Simple colour balance", "1 round of notes"],
        policy: ["50% deposit to book", "1 revision included", "Delivery in 7 days"],
        stripeLink: "",
    },
    {
        title: "Advanced",
        copy:
            "A more involved production with creative input, location support, and expanded lighting for cinematic results.",
        details:
            "Camera: Sony A7iv / FX3 / Blackmagic Pocket Cinema Camera\nEditing: Standard editing and processing included\nTurnaround: Up to 2 weeks\nCrew Size: 1–3 people",
        info: [
            "5 hour shoot",
            "Location finding included",
            "Wider range of lighting equipment",
            "Suitable for studio-style shots, blackout setups, night shoots, car movement shots",
            "Creative direction discussed on call",
        ],
        extras: ["Storyboard outline", "Location scouting", "2 rounds of notes"],
        policy: ["50% deposit to book", "2 revisions included", "Delivery in 14 days"],
        stripeLink: "",
    },
    {
        title: "Professional",
        copy:
            "High-level production focused on image quality, detail, and presentation without moving into full commercial-scale crews.",
        details:
            "Camera: Sony A7iv / FX3 / Blackmagic Pocket Cinema Camera\nEditing: Enhanced standard editing and processing included\nTurnaround: Up to 2 weeks\nCrew Size: 1–3 people",
        info: [
            "8 hour shoot",
            "Advanced lighting setups",
            "Behind-the-scenes footage included",
            "Higher colour depth and image quality",
            "Multiple locations and setups available",
            "Best for: High-quality music videos, YouTube productions, and small-scale adverts.",
            "Ideal for creators and artists working on major releases.",
        ],
        extras: ["Treatment deck", "Multiple setups", "3 rounds of notes"],
        policy: ["60% deposit to book", "3 revisions included", "Delivery in 21 days"],
        stripeLink: "",
    },
    {
        title: "Industry Standard",
        copy:
            "Full-scale production designed for labels, brands, and companies requiring commercial-ready output.",
        details:
            "Camera: Film cameras / FX3–FX6\nSound: Boom mics, field mics\nEditing: Professional editing and processing included\nTurnaround: Up to 1 month\nCrew Size: 3+ people",
        info: [
            "8 hour shoot",
            "Small professional crew",
            "Director, editor, and supporting crew",
            "Professional lighting and on-set audio capture",
            "Built for adverts, campaigns, and brand-led projects",
        ],
        extras: ["Brand strategy", "Multi-location shoots", "Dedicated producer"],
        policy: ["60% deposit to book", "4 revisions included", "Delivery in 28 days"],
        stripeLink: "",
    },
];

const studioTiers = [
    {
        title: "Standard",
        copy:
            "Essential studio access with professional mixing and mastering for clean, release-ready results.",
        details:
            "Recording Environment: Basic studio setup\nMixing & Mastering: Included (project-dependent)\nRevisions: Up to 3 mix revisions\nAudio Quality: Dependent on studio environment\nOutput: WAV or MP3 (WAV ADVISED)",
        info: [
            "Basic studio access",
            "Recording, mixing, and mastering included",
            "Suitable for simple projects and quick turnarounds",
            "Treatment discussion required to define scope and goals",
        ],
        extras: ["Basic edit pass", "Simple colour balance", "1 round of notes"],
        policy: ["50% deposit to book", "1 revision included", "Delivery in 7 days"],
        stripeLink: "",
    },
    {
        title: "Advanced",
        copy:
            "A more controlled and detailed production environment designed for higher-quality recordings and mixes.",
        details:
            "Recording Environment: Acoustically treated studio\nMixing & Mastering: Included (detailed approach)\nRevisions: Up to 3 mix revisions\nAudio Quality: Higher accuracy and consistency\nOutput: WAV or MP3 (WAV ADVISED)",
        info: [
            "Recording in an acoustically measured and treated environment",
            "Longer sessions and more detailed production approach",
            "Higher-quality microphones, headphones, and monitoring",
            "Designed for artists seeking cleaner, more accurate sound",
        ],
        extras: ["Storyboard outline", "Location scouting", "2 rounds of notes"],
        policy: ["50% deposit to book", "2 revisions included", "Delivery in 14 days"],
        stripeLink: "",
    },
    {
        title: "Professional",
        copy:
            "Industry-level production with advanced tools, precision mixing, and professional-grade sound.",
        details:
            "Recording Environment: Industry-standard studio\nEquipment: Industry microphones, professional speakers\nMixing & Mastering: Included (high-detail workflow)\nRevisions: Up to 3 mix revisions\nCalibration: Optimised for multiple listening environments\nOutput: WAV or MP3 (WAV ADVISED)",
        info: [
            "Recording in an industry-standard studio",
            "Detailed mixing and mastering process",
            "Designed for serious releases, projects, and professional artists",
        ],
        extras: ["Treatment deck", "Multiple setups", "3 rounds of notes"],
        policy: ["60% deposit to book", "3 revisions included", "Delivery in 21 days"],
        stripeLink: "",
    },
    {
        title: "Industry Standard",
        copy:
            "Top-tier audio production built for labels, commercial releases, and high-level projects.",
        details:
            "Recording Environment: Industry-standard studio\nEquipment: Industry microphones, professional speakers, analogue outboard gear\nMixing & Mastering: Full stem mixing and mastering, precision calibration for multiple playback systems\nRevisions: Up to 3 mix revisions\nAudio Quality: Maximum consistency across platforms\nOutput: WAV or MP3 (WAV ADVISED)",
        info: [
            "Full industry-standard recording and production workflow",
            "Designed for commercial, label, and large-scale projects",
            "Highest level of control, clarity, and translation",
        ],
        extras: ["Brand strategy", "Multi-location shoots", "Dedicated producer"],
        policy: ["60% deposit to book", "4 revisions included", "Delivery in 28 days"],
        stripeLink: "",
    },
];

const bundlesTiers = [
    {
        title: "Standard",
        copy:
            "A flexible entry-level package combining core creative services with a structured planning process.",
        details:
            "Service Scope: Combination of creative services agreed on call\nScope Defined: Via treatment and invoice\nProcess: Planning call required after booking\nExecution: Based on agreed aims and outcomes\nRevisions: Up to 3 revisions (where applicable)\nOutput: Project-based (varies by service and scope)",
        info: [
            "This package offers a basic combination of services, tailored to the project’s needs.",
            "It can cover audio, visual, photography, or mixed creative work, depending on what’s agreed during the call.",
            "The focus is on clarity, direction, and efficient execution.",
        ],
        extras: ["Treatment deck", "Multiple setups", "3 rounds of notes"],
        policy: ["60% deposit to book", "3 revisions included", "Delivery in 21 days"],
        stripeLink: "",
    },
    {
        title: "Advanced",
        copy:
            "A more detailed and controlled creative process with higher-quality environments and longer working time.",
        details:
            "Environment: Controlled and purpose-selected location\nServices: Recording, mixing, mastering, or visual production (as agreed)\nRevisions: Up to 3 revisions\nStem Mixing: Included where applicable\nOutput: Multiple deliverables possible within the agreed scope",
        info: [
            "Designed for projects that require more attention, refinement, and technical control.",
            "Services may include recording, mixing, visuals, or other creative work, depending on the project plan.",
        ],
        extras: ["Storyboard outline", "Location scouting", "2 rounds of notes"],
        policy: ["50% deposit to book", "2 revisions included", "Delivery in 14 days"],
        stripeLink: "",
    },
    {
        title: "Professional",
        copy:
            "High-level creative production focused on quality, detail, and consistency across platforms.",
        details:
            "Environment: Industry-standard setup\nEquipment: Professional microphones, cameras, monitoring, or lighting (project-dependent)\nServices: Detailed production, mixing, mastering, or visual execution\nRevisions: Up to 3 revisions\nCalibration: Optimised for multiple listening or viewing environments\nOutput: Multiple deliverables within the agreed scope",
        info: [
            "Built for serious releases, campaigns, and projects requiring professional-grade execution and refinement.",
        ],
        extras: ["Treatment deck", "Multiple setups", "3 rounds of notes"],
        policy: ["60% deposit to book", "3 revisions included", "Delivery in 21 days"],
        stripeLink: "",
    },
    {
        title: "Industry Standard",
        copy: "Top-tier production designed for labels, brands, and commercial projects.",
        details:
            "Environment: Industry-standard studios or locations\nEquipment: Industry microphones and cameras, professional speakers and lighting, analogue outboard gear (where applicable)\nServices: Full stem mixing and mastering (where relevant), advanced production and post-processing\nRevisions: Up to 3 revisions\nOutput: Project-based, scalable delivery",
        info: [
            "A full professional workflow using industry-standard facilities, teams, and equipment, built for high-impact releases and campaigns.",
        ],
        extras: ["Brand strategy", "Multi-location shoots", "Dedicated producer"],
        policy: ["60% deposit to book", "4 revisions included", "Delivery in 28 days"],
        stripeLink: "",
    },
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
            extras: ["Basic edit pass", "Simple colour balance", "1 round of notes"],
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
    videography: {
        ...makeService(
            "Videography",
            "",
            "/Videography.html",
            "/ServicePackages-Videography.html"
        ),
        images: [
            "/assets/images/Photos/EVENTS/DSC00279.jpg",
            "/assets/images/Photos/EVENTS/DSC00215.jpg",
            "/assets/images/Photos/EVENTS/DSC00193.jpg",
            "/assets/images/Photos/EVENTS/DSC00308.jpg",
            "/assets/images/Photos/EVENTS/DSC00265.jpg",
        ],
    },
    bundles: {
        ...makeService(
            "Bundles & Packages",
            "Cinematic video services for releases, campaigns, and live moments.",
            "/Videography.html",
            "/ServicePackages-Bundles.html"
        ),
        images: [
            "/assets/images/Photos/STUDIO/DSC05246.JPG",
            "/assets/images/Photos/STUDIO/DSC05133.JPG",
            "/assets/images/Photos/STUDIO/DSC05372-2.JPG",
            "/assets/images/Photos/STUDIO/DSC05298-2.JPG",
            "/assets/images/Photos/STUDIO/DSC05311.JPG",
        ],
    },
    photography: {
        ...makeService(
            "Photography",
            "Portrait, promo, and campaign stills with studio‑grade polish.",
            "/Photography.html",
            "/ServicePackages-Photography.html"
        ),
        images: [
            "/assets/images/Photos/SHOOTS/DSC00636.jpg",
            "/assets/images/Photos/SHOOTS/DSC00517.jpg",
            "/assets/images/Photos/SHOOTS/DSC00367.jpg",
            "/assets/images/Photos/SHOOTS/DSC09425.jpg",
            "/assets/images/Photos/SHOOTS/DSC09411.jpg",
            "/assets/images/Photos/SHOOTS/DSC09492.jpg",
        ],
    },
    studio: {
        ...makeService(
            "Studio",
            "Book studio space with lighting, crew, and set support.",
            "/Studio.html",
            "/ServicePackages-Studio.html"
        ),
        images: [
            "/assets/images/Photos/STUDIO/DSC00396.jpg",
            "/assets/images/Photos/STUDIO/DSC00424.jpg",
            "/assets/images/Photos/STUDIO/DSC00428-2.jpg",
            "/assets/images/Photos/STUDIO/DSC00408.jpg",
        ],
    },
    promotion: makeService(
        "Project Campaign*",
        "Targeted Project Campaigns built for business growth and brand development.",
        "/Promotion.html",
        "/ServicePackages-Promotion.html"
    ),
    campaign: {
        ...makeService(
            "Campaign Development",
            "Targeted creative and distribution for measurable growth.",
            "/CampaignDevelopment.html",
            "/ServicePackages-CampaignDevelopment.html"
        ),
        images: [
            "/assets/images/Photos/EVENTS/DSC09268.jpg",
            ...baseImages,
        ],
    },
    digitalcourse: makeService(
        "Digital Course",
        "Learn the workflow behind a full ProjectTitle production.",
        "/DigitalCourse.html",
        "/ServicePackages-DigitalCourse.html"
    ),
};

serviceDetails.videography.tiers = videoPhotoTiers;
serviceDetails.photography.tiers = videoPhotoTiers;
serviceDetails.studio.tiers = studioTiers;
serviceDetails.bundles.tiers = bundlesTiers;

serviceDetails.promotion.tiers = [
    {
        title: "Campaign Packaging",
        copy:
            "A 6-week, strategy-led campaign designed to grow personal or brand presence through planned contain",
        details:
            "This package includes social media management, content creation, and guerrilla and SEO marketing, all designed to strengthen brand PR and support the growth of your personal or brand community.",
        info: [
            "What’s Included:",
            "Social programming and content planning",
            "Persona and brand representation development",
            "Camera team if required",
            "Audio, photography, and visual services (project-dependent)",
            "Guerrilla marketing and alternative outreach methods",
        ],
        extras: ["Release strategy", "Content calendar", "2 rounds of notes"],
        policy: ["50% deposit to book", "2 revisions included", "Delivery in 21 days"],
        stripeLink: "",
    },
];

serviceDetails.promotion.images = [
    "/assets/images/Photos/EVENTS/DSC09268.jpg",
    ...serviceDetails.promotion.images,
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

const setTierPrices = (service, prices) => {
    if (!service?.tiers) return;
    service.tiers.forEach((tier) => {
        const price = prices[tier.title];
        if (price) tier.price = price;
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

setTierPrices(serviceDetails.videography, {
    "Industry Standard": "£1,200",
    Professional: "£850",
    Advanced: "£550",
    Standard: "£350",
    "Run & Gun": "£200",
});

setTierPrices(serviceDetails.photography, {
    "Industry Standard": "£1,200",
    Professional: "£850",
    Advanced: "£550",
    Standard: "£350",
    "Run & Gun": "£200",
});

setTierPrices(serviceDetails.studio, {
    "Industry Standard": "£1,200",
    Professional: "£850",
    Advanced: "£550",
    Standard: "£200",
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
        "https://projecttitle.simplybook.it/v2/#book/category/12/service/56/count/1/",
    Professional:
        "https://projecttitle.simplybook.it/v2/#book/category/12/service/57/count/1/",
    "Industry Standard":
        "https://projecttitle.simplybook.it/v2/#book/category/12/service/58/count/1/",
});

setTierPrices(serviceDetails.bundles, {
    "Industry Standard": "£1,200",
    Professional: "£850",
    Advanced: "£550",
    Standard: "£350",
});

setSimplybookLinks(serviceDetails.promotion, {
    "Campaign Packaging":
        "https://projecttitle.simplybook.it/v2/#book/category/11/count/1/",
});

setTierPrices(serviceDetails.promotion, {
    "Campaign Packaging": "£550",
});
