import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.config({ ignoreMobileResize: true });

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

        const refresh = () => {
            ScrollTrigger.refresh();
        };
        window.addEventListener("load", refresh);
        window.addEventListener("resize", refresh);
        window.addEventListener("orientationchange", refresh);

        return () => {
            window.removeEventListener("load", refresh);
            window.removeEventListener("resize", refresh);
            window.removeEventListener("orientationchange", refresh);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const handleNavigate = (event, id) => {
        if (!id) return;
        event.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
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
                    <a className="bm-menu-item" href="/">
                        Home
                    </a>
                    <a
                        className="bm-menu-item"
                        href="#portfolio"
                        onClick={(event) => {
                            handleNavigate(event, "portfolio");
                            setBurgerOpen(false);
                        }}
                    >
                        Portfolio
                    </a>
                    <a className="bm-menu-item" href="">
                        Donate
                    </a>
                    <a className="bm-menu-item" href="">
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
                    />
                    <main>
                        <Hero />
                        <Portfolio />
                        <Services />
                        <Events />
                        <Mission />
                        <Articles />
                    </main>
                    <hr className="tw-mt-4" />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
