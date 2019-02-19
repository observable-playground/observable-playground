const createLine = (lineName) => {
    return {
        lineName,
        start:  Date.now(),
        end:    undefined,
        events: [],
        errors: [],
        stops:  [],
    };
};


export { createLine }