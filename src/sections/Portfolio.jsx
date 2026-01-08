import React from "react";
import { portfolioItems } from "../data/portfolio.js";

const Portfolio = () => (
    <section
        id="portfolio"
        className="tw-relative tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-items-center tw-overflow-hidden tw-p-6 tw-py-5"
    >
        <h3 className="reveal-up tw-text-6xl tw-font-medium max-lg:tw-text-3xl">
            Portfolio
        </h3>
        <div className="reveal-up tw-my-4 tw-h-[1px] tw-w-[80%] tw-bg-black"></div>
        <div className="portfolio-mosaic tw-mt-8 tw-w-full tw-max-w-[1100px]">
            <div className="portfolio-mosaic-left">
                {portfolioItems[0] ? (
                    <article className="portfolio-mosaic-card portfolio-mosaic-card--plain reveal-up">
                        <div className="portfolio-mosaic-plain-media">
                            <img
                                src={portfolioItems[0].image}
                                alt={portfolioItems[0].title}
                            />
                        </div>
                        <div className="portfolio-mosaic-plain-overlay">
                            <button type="button" className="portfolio-mosaic-plain-cta">
                                More Videos <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </article>
                ) : null}
                {portfolioItems[1] ? (
                    <article className="portfolio-mosaic-card portfolio-mosaic-card--summary reveal-up">
                        <h5>{portfolioItems[1].title}</h5>
                        <p>{portfolioItems[1].description}</p>
                    </article>
                ) : null}
            </div>
            {portfolioItems[2] ? (
                <article className="portfolio-mosaic-card portfolio-mosaic-card--hero reveal-up">
                    <div className="portfolio-mosaic-hero-frame">
                        <video
                            className="portfolio-mosaic-hero-video"
                            src="/assets/videos/big.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                        />
                    </div>
                    <div className="portfolio-mosaic-hero-caption portfolio-mosaic-hero-caption--right">
                        <a href="" className="portfolio-mosaic-link portfolio-mosaic-hero-cta">
                            More Videos <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </article>
            ) : null}
        </div>
    </section>
);

export default Portfolio;
