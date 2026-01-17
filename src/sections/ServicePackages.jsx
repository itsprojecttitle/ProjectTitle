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

    const policyTitle =
        serviceKey === "studio" ? "Audio Mixing & Producing Policy" : "POLICY";
    const policyItems = useMemo(() => {
        if (serviceKey === "studio") {
            return [
                {
                    title: "Booking & Confirmation",
                    copy:
                        "Sessions are confirmed after full payment. Same-day bookings are subject to a +50% fee.",
                },
                {
                    title: "Communication",
                    copy:
                        "All communication is via WhatsApp, email, or DMs. Calls must be scheduled.",
                },
                {
                    title: "Session Prep",
                    copy:
                        "Come with a clear idea and aim for the session. Bring a memory stick or drive if you want files the same day.",
                },
                {
                    title: "Start Times & Lateness",
                    copy:
                        "Sessions start at the booked time. Late arrival reduces session time.",
                },
                {
                    title: "Turnaround Time",
                    copy:
                        "Standard turnaround is up to 2 weeks, though we aim for less than half that time where possible. Rush requests may incur extra fees.",
                },
                {
                    title: "Revisions",
                    copy:
                        "A set number of revisions are included. Additional revisions may be chargeable.",
                },
                {
                    title: "File Delivery",
                    copy:
                        "Final audio is delivered digitally unless otherwise agreed. Same-day file collection is available if requested.",
                },
                {
                    title: "More Info",
                    copy:
                        "Refer to our Terms & Conditions for full details, or DM us / use the contact form for questions.",
                },
            ];
        }
        if (serviceKey === "promotion") {
            return [
                {
                    title: "Agreement & Scope",
                    copy:
                        "All promotion work is agreed on a call, then clearly outlined, reviewed, and confirmed in the invoice before execution.",
                },
                {
                    title: "Booking & Confirmation",
                    copy: "Campaigns are confirmed after full payment is received.",
                },
                {
                    title: "Campaign Duration",
                    copy:
                        "Promotion runs for 3 months, including 1 month for revisions and alterations where required.",
                },
                {
                    title: "Communication & Updates",
                    copy:
                        "Updates are provided once per week to track progress and direction.",
                },
                {
                    title: "Consultancy Calls",
                    copy:
                        "Consultancy and strategy calls are scheduled separately and handled via call.",
                },
                {
                    title: "Execution",
                    copy:
                        "Work begins only after payment and written confirmation of the agreed scope.",
                },
                {
                    title: "More Info",
                    copy:
                        "Refer to our Terms & Conditions for full details, or DM us / use the contact form for questions.",
                },
            ];
        }
        return [
            {
                title: "Booking & Confirmation",
                copy:
                    "Filming is confirmed after full payment. Same-day or short-notice bookings are subject to a +50% fee.",
            },
            {
                title: "Communication",
                copy:
                    "All communication is handled via WhatsApp, email, or DMs. Calls must be scheduled in advance.",
            },
            {
                title: "Start Times & Lateness",
                copy:
                    "Shoots start at the agreed time. Late arrival may reduce shoot time and affect delivery.",
            },
            {
                title: "Turnaround Time",
                copy:
                    "Standard turnaround is up to 2 weeks, though we aim for less than half that time where possible. Rush delivery may incur extra fees.",
            },
            {
                title: "Revisions",
                copy:
                    "A set number of revisions are included. Additional revisions may be chargeable.",
            },
            {
                title: "File Delivery",
                copy:
                    "Final videos are delivered digitally in 4K quality, including horizontal and vertical formats where agreed.",
            },
            {
                title: "Usage & Approval",
                copy:
                    "Final delivery is considered approved unless issues are raised within the agreed review window.",
            },
            {
                title: "More Info",
                copy:
                    "Refer to our Terms & Conditions for full details, or DM us / use the contact form for any questions.",
            },
        ];
    }, [serviceKey]);
    const [activePolicy, setActivePolicy] = useState(null);


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
                {serviceKey === "bundles" ? (
                    <div className="service-packages-notes service-packages-notes--center reveal-up">
                        <h4>Creative / Music Production Packages</h4>
                        <p>
                            General Information
                            <br />
                            All projects require a call after booking to discuss aims,
                            scope, and expected outcomes.
                            <br />
                            Services and deliverables are agreed during this discussion
                            to ensure the project is aligned before execution.
                        </p>
                    </div>
                ) : null}
                {serviceKey !== "promotion" && serviceKey !== "bundles" ? (
                    <div className="media-player reveal-up">
                        <div className="media-player-frame">
                            {serviceKey === "videography" ? (
                                <div className="showreel-placeholder">ShowReel</div>
                            ) : serviceKey === "studio" ? (
                                <iframe
                                    className="service-packages-embed-frame"
                                    src="https://www.youtube-nocookie.com/embed/cFUIeQgP0mo?rel=0"
                                    title="Studio showreel"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <img
                                    key={activeImage}
                                    src={activeImage}
                                    alt={`${service.title} ${activeTier.title}`}
                                />
                            )}
                        </div>
                        {serviceKey === "studio" ? (
                            <p className="service-packages-embed-caption">
                                <span>10 years of experience.</span>
                                <span>Understanding the science behind sound.</span>
                                <span>
                                    With Engineers and Producers who can translate
                                    your ideas into music.
                                </span>
                            </p>
                        ) : null}
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
                <div className="service-packages-policy reveal-up">
                    <h4>{policyTitle}</h4>
                    <ul>
                        {policyItems.map((item) => (
                            <li
                                key={item.title}
                                role="button"
                                tabIndex={0}
                                onClick={() => setActivePolicy(item)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        setActivePolicy(item);
                                    }
                                }}
                            >
                                <span className="policy-title">{item.title}</span>
                                {item.copy ? (
                                    <span className="policy-copy">{item.copy}</span>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                    <a className="service-packages-policy-link" href="/Terms.html">
                        View Terms &amp; Conditions
                    </a>
                </div>
                {serviceKey === "videography" || serviceKey === "photography" ? (
                    <div className="service-packages-notes reveal-up">
                        <h4>General Notes</h4>
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
                ) : serviceKey === "bundles" ? (
                    <div className="service-packages-notes reveal-up">
                        <h4>General Notes</h4>
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
                ) : null}
                {activePolicy ? (
                    <div
                        className="policy-modal"
                        onClick={() => setActivePolicy(null)}
                    >
                        <div
                            className="policy-modal-panel"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                className="policy-modal-close"
                                onClick={() => setActivePolicy(null)}
                            >
                                ×
                            </button>
                            <h3>{activePolicy.title}</h3>
                            {activePolicy.copy ? <p>{activePolicy.copy}</p> : null}
                        </div>
                    </div>
                ) : null}
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
                            <p
                                className={`service-packages-modal-summary${
                                    serviceKey === "bundles"
                                        ? " service-packages-modal-summary--accent"
                                        : ""
                                }`}
                            >
                                {activeTier.copy}
                            </p>
                            <div className="service-packages-modal-grid">
                                <div className="service-packages-modal-block">
                                    <h3>Details</h3>
                                    {serviceKey === "studio" || serviceKey === "bundles" ? (
                                        <ul className="details-list">
                                            {activeTier.details.split("\n").map((line) => {
                                                const [label, ...rest] = line.split(":");
                                                const value = rest.join(":").trim();
                                                return (
                                                    <li key={line}>
                                                        <span className="details-label">
                                                            {label}:
                                                        </span>{" "}
                                                        <span>{value}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    ) : (
                                        <p>{activeTier.details}</p>
                                    )}
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
                                        <li>
                                            {activeTier.price ? (
                                                `Price: ${activeTier.price}`
                                            ) : (
                                                <a
                                                    href={selectHref}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    View pricing
                                                </a>
                                            )}
                                        </li>
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
                            {serviceKey === "videography" ||
                            serviceKey === "photography" ? (
                                <div className="service-packages-modal-block service-packages-modal-block--notes">
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
                                <div className="service-packages-modal-block service-packages-modal-block--notes">
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
                                <div className="service-packages-modal-block service-packages-modal-block--notes">
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
                                <div className="service-packages-modal-block service-packages-modal-block--notes">
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
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default ServicePackages;
