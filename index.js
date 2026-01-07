// initialization

const RESPONSIVE_WIDTH = 1024

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
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
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

gsap.registerPlugin(ScrollTrigger)

gsap.to(".reveal-hero-text", {
    opacity: 0,
    y: "100%",
})


gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
})


window.addEventListener("load", () => {
    const heroCarousel = document.getElementById("hero-carousel");
    const heroPrev = document.querySelector(".hero-carousel-prev");
    const heroNext = document.querySelector(".hero-carousel-next");

    if (heroCarousel && window.SKDCarousel) {
        const parent = heroCarousel.parentElement;
        const width = Math.round(heroCarousel.clientWidth || (parent && parent.clientWidth) || 0);
        const height = Math.round(heroCarousel.clientHeight || (parent && parent.clientHeight) || 0);
        const images = Array.from(heroCarousel.querySelectorAll("img"));
        let currentIndex = 0;

        if (width && height) {
            const carousel = new SKDCarousel({
                selector: "hero-carousel",
                width,
                height,
                auto: true,
                delay: 4,
            });

            carousel.onCenter((idx) => {
                currentIndex = idx;
            });

            window.setTimeout(() => {
                heroCarousel.classList.add("is-ready");
            }, 0);

            if (heroPrev) {
                heroPrev.addEventListener("click", () => {
                    if (!images.length) return;
                    const nextIndex = (currentIndex - 1 + images.length) % images.length;
                    const target = carousel.findMappedItem(nextIndex);
                    if (target) carousel.play(target);
                });
            }

            if (heroNext) {
                heroNext.addEventListener("click", () => {
                    if (!images.length) return;
                    const nextIndex = (currentIndex + 1) % images.length;
                    const target = carousel.findMappedItem(nextIndex);
                    if (target) carousel.play(target);
                });
            }
        }
    }

    // animate from initial position
    gsap.to(".reveal-hero-text", {
        opacity: 1,
        y: "0%",
        duration: 0.8,
        // ease: "power3.out",
        stagger: 0.5, // Delay between each word's reveal,
        // delay: 3
    });

    gsap.to(".reveal-up", {
        opacity: 1,
        y: "0%",
        duration: 0.8,
        stagger: 0.2,
    });
})


// ------------- reveal section animations ---------------

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
        y: "0%",
        stagger: 0.2,
    })


})

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
