import { chartState as state } from './chart-state';

const createLine = () => {
    const line = {
        start: Date.now(),
        end: undefined,
        events: [],
        errors: [],
        stops: [],
    };

    const onEvent = value => {
        line.events.push({
            time: Date.now(),
            value
        });
    }

    const onError = value => {
        line.errors.push({
            time: Date.now(),
            value
        });
        line.end = Date.now();
    }

    const onComplete = () => {
        line.stops.push({
            time: Date.now(),
        });
        line.end = Date.now();
    }


    const lines = state.getState().lines || [];
    state.setState({
        lines: [ ...lines
               , line
               ]
    });

    return {
        onEvent,
        onError,
        onComplete
    }
}

const chart = { createLine };
export default chart;