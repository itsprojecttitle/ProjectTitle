import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ServiceDetail from "./sections/ServiceDetail.jsx";
import { initScrollAnimations } from "./utils/scrollAnimations.js";
import { initLinkTargets } from "./utils/linkTargets.js";
import { serviceDetails } from "./data/serviceDetails.js";
import { addScrollListener, getScrollTop } from "./utils/scrollRoot.js";
import FloatingWidget from "./components/FloatingWidget.jsx";

const ServiceDetailApp = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const serviceKey = useMemo(
        () => document.body.dataset.service || "videography",
        []
    );
    const service = serviceDetails[serviceKey];

    useEffect(() => {
        document.body.classList.toggle("bm-open", burgerOpen);
        return () => document.body.classList.remove("bm-open");
    }, [burgerOpen]);

    useEffect(() => {
        document.body.classList.add("service-page");
        return () => document.body.classList.remove("service-page");
    }, []);

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
        let lastY = getScrollTop();
        const toggleFloating = () => {
            const y = getScrollTop();
            const scrollingDown = y > lastY;
            const shouldHide = y > 80 && scrollingDown;
            document.querySelectorAll(".back-to-top, .social-float:not(.contact-social-float), #sb_ai_widget, .sb_ai_widget-v2, #sb_ai_widget iframe, .sb_ai_widget-v2 iframe").forEach((el) => {
                el.classList.toggle("is-hidden", shouldHide);
            });
            lastY = y;
        };
        toggleFloating();
        const cleanup = addScrollListener(toggleFloating);
        return cleanup;
    }, []);

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
                    <a className="bm-menu-item bm-menu-cta tw-bg-secondary" href="/BookNow.html">
                        Book Now
                    </a>
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

                        <a className="bm-menu-item" href="/Contact.html">
                            Contact us
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
                        homeHref="/#hero"
                        portfolioHref="/#portfolio"
                    />
                    <main>
                        <ServiceDetail service={service} serviceKey={serviceKey} />
                    </main>
                    <FloatingWidget />
                    <button
                        type="button"
                        className="back-to-top"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    >
                        Top
                    </button>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailApp;
