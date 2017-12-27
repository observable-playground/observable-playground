import interval from './interval';
import _from from './from';
import delay from './delay';
import switchMap from './switchMap';
import timer from './timer';

export default [
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
        handle: 'delay',
        code:  delay
    },
    {
        handle: 'switchMap',
        code:  switchMap
    }
];