let switchThroughTime = ({
    target = null,
    startValue = true,
    endValue = false,
    delay = 0
}) => {
    
    target.status = true;

    setTimeout(() => {
        target.status = endValue;
    }, delay);
};

export { switchThroughTime };
