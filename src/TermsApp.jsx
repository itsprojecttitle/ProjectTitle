import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TermsSection from "./sections/Terms.jsx";
import { initScrollAnimations } from "./utils/scrollAnimations.js";
import { initLinkTargets } from "./utils/linkTargets.js";

const TermsApp = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("bm-open", burgerOpen);
        return () => document.body.classList.remove("bm-open");
    }, [burgerOpen]);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") setBurgerOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => initScrollAnimations(), []);
    useEffect(() => initLinkTargets(), []);

    return (
        <div
            id="burger-root"
            className={`ember-burger-menu right bm--push bm-item--stack translucent-overlay ${
                burgerOpen ? "is-open" : ""
            }`}
        >
            <div className="bm-menu-container" onClick={(e) => e.stopPropagation()}>
                <nav
                    className="bm-menu"
                    aria-label="Mobile menu"
                    onClick={() => setBurgerOpen(false)}
                >
                    <a className="bm-menu-item" href="/#hero">
                        Home
                    </a>
                    <a className="bm-menu-item" href="/#portfolio">
                        Portfolio
                    </a>
                    <a className="bm-menu-item" href="/Gallery.html">
                        Gallery
                    </a>
                    <a className="bm-menu-item" href="/media.html">
                        Media
                    </a>
                    <a className="bm-menu-item" href="/#news">
                        News
                    </a>
                    <div className="bm-menu-footer">
                        <a className="bm-menu-item" href="/Terms.html">
                            Terms & Conditions
                        </a>
                        <a className="bm-menu-item" href="/Contact.html">
                            Contact us
                        </a>
                        <a className="bm-menu-item bm-menu-cta tw-bg-secondary tw-text-black" href="/BookNow.html">
                            Book Now
                        </a>
                    </div>
                </nav>
            </div>
            <div
                className="bm-outlet"
                onClick={() => {
                    if (burgerOpen) setBurgerOpen(false);
                }}
            >
                <div className="bm-content">
                    <Header
                        isMenuOpen={burgerOpen}
                        onToggleMenu={() => setBurgerOpen((open) => !open)}
                        homeHref="/#hero"
                        portfolioHref="/#portfolio"
                    />
                    <main>
                        <TermsSection />
                    </main>
                    <button
                        type="button"
                        className="back-to-top"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    >
                        Top
                    </button>
                    <hr className="tw-mt-4" />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default TermsApp;
