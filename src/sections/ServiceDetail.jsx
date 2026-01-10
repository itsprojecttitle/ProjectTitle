import React, { useState } from "react";

const ServiceDetail = ({ service }) => {
    if (!service) return null;
    const [activeTier, setActiveTier] = useState(service.tiers[0]);

    return (
        <section className="service-detail-section">
            <div className="service-detail-inner">
                <header className="service-detail-header">
                    <h1 className="service-detail-title reveal-up">{service.title}</h1>
                    <p className="service-detail-summary reveal-up">{service.summary}</p>
                </header>
                <div className="service-tier-grid">
                    {service.tiers.map((tier) => (
                        <button
                            key={tier.title}
                            type="button"
                            className={`service-tier-card reveal-up${
                                activeTier.title === tier.title ? " is-active" : ""
                            }`}
                            onClick={() => setActiveTier(tier)}
                        >
                            <h3>{tier.title}</h3>
                            <p>{tier.copy}</p>
                        </button>
                    ))}
                </div>
                <div className="service-detail-media-row reveal-up">
                    {service.images.map((src, index) => (
                        <div className="service-detail-media" key={`${src}-${index}`}>
                            <a href={src} className="service-detail-media-link">
                                <img src={src} alt={`${service.title} ${index + 1}`} />
                            </a>
                        </div>
                    ))}
                </div>
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
                <div className="service-detail-extras reveal-up">
                    <h3>Extras</h3>
                    <ul>
                        {activeTier.extras.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
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
