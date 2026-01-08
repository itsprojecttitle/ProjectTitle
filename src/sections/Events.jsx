import React from "react";
import EventCard from "../components/EventCard.jsx";
import { eventItems } from "../data/events.js";

const Events = () => (
    <section
        id="upcoming-events"
        className="tw-relative tw-mt-10 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center lg:tw-p-6"
    >
        <div className="tw-flex tw-h-full tw-w-full tw-justify-around tw-gap-8 tw-rounded-xl tw-bg-secondary tw-p-4 max-lg:tw-max-w-full max-lg:tw-flex-col">
            <div className="events-title reveal-up tw-flex tw-h-full tw-w-[50%] tw-place-content-center max-lg:tw-w-full lg:tw-sticky lg:tw-top-[20%]">
                <h3 className="tw-text-center tw-text-4xl tw-font-medium max-lg:tw-text-3xl">
                    Upcoming Events
                </h3>
            </div>

            <div className="events-list reveal-up tw-flex tw-w-[30%] tw-flex-col tw-place-items-center tw-gap-4 tw-p-2 max-lg:tw-w-full">
                {eventItems.map((item) => (
                    <EventCard key={item.title} {...item} />
                ))}
            </div>
        </div>
    </section>
);

export default Events;
