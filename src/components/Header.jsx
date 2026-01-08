import React, { useEffect, useState } from "react";

const Header = ({
    isMenuOpen,
    onToggleMenu,
    onNavigate,
    homeHref = "/#hero",
    portfolioHref = "/#portfolio",
}) => {
    const [isPeek, setIsPeek] = useState(false);
    const triggerHeaderHide = () => {
        const header = document.getElementById("main-header");
        if (!header) return;
        header.classList.add("is-transitioning");
        window.setTimeout(() => header.classList.remove("is-transitioning"), 700);
    };
    const isHomePath = () => {
        const path = window.location.pathname;
        return path === "/" || path.endsWith("/index.html") || path.endsWith("/Home.html");
    };

    const handleNavClick = (event, id, href) => {
        if (!href) return;
        if (href.startsWith("#") && onNavigate) {
            onNavigate(event, id);
            return;
        }
        if (href.startsWith("/#")) {
            event.preventDefault();
            if (isHomePath()) {
                onNavigate?.(event, id);
            } else {
                try {
                    if (id) sessionStorage.setItem("scrollTarget", id);
                } catch (error) {
                    // ignore storage failures
                }
                window.location.assign(href);
            }
        }
    };
    const handleLogoClick = (event) => {
        const isHomePath =
            window.location.pathname === "/" ||
            window.location.pathname.endsWith("/index.html");
        const isHomeAnchor = homeHref.startsWith("#") || homeHref.startsWith("/#");
        if (isHomePath && isHomeAnchor) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };
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

    const isBookNowPage = window.location.pathname.endsWith("/BookNow.html");

    return (
        <>
            <div
                className="header-hover-zone"
                onMouseEnter={() => setIsPeek(true)}
                onMouseLeave={() => setIsPeek(false)}
                aria-hidden="true"
            />
            <header
                id="main-header"
                className={`tw-fixed tw-top-0 tw-z-20 tw-flex tw-h-[60px] tw-w-full tw-px-[5%] tw-text-white max-lg:tw-px-2 tw-justify-between lg:tw-justify-around tw-items-center tw-transition-transform tw-duration-300 ${
                    isPeek ? "is-peek" : ""
                }`}
                style={{ top: 0, width: "100%", zIndex: 100 }}
                onMouseEnter={() => setIsPeek(true)}
                onMouseLeave={() => setIsPeek(false)}
            >
            <a
                href={homeHref}
                aria-label="Project Title home"
                onClick={handleLogoClick}
                className="header-logo"
            >
                <img
                    src="/assets/logo.png"
                    alt="logo"
                    className="site-logo tw-h-[40px] tw-object-contain"
                />
            </a>

            <div className="header-cta-wrap tw-flex tw-place-items-center tw-gap-6 max-lg:tw-hidden desktop-only">
                <nav className="header-nav-center tw-flex tw-gap-6">
                    <a
                        className="header-links"
                        href={homeHref}
                        onClick={(event) => {
                            triggerHeaderHide();
                            handleLogoClick(event);
                            handleNavClick(event, "hero", homeHref);
                        }}
                    >
                        Home
                    </a>
                    <a
                        className="header-links"
                        href={portfolioHref}
                        onClick={(event) =>
                            (() => {
                                triggerHeaderHide();
                                handleNavClick(event, "portfolio", portfolioHref);
                            })()
                        }
                    >
                        Portfolio
                    </a>
                    <a className="header-links" href="/Gallery.html" onClick={triggerHeaderHide}>
                        Gallery
                    </a>
                    <a className="header-links" href="/media.html" onClick={triggerHeaderHide}>
                        Media
                    </a>
                </nav>
                <a
                    href={isBookNowPage ? "/" : "/BookNow.html"}
                    aria-label="signup"
                    className="header-cta tw-flex tw-h-[40px] tw-place-items-center tw-gap-2 tw-bg-secondary tw-p-1 tw-px-4 tw-text-black tw-mt-1 tw-transition-colors tw-duration-[0.5s] hover:tw-bg-black hover:tw-text-white"
                    onClick={triggerHeaderHide}
                >
                    <span>{isBookNowPage ? "Home" : "Book Now"}</span>
                </a>
            </div>

            <div className="tw-flex tw-items-center tw-gap-4 lg:tw-hidden mobile-only">
                <a
                    className="header-links"
                    href={homeHref}
                    onClick={(event) => {
                        triggerHeaderHide();
                        handleLogoClick(event);
                        handleNavClick(event, "hero", homeHref);
                    }}
                >
                    Home
                </a>
                <a
                    href={isBookNowPage ? "/" : "/BookNow.html"}
                    aria-label="signup"
                    className="header-cta tw-flex tw-h-[40px] tw-place-items-center tw-gap-2 tw-bg-secondary tw-p-1 tw-px-4 tw-text-black tw-mt-1 tw-transition-colors tw-duration-[0.5s] hover:tw-bg-black hover:tw-text-white"
                    onClick={triggerHeaderHide}
                >
                    <span>{isBookNowPage ? "Home" : "Book Now"}</span>
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
        </>
    );
};

export default Header;
