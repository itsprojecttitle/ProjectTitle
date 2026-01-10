import React, { useState } from "react";

const faqItems = [
    {
        question: "What services do you offer?",
        answer:
            "Creative direction, full production, and post-production across music, branded content, and campaigns.",
    },
    {
        question: "How do we start a project?",
        answer:
            "Share your brief and goals. We’ll align on scope, timeline, and deliverables before production.",
    },
    {
        question: "Do you work with independent artists?",
        answer:
            "Yes. We collaborate with independent artists and labels on projects of all sizes.",
    },
    {
        question: "What’s the typical turnaround?",
        answer:
            "It varies by scope, but most edits land within 1–3 weeks after production.",
    },
];

const FAQ = () => {
    const [activeItem, setActiveItem] = useState(null);

    return (
        <section className="faq-section">
            <div className="faq-inner">
                <h2 className="faq-title reveal-up">FAQ</h2>
                <div className="faq-grid">
                    {faqItems.map((item) => (
                        <button
                            key={item.question}
                            type="button"
                            className="faq-item reveal-up"
                            onClick={() => setActiveItem(item)}
                        >
                            <h3>{item.question}</h3>
                            <p>{item.answer}</p>
                        </button>
                    ))}
                </div>
            </div>

            {activeItem ? (
                <div className="faq-modal" onClick={() => setActiveItem(null)}>
                    <div className="faq-modal-card" onClick={(event) => event.stopPropagation()}>
                        <h3>{activeItem.question}</h3>
                        <p>{activeItem.answer}</p>
                        <button
                            type="button"
                            className="faq-modal-close"
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

export default FAQ;
