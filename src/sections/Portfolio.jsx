import React from "react";
import MediaCard from "../components/MediaCard.jsx";
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
        <div className="portfolio-scroll tw-mt-8 tw-gap-10 tw-space-y-8 max-md:tw-columns-1 lg:tw-columns-2 xl:tw-columns-3">
            {portfolioItems.map((item) => (
                <MediaCard key={item.title} {...item} className="portfolio-card" />
            ))}
        </div>
    </section>
);

export default Portfolio;
