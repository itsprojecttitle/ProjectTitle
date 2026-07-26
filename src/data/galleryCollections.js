export const galleryCollections = [
    {
        slug: "2024-photos",
        title: "2024 Gallery",
        href: "/Gallery-2024-Photos.html",
        subtitle: "ProjectTitle photo archive from 2024.",
        images: [
            "/assets/images/Photos/EVENTS/DSC00315.jpg",
            "/assets/images/Photos/EVENTS/DSC00279.jpg",
            "/assets/images/Photos/EVENTS/DSC00322.jpg",
            "/assets/images/Photos/EVENTS/DSC00335.jpg",
            "/assets/images/Photos/EVENTS/DSC00323.jpg",
            "/assets/images/Photos/EVENTS/DSC00309.jpg",
            "/assets/images/Photos/EVENTS/DSC00306.jpg",
            "/assets/images/Photos/EVENTS/DSC00303.jpg",
        ],
    },
    {
        slug: "8oh8",
        title: "8OH8 Gallery",
        href: "/Gallery-8OH8.html",
        subtitle: "8OH8 selections and event moments.",
        images: [
            "/assets/images/Photos/EVENTS/DSC09268.jpg",
            "/assets/images/Photos/EVENTS/DSC09283.jpg",
            "/assets/images/Photos/EVENTS/DSC09253.jpg",
            "/assets/images/Photos/EVENTS/DSC09250.jpg",
            "/assets/images/Photos/EVENTS/DSC09247.jpg",
            "/assets/images/Photos/EVENTS/DSC09226.jpg",
            "/assets/images/Photos/EVENTS/DSC09216.jpg",
            "/assets/images/Photos/EVENTS/DSC09207.jpg",
        ],
    },
    {
        slug: "events",
        title: "Events Gallery",
        href: "/Gallery-Events.html",
        subtitle: "Crowds, rooms, and live energy.",
        images: [
            "/assets/images/Photos/EVENTS/DSC00355.jpg",
            "/assets/images/Photos/EVENTS/DSC00352.jpg",
            "/assets/images/Photos/EVENTS/DSC00285.jpg",
            "/assets/images/Photos/EVENTS/DSC00272.jpg",
            "/assets/images/Photos/EVENTS/DSC00263.jpg",
            "/assets/images/Photos/EVENTS/DSC00245.jpg",
            "/assets/images/Photos/EVENTS/DSC00241.jpg",
            "/assets/images/Photos/EVENTS/DSC00226.jpg",
        ],
    },
    {
        slug: "studio",
        title: "Studio Gallery",
        href: "/Gallery-Studio.html",
        subtitle: "Studio portraits, sessions, and controlled-light work.",
        images: [
            "/assets/images/Photos/STUDIO/DSC05133.JPG",
            "/assets/images/Photos/STUDIO/DSC05246.JPG",
            "/assets/images/Photos/STUDIO/DSC05372-2.JPG",
            "/assets/images/Photos/STUDIO/DSC05298-2.JPG",
            "/assets/images/Photos/STUDIO/DSC05311.JPG",
            "/assets/images/Photos/STUDIO/DSC05159.JPG",
            "/assets/images/Photos/STUDIO/DSC00428-2.jpg",
            "/assets/images/Photos/STUDIO/DSC00424.jpg",
        ],
    },
    {
        slug: "shoots",
        title: "Shoots Gallery",
        href: "/Gallery-Shoots.html",
        subtitle: "Artist shoots and portrait-led sets.",
        images: [
            "/assets/images/Photos/SHOOTS/DSC09492.jpg",
            "/assets/images/Photos/SHOOTS/DSC09495.jpg",
            "/assets/images/Photos/SHOOTS/DSC09487.jpg",
            "/assets/images/Photos/SHOOTS/DSC09479.jpg",
            "/assets/images/Photos/SHOOTS/DSC09443.jpg",
            "/assets/images/Photos/SHOOTS/DSC09439.jpg",
            "/assets/images/Photos/SHOOTS/DSC09431.jpg",
            "/assets/images/Photos/SHOOTS/DSC09425.jpg",
        ],
    },
    {
        slug: "archive",
        title: "Archive Gallery",
        href: "/Gallery-Archive.html",
        subtitle: "Additional ProjectTitle stills and image tests.",
        images: [
            "/assets/images/Photos/EVENTS/DSC00197.jpg",
            "/assets/images/Photos/EVENTS/DSC00187.jpg",
            "/assets/images/Photos/EVENTS/DSC00184-2.jpg",
            "/assets/images/Photos/EVENTS/DSC00167.jpg",
            "/assets/images/Photos/EVENTS/DSC00165.jpg",
            "/assets/images/Photos/EVENTS/DSC00151.jpg",
            "/assets/images/Photos/EVENTS/DSC00147.jpg",
            "/assets/images/Photos/EVENTS/DSC00148.jpg",
        ],
    },
];

export const allGalleryImages = galleryCollections.flatMap((collection) => collection.images);

export function getGalleryCollectionByPath(pathname = "") {
    const cleanPath = String(pathname || "").toLowerCase();
    return galleryCollections.find((collection) =>
        cleanPath.includes(`gallery-${collection.slug.toLowerCase()}`)
    );
}
