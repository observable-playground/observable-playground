import interval from './interval';
import _from from './from';
import delay from './delay';
import switchMap from './switchMap';
import timer from './timer';
import _of from './of';
import _constructor from './constructor';

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
        handle: 'delay',
        code:  delay
    },
    {
        handle: 'switchMap',
        code:  switchMap
    }
];