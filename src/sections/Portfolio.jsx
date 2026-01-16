import React, { useEffect, useMemo, useState } from "react";
import { portfolioItems } from "../data/portfolio.js";

const galleryImages = [
    "/assets/images/Photos/EVENTS/DSC00355.jpg",
    "/assets/images/Photos/EVENTS/DSC00352.jpg",
    "/assets/images/Photos/EVENTS/DSC00335.jpg",
    "/assets/images/Photos/EVENTS/DSC00323.jpg",
    "/assets/images/Photos/EVENTS/DSC00315.jpg",
    "/assets/images/Photos/EVENTS/DSC00309.jpg",
    "/assets/images/Photos/EVENTS/DSC00285.jpg",
    "/assets/images/Photos/EVENTS/DSC00263.jpg",
    "/assets/images/Photos/EVENTS/DSC00241.jpg",
    "/assets/images/Photos/EVENTS/DSC00226.jpg",
    "/assets/images/Photos/EVENTS/DSC00197.jpg",
    "/assets/images/Photos/EVENTS/dsc00279.jpg",
];

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
    const [galleryIndex, setGalleryIndex] = useState(0);
    const galleryItems = useMemo(() => {
        const imageList = galleryImages.slice();
        if (!imageList.length) {
            return portfolioItems.filter((item) => item?.image).map((item) => item.image);
        }
        for (let i = imageList.length - 1; i > 0; i -= 1) {
            const swapIndex = Math.floor(Math.random() * (i + 1));
            [imageList[i], imageList[swapIndex]] = [imageList[swapIndex], imageList[i]];
        }
        return imageList;
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        }, 3800);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (galleryItems.length <= 1) return undefined;
        const interval = setInterval(() => {
            setGalleryIndex((prev) => (prev + 1) % galleryItems.length);
        }, 4200);
        return () => clearInterval(interval);
    }, [galleryItems.length]);

    return (
        <section
            id="portfolio"
            className="tw-relative tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-items-start tw-overflow-hidden tw-p-6 tw-py-5"
        >
            <div className="tw-flex tw-flex-col tw-gap-2">
                <h3 className="reveal-up tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[85px] max-lg:tw-text-4xl max-md:tw-leading-snug">
                    Portfolio
                </h3>
                <p className="reveal-up tw-text-lg tw-uppercase tw-tracking-[0.12em] max-lg:tw-text-sm">
                    More available upon request.
                </p>
            </div>
            <div className="portfolio-mosaic tw-mt-8 tw-w-full tw-max-w-[1100px]">
                <div className="portfolio-mosaic-left">
                    {portfolioItems[0] ? (
                        <article className="portfolio-mosaic-card portfolio-mosaic-card--plain reveal-up">
                            <div className="portfolio-mosaic-plain-media">
                                <img
                                    src={galleryItems[galleryIndex] || portfolioItems[0].image}
                                    alt="Portfolio gallery"
                                />
                            </div>
                        <div className="portfolio-mosaic-plain-overlay">
                            <a
                                href="/Gallery.html"
                                className="portfolio-mosaic-plain-cta"
                            >
                                Gallery <i className="bi bi-arrow-right"></i>
                            </a>
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
                        <video
                            className="portfolio-mosaic-hero-video"
                            autoPlay
                            loop
                            muted
                            controls
                            playsInline
                        >
                            <source
                                src="/assets/videos/hero-mobile.mp4"
                                type="video/mp4"
                                media="(max-width: 900px)"
                            />
                            <source
                                src="/assets/videos/hero.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                        <div className="portfolio-mosaic-hero-caption portfolio-mosaic-hero-caption--left">
                            <a href="/media.html" className="portfolio-mosaic-link portfolio-mosaic-hero-cta">
                                Media <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </article>
                ) : null}
            </div>
        </section>
    );
};

export default Portfolio;
