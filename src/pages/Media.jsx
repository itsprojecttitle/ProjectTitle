import React, { useEffect, useMemo, useRef, useState } from "react";

const Media = () => {
    const videos = useMemo(() => {
        const makeEmbed = (id) =>
            id
                ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1&mute=1`
                : null;
        const makeThumb = (id) => (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null);
        return [
            {
                id: "media-placeholder-10",
                label: "VhwKddvwxAk",
                title: "EHSI - Y.B (feat. Brooklyn Lodovico & Ceebo)",
                youtubeId: "VhwKddvwxAk",
            },
            {
                id: "media-placeholder-0",
                label: "lINkDzNWKIs",
                title: "PROJECTTITlE | ELZ LAURENT",
                youtubeId: "lINkDzNWKIs",
            },
            {
                id: "media-placeholder-1",
                label: "YvkWl7kLLEA",
                title: "Hawsa - DOUBLE AGENT / AMAZON (Dir. ProjectTitle)",
                youtubeId: "YvkWl7kLLEA",
            },
            {
                id: "media-placeholder-2",
                label: "DhI3eWrMNLI",
                title: "Reekz - INCH vs MILE (Dir. ProjectTitle)",
                youtubeId: "DhI3eWrMNLI",
            },
            {
                id: "media-placeholder-3",
                label: "nNdP0E6SGG8",
                title: "18k.Santana - New Foreign (OFFICIAL MUSIC VIDEO)",
                youtubeId: "nNdP0E6SGG8",
            },
            {
                id: "media-placeholder-4",
                label: "FiCyTmv6XRI",
                title: "DON'T STUTTER | PASSIVE",
                youtubeId: "FiCyTmv6XRI",
            },
            {
                id: "media-placeholder-5",
                label: "ydjeCVvDOO0",
                title: "SYST7M | DON'T STUTTER",
                youtubeId: "ydjeCVvDOO0",
            },
            {
                id: "media-placeholder-6",
                label: "s5Z0xc2Dtak",
                title: "RINSA MALONE x BAKEZ x KRXZE x YS - CAUGHT IN THE MIX (PROD by KLEO)",
                youtubeId: "s5Z0xc2Dtak",
            },
            {
                id: "media-placeholder-7",
                label: "WIX7eP3in0M",
                title: "PROJECTTITLE | KEKOTO",
                youtubeId: "WIX7eP3in0M",
            },
            {
                id: "media-placeholder-8",
                label: "2UmsNEwMaQ4",
                title: "PROJECTTITLE | 2BITFLAWLESS",
                youtubeId: "2UmsNEwMaQ4",
            },
            {
                id: "media-placeholder-9",
                label: "c7l0qwc1lhQ",
                title: "raychi - jane norman music video",
                youtubeId: "c7l0qwc1lhQ",
            },
        ].map((item) => ({
            ...item,
            url: makeEmbed(item.youtubeId),
            thumb: makeThumb(item.youtubeId),
        }));
    }, []);
    const [activeId, setActiveId] = useState(videos[0]?.id);
    const activeVideo = videos.find((item) => item.id === activeId) || videos[0];
    const trackRef = useRef(null);
    const baseWidthRef = useRef(0);

    const updateBaseWidth = () => {
        const track = trackRef.current;
        if (!track) return;
        const baseWidth = track.scrollWidth / 3;
        baseWidthRef.current = baseWidth;
        if (track.scrollLeft < baseWidth * 0.25) {
            track.scrollLeft = baseWidth;
        }
    };

    useEffect(() => {
        updateBaseWidth();
        window.addEventListener("resize", updateBaseWidth);
        return () => window.removeEventListener("resize", updateBaseWidth);
    }, [videos]);

    const jumpTo = (track, value) => {
        const previous = track.style.scrollBehavior;
        track.style.scrollBehavior = "auto";
        track.scrollLeft = value;
        requestAnimationFrame(() => {
            track.style.scrollBehavior = previous || "";
        });
    };

    const handleCarouselScroll = () => {
        const track = trackRef.current;
        if (!track) return;
        const baseWidth = baseWidthRef.current;
        if (!baseWidth) return;
        if (track.scrollLeft <= baseWidth * 0.1) {
            jumpTo(track, track.scrollLeft + baseWidth);
        } else if (track.scrollLeft >= baseWidth * 1.9) {
            jumpTo(track, track.scrollLeft - baseWidth);
        }
    };

    return (
        <section className="media-page-section">
            <div className="media-page-inner">
                <header className="media-page-header">
                    <h3 className="media-page-title reveal-up">Media</h3>
                    <p className="media-page-subtitle reveal-up">
                        ProjectTitle video highlights and recent work.
                    </p>
                    <div className="full-portfolio-socials full-portfolio-socials--title">
                        <a
                            href="/facebook.html"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/projecttitle/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a
                            href="https://x.com/ItsProjectTitle"
                            aria-label="X"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a
                            href="https://www.tiktok.com/@projecttitle"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-tiktok"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/@ProjectTitle"
                            aria-label="YouTube"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                </header>
                <div className="media-player">
                    <div className="media-player-frame">
                        {activeVideo?.url ? (
                            <iframe
                                src={activeVideo.url}
                                title={activeVideo.title || activeVideo.label}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        ) : (
                            <div className="media-player-empty">
                                {activeVideo?.title || activeVideo?.label || "Main Video"}
                            </div>
                        )}
                    </div>
                </div>
                <div className="media-carousel" aria-label="Video selections">
                    <div
                        className="media-carousel-track"
                        ref={trackRef}
                        onScroll={handleCarouselScroll}
                    >
                        {[...videos, ...videos, ...videos].map((item, index) => (
                            <button
                                key={`${item.id}-${index}`}
                                type="button"
                                className={`media-tile${item.id === activeId ? " is-active" : ""}`}
                                onClick={() => setActiveId(item.id)}
                            >
                                <div className="media-thumb-image">
                                    {item.thumb ? (
                                        <img src={item.thumb} alt={item.label} />
                                    ) : (
                                        <div className="media-thumb-empty">{item.label}</div>
                                    )}
                                </div>
                                <div className="media-thumb-title">{item.title || item.label}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Media;
