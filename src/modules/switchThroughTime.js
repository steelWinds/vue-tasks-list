let switchThroughTime = ({
    target = null,
    startValue = true,
    endValue = false,
    delay = 0
}) => {
    
    target.status = startValue;

    setTimeout(() => {
        target.status = endValue;
    }, delay);
};

export { switchThroughTime };
