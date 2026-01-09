export const initLinkTargets = () => {
    const applyTargets = (root = document) => {
        const anchors = root.querySelectorAll("a[href]");
        anchors.forEach((anchor) => {
            const href = anchor.getAttribute("href") || "";
            const isSocial =
                href.includes("instagram.com/projecttitle") ||
                href.includes("x.com/ItsProjectTitle") ||
                href.includes("tiktok.com/@projecttitle") ||
                href.includes("youtube.com/@ProjectTitle") ||
                href.includes("/facebook.html");
            if (isSocial) {
                anchor.setAttribute("target", "_blank");
                anchor.setAttribute("rel", "noreferrer");
                return;
            }
            anchor.removeAttribute("target");
            anchor.removeAttribute("rel");
        });
    };

    applyTargets();

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (!(node instanceof HTMLElement)) return;
                if (node.matches?.("a[href]")) {
                    applyTargets(node);
                } else if (node.querySelector) {
                    applyTargets(node);
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
};
