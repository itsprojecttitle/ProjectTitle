import React from "react";
import { serviceItems } from "../data/services.js";

const featuredItems = serviceItems.slice(0, 3);

const BookingFeatured = () => (
    <section className="booking-featured">
        <div className="booking-section-title reveal-up">
            <h2 className="reveal-up">Featured Projects</h2>
            <span></span>
        </div>
        <div className="booking-featured-grid">
            {featuredItems.map((item) => (
                <article key={item.title} className="booking-featured-card reveal-up">
                    <div className="booking-featured-media">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="booking-featured-body">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </article>
            ))}
        </div>
    </section>
);

export default BookingFeatured;
