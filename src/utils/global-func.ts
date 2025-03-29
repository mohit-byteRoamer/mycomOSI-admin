let interval: ReturnType<typeof setTimeout>;

export const debounce = (callback: () => void, delay: number = 400) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
        callback();
    }, delay);
};
