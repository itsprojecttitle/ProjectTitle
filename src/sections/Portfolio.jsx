import React, { useEffect, useState } from "react";
import { portfolioItems } from "../data/portfolio.js";

const testimonials = [
    {
        text: "ProjectTitle delivered a clean, cinematic brand refresh that feels premium.",
        name: "Oliver Grant",
    },
    {
        text: "Every detail was handled with care. The rollout was smooth and fast.",
        name: "Amelia Clarke",
    },
    {
        text: "They understood the brief immediately and elevated the visuals.",
        name: "Harriet Bennett",
    },
];

const Portfolio = () => {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        }, 3800);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="portfolio"
            className="tw-relative tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-items-start tw-overflow-hidden tw-p-6 tw-py-5"
        >
            <h3 className="reveal-up tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[85px] max-lg:tw-text-4xl max-md:tw-leading-snug">
                Portfolio
            </h3>
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
                                    More Photos <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </article>
                    ) : null}
                    <article className="portfolio-mosaic-card portfolio-mosaic-card--summary reveal-up">
                        <h5 className="portfolio-testimonial-title">Testimonials</h5>
                        <p
                            className="portfolio-testimonial"
                            key={`testimonial-${testimonialIndex}`}
                        >
                            “{testimonials[testimonialIndex].text}”
                            <span className="portfolio-testimonial-name">
                                - {testimonials[testimonialIndex].name}
                            </span>
                        </p>
                    </article>
                </div>
                {portfolioItems[2] ? (
                    <article className="portfolio-mosaic-card portfolio-mosaic-card--hero reveal-up">
                        <div className="portfolio-mosaic-hero-frame">
                            <iframe
                                className="portfolio-mosaic-hero-embed"
                                src="https://www.youtube.com/embed/CCtifwUJvm4?autoplay=1&mute=1&loop=1&playlist=CCtifwUJvm4&controls=1&playsinline=1"
                                title="Video portfolio"
                                frameBorder="0"
                                allow="autoplay; encrypted-media; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="portfolio-mosaic-hero-caption portfolio-mosaic-hero-caption--left">
                            <a href="" className="portfolio-mosaic-link portfolio-mosaic-hero-cta">
                                More Videos <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </article>
                ) : null}
            </div>
        </section>
    );
};

export default Portfolio;
