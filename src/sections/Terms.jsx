import React, { useState } from "react";

const termsItems = [
    {
        title: "1. Project Scope & Agreements",
        body:
            "Projects are agreed through DMs or WhatsApp, booking confirmation, scheduled phone calls, treatment planning, and confirmed by invoice and email. The scope of work is defined by the invoice description alongside the agreed treatment plan. Any work requested outside the agreed scope will require a new invoice and additional fees, handled case by case.",
    },
    {
        title: "2. Payment & Confirmation",
        body:
            "Bookings are only confirmed after full payment is received. We accept payment via Klarna, card, Stripe, and payment links. If payment fails or is not completed, the project will not start.",
    },
    {
        title: "3. Revisions & Limitations",
        body:
            "Each project includes a set revision allowance. A revision is defined as a scheduled one-hour phone call highlighting specific changes and details. Once the revision limit is reached, the project is considered finished or additional fees will apply. Revisions do not reset or extend the project timeline.",
    },
    {
        title: "4. Usage Rights & Ownership",
        body:
            "All final delivered content is owned by the client. We may only showcase work for portfolio or promotional use with the client’s permission. Resale or extended commercial use outside the agreed terms may incur additional charges if requested.",
    },
    {
        title: "5. Stems & Files",
        body:
            "Stems and project files are not included by default. Additional charges apply for stems unless requested during the session. Full session files (FL, Logic, etc.) are provided only if requested.",
    },
    {
        title: "6. Refunds & Cancellations",
        body:
            "Partial refunds are available within 24 hours of purchase only if work has not yet started. A full refund will be issued if we exceed the agreed two-week delivery deadline. If a project is cancelled before work begins, a full refund will be provided.",
    },
    {
        title: "7. Privacy & Confidentiality",
        body:
            "Confidentiality is standard across all projects. All work remains private before release unless agreed otherwise. NDAs can be requested if required.",
    },
    {
        title: "8. Communication",
        body:
            "Primary communication channels are WhatsApp, email, and DMs. We ask that communication stays within these channels to avoid confusion. Phone calls must be scheduled in advance. Communication is handled during business hours only, Monday to Friday, 9am–5pm.",
    },
    {
        title: "9. Deadlines & Timeframes",
        body:
            "Project timelines begin once full payment and all required assets are received. Deadlines are guaranteed. Timelines do not pause due to client delays unless otherwise agreed. Rush jobs or short-notice requests within 72 hours for video projects are subject to a 50% additional fee.",
    },
    {
        title: "10. Progress & Updates",
        body:
            "Progress updates are provided automatically. Clients receive watermarked draft previews. Changes requested after the second draft count toward the revision limit. Final delivery is considered accepted unless issues are raised within the agreed review window.",
    },
    {
        title: "11. Delivery & Storage",
        body:
            "Files are delivered via WeTransfer unless otherwise agreed. We store video and general project files for approximately 30 days after delivery. Audio files are stored for up to one year. Long-term storage is not guaranteed.",
    },
    {
        title: "12. Liability & Responsibility",
        body:
            "We are not responsible for performance outcomes such as streams, views, sales, or engagement. We are not liable for issues caused by third-party platforms including social media sites or DSPs. Clients confirm they own or have permission to use all assets provided and accept responsibility for any copyright claims or strikes.",
    },
    {
        title: "13. Conduct & Termination",
        body:
            "We reserve the right to pause or terminate a project in cases of abuse, disrespect, or lack of cooperation. We also reserve the right to refuse projects that conflict with our values or safety standards.",
    },
    {
        title: "14. Final Notes",
        body:
            "Clients may request their files immediately after sessions and are encouraged to bring a memory stick or storage device if required. These terms are written in UK plain English with a slightly formal tone and are subject to change.",
    },
];

const TermsSection = () => {
    const [activeItem, setActiveItem] = useState(null);

    return (
        <section className="terms-section">
            <div className="terms-inner">
                <h1 className="terms-title reveal-hero-text">Terms &amp; Conditions</h1>
                <p className="terms-intro reveal-hero-text">
                    Below is a copy of our current Terms &amp; Conditions, outlining
                    how we collaborate, deliver work, and protect both the client and
                    ProjectTitle.
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
                <div className="terms-about">
                    <h2 className="terms-about-title">About Us</h2>
                    <p className="terms-about-copy">
                        We’re a British media platform built for the underground.
                        Inspired by the energy of old MTV and the mindset of pioneers
                        like Virgil Abloh, we’re here to bring excitement back into
                        the UK. Back when music, fashion, and culture felt shared,
                        loud, and alive. From grime to new underground movements, we
                        shine a light on what’s really happening before the
                        mainstream clocks it.
                    </p>
                    <p className="terms-about-copy">
                        Our aim is to bring UK scenes together, recreate that
                        nostalgic feeling of discovery, and build a properly
                        connected creative community again. Artists, people, moments,
                        culture all moving as one.
                    </p>
                    <p className="terms-about-copy">
                        This is for the next wave. For the ones outside. For the
                        culture. Welcome to the underground.
                    </p>
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
