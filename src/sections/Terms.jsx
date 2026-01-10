import React, { useState } from "react";

const termsItems = [
    {
        title: "Project Scope",
        body:
            "All work is scoped and agreed upon in writing before production. " +
            "Changes outside the approved scope may require an updated quote.",
    },
    {
        title: "Payments",
        body:
            "Bookings are confirmed once the agreed deposit is received. " +
            "Final deliverables are released upon full payment.",
    },
    {
        title: "Revisions",
        body:
            "Revisions are limited to the number specified in the booking agreement. " +
            "Additional revisions are billed at the agreed rate.",
    },
    {
        title: "Usage Rights",
        body:
            "Usage rights are granted for the agreed platforms and time period " +
            "once payment is complete.",
    },
];

const TermsSection = () => {
    const [activeItem, setActiveItem] = useState(null);

    return (
        <section className="terms-section">
            <div className="terms-inner">
                <h1 className="terms-title reveal-hero-text">Terms &amp; Conditions</h1>
                <p className="terms-intro reveal-hero-text">
                    These terms outline how we collaborate, deliver work, and protect
                    both the client and ProjectTitle. This content is a placeholder
                    and can be replaced with your official legal copy.
                </p>
                <div className="terms-grid">
                    {termsItems.map((item) => (
                        <button
                            key={item.title}
                            type="button"
                            className="terms-block reveal-up"
                            onClick={() => setActiveItem(item)}
                        >
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </button>
                    ))}
                </div>
            </div>
            {activeItem ? (
                <div className="terms-modal" onClick={() => setActiveItem(null)}>
                    <div
                        className="terms-modal-card"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h3>{activeItem.title}</h3>
                        <p>{activeItem.body}</p>
                        <button
                            type="button"
                            className="terms-modal-close"
                            onClick={() => setActiveItem(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default TermsSection;
