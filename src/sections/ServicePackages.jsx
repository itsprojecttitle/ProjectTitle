import React, { useMemo, useState } from "react";

const ServicePackages = ({ service, serviceKey }) => {
    if (!service) return null;
    const [activeTier, setActiveTier] = useState(service.tiers[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const tierImages = useMemo(() => {
        if (serviceKey === "bundles") {
            return service.images.slice(0, service.tiers.length);
        }
        return service.images;
    }, [service.images, service.tiers.length, serviceKey]);
    const activeImage = useMemo(() => {
        if (serviceKey === "photography") {
            return "/assets/images/Photos/EVENTS/DSC00335.jpg";
        }
        const index = service.tiers.findIndex((tier) => tier.title === activeTier.title);
        const imageIndex = index === -1 ? 0 : index % service.images.length;
        return service.images[imageIndex];
    }, [activeTier, service.images, service.tiers, serviceKey]);
    const selectHref = activeTier?.simplybookLink || activeTier?.stripeLink || "#";
    const handleSelectClick = (event) => {
        if (selectHref === "#") return;
        event.preventDefault();
        window.open(selectHref, "_blank", "noopener,noreferrer");
    };

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
        <section className="media-page-section service-packages-section">
            <div className="media-page-inner service-packages-inner">
                <header className="media-page-header service-packages-header">
                    <a className="service-detail-back" href="/BookNow.html">
                        ← &nbsp;Back
                    </a>
                    <h3 className="media-page-title reveal-up">{service.title}</h3>
                    <p className="media-page-subtitle reveal-up">{service.summary}</p>
                    <p className="service-packages-cta-subtitle reveal-up">
                        BOOK NOW, PICK YOUR CLASS*
                    </p>
                </header>
                {serviceKey !== "promotion" && serviceKey !== "bundles" ? (
                    <div className="media-player reveal-up">
                        <div className="media-player-frame">
                            {serviceKey === "videography" ? (
                                <div className="showreel-placeholder">ShowReel</div>
                            ) : serviceKey === "studio" ? (
                                <div className="service-packages-embed">
                                    <iframe
                                        src="https://www.youtube-nocookie.com/embed/cFUIeQgP0mo?rel=0"
                                        title="Studio showreel"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                    <p className="service-packages-embed-caption">
                                        Songs mixed by us
                                    </p>
                                </div>
                            ) : (
                                <img
                                    key={activeImage}
                                    src={activeImage}
                                    alt={`${service.title} ${activeTier.title}`}
                                />
                            )}
                        </div>
                    </div>
                ) : null}
                <div className="service-tier-row reveal-up" aria-label="Package selections">
                    {service.tiers
                        .slice()
                        .sort((a, b) => {
                            const order = [
                                "Run & Gun",
                                "Standard",
                                "Advanced",
                                "Professional",
                                "Industry Standard",
                            ];
                            const aIndex = order.indexOf(a.title);
                            const bIndex = order.indexOf(b.title);
                            if (aIndex === -1 && bIndex === -1) return 0;
                            if (aIndex === -1) return 1;
                            if (bIndex === -1) return -1;
                            return aIndex - bIndex;
                        })
                        .map((tier, index) => {
                        const isRaised =
                            tier.title === "Run & Gun" ||
                            tier.title === "Industry Standard";
                        const isStudioInline =
                            serviceKey === "studio" &&
                            tier.title === "Industry Standard";

                        return (
                        <button
                            key={tier.title}
                            type="button"
                            className={`service-tier-card service-tier-card--link reveal-up ${
                                isRaised ? "service-tier-card--raised" : ""
                            } ${
                                isStudioInline ? "service-tier-card--studio-inline" : ""
                            }`}
                            onClick={() => handleTierSelect(tier)}
                        >
                            <div className="service-tier-copy">
                                <h3>{tier.title}</h3>
                                <p>{tier.copy}</p>
                            </div>
                            <div className="service-tier-photo">
                                <img
                                    src={tierImages[index % tierImages.length]}
                                    alt={`${service.title} ${tier.title}`}
                                />
                            </div>
                        </button>
                        );
                    })}
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
                            <div className="service-packages-modal-grid service-packages-modal-grid--select">
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
                                    href={selectHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={handleSelectClick}
                                >
                                    Select
                                </a>
                            </div>
                            <div className="service-packages-modal-block service-packages-modal-block--policy">
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
