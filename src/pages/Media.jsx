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
            <div className="social-float">
                <a href="/facebook.html" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/projecttitle/">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://x.com/ItsProjectTitle" aria-label="X">
                    <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.tiktok.com/@projecttitle">
                    <i className="bi bi-tiktok"></i>
                </a>
                <a href="https://www.youtube.com/@ProjectTitle" aria-label="YouTube">
                    <i className="bi bi-youtube"></i>
                </a>
            </div>
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
