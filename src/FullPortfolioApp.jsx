import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FullPortfolio from "./pages/FullPortfolio.jsx";

const FullPortfolioApp = () => {
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

    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash;
            if (!hash) return;
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        };
        const onHashChange = () => scrollToHash();
        window.addEventListener("hashchange", onHashChange);
        requestAnimationFrame(scrollToHash);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    const handleNavigate = (event, id) => {
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    const triggerHeaderHide = () => {
        const header = document.getElementById("main-header");
        if (!header) return;
        header.classList.add("is-transitioning");
        window.setTimeout(() => header.classList.remove("is-transitioning"), 700);
    };

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
                    <a className="bm-menu-item" href="/#hero" onClick={triggerHeaderHide}>
                        Home
                    </a>
                    <a className="bm-menu-item" href="/#portfolio" onClick={triggerHeaderHide}>
                        Portfolio
                    </a>
                    <a className="bm-menu-item" href="" onClick={triggerHeaderHide}>
                        Donate
                    </a>
                    <a className="bm-menu-item" href="" onClick={triggerHeaderHide}>
                        Contact
                    </a>
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
                        onNavigate={handleNavigate}
                        homeHref="/#hero"
                        portfolioHref="/#portfolio"
                    />
                    <main>
                        <FullPortfolio />
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

export default FullPortfolioApp;
