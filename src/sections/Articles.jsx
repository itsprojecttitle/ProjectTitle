import React, { useEffect, useRef, useState } from "react";
import ArticleCard from "../components/ArticleCard.jsx";
import { articleItems } from "../data/articles.js";

const Articles = () => {
    const trackRef = useRef(null);
    const cardRefs = useRef([]);
    const [centerIndex, setCenterIndex] = useState(0);

    const updateCenterIndex = () => {
        const track = trackRef.current;
        if (!track) return;
        const trackRect = track.getBoundingClientRect();
        const trackCenter = trackRect.left + trackRect.width / 2;
        let closestIndex = 0;
        let smallestDistance = Number.POSITIVE_INFINITY;
        cardRefs.current.forEach((node, index) => {
            if (!node) return;
            const rect = node.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
            const distance = Math.abs(trackCenter - cardCenter);
            if (distance < smallestDistance) {
                smallestDistance = distance;
                closestIndex = index;
            }
        });
        setCenterIndex(closestIndex);
    };

    useEffect(() => {
        updateCenterIndex();
        const track = trackRef.current;
        if (!track) return;
        const onScroll = () => requestAnimationFrame(updateCenterIndex);
        track.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", updateCenterIndex);
        return () => {
            track.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", updateCenterIndex);
        };
    }, []);

    return (
        <section className="tw-mt-5 tw-flex tw-w-full tw-flex-col tw-place-items-center tw-bg-black tw-text-white tw-p-[2%] max-lg:tw-p-3">
            <h3 id="news" className="reveal-up tw-text-center tw-text-4xl tw-font-medium max-md:tw-text-2xl">
                News
            </h3>
            <div className="news-carousel" aria-label="News carousel">
                <button
                    type="button"
                    className="news-carousel-arrow news-carousel-arrow--left"
                    aria-label="Scroll left"
                    onClick={() => {
                        if (trackRef.current) {
                            trackRef.current.scrollBy({
                                left: -trackRef.current.clientWidth * 0.8,
                                behavior: "smooth",
                            });
                        }
                    }}
                />
                <div className="news-carousel-track" ref={trackRef}>
                    {articleItems.map((item, index) => (
                        <ArticleCard
                            key={item.title}
                            {...item}
                            isCenter={index === centerIndex}
                            ref={(node) => {
                                cardRefs.current[index] = node;
                            }}
                            onActivate={() => setCenterIndex(index)}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    className="news-carousel-arrow news-carousel-arrow--right"
                    aria-label="Scroll right"
                    onClick={() => {
                        if (trackRef.current) {
                            trackRef.current.scrollBy({
                                left: trackRef.current.clientWidth * 0.8,
                                behavior: "smooth",
                            });
                        }
                    }}
                />
            </div>
        </section>
    );
};

export default Articles;
