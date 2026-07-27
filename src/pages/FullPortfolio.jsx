import React, { useEffect, useMemo, useState, useRef } from "react";
import { portfolioItems } from "../data/portfolio.js";
import { allGalleryImages, galleryCollections } from "../data/galleryCollections.js";

const galleryImages = [
    "/assets/images/Photos/EVENTS/DSC00315.jpg",
    "/assets/images/Photos/EVENTS/DSC00279.jpg",
    "/assets/images/Photos/EVENTS/DSC00322.jpg",
    "/assets/images/Photos/EVENTS/DSC00335.jpg",
    "/assets/images/Photos/EVENTS/DSC00323.jpg",
    "/assets/images/Photos/EVENTS/DSC00309.jpg",
    "/assets/images/Photos/EVENTS/DSC00306.jpg",
    "/assets/images/Photos/EVENTS/DSC00303.jpg",
    "/assets/images/Photos/EVENTS/DSC00285.jpg",
    "/assets/images/Photos/EVENTS/DSC00272.jpg",
    "/assets/images/Photos/EVENTS/DSC00263.jpg",
    "/assets/images/Photos/EVENTS/DSC00245.jpg",
    "/assets/images/Photos/EVENTS/DSC00241.jpg",
    "/assets/images/Photos/EVENTS/DSC00226.jpg",
    "/assets/images/Photos/EVENTS/DSC00216.jpg",
    "/assets/images/Photos/EVENTS/DSC00204.jpg",
    "/assets/images/Photos/EVENTS/DSC00197.jpg",
    "/assets/images/Photos/EVENTS/DSC00184-2.jpg",
    "/assets/images/Photos/EVENTS/DSC00187.jpg",
    "/assets/images/Photos/EVENTS/DSC00167.jpg",
    "/assets/images/Photos/EVENTS/DSC00165.jpg",
    "/assets/images/Photos/EVENTS/DSC00151.jpg",
    "/assets/images/Photos/EVENTS/DSC00147.jpg",
];

const tileClasses = [
    "full-portfolio-tile--a",
    "full-portfolio-tile--b",
    "full-portfolio-tile--c",
    "full-portfolio-tile--d",
    "full-portfolio-tile--e",
    "full-portfolio-tile--f",
    "full-portfolio-tile--h",
];

const getPhotoGroupName = (image = "") => {
    if (!image.includes("OHMIEN-8OH8-POPUP-SHOTBYAZA") && !image.includes("OHMIEN-8OH8-SHOT-BY-GABRIELLL")) {
        return null;
    }

    const fileName = image.split("/").pop() || "";
    const withoutIndex = fileName.replace(/^\d+-/, "");
    const match = withoutIndex.match(/^(.+?)-(?:DSC|IMG)/i);
    if (!match) return null;

    return match[1].replace(/-/g, " ");
};

