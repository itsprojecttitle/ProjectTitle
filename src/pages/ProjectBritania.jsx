import React, { useRef } from "react";

const artists = [
    { name: "Kyrxn", image: "/assets/cypher/kyrxn.png" },
    { name: "TkorTeko", image: "/assets/cypher/tk.png" },
    { name: "S3l", image: "/assets/cypher/s3l.png" },
    { name: "Rez818", image: "/assets/cypher/rez818.png" },
    { name: "Yerki", image: "/assets/cypher/yerki.png" },
    { name: "Joutema", image: "/assets/cypher/joutema.png" },
    { name: "Antzz", image: "/assets/cypher/antzz.png" },
];

const ProjectBritania = () => {
    const carouselRef = useRef(null);

    const moveCarousel = (direction) => {
        const track = carouselRef.current;
        if (!track) return;
        const card = track.querySelector(".cypher-artist-card");
        const distance = card ? card.getBoundingClientRect().width + 18 : 280;
        track.scrollBy({ left: direction * distance, behavior: "smooth" });
    };

    return (
        <section className="cypher-page">
            <div className="cypher-inner">
                <header className="cypher-heading">
                    <p className="cypher-eyebrow">ProjectTitle presents</p>
                    <h1>British Underground Cypher 2026</h1>
                </header>

                <div className="cypher-feature-video">
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/Qkn_FJuPQrw?rel=0"
                        title="ProjectTitle CYPHER — full video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>

                <section className="cypher-credits" aria-label="Project credits">
                    <div className="cypher-credit-block cypher-credit-lineup">
                        <p className="cypher-eyebrow">Lineup</p>
                        <p>S3l · Rez · Yerki · Joutema · Antzz · Kyrxn · TkorTeko</p>
                    </div>
                    <div className="cypher-credit-grid">
                        <div className="cypher-credit-block">
                            <p className="cypher-eyebrow">Filmed and edited by</p>
                            <p>Samuel Apata</p>
                        </div>
                        <div className="cypher-credit-block">
                            <p className="cypher-eyebrow">Directed by</p>
                            <p>ProjectTitle</p>
                        </div>
                        <div className="cypher-credit-block">
                            <p className="cypher-eyebrow">Behind the scenes</p>
                            <p>Clueless, LT Music</p>
                        </div>
                        <div className="cypher-credit-block">
                            <p className="cypher-eyebrow">Director of photography</p>
                            <p>Shot_By_Az</p>
                        </div>
                        <div className="cypher-credit-block">
                            <p className="cypher-eyebrow">Social media</p>
                            <p>Supreme Blondie</p>
                        </div>
                    </div>
                </section>

                <section className="cypher-artists" aria-labelledby="cypher-artists-title">
                    <div className="cypher-carousel-heading">
                        <div>
                            <p className="cypher-eyebrow">The artists</p>
                            <h2 id="cypher-artists-title">Meet the lineup</h2>
                        </div>
                        <div className="cypher-carousel-controls">
                            <button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous artists">←</button>
                            <button type="button" onClick={() => moveCarousel(1)} aria-label="Next artists">→</button>
                        </div>
                    </div>
                    <div className="cypher-carousel" ref={carouselRef} aria-label="Cypher artists">
                        {artists.map((artist, index) => (
                            <article className="cypher-artist-card" key={artist.name}>
                                <div className="cypher-artist-image">
                                    <img src={artist.image} alt={`${artist.name} — CYPHER`} loading={index > 2 ? "lazy" : "eager"} />
                                </div>
                                <h3>{artist.name}</h3>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ProjectBritania;
