import React from "react";
import CypherArtistsCarousel from "../components/CypherArtistsCarousel.jsx";

const ProjectBritania = () => {
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

                <CypherArtistsCarousel />
            </div>
        </section>
    );
};

export default ProjectBritania;
