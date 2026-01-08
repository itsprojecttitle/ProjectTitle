import React from "react";

const EventCard = ({ title, description, image }) => (
    <div className="event-card event-card--polaroid reveal-up">
        <div className="event-card-media">
            <img
                src={image}
                alt={title}
                className="event-card-media-img"
            />
        </div>
        <div className="event-card-content">
            <h3>{title}</h3>
            <div className="event-card-description">{description}</div>
        </div>
    </div>
);

export default EventCard;
