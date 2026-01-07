// initialization

const RESPONSIVE_WIDTH = 1024

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual"
}

let headerWhiteBg = false
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")

let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH


function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("opacity-100",)
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.add("is-open", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("is-open", "max-lg:tw-fixed")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""

    } else {
        isHeaderCollapsed = true
    }
}

window.addEventListener("resize", responsive)


/**
 * Animations
 */

if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set(".reveal-hero-text, .hero-caption, .reveal-up", {
        opacity: 0,
        y: 18,
    })
}


window.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

window.addEventListener("load", () => {
    window.scrollTo(0, 0);

    const heroCarousel = document.getElementById("hero-carousel");
    const heroPrev = document.querySelector(".hero-carousel-prev");
    const heroNext = document.querySelector(".hero-carousel-next");

    if (heroCarousel && window.SKDCarousel) {
        const heroCaption = document.querySelector(".hero-caption");
        const heroCaptionDate = document.querySelector(".hero-caption-date");
        const heroCaptionText = document.querySelector(".hero-caption-text");
        const parent = heroCarousel.parentElement;
        const width = Math.round(heroCarousel.clientWidth || (parent && parent.clientWidth) || 0);
        const height = Math.round(heroCarousel.clientHeight || (parent && parent.clientHeight) || 0);
        const images = Array.from(heroCarousel.querySelectorAll("img"));
        let currentIndex = 0;
        const heroItems = [
            {
                src: "./assets/images/home/africa.jpg",
                date: "Mar 14, 2024",
                text: "Golden light over the savannah brings the horizon to life.",
            },
            {
                src: "./assets/images/home/children.jpg",
                date: "Apr 02, 2024",
                text: "A candid moment of joy captured in a quiet neighborhood.",
            },
            {
                src: "./assets/images/home/hospital.jpg",
                date: "May 19, 2024",
                text: "Clean lines and calm spaces designed for healing.",
            },
            {
                src: "./assets/images/home/london.jpg",
                date: "Jun 08, 2024",
                text: "City light meets timeless architecture in motion.",
            },
            {
                src: "./assets/images/home/newyork.jpg",
                date: "Jul 21, 2024",
                text: "A skyline that never stops telling new stories.",
            },
            {
                src: "./assets/images/home/paris.jpg",
                date: "Aug 03, 2024",
                text: "Soft tones and historic facades framed in summer haze.",
            },
            {
                src: "./assets/images/home/schools.jpg",
                date: "Sep 10, 2024",
                text: "A quiet classroom with a bright future ahead.",
            },
            {
                src: "./assets/images/home/solar.jpg",
                date: "Oct 06, 2024",
                text: "Clean energy fields stretching to the edge of the day.",
            },
            {
                src: "./assets/images/home/vaccination.jpg",
                date: "Nov 17, 2024",
                text: "Small acts of care that shape healthier communities.",
            },
            {
                src: "./assets/images/home/wildlife.jpg",
                date: "Dec 04, 2024",
                text: "Wildlife framed in its natural rhythm and pace.",
            },
            {
                src: "./assets/images/home/women.jpg",
                date: "Jan 09, 2025",
                text: "Portraits that reflect strength and quiet focus.",
            },
        ];

        if (width && height) {
            const carousel = new SKDCarousel({
                selector: "hero-carousel",
                width,
                height,
                auto: false,
            });

            window.setTimeout(() => {
                heroCarousel.classList.add("is-ready");
                const heroFrame = heroCarousel.closest(".hero-carousel-frame");
                if (heroFrame) heroFrame.classList.add("is-ready");
            }, 0);

            const updateCaption = (index) => {
                if (!heroCaption || !heroCaptionDate || !heroCaptionText) return;
                const item = heroItems[index] || heroItems[0];
                heroCaption.classList.add("is-fading");
                window.setTimeout(() => {
                    heroCaptionDate.textContent = item.date;
                    heroCaptionText.textContent = item.text;
                    heroCaption.classList.remove("is-fading");
                }, 200);
            };

            updateCaption(currentIndex);

            const rotate = () => {
                if (!images.length) return;
                currentIndex = (currentIndex + 1) % images.length;
                const target = images[currentIndex];
                if (target) carousel.play(target);
                updateCaption(currentIndex);
            };

            window.setInterval(rotate, 4000);

            if (heroPrev) {
                heroPrev.addEventListener("click", () => {
                    if (!images.length) return;
                    const nextIndex = (currentIndex - 1 + images.length) % images.length;
                    const target = images[nextIndex];
                    if (target) carousel.play(target);
                    currentIndex = nextIndex;
                    updateCaption(currentIndex);
                });
            }

            if (heroNext) {
                heroNext.addEventListener("click", () => {
                    if (!images.length) return;
                    const nextIndex = (currentIndex + 1) % images.length;
                    const target = images[nextIndex];
                    if (target) carousel.play(target);
                    currentIndex = nextIndex;
                    updateCaption(currentIndex);
                });
            }
        }
    }

    if (window.gsap) {
        // animate from initial state
        gsap.to(".reveal-hero-text", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.4,
        });

        gsap.to(".hero-caption", {
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
        });

        gsap.to(".reveal-up", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.2,
        });
    }
})


// ------------- reveal section animations ---------------

if (window.gsap && window.ScrollTrigger) {
    const sections = gsap.utils.toArray("section")

    sections.forEach((sec) => {
        const revealUptimeline = gsap.timeline({paused: true, 
                                                scrollTrigger: {
                                                                trigger: sec,
                                                                start: "10% 80%", // top of trigger hits the top of viewport
                                                                end: "20% 90%",
                                                                // markers: true,
                                                                // scrub: 1,
                                                            }})

        revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
            opacity: 1,
            duration: 0.8,
            y: 0,
            stagger: 0.2,
        })
    })
}

(() => {
  const header = document.getElementById("main-header");
  if (!header) return;

  let lastY = window.scrollY;

  window.addEventListener("scroll", () => {
    const y = window.scrollY;

    header.classList.toggle("is-scrolled", y > 20);

    if (y > lastY && y > 80) header.classList.add("is-hidden");
    else header.classList.remove("is-hidden");

    lastY = y;
  }, { passive: true });
})();
