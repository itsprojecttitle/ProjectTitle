import React, { useEffect, useState } from "react";

const ServiceDetail = ({ service, serviceKey }) => {
    if (!service) return null;
    const [activeTier, setActiveTier] = useState(service.tiers[0]);
    const selectHref = activeTier?.simplybookLink || activeTier?.stripeLink || "#";
    const handleSelectClick = (event) => {
        if (selectHref === "#") return;
        event.preventDefault();
        window.open(selectHref, "_blank", "noopener,noreferrer");
    };
    useEffect(() => {
        const storageKey = serviceKey ? `serviceTier:${serviceKey}` : "serviceTier";
        let nextTier = service.tiers[0];
        try {
            const stored = sessionStorage.getItem(storageKey);
            const match = service.tiers.find((tier) => tier.title === stored);
            if (match) nextTier = match;
        } catch (error) {
            // ignore storage failures
        }
        setActiveTier(nextTier);
    }, [service, serviceKey]);

    return (
        <section className="service-detail-section">
            <div className="service-detail-inner back-anchor">
                <a className="service-detail-back" href="/BookNow.html">
                    ← &nbsp;Back
                </a>
                <header className="service-detail-header">
                    <h1 className="service-detail-title reveal-up">
                        {activeTier?.title}
                    </h1>
                    <p
                        className={`service-detail-summary reveal-up${
                            serviceKey === "bundles"
                                ? " service-detail-summary--accent"
                                : ""
                        }`}
                    >
                        {activeTier?.copy}
                    </p>
                </header>
                <div className="service-detail-grid">
                    <div className="service-detail-block reveal-up">
                        <h3>Details</h3>
                        {serviceKey === "studio" || serviceKey === "bundles" ? (
                            <ul className="details-list">
                                {activeTier.details.split("\n").map((line) => {
                                    const [label, ...rest] = line.split(":");
                                    const value = rest.join(":").trim();
                                    return (
                                        <li key={line}>
                                            <span className="details-label">{label}:</span>{" "}
                                            <span>{value}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>{activeTier.details}</p>
                        )}
                    </div>
                    <div className="service-detail-block reveal-up">
                        <h3>Info</h3>
                        <ul>
                            {activeTier.info.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="service-detail-grid service-detail-grid--pair">
                    <div className="service-detail-block reveal-up">
                        <h3>Pricing</h3>
                        <ul>
                            <li>
                                {activeTier.price ? (
                                    `Price: ${activeTier.price}`
                                ) : (
                                    <a href={selectHref} target="_blank" rel="noreferrer">
                                        View pricing
                                    </a>
                                )}
                            </li>
                        </ul>
                    </div>
                    <a
                        className="service-detail-block service-detail-block--select reveal-up"
                        href={selectHref}
                        target="_blank"
                        rel="noreferrer"
                        onClick={handleSelectClick}
                    >
                        <h3>Select</h3>
                    </a>
                </div>
                {serviceKey === "videography" || serviceKey === "photography" ? (
                    <div className="service-detail-block service-detail-block--notes reveal-up">
                        <h3>General Notes</h3>
                        <ul>
                            <li>All services include a standard level of editing.</li>
                            <li>Shoots are confirmed after full payment.</li>
                            <li>
                                Same-day or short-notice bookings may incur
                                additional fees.
                            </li>
                            <li>
                                Deliverables, formats, and revisions are agreed on
                                call.
                            </li>
                            <li>
                                Refer to Terms &amp; Conditions for full details or
                                DM / use the contact form to book.
                            </li>
                        </ul>
                    </div>
                ) : serviceKey === "studio" ? (
                    <div className="service-detail-block service-detail-block--notes reveal-up">
                        <h3>General Notes</h3>
                        <ul>
                            <li>Hours are not fixed and vary depending on the project scope.</li>
                            <li>
                                Recording, mixing, and mastering are included across
                                all packages.
                            </li>
                            <li>Stem mixing and mastering included from Advanced upwards.</li>
                            <li>
                                A treatment / project discussion is required before
                                booking.
                            </li>
                            <li>
                                Final delivery, formats, and revisions are agreed
                                during planning.
                            </li>
                            <li>
                                Refer to Terms &amp; Conditions for full details, or
                                DM / use the contact form for questions.
                            </li>
                        </ul>
                    </div>
                ) : serviceKey === "bundles" ? (
                    <div className="service-detail-block service-detail-block--notes reveal-up">
                        <h3>General Notes</h3>
                        <ul>
                            <li>Hours are not fixed and vary by project.</li>
                            <li>
                                Services may include audio, visual, photography, or
                                combined production.
                            </li>
                            <li>
                                Scope and deliverables are finalised after the
                                booking call.
                            </li>
                            <li>
                                Refer to Terms &amp; Conditions for full details.
                            </li>
                            <li>
                                For more information, DM us or use the contact form.
                            </li>
                        </ul>
                    </div>
                ) : serviceKey === "promotion" ? (
                    <div className="service-detail-block service-detail-block--notes reveal-up">
                        <h3>General Notes</h3>
                        <ul>
                            <li>Campaign Length: 6 weeks</li>
                            <li>Structure:</li>
                            <li>Initial planning, organisation, and execution</li>
                            <li>Ongoing optimisation</li>
                            <li>
                                Final 2 weeks for revisions, with changes applied in the
                                final week
                            </li>
                        </ul>
                    </div>
                ) : null}
                {serviceKey === "videography" ? (
                    <div className="service-detail-video reveal-up">
                        <h3>Showreel</h3>
                        <div className="service-detail-video-frame">
                            <video
                                controls
                                preload="metadata"
                                poster="/assets/images/Photos/EVENTS/DSC00355.jpg"
                            >
                                <source src="/assets/videos/hero.mp4" type="video/mp4" />
                                <source src="/assets/videos/hero.webm" type="video/webm" />
                            </video>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default ServiceDetail;
