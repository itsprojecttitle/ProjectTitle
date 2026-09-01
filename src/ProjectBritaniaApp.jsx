import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProjectBritania from "./pages/ProjectBritania.jsx";

const ProjectBritaniaApp = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);

    useEffect(() => {
        document.body.classList.add("britania-body");
        document.body.classList.toggle("bm-open", burgerOpen);
        return () => {
            document.body.classList.remove("britania-body", "bm-open");
        };
    }, [burgerOpen]);

    useEffect(() => {
        const closeMenu = (event) => {
            if (event.key === "Escape") setBurgerOpen(false);
        };
        window.addEventListener("keydown", closeMenu);
        return () => window.removeEventListener("keydown", closeMenu);
    }, []);

    return (
        <div
            id="burger-root"
            className={`ember-burger-menu right bm--push bm-item--stack translucent-overlay ${burgerOpen ? "is-open" : ""}`}
        >
            <div className="bm-menu-container" onClick={(event) => event.stopPropagation()}>
                <nav className="bm-menu" aria-label="Mobile menu" onClick={() => setBurgerOpen(false)}>
                    <a className="bm-menu-item bm-menu-cta tw-bg-secondary" href="/BookNow.html">Book Now</a>
                    <a className="bm-menu-item" href="/#hero">Home</a>
                    <a className="bm-menu-item" href="/#portfolio">Portfolio</a>
                    <a className="bm-menu-item" href="/Gallery.html">Gallery</a>
                    <a className="bm-menu-item" href="/media.html">Media</a>
                    <a className="bm-menu-item" href="/Project-Britania.html">Project Britania</a>
                    <a className="bm-menu-item" href="/Contact.html">Contact us</a>
                </nav>
            </div>

            <div className="bm-outlet" onClick={() => burgerOpen && setBurgerOpen(false)}>
                <div className="bm-content">
                    <Header
                        isMenuOpen={burgerOpen}
                        onToggleMenu={() => setBurgerOpen((open) => !open)}
                        homeHref="/#hero"
                        portfolioHref="/#portfolio"
                        ctaLabel="Enquire"
                    />
                    <main><ProjectBritania /></main>
                    <button
                        type="button"
                        className="back-to-top"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        Top
                    </button>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default ProjectBritaniaApp;
