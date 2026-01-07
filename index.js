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
    gsap.set(".reveal-hero-text, .reveal-up", {
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

    if (window.gsap) {
        // animate from initial state
        gsap.to(".reveal-hero-text", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.4,
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
