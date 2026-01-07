import React from "react";
import MediaCard from "../components/MediaCard.jsx";
import { serviceItems } from "../data/services.js";

const Services = () => (
    <section className="portfolio-inverse tw-relative tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-items-center tw-overflow-hidden tw-p-6 tw-py-5">
        <h3 className="reveal-up tw-text-6xl tw-font-medium max-lg:tw-text-3xl">
            Services
        </h3>
        <div className="portfolio-inverse-divider reveal-up tw-my-4 tw-h-[1px] tw-w-[80%]"></div>
        <div className="tw-mt-8 tw-gap-10 tw-space-y-8 max-md:tw-columns-1 lg:tw-columns-2 xl:tw-columns-3">
            {serviceItems.map((item) => (
                <MediaCard key={item.title} {...item} variant="inverse" />
            ))}
        </div>
    </section>
);

export default Services;
