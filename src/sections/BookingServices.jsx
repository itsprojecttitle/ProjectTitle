import React from "react";
import { serviceItems } from "../data/services.js";

const BookingServices = () => (
    <section id="Services" className="booking-services">
        <a className="service-detail-back" href="/#hero">
            ← &nbsp;Back
        </a>
        <div className="booking-section-title reveal-up">
            <h2 className="reveal-up">Services</h2>
            <span></span>
        </div>
        <div className="booking-services-grid">
            {serviceItems.map((item) => {
                const isDisabled = Boolean(item.disabled);
                const Tag = isDisabled ? "div" : "a";
                const statusText = item.statusLabel || (isDisabled ? "Coming soon" : "Learn more");

                return (
                    <Tag
                        key={item.title}
                        href={isDisabled ? undefined : item.href}
                        className={`booking-service-card booking-service-link reveal-up ${
                            isDisabled ? "booking-service-card--disabled" : ""
                        } ${item.className || ""}`}
                        aria-disabled={isDisabled ? "true" : "false"}
                        onClick={(event) => {
                            if (isDisabled) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <div className="booking-service-media">
                            {item.video ? (
                                <video
                                    src={item.video}
                                    muted
                                    loop
                                    playsInline
                                    autoPlay
                                    preload="metadata"
                                />
                            ) : (
                                <img src={item.image} alt={item.title} />
                            )}
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span
                            className={`booking-service-status ${
                                isDisabled ? "booking-service-status--disabled" : ""
                            }`}
                        >
                            {statusText}
                        </span>
                    </Tag>
                );
            })}
        </div>
    </section>
);

export default BookingServices;
