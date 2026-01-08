import React, { useEffect, useState } from "react";
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
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        if (!activeImage) return;
        const onKeyDown = (event) => {
            if (event.key === "Escape") setActiveImage(null);
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [activeImage]);

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
                            onClick={() => setActiveImage(portfolioItems[0].image)}
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
                                onClick={() => setActiveImage(item.image)}
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
                    onClick={() => setActiveImage(null)}
                    role="button"
                    tabIndex={0}
                >
                    <img src={activeImage} alt="Full screen" />
                </div>
            ) : null}
        </section>
    );
};

export default FullPortfolio;
