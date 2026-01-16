import React, { useEffect, useState } from "react";
import { serviceItems } from "../data/services.js";

const BookingServices = () => {
    const photographySlides = [
        "/assets/images/Photos/SHOOTS/DSC00636.jpg",
        "/assets/images/Photos/SHOOTS/DSC00517.jpg",
        "/assets/images/Photos/SHOOTS/DSC00367.jpg",
        "/assets/images/Photos/SHOOTS/DSC09425.jpg",
        "/assets/images/Photos/SHOOTS/DSC09411.jpg",
        "/assets/images/Photos/SHOOTS/DSC09492.jpg",
    ];
    const [photoIndex, setPhotoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPhotoIndex((prev) => (prev + 1) % photographySlides.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [photographySlides.length]);

    return (
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
                    const statusText =
                        item.statusLabel || (isDisabled ? "Coming soon" : "Learn more");
                    const mediaImage =
                        item.title === "Photography"
                            ? photographySlides[photoIndex]
                            : item.image;

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
                            <div
                                className={`booking-service-media${
                                    item.title === "Photography"
                                        ? " booking-service-media--fade"
                                        : ""
                                }`}
                            >
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
                                    <img
                                        key={mediaImage}
                                        src={mediaImage}
                                        alt={item.title}
                                    />
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
};

export default BookingServices;
