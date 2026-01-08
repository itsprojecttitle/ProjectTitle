export const initScrollAnimations = () => {
    if (!window.gsap || !window.ScrollTrigger) return () => {};

    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".reveal-hero-text, .reveal-up", { opacity: 0, y: 18 });

    const sections = gsap.utils.toArray("section");
    sections.forEach((sec) => {
        const revealTargets = sec.querySelectorAll(".reveal-hero-text, .reveal-up");
        if (!revealTargets.length) return;
        gsap.timeline({
            scrollTrigger: {
                trigger: sec,
                start: "10% 80%",
                end: "20% 90%",
            },
        }).to(revealTargets, {
            opacity: 1,
            duration: 0.8,
            y: 0,
            stagger: 0.2,
        });
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
};
