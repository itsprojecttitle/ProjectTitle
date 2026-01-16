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
            <div className="service-detail-inner">
                <a className="service-detail-back" href="/BookNow.html">
                    ← &nbsp;Back
                </a>
                <header className="service-detail-header">
                    <h1 className="service-detail-title reveal-up">
                        {activeTier?.title}
                    </h1>
                    <p className="service-detail-summary reveal-up">
                        {service.title}
                    </p>
                </header>
                <div className="service-detail-grid">
                    <div className="service-detail-block reveal-up">
                        <h3>Details</h3>
                        <p>{activeTier.details}</p>
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
                <div className="service-detail-policy reveal-up">
                    <h3>Policy</h3>
                    <ul>
                        {activeTier.policy.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="service-detail-grid service-detail-grid--pair">
                    <div className="service-detail-block reveal-up">
                        <h3>Pricing</h3>
                        <ul>
                            {activeTier.info.map((item) => (
                                <li key={`${item}-dup`}>{item}</li>
                            ))}
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
