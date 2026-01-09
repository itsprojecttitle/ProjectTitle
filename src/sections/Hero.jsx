import React, { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (!videoRef.current) return;
        requestAnimationFrame(() => {
            videoRef.current.classList.add("is-visible");
        });
    }, []);


    return (
        <section
            id="hero"
            className="hero-section tw-relative tw-flex tw-min-h-[120vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-bg-primary tw-text-white max-lg:tw-min-h-[265px] max-lg:tw-p-4 pt-[60px]"
        >
            <div className="hero-layout tw-flex tw-h-full tw-min-h-[100vh] tw-w-full tw-justify-between tw-gap-6 tw-px-[5%] tw-pt-[5%] tw-pb-[12%] max-xl:tw-place-items-center max-lg:tw-flex-col max-lg:tw-items-center">
                <div className="hero-copy tw-flex tw-flex-col tw-place-content-center max-lg:tw-items-center max-lg:tw-text-center">
                    <div className="tw-flex tw-flex-wrap tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[85px] max-lg:tw-text-4xl max-md:tw-leading-snug">
                        <span className="reveal-hero-text">Project</span>
                        <span className="reveal-hero-text"> Title</span>
                    </div>
                    <div className="reveal-hero-text tw-mt-2 tw-max-w-[450px] tw-p-2 tw-text-justify max-lg:tw-max-w-full max-lg:tw-text-center">
                        Every story starts with a "ProjectTitle"
                        <br />
                        Lets find yours.
                    </div>
                    <div className="reveal-hero-text tw-mt-2 tw-flex tw-max-w-[450px] tw-gap-3 tw-p-2 tw-text-xl max-lg:tw-max-w-full max-lg:tw-justify-center">
                        <a href="/facebook.html" target="_blank" rel="noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/projecttitle/" target="_blank" rel="noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://x.com/ItsProjectTitle" aria-label="X" target="_blank" rel="noreferrer">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="https://www.tiktok.com/@projecttitle" target="_blank" rel="noreferrer">
                            <i className="bi bi-tiktok"></i>
                        </a>
                        <a href="https://www.youtube.com/@ProjectTitle" aria-label="YouTube" target="_blank" rel="noreferrer">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                    <div className="reveal-hero-text tw-mt-4 tw-flex tw-place-items-center tw-gap-4 tw-overflow-hidden tw-p-2 max-lg:tw-justify-center">
                        <a
                            href="/#news"
                            aria-label="signup"
                            className="tw-flex tw-h-[40px] tw-place-items-center tw-gap-2 tw-bg-secondary tw-p-1 tw-p-2 tw-px-4 tw-pl-4 tw-text-black tw-transition-colors tw-duration-[0.5s] hover:tw-bg-black hover:tw-text-white"
                        >
                            <span>News</span>
                            <i className="bi bi-arrow-up-right"></i>
                        </a>
                    </div>
                    <div className="social-float">
                        <a
                            href="/facebook.html"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/projecttitle/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a
                            href="https://x.com/ItsProjectTitle"
                            aria-label="X"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a
                            href="https://www.tiktok.com/@projecttitle"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-tiktok"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/@ProjectTitle"
                            aria-label="YouTube"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                </div>

                <div className="hero-carousel-column tw-flex tw-w-full tw-place-content-center tw-place-items-center tw-overflow-hidden max-lg:tw-max-w-[unset] max-lg:tw-justify-center">
                    <div className="hero-video-stack tw-flex tw-w-full tw-flex-col tw-gap-3 tw-relative max-lg:tw-mt-[50px]">
                        <div
                            ref={videoRef}
                            className="hero-carousel-frame hero-video-frame is-ready tw-relative tw-flex tw-min-w-[350px] tw-max-w-[650px] tw-overflow-hidden tw-border-2 tw-border-solid tw-border-secondary tw-p-0 max-lg:tw-w-[320px] max-lg:tw-min-w-[320px]"
                        >
                            <div className="hero-video-embed hero-video-placeholder">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/gu8DQp_Pcys?rel=0&autoplay=1&mute=1&playsinline=1"
                                    title="Showreel"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
