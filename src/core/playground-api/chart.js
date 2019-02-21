import * as chartStateProxy from './chart-state-proxy';
import { createLine } from './line';

const DEBUG = false;

const createObserver = (lineName = '') => {
    const line = createLine(lineName);
    let eventIndex = 0;

    if (DEBUG) {
        console.log(`v @ ${Date.now()}ms ${lineName}`);
    }

    const onNext = value => {
        if (DEBUG) {
            console.log('o', value, `@ ${Date.now()}ms ${lineName}`);
        }
        line.events.push({
            index: eventIndex++,
            time: Date.now(),
            value
        });
    }

    const onError = value => {
        if (DEBUG) {
            console.error('x', value, `@ ${Date.now()}ms ${lineName}`);
        }
        line.errors.push({
            time: Date.now(),
            value
        });
        line.end = Date.now();
    }

    const onComplete = () => {
        if (DEBUG) {
            console.log(`— @ ${Date.now()}ms ${lineName}`);
        }
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