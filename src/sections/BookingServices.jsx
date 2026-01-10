import React from "react";
import { serviceItems } from "../data/services.js";

const BookingServices = () => (
    <section id="booking-services" className="booking-services">
        <div className="booking-section-title reveal-up">
            <h2 className="reveal-up">Services</h2>
            <span></span>
        </div>
        <div className="booking-services-grid">
            {serviceItems.map((item) => (
                <a
                    key={item.title}
                    href={item.href}
                    className="booking-service-card booking-service-link reveal-up"
                >
                    <div className="booking-service-media">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </a>
            ))}
        </div>
    </section>
);

export default BookingServices;