const FullPortfolio = ({
    titleText = "Gallery",
    subtitleText = 'Every story starts with a "ProjectTitle"',
    images = galleryImages,
    showCollections = true,
}) => {
    const tiles = useMemo(
        () =>
            (Array.isArray(images) && images.length ? images : allGalleryImages).map((image, index) => ({
                image,
                className: tileClasses[index % tileClasses.length],
            })),
        [images]
    );
    const [activeIndex, setActiveIndex] = useState(null);
    const touchStart = useRef(null);
    const groupedTiles = useMemo(() => {
        const groups = [];
        const groupMap = new Map();

        tiles.forEach((tile, index) => {
            const name = getPhotoGroupName(tile.image);
            if (!name) return;

            if (!groupMap.has(name)) {
                const group = { name, items: [] };
                groupMap.set(name, group);
                groups.push(group);
            }

            groupMap.get(name).items.push({ ...tile, index });
        });

        return groups.length > 1 ? groups : null;
    }, [tiles]);

    const openAt = (index) => setActiveIndex(index);
    const close = () => setActiveIndex(null);
    const hasActive = activeIndex !== null;
    const activeImage = hasActive ? tiles[activeIndex]?.image : null;
    const next = () => {
        if (!hasActive) return;
        setActiveIndex((prev) => (prev + 1) % tiles.length);
    };
    const prev = () => {
        if (!hasActive) return;
        setActiveIndex((prev) => (prev - 1 + tiles.length) % tiles.length);
    };

    useEffect(() => {
        if (!hasActive) return;
        const onKeyDown = (event) => {
            if (event.key === "Escape") close();
            if (event.key === "ArrowRight") next();
            if (event.key === "ArrowLeft") prev();
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [hasActive]);

    const onTouchStart = (event) => {
        touchStart.current = event.touches[0].clientX;
    };

    const onTouchEnd = (event) => {
        if (touchStart.current === null) return;
        const delta = event.changedTouches[0].clientX - touchStart.current;
        touchStart.current = null;
        if (Math.abs(delta) < 40) return;
        if (delta < 0) next();
        else prev();
    };

    return (
        <section className="full-portfolio">
            <div className="full-portfolio-panel">
                <div className="full-portfolio-intro back-anchor">
                    <a className="service-detail-back" href="/#hero">
                        ← &nbsp;Back
                    </a>
                    <h3 className="full-portfolio-title reveal-up tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[85px] max-lg:tw-text-4xl max-md:tw-leading-snug">
                    {titleText}
                </h3>
                    <div className="full-portfolio-subtitle">
                        {subtitleText}
                        <br />
                        Let's find yours.
                    </div>
                    {showCollections ? (
                        <p className="gallery-subpage-count">
                            {galleryCollections.length} photo packs
                        </p>
                    ) : (
                        <a className="gallery-subpage-back" href="/Gallery.html">
                            ← All Galleries
                        </a>
                    )}
                    <div className="full-portfolio-socials full-portfolio-socials--title">
                        <a
                            href="/facebook.html"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/projecttitle/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a
                            href="https://x.com/ItsProjectTitle"
                            aria-label="X"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a
                            href="https://www.tiktok.com/@projecttitle"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-tiktok"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/@ProjectTitle"
                            aria-label="YouTube"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                    <p className="service-packages-cta-subtitle reveal-up">Recognise anyone?</p>
                </div>
                {showCollections ? (
                    <div className="gallery-collection-grid">
                        {galleryCollections.map((collection, index) => (
                            <a
                                key={collection.slug}
                                className="gallery-collection-card"
                                href={collection.href}
                            >
                                <div className="gallery-collection-media">
                                    {collection.images.slice(0, 4).map((image) => (
                                        <img
                                            key={image}
                                            src={image}
                                            alt=""
                                            loading={index > 1 ? "lazy" : "eager"}
                                        />
                                    ))}
                                </div>
                                <div className="gallery-collection-overlay">
                                    <span>Pack {String(index + 1).padStart(2, "0")}</span>
                                    <h4>{collection.title}</h4>
                                    <p>{collection.subtitle}</p>
                                    <strong>{collection.images.length} photos</strong>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : groupedTiles ? (
                    <div className="gallery-folder-groups">
                        {groupedTiles.map((group) => (
                            <section className="gallery-folder-group" key={group.name}>
                                <div className="gallery-folder-heading">
                                    <h4>{group.name}</h4>
                                    <span>{group.items.length} photos</span>
                                </div>
                                <div className="full-portfolio-grid">
                                    {group.items.map((item) => (
                                        <article
                                            className={`full-portfolio-card ${item.className}`}
                                            key={`full-portfolio-${item.index}`}
                                        >
                                            <button
                                                type="button"
                                                className="full-portfolio-photo portfolio-mosaic-card portfolio-mosaic-card--plain"
                                                onClick={() => openAt(item.index)}
                                                aria-label="Open photo"
                                            >
                                                <div className="portfolio-mosaic-plain-media">
                                                    <img src={item.image} alt="Gallery item" />
                                                </div>
                                            </button>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                ) : (
                    <>
                    <div className="full-portfolio-main">
                    {tiles[0] ? (
                    <button
                        type="button"
                        className="full-portfolio-photo full-portfolio-photo--main portfolio-mosaic-card portfolio-mosaic-card--plain"
                        onClick={() => openAt(0)}
                        aria-label="Open photo"
                    >
                            <div className="portfolio-mosaic-plain-media">
                                <img
                                    src={tiles[0].image}
                                    alt="Gallery item"
                                />
                            </div>
                        </button>
                    ) : null}
                    </div>
                    <div className="full-portfolio-grid">
                        {tiles.slice(1).map((item, index) => (
                            <article
                                className={`full-portfolio-card ${item.className}`}
                                key={`full-portfolio-${index + 1}`}
                            >
                                <button
                                    type="button"
                                    className="full-portfolio-photo portfolio-mosaic-card portfolio-mosaic-card--plain"
                                    onClick={() => openAt(index + 1)}
                                    aria-label="Open photo"
                                >
                                    <div className="portfolio-mosaic-plain-media">
                                        <img src={item.image} alt="Gallery item" />
                                    </div>
                                </button>
                            </article>
                        ))}
                    </div>
                    </>
                )}
                <div className="full-portfolio-footer-text reveal-up" />
            </div>
            {activeImage ? (
                <div
                    className="full-portfolio-lightbox"
                    onClick={close}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                    role="button"
                    tabIndex={0}
                >
                    <button
                        type="button"
                        className="full-portfolio-nav full-portfolio-nav--prev"
                        onClick={(event) => {
                            event.stopPropagation();
                            prev();
                        }}
                        aria-label="Previous photo"
                    >
                        ‹
                    </button>
                    <div className="full-portfolio-lightbox-frame">
                        <img src={activeImage} alt="Full screen" />
                    </div>
                    <button
                        type="button"
                        className="full-portfolio-nav full-portfolio-nav--next"
                        onClick={(event) => {
                            event.stopPropagation();
                            next();
                        }}
                        aria-label="Next photo"
                    >
                        ›
                    </button>
                </div>
            ) : null}
        </section>
    );
};

export default FullPortfolio;
