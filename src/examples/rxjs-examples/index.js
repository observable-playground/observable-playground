// Creation
import interval from './interval';
import _from from './from';
import timer from './timer';
import _of from './of';
import _constructor from './constructor';

// Instance methods
import mergeMap from './mergeMap';
import switchMap from './switchMap';
import exhaustMap from './exhaustMap';


// Utility
import delay from './delay';


export default [
    // Creation
    {
        handle: 'interval',
        code:  interval
    },
    {
        handle: 'timer',
        code:  timer
    },
    {
        handle: 'from',
        code:  _from
    },
    {
        handle: 'of',
        code:  _of
    },
    {
        handle: 'constructor',
        code:  _constructor
    },

    // Instance methods
    {
        handle: 'mergeMap',
        code:  mergeMap
    },
    {
        handle: 'switchMap',
        code:  switchMap
    },
    {
        handle: 'exhaustMap',
        code:  exhaustMap
    },

    // Utility
    {
        handle: 'delay',
        code:  delay
    },
];