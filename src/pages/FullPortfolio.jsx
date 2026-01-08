import React, { useEffect, useState, useRef } from "react";
import { portfolioItems } from "../data/portfolio.js";

const tiles = [
    { image: portfolioItems[0]?.image, className: "full-portfolio-tile--a" },
    { image: portfolioItems[2]?.image, className: "full-portfolio-tile--b" },
    { image: portfolioItems[1]?.image, className: "full-portfolio-tile--c" },
    { image: portfolioItems[0]?.image, className: "full-portfolio-tile--d" },
    { image: portfolioItems[1]?.image, className: "full-portfolio-tile--e" },
    { image: portfolioItems[2]?.image, className: "full-portfolio-tile--f" },
    { image: portfolioItems[0]?.image, className: "full-portfolio-tile--g" },
].filter((item) => item.image);

const FullPortfolio = () => {
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
                <div className="full-portfolio-header">Header</div>
                <div className="full-portfolio-divider"></div>
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
                <div className="full-portfolio-divider"></div>
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
                    <img src={activeImage} alt="Full screen" />
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
