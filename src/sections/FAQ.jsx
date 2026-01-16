import React, { useEffect, useMemo, useState } from "react";

const faqItems = [
    {
        question: "Who are you?",
        answer:
            "We're an anonymous British media team and creative collective. A group of creatives focused on making noise, creating focus, and pushing UK culture forward.",
    },
    {
        question: "What do you do?",
        answer:
            "We cover and create across the UK underground. Music videos, photography, audio recording, audio engineering, mastering, campaigns, social content, live coverage, and distribution.",
    },
    {
        question: "Which genres do you work with?",
        answer:
            "We've worked across grime, rap, drill, alt, Christian rap, and more. We're open to all styles of music and scenes.",
    },
    {
        question: "Do you only work within the UK underground?",
        answer:
            "Our roots are in the underground, but we're open to working across all sounds and styles.",
    },
    {
        question: "Do you offer packages or one-off services?",
        answer:
            "Both. You can book a single service or build a full package around your project.",
    },
    {
        question: "Do you help with creative direction or just execution?",
        answer:
            "Both. Bring ideas if you have them, but most clients trust us to pattern it and shape the final vision.",
    },
    {
        question: "Who do you work with?",
        answer:
            "Established artists, people building momentum, and anyone aiming to reach that level.",
    },
    {
        question: "Do you work with brands and businesses?",
        answer:
            "Yes. We approach brands slightly differently, but the aim is always the same. Strong ideas, clean execution, real results. We're actively looking to work with more brands, events, and businesses this year.",
    },
    {
        question: "How do I book or get in touch?",
        answer:
            "DM, email, website contact form, or booking system.",
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
            "No. Full payment only.",
    },
    {
        question: "How long does a project take?",
        answer:
            "Up to two weeks max, but we usually aim for under five days. Faster turnarounds can be arranged.",
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
            "Yes. That's part of the process.",
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
            "Yes. We don't just create content, we help get it seen.",
    },
    {
        question: "Do you offer refunds?",
        answer:
            "Partial refunds are available within 24 hours of purchase. If a project is cancelled or delayed, a full refund is issued.",
    },
    {
        question: "Can other creatives collaborate with or join the team?",
        answer:
            "Yes. We collaborate and we're open to new creatives joining.",
    },
    {
        question: "Do you accept unpaid projects?",
        answer:
            "Sometimes, depending on the cause and the cultural value.",
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
            "Come with the right mindset, clear aims and goals, and good energy. If you want your project taken home the same day, bring a memory stick.",
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
        }, 12000);
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
