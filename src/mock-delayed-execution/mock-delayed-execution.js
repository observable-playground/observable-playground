/**
 * This module substitutes delayed code execution methods on global object to
 * execute them in syncronous way, while `Date.now` and `new Date()` will behave
 * as if they were executed asyncronously.
 * 
 * NOTE: The substitution happens only within `execute` function,
 *       but this module's code should be required
 *       before any other code closes the methods
 * 
 * Next methods are currently covered:
 * - Date
 * - Date.now
 * - setTimeout
 * - clearTimeout
 * - setInterval
 * - clearInterval
 * 
 * These are not yet implemented:
 * - requestAnimationFrame
 * - cancelAnimationFrame
 * 
 * NOTE: real async functions like `readFile`, `fetch` etc
 *       are not supported by this module
 * 
 * @example
 * const { execute } = require('./index');
 * 
 * console.log('start');
 * 
 * execute(()=>{
 *   setTimeout(()=>{
 *     console.log(Date.now());
 *   }, 100);
 * });
 * 
 * console.log('end');
 * 
 * // Outputs
 * // > start
 * // > 100
 * // > end
 */

// Get global object, typesafe
const __window = typeof window !== 'undefined' && window;
const __global = typeof global !== 'undefined' && global;
const glob = __window || __global;

const ONE_MINUTE = 1000 * 60;

// Store ref to both mocked and original methods
// to switch between while in `.execute` function
const originals = Object.create(null);
const mocks     = Object.create(null);
let isMockMode = false;

const DEBUG_MODE = false;

// Methods to override
const overridies =
    [ 'Date'
    , 'setTimeout'
    , 'clearTimeout'
    , 'setInterval'
    , 'clearInterval'
    , 'requestAnimationFrame'
    , 'cancelAnimationFrame'
    ];

overridies
    .filter(key=>glob[key] !== undefined)
    .forEach(key=>{
        originals[key] = glob[key];

        glob[key] = function MockSub(...args){
            const mock = mocks[key];
            const original = originals[key];

            // Run mocks only in MockMode
            const fn = isMockMode ? mock : original;
            // const fn = original;

            // Keep the behaviour for `new Date()` vs `Date()`
            if (this instanceof MockSub) {
                return new fn(...args);
            } else {
                return fn(...args);
            }
        }
    });

// Mock for `Date.now`, special case {{{
if (originals.Date && originals.Date.now) {
    glob.Date.now = ()=>{
        const fn = isMockMode ? mocks.Date.now : originals.Date.now;
        return fn();
    };
}
// }}}

// NOTE: importing Promises here, so that other mocks are in place
glob.Promise = require('./Promise.mock').Promise;

/**
 * Runs a function within mocked env
 * 
 * @param {Function} fn function to execute in MockMode
 * @param {Number} maxLifetime limits maximum lifetime of the fn's async calls
 */
function execute(fn, maxLifetime = ONE_MINUTE){
    maxLifetime = (maxLifetime > 0) ? +maxLifetime : ONE_MINUTE;
    let time;

    // Date {{{
    mocks.Date = function _Date(...args){
        if (!(this instanceof _Date)) {
            return originals.Date(...args);
        }
        if (args.length === 0) {
            return new originals.Date(time);
        }
        return new originals.Date(...args);
    };
    mocks.Date.now = ()=> time;
    // }}}

    let tasks = [];

    // Helper to create ids to setTimeout and setInterval
    const getId = (()=>{
        // NOTE: id should be positive integer, and this is important.
        let id = 1;
        return ()=>id++;
    })();

    // intervals and timeouts are tasks
    const createTask = (timeout, type) => (
        { id: getId()
        , time
        , registeredAt: time
        , timeout
        , type
        });

    const addTask = (task) => {
        if (DEBUG_MODE) {
            console.log('[+]', task.id, task);
        }
        tasks.push(task);
    };

    const clearTask = id => {
        if (DEBUG_MODE) {
            console.log('[-]', id);
        }
        tasks = tasks.filter(x=>x.id!==id);
    }

    // setInterval {{{
    mocks.setInterval = (cb, timeout, ...args)=>{
        const task = createTask(timeout, 'interval');

        task.fn = ()=>{
            // updates last executed time on each execution
            task.time = time;
            cb(...args);
        };

        addTask(task);
        return task.id;
    }
    mocks.clearInterval = clearTask;
    // }}}

    // setTimeout {{{
    mocks.setTimeout = (cb, timeout, ...args)=>{
        const task = createTask(timeout, 'timeout');

        task.fn = ()=>{
            clearTimeout(task.id);
            cb(...args);
        };

        addTask(task);
        return task.id;
    }
    mocks.clearTimeout = clearTask;
    // }}}

    const Promise = glob.Promise;
    glob.Promise = void 0;

    // requestAnimationFrame {{{
    mocks.requestAnimationFrame = () => { throw new Error('Sorry, `requestAnimationFrame` is not implemented yet'); };
    mocks.cancelAnimationFrame  = () => { throw new Error('Sorry, `cancelAnimationFrame` is not implemented yet'); };
    // }}}

    // Gets next task to execute
    // TODO: [kos] check docs for execution order rules
    const getNextTask = ()=>
        tasks
            .filter(x => (time - x.time) >= x.timeout)
            .sort((a,b)=>
                       (a.registeredAt - b.registeredAt) // registered earlier
                    || (a.time - b.time)                 // or executed earlier
                    || (a.id - b.id))                    // or with lesser id
            .shift();

    // Runs all delayed code
    const flush = ()=>{
        while(tasks.length){
            if (time >= maxLifetime) {
                return `Ran out of time (${maxLifetime}ms)`;
            }
            let nextTask;
            while(nextTask = getNextTask()){ // eslint-disable-line no-cond-assign
                // TODO: [kos] potentially this might lead to an infinite loop.
                //       Add anti-infinite loop guard, like throttling
                //       https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified
                //       e.g. `timeout = Math.max(4, Number(timeout))`
                if (DEBUG_MODE) {
                    console.log('[>]', nextTask.id);
                }
                nextTask.fn();
            }
            time++;
        }
        time--; // [kos] I know, this is dumb, needed to undo last `time++`
        return 0;
    };

    let status;
    try {
        time = 0;
        isMockMode = true;
        fn();
        status = flush();
    } finally {
        isMockMode = false;
        // cleanup mocks
        overridies.forEach(key=>{ mocks[key] = null; });
        glob.Promise = Promise;
    }

    return { time, status };
}

module.exports = {
    execute
}