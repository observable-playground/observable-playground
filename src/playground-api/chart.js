import * as chartStateProxy from './chart-state-proxy';
import { createLine } from './line';

const createObserver = () => {
    const line = createLine();

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

    chartStateProxy.addLine(line);

    // Line implements RxJS Observer interface
    // http://reactivex.io/rxjs/class/es6/MiscJSDoc.js~ObserverDoc.html
    return {
        next: onNext,
        error: onError,
        complete: onComplete
    }
}

const createRxObserver = () => {
    const { next, error, complete } = createObserver();
    return { next, error, complete };
}

const createKefirObserver = () => {
    const { next, error, complete } = createObserver();
    return { value: next, error, end: complete };
}

const chart = { 
    createObserver,
    createRxObserver,
    createKefirObserver
};
export default chart;