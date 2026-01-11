import React from "react";

const BookingHero = () => (
    <section className="booking-hero">
        <div className="booking-hero-overlay">
            <div className="booking-banner reveal-up">
                <p className="booking-eyebrow reveal-up">ProjectTitle Booking</p>
                <h1 className="booking-title reveal-up">Craft Your Next Campaign</h1>
                <div className="booking-divider"></div>
                <p className="booking-subtitle reveal-up">
                    Curated production services and creative support built for bold stories.
                </p>
                <a href="#Services" className="booking-cta reveal-up">
                    Explore Services
                </a>
            </div>
        </div>
    </section>
);

export default BookingHero;
