import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FullPortfolio from "./pages/FullPortfolio.jsx";
import { initScrollAnimations } from "./utils/scrollAnimations.js";
import { initLinkTargets } from "./utils/linkTargets.js";

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

    useEffect(() => initScrollAnimations(), []);
    useEffect(() => initLinkTargets(), []);

    useEffect(() => {
        if (!window.gsap || !window.ScrollTrigger) return;

        const { gsap, ScrollTrigger } = window;
        gsap.registerPlugin(ScrollTrigger);

        const title = document.querySelector(".full-portfolio-title");
        if (title) {
            gsap.fromTo(
                title,
                { autoAlpha: 0, y: 18 },
                { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" }
            );
        }

        const mainPhoto = document.querySelector(
            ".full-portfolio-main .full-portfolio-photo"
        );
        if (mainPhoto) {
            gsap.fromTo(
                mainPhoto,
                { autoAlpha: 0, y: 20 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: mainPhoto,
                        start: "top 85%",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        }

        const cards = gsap.utils.toArray(".full-portfolio-card");
        cards.forEach((card, index) => {
            const offset = index % 2 === 0 ? -70 : 70;
            gsap.fromTo(
                card,
                { autoAlpha: 0, x: offset },
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
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
                    <a className="bm-menu-item" href="/Gallery.html" onClick={triggerHeaderHide}>
                        Gallery
                    </a>
                    <a className="bm-menu-item" href="/media.html" onClick={triggerHeaderHide}>
                        Media
                    </a>
                    <a className="bm-menu-item" href="/#news" onClick={triggerHeaderHide}>
                        News
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
