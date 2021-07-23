const throttle = (func, delay) => {
    let isThrottling = false;
    return (...args) => {
        if (!isThrottling) {
            isThrottling = true;
            setTimeout(() => {
                func(...args);
                isThrottling = false;
            }, delay);
        }
    }
};

export default throttle;