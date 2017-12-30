import * as state from './state';

const addLine = line => {
    const lines = state.getState().lines || [];
    state.setState({
        lines: [ ...lines
               , line
               ]
    });
}

export { addLine }