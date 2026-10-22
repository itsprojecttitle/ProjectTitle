import React, { useRef } from "react";
import { cypherArtists } from "../data/cypherArtists.js";

const CypherArtistsCarousel = ({ eyebrow = "The artists", title = "Meet the lineup" }) => {
    const carouselRef = useRef(null);

    const moveCarousel = (direction) => {
        const track = carouselRef.current;
        if (!track) return;
        const card = track.querySelector(".cypher-artist-card");
        const distance = card ? card.getBoundingClientRect().width + 18 : 280;
        track.scrollBy({ left: direction * distance, behavior: "smooth" });
    };

    return (
        <section className="cypher-artists" aria-label="British Underground Cypher 2026 artists">
            <div className="cypher-carousel-heading">
                <div>
                    <p className="cypher-eyebrow">{eyebrow}</p>
                    <h2>{title}</h2>
                </div>
                <div className="cypher-carousel-controls">
                    <button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous artists">←</button>
                    <button type="button" onClick={() => moveCarousel(1)} aria-label="Next artists">→</button>
                </div>
            </div>
            <div className="cypher-carousel" ref={carouselRef} aria-label="Cypher artists">
                {cypherArtists.map((artist, index) => (
                    <article className="cypher-artist-card" key={artist.name}>
                        <a href={artist.video} target="_blank" rel="noreferrer" aria-label={`Watch ${artist.name}'s CYPHER video on YouTube`}>
                            <div className="cypher-artist-image">
                                <img src={artist.image} alt={`${artist.name} — CYPHER`} loading={index > 2 ? "lazy" : "eager"} />
                            </div>
                            <h3>{artist.name}</h3>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default CypherArtistsCarousel;
