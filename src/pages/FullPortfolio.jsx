import React, { useEffect, useState, useRef } from "react";
import { portfolioItems } from "../data/portfolio.js";

const tiles = [
    { image: portfolioItems[0]?.image, className: "full-portfolio-tile--a" },
    { image: portfolioItems[2]?.image, className: "full-portfolio-tile--b" },
    { image: portfolioItems[1]?.image, className: "full-portfolio-tile--c" },
    { image: portfolioItems[1]?.image, className: "full-portfolio-tile--h" },
    { image: portfolioItems[2]?.image, className: "full-portfolio-tile--f" },
].filter((item) => item.image);

const FullPortfolio = ({ titleText = "Gallary" }) => {
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
                    <h3 className="full-portfolio-title reveal-up tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[85px] max-lg:tw-text-4xl max-md:tw-leading-snug">
                    {titleText}
                </h3>
                    <div className="full-portfolio-subtitle">
                        Every story starts with a "ProjectTitle"
                        <br />
                        Lets find yours.
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
                </div>
                <div className="full-portfolio-main">
                {portfolioItems[0] ? (
                    <button
                        type="button"
                        className="full-portfolio-photo full-portfolio-photo--main portfolio-mosaic-card portfolio-mosaic-card--plain"
                        onClick={() => openAt(0)}
                        aria-label="Open photo"
                    >
                            <div className="portfolio-mosaic-plain-media">
                                <img
                                    src={portfolioItems[0].image}
                                    alt={portfolioItems[0].title}
                                />
                            </div>
                        </button>
                    ) : null}
                </div>
                <div className="full-portfolio-grid">
                    {tiles.map((item, index) => (
                        <article
                            className={`full-portfolio-card ${item.className}`}
                            key={`full-portfolio-${index}`}
                        >
                            <button
                                type="button"
                                className="full-portfolio-photo portfolio-mosaic-card portfolio-mosaic-card--plain"
                                onClick={() => openAt(index)}
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
