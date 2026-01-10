import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Articles from "./sections/Articles.jsx";
import { initScrollAnimations } from "./utils/scrollAnimations.js";
import { initLinkTargets } from "./utils/linkTargets.js";

const App = () => {
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
            const navEntry = performance.getEntriesByType("navigation")[0];
            const isReload = navEntry && navEntry.type === "reload";
            const hash = window.location.hash;
            if (isReload && hash) {
                window.history.replaceState(null, "", window.location.pathname);
            }
            const target = !isReload && hash ? document.querySelector(hash) : null;
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
                try {
                    sessionStorage.removeItem("scrollTarget");
                } catch (error) {
                    // ignore storage failures
                }
                return;
            }
            try {
                const fallbackId = sessionStorage.getItem("scrollTarget");
                if (!fallbackId) return;
                const fallbackTarget = document.getElementById(fallbackId);
                if (fallbackTarget) {
                    fallbackTarget.scrollIntoView({ behavior: "smooth" });
                    sessionStorage.removeItem("scrollTarget");
                }
            } catch (error) {
                // ignore storage failures
            }
            const hero = document.getElementById("hero");
            if (hero) hero.scrollIntoView({ behavior: "smooth" });
        };
        const onHashChange = () => scrollToHash();
        window.addEventListener("hashchange", onHashChange);
        requestAnimationFrame(scrollToHash);
        window.addEventListener("load", scrollToHash);
        return () => {
            window.removeEventListener("hashchange", onHashChange);
            window.removeEventListener("load", scrollToHash);
        };
    }, []);

    useEffect(() => initScrollAnimations(), []);
    useEffect(() => initLinkTargets(), []);
    useEffect(() => {
        const toggleFloating = () => {
            const y = window.scrollY;
            const shouldHide = y < 80;
            document.querySelectorAll(".back-to-top, .social-float").forEach((el) => {
                el.classList.toggle("is-hidden", shouldHide);
            });
        };
        toggleFloating();
        window.addEventListener("scroll", toggleFloating, { passive: true });
        return () => window.removeEventListener("scroll", toggleFloating);
    }, []);

    const handleNavigate = (event, id) => {
        if (!id) return;
        if (event?.currentTarget?.target === "_blank") return;
        const target = document.getElementById(id);
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    const triggerHeaderHide = () => {
        const header = document.getElementById("main-header");
        if (!header) return;
        if (header.classList.contains("is-peek")) return;
        header.classList.add("is-transitioning");
        window.setTimeout(() => header.classList.remove("is-transitioning"), 700);
    };
    const showHeaderInstant = (duration = 3000) => {
        const header = document.getElementById("main-header");
        if (!header) return;
        header.classList.add("is-instant");
        header.classList.remove("is-transitioning");
        header.classList.remove("is-hidden");
        header.classList.add("is-peek");
        window.setTimeout(() => header.classList.remove("is-instant"), 0);
        window.setTimeout(() => header.classList.remove("is-peek"), duration);
    };
    const peekHeader = () => showHeaderInstant(3000);

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
                    <a
                        className="bm-menu-item"
                        href="/#hero"
                        onClick={() => {
                            peekHeader();
                            triggerHeaderHide();
                        }}
                    >
                        Home
                    </a>
                    <a
                        className="bm-menu-item"
                        href="#portfolio"
                        onClick={(event) => {
                            peekHeader();
                            triggerHeaderHide();
                            handleNavigate(event, "portfolio");
                            setBurgerOpen(false);
                        }}
                    >
                        Portfolio
                    </a>
                    <a
                        className="bm-menu-item"
                        href="/Gallery.html"
                        onClick={() => {
                            peekHeader();
                            triggerHeaderHide();
                        }}
                    >
                        Gallery
                    </a>
                    <a
                        className="bm-menu-item"
                        href="/media.html"
                        onClick={() => {
                            peekHeader();
                            triggerHeaderHide();
                        }}
                    >
                        Media
                    </a>
                    <a
                        className="bm-menu-item"
                        href="/#news"
                        onClick={() => {
                            peekHeader();
                            triggerHeaderHide();
                        }}
                    >
                        News
                    </a>
                    <div className="bm-menu-footer">
                        <a className="bm-menu-item" href="/Terms.html">
                            Terms & Conditions
                        </a>
                        <a className="bm-menu-item" href="/Contact.html">
                            Contact us
                        </a>
                        <a
                            className="bm-menu-item bm-menu-cta tw-bg-secondary tw-text-black"
                            href="/BookNow.html"
                            onClick={() => {
                                peekHeader();
                                triggerHeaderHide();
                            }}
                            style={{ color: "#000" }}
                        >
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
                        onNavigate={handleNavigate}
                        homeHref="/#hero"
                        portfolioHref="/#portfolio"
                    />
                    <main>
                        <Hero />
                        <Portfolio />
                        <Articles />
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

export default App;
