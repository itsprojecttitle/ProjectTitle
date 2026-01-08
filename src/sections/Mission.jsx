import React from "react";

const Mission = () => (
    <section className="mission-section">
        <div className="mission-inner">
            <header className="mission-header">
                <h2 className="mission-title">Production Workflow</h2>
                <p className="mission-subtitle">
                    A clear, creative pipeline from idea to final delivery.
                </p>
            </header>
            <div className="mission-flow">
                <div className="mission-step">
                    <div className="mission-icon">
                        <svg viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M24 6a10 10 0 0 1 6 18l-2 2v4H20v-4l-2-2a10 10 0 0 1 6-18z" />
                            <path d="M18 34h12M19 40h10" />
                        </svg>
                    </div>
                    <span className="mission-label">Idea & Planning</span>
                </div>
                <div className="mission-arrow" aria-hidden="true">
                    <span>→</span>
                </div>
                <div className="mission-step">
                    <div className="mission-icon">
                        <svg viewBox="0 0 48 48" aria-hidden="true">
                            <rect x="12" y="8" width="24" height="32" rx="3" />
                            <path d="M18 14h12M18 20h12M18 26h8" />
                            <path d="M28 30l6 6" />
                        </svg>
                    </div>
                    <span className="mission-label">Preparation</span>
                </div>
                <div className="mission-arrow" aria-hidden="true">
                    <span>→</span>
                </div>
                <div className="mission-step">
                    <div className="mission-icon">
                        <svg viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M8 16h14l4 4h14v18H8z" />
                            <circle cx="32" cy="30" r="5" />
                            <path d="M32 24v2M32 34v2M26 30h2M36 30h2" />
                        </svg>
                    </div>
                    <span className="mission-label">Organization</span>
                </div>
                <div className="mission-arrow" aria-hidden="true">
                    <span>→</span>
                </div>
                <div className="mission-step">
                    <div className="mission-icon">
                        <svg viewBox="0 0 48 48" aria-hidden="true">
                            <rect x="10" y="14" width="20" height="16" rx="2" />
                            <path d="M30 18l8-4v16l-8-4" />
                            <circle cx="20" cy="22" r="3" />
                        </svg>
                    </div>
                    <span className="mission-label">Execution</span>
                </div>
                <div className="mission-arrow" aria-hidden="true">
                    <span>→</span>
                </div>
                <div className="mission-step">
                    <div className="mission-icon">
                        <svg viewBox="0 0 48 48" aria-hidden="true">
                            <rect x="10" y="12" width="28" height="20" rx="2" />
                            <path d="M16 18h16M16 24h10" />
                            <path d="M24 32l6 8" />
                        </svg>
                    </div>
                    <span className="mission-label">Editing</span>
                </div>
                <div className="mission-arrow" aria-hidden="true">
                    <span>→</span>
                </div>
                <div className="mission-step">
                    <div className="mission-icon">
                        <svg viewBox="0 0 48 48" aria-hidden="true">
                            <rect x="10" y="12" width="28" height="20" rx="2" />
                            <path d="M16 16h16M16 22h12M16 28h8" />
                            <path d="M32 34l6 6" />
                        </svg>
                    </div>
                    <span className="mission-label">Finishing</span>
                </div>
                <div className="mission-arrow" aria-hidden="true">
                    <span>→</span>
                </div>
                <div className="mission-step">
                    <div className="mission-icon">
                        <svg viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M12 34V20M22 34V14M32 34V24" />
                            <path d="M14 10l6 6 10-12" />
                        </svg>
                    </div>
                    <span className="mission-label">Results</span>
                </div>
            </div>
        </div>
    </section>
);

export default Mission;
