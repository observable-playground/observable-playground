// Naive state implementation
// TODO: move to a 3rd party state management
let state = Object.create(null);

const getState = ()=>{
    return state;
}

const setState = (newState) => {
    state = Object.assign(Object.create(null), state, newState);
    return state;
}

const resetState = () => {
    state = Object.create(null);
    return state;
}

export {
    getState,
    setState,
    resetState
};