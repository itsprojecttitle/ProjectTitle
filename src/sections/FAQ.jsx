import React, { useEffect, useMemo, useState } from "react";

const faqItems = [
    {
        question: "Who are you?",
        answer:
            "We are an anonymous British media team and creative collective focused on amplifying culture, sharpening attention, and advancing UK creative scenes.",
    },
    {
        question: "What do you do?",
        answer:
            "We cover and create across the UK underground, including music videos, photography, audio recording, audio engineering, mastering, campaigns, social content, live coverage, and distribution.",
    },
    {
        question: "Which genres do you work with?",
        answer:
            "We have worked across grime, rap, drill, alternative, Christian rap, and more. We are open to all styles and scenes.",
    },
    {
        question: "Do you only work within the UK underground?",
        answer:
            "Our roots are in the underground, but we are open to working across all sounds and styles.",
    },
    {
        question: "Do you offer packages or one-off services?",
        answer:
            "Both. You may book a single service or build a full package around your project.",
    },
    {
        question: "Do you help with creative direction or just execution?",
        answer:
            "Both. You are welcome to bring ideas, but most clients prefer us to structure and shape the final vision.",
    },
    {
        question: "Who do you work with?",
        answer:
            "Established artists, emerging talent building momentum, and anyone working toward that level.",
    },
    {
        question: "Do you work with brands and businesses?",
        answer:
            "Yes. We approach brands slightly differently, but the aim is the same: strong ideas, clean execution, and measurable results. We are actively looking to work with more brands, events, and businesses this year.",
    },
    {
        question: "How do I book or get in touch?",
        answer:
            "DM, email, the website contact form, or the booking system.",
    },
    {
        question: "Are you London-based or UK-wide?",
        answer:
            "UK-wide. We travel.",
    },
    {
        question: "Are prices public?",
        answer:
            "Yes. Pricing is clear and upfront.",
    },
    {
        question: "Do you require a deposit?",
        answer:
            "No. We require full payment only.",
    },
    {
        question: "How long does a project take?",
        answer:
            "Up to two weeks at most, though we typically aim for under five days. Faster turnarounds can be arranged.",
    },
    {
        question: "Do you offer revisions?",
        answer:
            "Yes. Up to three revisions.",
    },
    {
        question: "What formats do you deliver in?",
        answer:
            "4K video, vertical and horizontal formats, social media-ready edits, WAV files, stems, and more.",
    },
    {
        question: "Do clients receive raw files?",
        answer:
            "Final edits only for video. Raw files for audio, unless requested otherwise.",
    },
    {
        question: "Do you help artists who don’t know what they want yet?",
        answer:
            "Yes. That is part of the process.",
    },
    {
        question: "Do you do last-minute bookings?",
        answer:
            "Yes.",
    },
    {
        question: "Do you travel for shoots or sessions?",
        answer:
            "Yes.",
    },
    {
        question: "Is content kept confidential before release?",
        answer:
            "Always.",
    },
    {
        question: "Do you help with distribution?",
        answer:
            "Yes. We do not only create content; we also help it reach the right audiences.",
    },
    {
        question: "Do you offer refunds?",
        answer:
            "Partial refunds are available within 24 hours of purchase. If a project is cancelled or delayed, a full refund is issued.",
    },
    {
        question: "Can other creatives collaborate with or join the team?",
        answer:
            "Yes. We collaborate and are open to new creatives joining.",
    },
    {
        question: "Do you accept unpaid projects?",
        answer:
            "Sometimes, depending on the cause and cultural value.",
    },
    {
        question: "Who owns the content?",
        answer:
            "The client owns the content.",
    },
    {
        question: "Can you use the content for your own promotion?",
        answer:
            "Only with permission from the client.",
    },
    {
        question: "Do you offer long-term partnerships?",
        answer:
            "Yes. We offer ongoing support and long-term collaborations.",
    },
    {
        question: "What should I know before booking?",
        answer:
            "Please arrive with clear aims, the right mindset, and positive energy. If you require same-day delivery, bring a memory stick.",
    },
];

const FAQ = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [featuredItems, setFeaturedItems] = useState([]);

    const pickRandom = useMemo(
        () => (items, count) => {
            const pool = items.slice();
            for (let i = pool.length - 1; i > 0; i -= 1) {
                const swapIndex = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[swapIndex]] = [pool[swapIndex], pool[i]];
            }
            return pool.slice(0, Math.min(count, pool.length));
        },
        []
    );

    useEffect(() => {
        setFeaturedItems(pickRandom(faqItems, 4));
        const interval = setInterval(() => {
            setFeaturedItems(pickRandom(faqItems, 4));
        }, 20000);
        return () => clearInterval(interval);
    }, [pickRandom]);

    return (
        <section className="faq-section">
            <div className="faq-inner">
                <h2 className="faq-title reveal-up">FAQ</h2>
                <div className="faq-grid">
                    {featuredItems.map((item) => (
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
                <div className="faq-actions">
                    <button
                        type="button"
                        className="faq-view-all"
                        onClick={() => setShowAll(true)}
                    >
                        View all FAQs
                    </button>
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

            {showAll ? (
                <div className="faq-modal" onClick={() => setShowAll(false)}>
                    <div
                        className="faq-modal-card faq-modal-card--full"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h3>FAQs</h3>
                        <div className="faq-modal-list">
                            {faqItems.map((item) => (
                                <div className="faq-modal-item" key={item.question}>
                                    <h4>{item.question}</h4>
                                    <p>{item.answer}</p>
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            className="faq-modal-close"
                            onClick={() => setShowAll(false)}
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
