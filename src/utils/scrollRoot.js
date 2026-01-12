export const getScrollRoot = () => {
    if (typeof document === "undefined") return null;
    return document.scrollingElement || document.documentElement;
};

export const getScrollTop = () => {
    const root = getScrollRoot();
    return root ? root.scrollTop : 0;
};
