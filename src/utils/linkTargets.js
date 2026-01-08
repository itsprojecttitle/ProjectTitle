export const initLinkTargets = () => {
    const anchors = document.querySelectorAll("a[href]");
    anchors.forEach((anchor) => {
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noreferrer");
    });
};
