import React, { useEffect } from "react";

const Header = ({ isMenuOpen, onToggleMenu, onNavigate }) => {
    useEffect(() => {
        const header = document.getElementById("main-header");
        if (!header) return;

        let lastY = window.scrollY;
        const onScroll = () => {
            const y = window.scrollY;
            header.classList.toggle("is-scrolled", y > 20);
            if (y > lastY && y > 80) header.classList.add("is-hidden");
            else header.classList.remove("is-hidden");
            lastY = y;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            id="main-header"
            className="tw-fixed tw-top-0 tw-z-20 tw-flex tw-h-[60px] tw-w-full tw-px-[5%] tw-text-white max-lg:tw-px-2 tw-justify-between lg:tw-justify-around tw-items-center tw-transition-transform tw-duration-300"
            style={{ top: 0, width: "100%", zIndex: 100 }}
        >
            <a href="/" aria-label="Project Title home">
                <img
                    src="/assets/logo.png"
                    alt="logo"
                    className="tw-h-[40px] tw-object-contain"
                />
            </a>

            <nav className="tw-flex tw-gap-6 max-lg:tw-hidden desktop-only">
                <a className="header-links" href="">
                    Home
                </a>
                <a
                    className="header-links"
                    href="#portfolio"
                    onClick={(event) => onNavigate(event, "portfolio")}
                >
                    Portfolio
                </a>
                <a className="header-links" href="">
                    Donate
                </a>
                <a className="header-links" href="">
                    Contact
                </a>
            </nav>

            <div className="tw-flex tw-place-items-center tw-gap-4 max-lg:tw-hidden desktop-only">
                <a
                    href="https://tally.so/r/woO0Kx"
                    aria-label="signup"
                    className="tw-flex tw-h-[40px] tw-place-items-center tw-gap-2 tw-bg-secondary tw-p-1 tw-px-4 tw-text-black tw-mt-1 tw-transition-colors tw-duration-[0.5s] hover:tw-bg-black hover:tw-text-white"
                >
                    <span>Book Now</span>
                </a>
            </div>

            <div className="tw-flex tw-items-center tw-gap-4 lg:tw-hidden mobile-only">
                <a
                    href="https://tally.so/r/woO0Kx"
                    aria-label="signup"
                    className="tw-flex tw-h-[40px] tw-place-items-center tw-gap-2 tw-bg-secondary tw-p-1 tw-px-4 tw-text-black tw-mt-1 tw-transition-colors tw-duration-[0.5s] hover:tw-bg-black hover:tw-text-white"
                >
                    <span>Book Now</span>
                </a>
                <button
                    id="burger-toggle"
                    className={`hamburger-button ${isMenuOpen ? "is-open" : ""}`}
                    aria-label="Toggle navigation"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                    onClick={(event) => {
                        event.stopPropagation();
                        onToggleMenu();
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
