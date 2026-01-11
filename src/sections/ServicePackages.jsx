import React, { useState } from "react";

const ServicePackages = ({ service, serviceKey }) => {
    if (!service) return null;
    const [activeTier, setActiveTier] = useState(service.tiers[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTierSelect = (tier) => {
        try {
            const storageKey = serviceKey ? `serviceTier:${serviceKey}` : "serviceTier";
            sessionStorage.setItem(storageKey, tier.title);
        } catch (error) {
            // ignore storage failures
        }
        setActiveTier(tier);
        setIsModalOpen(true);
    };

    return (
        <section className="service-packages-section">
            <div className="service-packages-inner">
                <header className="service-packages-header">
                    <p className="service-packages-eyebrow">PricePlan</p>
                    <h1 className="service-packages-title">{service.title}</h1>
                    <p className="service-packages-subtitle">Pick One Below</p>
                </header>
                <div className="service-tier-grid">
                    {service.tiers.map((tier, index) => (
                        <button
                            key={tier.title}
                            type="button"
                            className="service-tier-card service-tier-card--link reveal-up"
                            onClick={() => handleTierSelect(tier)}
                        >
                            <h3>{tier.title}</h3>
                            <p>{tier.copy}</p>
                            <div className="service-tier-photo">
                                <img
                                    src={service.images[index % service.images.length]}
                                    alt={`${service.title} ${tier.title}`}
                                />
                            </div>
                        </button>
                    ))}
                </div>
                {isModalOpen ? (
                    <div
                        className="service-packages-modal"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div
                            className="service-packages-panel"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                className="service-packages-close"
                                onClick={() => setIsModalOpen(false)}
                            >
                                ×
                            </button>
                            <h2 className="service-packages-modal-title">
                                {activeTier.title}
                            </h2>
                            <p className="service-packages-modal-subtitle">
                                {service.title}
                            </p>
                            <p className="service-packages-modal-summary">
                                {activeTier.details}
                            </p>
                            <div className="service-packages-modal-grid">
                                <div className="service-packages-modal-block">
                                    <h3>Details</h3>
                                    <p>{activeTier.details}</p>
                                </div>
                                <div className="service-packages-modal-block">
                                    <h3>Info</h3>
                                    <ul>
                                        {activeTier.info.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="service-packages-modal-grid">
                                <div className="service-packages-modal-block">
                                    <h3>Pricing</h3>
                                    <ul>
                                        {activeTier.info.map((item) => (
                                            <li key={`${item}-price`}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    className="service-packages-select"
                                    href={activeTier.stripeLink || "#"}
                                >
                                    Select
                                </a>
                            </div>
                            <div className="service-packages-modal-block">
                                <h3>Policy</h3>
                                <ul>
                                    {activeTier.policy.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default ServicePackages;
