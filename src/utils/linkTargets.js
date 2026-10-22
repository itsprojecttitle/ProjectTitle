export const initLinkTargets = () => {
    const applyTargets = (root = document) => {
        const anchors = [
            ...(root.matches?.("a[href]") ? [root] : []),
            ...root.querySelectorAll("a[href]"),
        ];
        anchors.forEach((anchor) => {
            anchor.setAttribute("target", "_blank");
            anchor.setAttribute("rel", "noopener noreferrer");
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
