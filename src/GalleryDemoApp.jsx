import React, { useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWidget from "./components/FloatingWidget.jsx";
import { initLinkTargets } from "./utils/linkTargets.js";
import { initScrollAnimations } from "./utils/scrollAnimations.js";
import { addScrollListener, getScrollTop } from "./utils/scrollRoot.js";

const currentGalleryImages = [
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

const projectGenesisImages = [
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01881.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01884.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01923.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01924.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01926.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01931.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01948.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01954.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01956.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01961(1).jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01961.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01966.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01968.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01969.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01970.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01971.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01972.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01973(1).jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01973.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01980.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC01981.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02008.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02010.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02013.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02019.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02022.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02024.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02030.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02031.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02041.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02045(1).jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02045.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02046.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02049.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02050.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02056.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02062.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02065(1).jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02065.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02066(1).jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02066.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02074.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02077.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02078.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02081.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02088.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02090(1).jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02090.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02097(1).jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02097.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02105.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02122(1).jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02122.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02126.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02131.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02139.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02142.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02154.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02160.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02170.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02171.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02201.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02205.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02210.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02216.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02222.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02230.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02254.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02261.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02263.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02265.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02269.jpeg",
    "/assets/images/Photos/PROJECTTITLE-GENESIS/DSC02270.jpeg",
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

const galleryPacks = [
    {
        id: "project-genesis",
        title: "ProjectTitle Genesis",
        eyebrow: "Pack 01",
        subtitle: "A new ProjectTitle photo story.",
        credits: ["Shot by @Shotbyyaz", "Modeled by @Westlaveer"],
        images: projectGenesisImages,
    },
    {
        id: "current",
        title: "2024 Gallery",
        eyebrow: "Pack 02",
        subtitle: "The existing gallery photos, kept as page two.",
        images: currentGalleryImages,
    },
];

const GalleryPackView = ({ pack, onBack }) => {
    const tiles = useMemo(
        () =>
            pack.images.map((image, index) => ({
                image,
                className: tileClasses[index % tileClasses.length],
            })),
        [pack.images]
    );
    const [activeIndex, setActiveIndex] = useState(null);
    const touchStart = useRef(null);
    const hasActive = activeIndex !== null;
    const activeImage = hasActive ? tiles[activeIndex]?.image : null;

    const close = () => setActiveIndex(null);
    const next = () => {
        if (!hasActive) return;
        setActiveIndex((prev) => (prev + 1) % tiles.length);
    };
    const prev = () => {
        if (!hasActive) return;
        setActiveIndex((prev) => (prev - 1 + tiles.length) % tiles.length);
    };

    useEffect(() => {
        if (!hasActive) return undefined;
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
        <section className="full-portfolio gallery-demo-page">
            <div className="full-portfolio-panel">
                <div className="full-portfolio-intro back-anchor">
                    <button
                        type="button"
                        className="service-detail-back gallery-demo-back"
                        onClick={onBack}
                    >
                        &larr;&nbsp; Packs
                    </button>
                    <h3 className="full-portfolio-title reveal-up tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[85px] max-lg:tw-text-4xl max-md:tw-leading-snug">
                        {pack.title}
                    </h3>
                    <div className="full-portfolio-subtitle">
                        {pack.subtitle}
                    </div>
                    {pack.credits?.length ? (
                        <div className="gallery-demo-credits">
                            {pack.credits.map((credit) => (
                                <span key={credit}>{credit}</span>
                            ))}
                        </div>
                    ) : null}
                </div>
                <div className="full-portfolio-main">
                    {tiles[0] ? (
                        <button
                            type="button"
                            className="full-portfolio-photo full-portfolio-photo--main portfolio-mosaic-card portfolio-mosaic-card--plain"
                            onClick={() => setActiveIndex(0)}
                            aria-label={`Open ${pack.title} photo`}
                        >
                            <div className="portfolio-mosaic-plain-media">
                                <img src={tiles[0].image} alt={pack.title} />
                            </div>
                        </button>
                    ) : null}
                </div>
                <div className="full-portfolio-grid">
                    {tiles.slice(1).map((item, index) => (
                        <article
                            className={`full-portfolio-card ${item.className}`}
                            key={`${pack.id}-${item.image}`}
                        >
                            <button
                                type="button"
                                className="full-portfolio-photo portfolio-mosaic-card portfolio-mosaic-card--plain"
                                onClick={() => setActiveIndex(index + 1)}
                                aria-label={`Open ${pack.title} photo`}
                            >
                                <div className="portfolio-mosaic-plain-media">
                                    <img src={item.image} alt={pack.title} />
                                </div>
                            </button>
                        </article>
                    ))}
                </div>
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
                        &lsaquo;
                    </button>
                    <div className="full-portfolio-lightbox-frame">
                        <img src={activeImage} alt={pack.title} />
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
                        &rsaquo;
                    </button>
                </div>
            ) : null}
        </section>
    );
};

const GalleryPackHub = ({ onOpenPack }) => (
    <section className="gallery-demo-hub" id="gallery-demo">
        <div className="gallery-demo-inner">
            <div className="gallery-demo-copy">
                <a className="service-detail-back" href="/#portfolio">
                    &larr;&nbsp; Back
                </a>
                <h1 className="gallery-demo-title">Gallery</h1>
                <p className="gallery-demo-subtitle">
                    Photo packs grouped into separate gallery pages.
                </p>
            </div>
            <div className="gallery-demo-pack-grid">
                {galleryPacks.map((pack) => (
                    <button
                        type="button"
                        className="gallery-demo-pack portfolio-mosaic-card portfolio-mosaic-card--plain"
                        key={pack.id}
                        onClick={() => onOpenPack(pack.id)}
                        onDoubleClick={() => onOpenPack(pack.id)}
                    >
                        <div className="gallery-demo-pack-media">
                            {pack.images.slice(0, 4).map((image) => (
                                <img src={image} alt="" key={image} />
                            ))}
                        </div>
                        <div className="gallery-demo-pack-overlay">
                            <span>{pack.eyebrow}</span>
                            <strong>{pack.title}</strong>
                            {pack.credits?.length ? (
                                <em>{pack.credits.join(" / ")}</em>
                            ) : null}
                            <small>{pack.images.length} photos</small>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    </section>
);

const GalleryDemoApp = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [activePackId, setActivePackId] = useState(null);
    const activePack = galleryPacks.find((pack) => pack.id === activePackId);

    useEffect(() => {
        document.body.classList.toggle("bm-open", burgerOpen);
        return () => document.body.classList.remove("bm-open");
    }, [burgerOpen]);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") setBurgerOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => initScrollAnimations(), []);
    useEffect(() => initLinkTargets(), []);
    useEffect(() => {
        let lastY = getScrollTop();
        const toggleFloating = () => {
            const y = getScrollTop();
            const scrollingDown = y > lastY;
            const shouldHide = y > 80 && scrollingDown;
            document.querySelectorAll(".back-to-top, .social-float:not(.contact-social-float), #sb_ai_widget, .sb_ai_widget-v2, #sb_ai_widget iframe, .sb_ai_widget-v2 iframe").forEach((el) => {
                el.classList.toggle("is-hidden", shouldHide);
            });
            lastY = y;
        };
        toggleFloating();
        const cleanup = addScrollListener(toggleFloating);
        return cleanup;
    }, []);

    const triggerHeaderHide = () => {
        const header = document.getElementById("main-header");
        if (!header) return;
        header.classList.add("is-transitioning");
        window.setTimeout(() => header.classList.remove("is-transitioning"), 700);
    };

    const handleNavigate = (event, id) => {
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            id="burger-root"
            className={`ember-burger-menu right bm--push bm-item--stack translucent-overlay ${
                burgerOpen ? "is-open" : ""
            }`}
        >
            <div className="bm-menu-container" onClick={(event) => event.stopPropagation()}>
                <nav
                    className="bm-menu"
                    aria-label="Mobile menu"
                    onClick={() => setBurgerOpen(false)}
                >
                    <a className="bm-menu-item bm-menu-cta tw-bg-secondary" href="/BookNow.html">
                        Book Now
                    </a>
                    <a className="bm-menu-item" href="/#hero" onClick={triggerHeaderHide}>
                        Home
                    </a>
                    <a className="bm-menu-item" href="/#portfolio" onClick={triggerHeaderHide}>
                        Portfolio
                    </a>
                    <a className="bm-menu-item" href="/Gallery.html" onClick={triggerHeaderHide}>
                        Gallery
                    </a>
                    <a className="bm-menu-item" href="/media.html" onClick={triggerHeaderHide}>
                        Media
                    </a>
                    <a className="bm-menu-item" href="/#news" onClick={triggerHeaderHide}>
                        News
                    </a>
                    <a className="bm-menu-item" href="/Contact.html" onClick={triggerHeaderHide}>
                        Contact us
                    </a>
                </nav>
            </div>
            <div
                className="bm-outlet"
                onClick={() => {
                    if (burgerOpen) setBurgerOpen(false);
                }}
            >
                <div className="bm-content">
                    <Header
                        isMenuOpen={burgerOpen}
                        onToggleMenu={() => setBurgerOpen((open) => !open)}
                        onNavigate={handleNavigate}
                        homeHref="/#hero"
                        portfolioHref="/#portfolio"
                    />
                    <main>
                        {activePack ? (
                            <GalleryPackView
                                pack={activePack}
                                onBack={() => setActivePackId(null)}
                            />
                        ) : (
                            <GalleryPackHub onOpenPack={setActivePackId} />
                        )}
                    </main>
                    <FloatingWidget />
                    <button
                        type="button"
                        className="back-to-top"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        Top
                    </button>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default GalleryDemoApp;
