import React from "react";

const placeholders = Array.from({ length: 6 }, (_, index) => ({
    id: `media-placeholder-${index}`,
}));

const Media = () => (
    <section className="media-page-section">
        <div className="media-page-inner">
            <header className="media-page-header">
                <h3 className="media-page-title reveal-up">Media</h3>
                <p className="media-page-subtitle reveal-up">
                    ProjectTitle video highlights and recent work.
                </p>
            </header>
            <div className="media-player">
                <div className="media-player-frame">
                    <div className="media-player-empty">Main Video</div>
                </div>
            </div>
            <div className="media-carousel" aria-label="Video carousel">
                <div className="media-carousel-track">
                    {placeholders.map((item) => (
                        <div key={item.id} className="media-thumb is-placeholder">
                            <div className="media-thumb-image">
                                <div className="media-thumb-empty">Video</div>
                            </div>
                            <div className="media-thumb-title">Coming soon</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Media;
