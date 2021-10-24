let blockCall = (func, counterCalls) => {
    let calls = [];

    return () => {
        if (calls.length >= counterCalls) {
            return;
        }

        func.call(this);

        calls.push(true);
    };
};

export { blockCall };
