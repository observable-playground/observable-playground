import * as chartStateProxy from './chart-state-proxy';
import { createLine } from './line';

const createObserver = (lineName) => {
    const line = createLine(lineName);

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

const createRxObserver = (lineName) => {
    const { next, error, complete } = createObserver(lineName);
    return { next, error, complete };
}

const createKefirObserver = (lineName) => {
    const { next, error, complete } = createObserver(lineName);
    return { value: next, error, end: complete };
}

const createBaconObserver = (lineName) => {
    const { next, error, complete } = createObserver(lineName);

    return (event) => {
        if (event.isNext) {
            return next(event.value);
        }
        if (event.isError) {
            return error(event.value);
        }
        if (event.isEnd) {
            return complete();
        }
    }

}

const chart = { 
    createObserver,
    createRxObserver,
    createKefirObserver,
    createBaconObserver
};
export default chart;