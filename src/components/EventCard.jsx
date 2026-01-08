import React from "react";

const EventCard = ({ title, description, image }) => (
    <div className="event-card reveal-up tw-flex tw-h-fit tw-w-full tw-flex-col tw-gap-4 tw-border-2 tw-border-black tw-bg-white tw-p-4">
        <div className="event-card-media tw-flex tw-h-[250px] tw-w-full tw-overflow-hidden">
            <img
                src={image}
                alt={title}
                className="tw-h-full tw-w-full tw-object-cover"
            />
        </div>
        <div className="event-card-content">
            <h3 className="tw-text-2xl">{title}</h3>
            <div className="tw-text-justify tw-text-gray-800">{description}</div>
            <a href="" className="tw-text-lg">
                Learn more <i className="bi bi-arrow-up-right"></i>
            </a>
        </div>
    </div>
);

export default EventCard;
