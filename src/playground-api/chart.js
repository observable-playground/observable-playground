import { chartState as state } from './chart-state';

const createObserver = () => {
    const line = {
        start: Date.now(),
        end: undefined,
        events: [],
        errors: [],
        stops: [],
    };

    const onNext = value => {
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

    // Line implements RxJS Observer interface
    // http://reactivex.io/rxjs/class/es6/MiscJSDoc.js~ObserverDoc.html
    return {
        next: onNext,
        error: onError,
        complete: onComplete
    }
}

const chart = { createObserver };
export default chart;