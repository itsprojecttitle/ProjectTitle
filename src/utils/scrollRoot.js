export const getScrollRoot = () => {
    if (typeof document === "undefined") return null;
    const { documentElement, body } = document;
    if (!documentElement || !body) return null;

    const htmlOverflowY = getComputedStyle(documentElement).overflowY;
    const bodyOverflowY = getComputedStyle(body).overflowY;
    const bodyScrollable =
        body.scrollHeight > body.clientHeight && /(auto|scroll)/.test(bodyOverflowY);
    const htmlScrollable =
        documentElement.scrollHeight > documentElement.clientHeight &&
        /(auto|scroll)/.test(htmlOverflowY);

    if (bodyScrollable && htmlOverflowY === "hidden") return body;
    if (bodyScrollable && !htmlScrollable) return body;

    return document.scrollingElement || documentElement;
};

export const getScrollTop = () => {
    const root = getScrollRoot();
    return root ? root.scrollTop : 0;
};
