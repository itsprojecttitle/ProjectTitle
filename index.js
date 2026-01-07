// initialization

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual"
}

const burgerRoot = document.getElementById("burger-root")
const burgerToggle = document.getElementById("burger-toggle")
const burgerOutlet = burgerRoot ? burgerRoot.querySelector(".bm-outlet") : null
const burgerMenu = burgerRoot ? burgerRoot.querySelector(".bm-menu") : null
let burgerOpen = false

const setBurgerOpen = (open) => {
    if (!burgerRoot) return
    burgerOpen = open
    burgerRoot.classList.toggle("is-open", open)
    document.body.classList.toggle("bm-open", open)
    if (burgerToggle) {
        burgerToggle.classList.toggle("is-open", open)
        burgerToggle.setAttribute("aria-expanded", open ? "true" : "false")
    }
}

if (burgerToggle) {
    burgerToggle.addEventListener("click", (event) => {
        event.stopPropagation()
        setBurgerOpen(!burgerOpen)
    })
}

if (burgerMenu) {
    burgerMenu.addEventListener("click", (event) => {
        if (event.target.closest(".bm-menu-item")) {
            setBurgerOpen(false)
        }
    })
}

if (burgerOutlet) {
    burgerOutlet.addEventListener("click", () => {
        if (burgerOpen) {
            setBurgerOpen(false)
        }
    })
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setBurgerOpen(false)
    }
})

let touchStartX = null
let touchStartY = null
let touchActive = false

document.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1) return
    touchStartX = event.touches[0].clientX
    touchStartY = event.touches[0].clientY
    touchActive = true
})

document.addEventListener("touchend", (event) => {
    if (!touchActive) return
    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - touchStartX
    const deltaY = touch.clientY - touchStartY

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        const startedNearRightEdge = touchStartX > window.innerWidth - 40
        if (!burgerOpen && startedNearRightEdge && deltaX < -50) {
            setBurgerOpen(true)
        }
        if (burgerOpen && deltaX > 50) {
            setBurgerOpen(false)
        }
    }

    touchActive = false
    touchStartX = null
    touchStartY = null
})


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
            y: 0,
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
