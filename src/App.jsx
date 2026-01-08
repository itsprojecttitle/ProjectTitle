import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Services from "./sections/Services.jsx";
import Events from "./sections/Events.jsx";
import Mission from "./sections/Mission.jsx";
import Articles from "./sections/Articles.jsx";

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

    useEffect(() => {
        if (!window.gsap || !window.ScrollTrigger) return;

        const { gsap, ScrollTrigger } = window;
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(".reveal-hero-text, .reveal-up", { opacity: 0, y: 18 });

        const sections = gsap.utils.toArray("section");
        sections.forEach((sec) => {
            const revealTimeline = gsap.timeline({
                paused: true,
                scrollTrigger: {
                    trigger: sec,
                    start: "10% 80%",
                    end: "20% 90%",
                },
            });

            revealTimeline.to(
                sec.querySelectorAll(".reveal-hero-text, .reveal-up"),
                {
                    opacity: 1,
                    duration: 0.8,
                    y: 0,
                    stagger: 0.2,
                }
            );
        });

        const textTargets = gsap.utils.toArray(
            "main h1, main h2, main h3, main h4, main p, main a, main i, main span, main button"
        );
        textTargets.forEach((target) => {
            gsap.to(target, {
                yPercent: -6,
                ease: "none",
                scrollTrigger: {
                    trigger: target,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.6,
                },
            });
        });

        const boxTargets = gsap.utils.toArray(
            ".portfolio-mosaic-card, .event-card, .article-card, .media-card"
        );
        boxTargets.forEach((target) => {
            gsap.to(target, {
                yPercent: -4,
                ease: "none",
                scrollTrigger: {
                    trigger: target,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.7,
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
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
                    <a
                        className="bm-menu-item"
                        href="#portfolio"
                        onClick={(event) => {
                            triggerHeaderHide();
                            handleNavigate(event, "portfolio");
                            setBurgerOpen(false);
                        }}
                    >
                        Portfolio
                    </a>
                    <div className="bm-menu-sub">
                        <a className="bm-menu-item" href="/media.html" onClick={triggerHeaderHide}>
                            Media
                        </a>
                        <a className="bm-menu-item" href="/full-portfolio.html" onClick={triggerHeaderHide}>
                            Gallery
                        </a>
                    </div>
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
                        <Hero />
                        <Portfolio />
                        <Services />
                        <Events />
                        <Mission />
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
