import React, { useEffect, useMemo, useState, useRef } from "react";
import { portfolioItems } from "../data/portfolio.js";

const galleryImages = [
    "/assets/images/Photos/EVENTS/DSC00315.jpg",
    "/assets/images/Photos/EVENTS/dsc00279.jpg",
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

const FullPortfolio = ({ titleText = "Gallery" }) => {
    const tiles = useMemo(
        () =>
            galleryImages.map((image, index) => ({
                image,
                className: tileClasses[index % tileClasses.length],
            })),
        []
    );
    const [activeIndex, setActiveIndex] = useState(null);
    const touchStart = useRef(null);

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
                <div className="full-portfolio-intro">
                    <a className="service-detail-back" href="/#hero">
                        ← &nbsp;Back
                    </a>
                    <h3 className="full-portfolio-title reveal-up tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[85px] max-lg:tw-text-4xl max-md:tw-leading-snug">
                    {titleText}
                </h3>
                    <div className="full-portfolio-subtitle">
                        Every story starts with a "ProjectTitle"
                        <br />
                        Let's find yours.
                    </div>
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
