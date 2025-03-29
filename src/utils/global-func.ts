let interval: any;
export const debounce = (callback: any, delay = 400) => {
    clearTimeout(interval)
    interval = setTimeout(() => {
        callback()
    }, delay);
}