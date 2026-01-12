const isIOSDevice = () =>
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

const applyBodyLock = () => {
    if (typeof document === "undefined") return;
    const { body } = document;
    if (!body) return;

    if (isIOSDevice()) {
        body.style.position = "fixed";
        body.style.width = "100%";
        return;
    }

    body.style.overflow = "hidden";
};

export default applyBodyLock;
