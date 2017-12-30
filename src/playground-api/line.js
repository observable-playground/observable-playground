const createLine = () => {
    return {
        start:  Date.now(),
        end:    undefined,
        events: [],
        errors: [],
        stops:  [],
    };
};


export { createLine }