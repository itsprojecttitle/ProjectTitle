import React, { useState } from "react";

const participants = [
    "Rez818",
    "Kyrxn",
    "S3l",
    "Tekortk",
    "Antz",
    "Bkaine",
    "Yerki",
    "Joutema",
];

const schedule = [
    {
        number: "01",
        title: "Photoshoot",
        copy: "Individual and group portraits to establish the visual identity of Project Britania.",
    },
    {
        number: "02",
        title: "Video introductions",
        copy: "Short character-led introductions with a Disney Channel-inspired energy.",
    },
    {
        number: "03",
        title: "Performances",
        copy: "Each artist performs two songs, joined by a transition and filmed from two angles.",
    },
    {
        number: "04",
        title: "Interviews & content",
        copy: "Closing interviews, TikTok videos and promotional content for upcoming releases.",
    },
];

const faqs = [
    {
        question: "Is it one track for everyone?",
        answer: "No. Everyone will perform over two backing tracks selected for their own performance.",
    },
    {
        question: "How many tracks?",
        answer: "Each artist performs two tracks, connected by a transition to create one continuous segment.",
    },
    {
        question: "Is it a freestyle?",
        answer: "This is a filmed performance rather than a live freestyle recording. The final video will use the original backing tracks, and no live performance audio will be used.",
    },
    {
        question: "How many camera angles and takes?",
        answer: "Two cameras will be set up: one directly in front of the performer and one positioned at the side. Final take requirements will be confirmed on the day.",
    },
    {
        question: "How will the day run?",
        answer: "We will begin with a photoshoot and Disney Channel-inspired video introductions, then move into the performances and interviews. The night will finish with TikTok videos and any upcoming-song promotional content artists want to record.",
    },
];

const ProjectBritania = () => {
    const [accessCode, setAccessCode] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(
        () => window.sessionStorage.getItem("britania-participant-access") === "granted"
    );
    const [accessError, setAccessError] = useState(false);

    const handleAccess = (event) => {
        event.preventDefault();
        const participantMatch = participants.some(
            (participant) => participant.toLowerCase() === accessCode.trim().toLowerCase()
        );
        if (participantMatch) {
            window.sessionStorage.setItem("britania-participant-access", "granted");
            setIsUnlocked(true);
            setAccessError(false);
            return;
        }
        setAccessError(true);
    };

    if (!isUnlocked) {
        return (
            <section className="britania-gate">
                <div className="britania-noise" aria-hidden="true" />
                <div className="britania-gate-stamp" aria-hidden="true">Restricted</div>
                <div className="britania-gate-panel">
                    <div className="britania-gate-meta">
                        <span>PT / PB-001</span>
                        <span>London · 19 September 2026</span>
                    </div>
                    <p className="britania-gate-label">ProjectTitle private network</p>
                    <h1>Project<br /><span>Britania</span></h1>
                    <p className="britania-gate-copy">
                        This production file is restricted to confirmed participants and crew.
                    </p>
                    <form onSubmit={handleAccess} className={accessError ? "has-error" : ""}>
                        <label htmlFor="britania-password">Enter access code</label>
                        <div className="britania-gate-input-row">
                            <input
                                id="britania-password"
                                type="password"
                                value={accessCode}
                                onChange={(event) => {
                                    setAccessCode(event.target.value);
                                    setAccessError(false);
                                }}
                                placeholder="••••••••"
                                autoComplete="off"
                                autoFocus
                            />
                            <button type="submit">Unlock <span aria-hidden="true">→</span></button>
                        </div>
                        <p className="britania-gate-status" role="status">
                            {accessError ? "Access denied — check the participant name." : "Access code: your participant name"}
                        </p>
                    </form>
                </div>
                <p className="britania-gate-disclaimer">Visual access screen only · No secure authentication</p>
            </section>
        );
    }

    return (
    <section className="britania-page">
        <div className="britania-noise" aria-hidden="true" />

        <div className="britania-hero">
            <div className="britania-eyebrow">
                <span>ProjectTitle presents</span>
                <span>London · 19 September 2026</span>
            </div>

            <div className="britania-title-wrap">
                <p className="britania-kicker">Freestyle cypher</p>
                <h1>Project<br />Britania</h1>
                <p className="britania-edition">Production planner / 001</p>
            </div>

            <div className="britania-hero-footer">
                <p>
                    Eight artists. Two tracks each. One connected visual performance.
                </p>
                <a href="#britania-brief">View the brief <span aria-hidden="true">↓</span></a>
            </div>
        </div>

        <div className="britania-content" id="britania-brief">
            <section className="britania-brief" aria-labelledby="brief-title">
                <div className="britania-section-label">01 / The brief</div>
                <div className="britania-brief-copy">
                    <h2 id="brief-title">A London cypher built around individual sound.</h2>
                    <p>
                        Project Britania brings eight emerging artists into one shared visual world.
                        Each participant performs two songs in a continuous segment, captured with a
                        direct front angle and a contrasting side angle.
                    </p>
                </div>

                <dl className="britania-facts">
                    <div><dt>Aim</dt><dd>Freestyle cypher</dd></div>
                    <div><dt>Requirement</dt><dd>2 songs per artist</dd></div>
                    <div><dt>Location</dt><dd>London</dd></div>
                    <div><dt>Date</dt><dd>19 September 2026</dd></div>
                    <div><dt>References</dt><dd>@ChannelUnlocked<br />@OnleVibez</dd></div>
                    <div><dt>Camera setup</dt><dd>Front + side</dd></div>
                    <div><dt>Artists</dt><dd>8 participants</dd></div>
                </dl>
            </section>

            <section className="britania-roster" aria-labelledby="roster-title">
                <div className="britania-section-label">02 / Participants</div>
                <div className="britania-section-heading">
                    <h2 id="roster-title">The roster</h2>
                    <span>08 artists</span>
                </div>
                <ol className="britania-roster-list">
                    {participants.map((participant, index) => (
                        <li key={participant}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <strong>{participant}</strong>
                            <em>Confirmed participant</em>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="britania-schedule" aria-labelledby="schedule-title">
                <div className="britania-section-label">03 / Shoot day</div>
                <div className="britania-section-heading">
                    <h2 id="schedule-title">Order of the day</h2>
                    <span>London</span>
                </div>
                <div className="britania-schedule-grid">
                    {schedule.map((item) => (
                        <article key={item.number}>
                            <span>{item.number}</span>
                            <h3>{item.title}</h3>
                            <p>{item.copy}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="britania-faq" aria-labelledby="project-faq-title">
                <div className="britania-section-label">04 / Common questions</div>
                <div className="britania-section-heading">
                    <h2 id="project-faq-title">Before the shoot</h2>
                    <span>What to expect</span>
                </div>
                <div className="britania-faq-list">
                    {faqs.map((item, index) => (
                        <details key={item.question} open={index === 0}>
                            <summary>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                {item.question}
                            </summary>
                            <p>{item.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            <aside className="britania-callout">
                <p>Come prepared</p>
                <h2>Two songs. Performance ready. Energy from the first take.</h2>
                <a href="mailto:itsprojecttitle@gmail.com?subject=Project%20Britania">Contact ProjectTitle</a>
            </aside>
        </div>
    </section>
    );
};

export default ProjectBritania;
