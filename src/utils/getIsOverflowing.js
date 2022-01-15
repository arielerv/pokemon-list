const getIsOverflowing = (clientWidth, scrollWidth, clientHeight, scrollHeight) => {
    if (!clientWidth && !scrollWidth) {
        return null;
    }
    return scrollHeight > clientHeight || scrollWidth > clientWidth;
};

export default getIsOverflowing;
