export const initLinkTargets = () => {
    const anchors = document.querySelectorAll("a[href]");
    anchors.forEach((anchor) => {
        anchor.removeAttribute("target");
        anchor.removeAttribute("rel");
    });
};
