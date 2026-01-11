import React, { useEffect, useMemo, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ServicePackages from "./sections/ServicePackages";
import { serviceDetails } from "./data/serviceDetails";
import { initScrollAnimations } from "./utils/scrollAnimations";
import { initLinkTargets } from "./utils/linkTargets";

const ServicePackagesApp = () => {
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
                        <ServicePackages service={service} serviceKey={serviceKey} />
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

export default ServicePackagesApp;
