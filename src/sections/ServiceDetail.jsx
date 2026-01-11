import React, { useEffect, useState } from "react";

const ServiceDetail = ({ service, serviceKey }) => {
    if (!service) return null;
    const [activeTier, setActiveTier] = useState(service.tiers[0]);
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
                <div className="service-detail-grid service-detail-grid--pair">
                    <button
                        type="button"
                        className="service-detail-block service-detail-block--select reveal-up"
                    >
                        <h3>Select</h3>
                    </button>
                    <div className="service-detail-block reveal-up">
                        <h3>Pricing</h3>
                        <ul>
                            {activeTier.info.map((item) => (
                                <li key={`${item}-dup`}>{item}</li>
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
            </div>
        </section>
    );
};

export default ServiceDetail;
