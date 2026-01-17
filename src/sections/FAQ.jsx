import React, { useEffect, useMemo, useRef, useState } from "react";

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
            "No, our roots are in the underground, but we are open to working across all sounds and styles.",
    },
    {
        question: "Do you offer packages or one-off services?",
        answer:
            "Yes, both. You may book a single service or build a full package around your project.",
    },
    {
        question: "Do you help with creative direction or just execution?",
        answer:
            "Yes, both. You are welcome to bring ideas, but most clients prefer us to structure and shape the final vision.",
    },
    {
        question: "Who do you work with?",
        answer:
            "We work with established artists, emerging talent building momentum, and anyone working toward that level.",
    },
    {
        question: "Do you work with brands and businesses?",
        answer:
            "Yes, we work with brands and businesses. We approach brands slightly differently, but the aim is the same: strong ideas, clean execution, and measurable results. We are actively looking to work with more brands, events, and businesses this year.",
    },
    {
        question: "How do I book or get in touch?",
        answer:
            "You can book or get in touch via DM, email, the website contact form, or the booking system.",
    },
    {
        question: "Are you London-based or UK-wide?",
        answer:
            "Yes, we are UK-wide and travel as required.",
    },
    {
        question: "Are prices public?",
        answer:
            "Yes, pricing is clear and upfront.",
    },
    {
        question: "Do you require a deposit?",
        answer:
            "No, we require full payment only.",
    },
    {
        question: "How long does a project take?",
        answer:
            "Most projects are completed within two weeks at most, and we typically aim for under five days. Faster turnarounds can be arranged.",
    },
    {
        question: "Do you offer revisions?",
        answer:
            "Yes, up to three revisions.",
    },
    {
        question: "What formats do you deliver in?",
        answer:
            "We deliver 4K video, vertical and horizontal formats, social media-ready edits, WAV files, stems, and more.",
    },
    {
        question: "Do clients receive raw files?",
        answer:
            "No, final edits only for video. Raw files for audio are provided only if requested.",
    },
    {
        question: "Do you help artists who don't know what they want yet?",
        answer:
            "Yes, that is part of the process.",
    },
    {
        question: "Do you do last-minute bookings?",
        answer:
            "Yes, we do last-minute bookings.",
    },
    {
        question: "Do you travel for shoots or sessions?",
        answer:
            "Yes, we travel for shoots or sessions.",
    },
    {
        question: "Is content kept confidential before release?",
        answer:
            "Yes, content is kept confidential before release.",
    },
    {
        question: "Do you help with distribution?",
        answer:
            "Yes, we do not only create content; we also help it reach the right audiences.",
    },
    {
        question: "Do you offer refunds?",
        answer:
            "Yes, partial refunds are available within 24 hours of purchase. If a project is cancelled or delayed, a full refund is issued.",
    },
    {
        question: "Can other creatives collaborate with or join the team?",
        answer:
            "Yes, we collaborate and are open to new creatives joining.",
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
            "Yes, we offer ongoing support and long-term collaborations.",
    },
    {
        question: "What should I know before booking?",
        answer:
            "Please arrive with clear aims, the right mindset, and positive energy. If you require same-day delivery, bring a memory stick.",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [featuredItems, setFeaturedItems] = useState([]);
    const touchStart = useRef(null);

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
        setFeaturedItems(pickRandom(faqItems, 2));
        const interval = setInterval(() => {
            setFeaturedItems(pickRandom(faqItems, 2));
        }, 20000);
        return () => clearInterval(interval);
    }, [pickRandom]);

    const openAt = (item) => {
        const index = faqItems.findIndex((faq) => faq.question === item.question);
        setActiveIndex(index >= 0 ? index : 0);
    };

    const close = () => setActiveIndex(null);
    const hasActive = activeIndex !== null;
    const activeItem = hasActive ? faqItems[activeIndex] : null;

    const next = () => {
        if (!hasActive) return;
        setActiveIndex((prev) => (prev + 1) % faqItems.length);
    };

    const prev = () => {
        if (!hasActive) return;
        setActiveIndex((prev) => (prev - 1 + faqItems.length) % faqItems.length);
    };

    const onTouchStart = (event) => {
        touchStart.current = event.touches[0].clientX;
    };

    const onTouchEnd = (event) => {
        if (touchStart.current === null) return;
        const delta = event.changedTouches[0].clientX - touchStart.current;
        touchStart.current = null;
        if (Math.abs(delta) < 40) return;
        if (delta < 0) next();
        else prev();
    };

    return (
        <section className="faq-section" id="faq">
            <div className="faq-inner">
                <h2 className="faq-title reveal-up">FAQ</h2>
                <div className="faq-grid">
                    {featuredItems.map((item) => (
                        <button
                            key={item.question}
                            type="button"
                            className="faq-item reveal-up"
                            onClick={() => openAt(item)}
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
                <div
                    className="faq-modal"
                    onClick={close}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <div
                        className="faq-modal-card faq-modal-card--fullscreen"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h3>{activeItem.question}</h3>
                        <p>{activeItem.answer}</p>
                        <div className="faq-modal-controls">
                            <button type="button" className="faq-modal-nav" onClick={prev}>
                                Prev
                            </button>
                            <button type="button" className="faq-modal-close" onClick={close}>
                                Close
                            </button>
                            <button type="button" className="faq-modal-nav" onClick={next}>
                                Next
                            </button>
                        </div>
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
