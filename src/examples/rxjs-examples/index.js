import interval from './interval';
import delay from './delay';
import switchMap from './switchMap';

export default [
    {
        handle: 'interval',
        code:  interval
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