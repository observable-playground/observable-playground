// Creation
import interval from        './creation/interval';
import _from from           './creation/from';
import fromPromise from     './creation/fromPromise';
import timer from           './creation/timer';
import _of from             './creation/of';
import _constructor from    './creation/constructor';
import defer from           './creation/defer';

// Combination
import zip from             './combination/zip';
import forkJoin from        './combination/forkJoin';
import combineLatest from   './combination/combineLatest';

// Transformation
import filter from          './transformation/filter';
import find from            './transformation/find';
import buffer from          './transformation/buffer';
import mergeMap from        './transformation/mergeMap';
import switchMap from       './transformation/switchMap';
import exhaustMap from      './transformation/exhaustMap';
import concatMap from       './transformation/concatMap';
import windowToggle from    './transformation/windowToggle';
import expand from          './transformation/expand';

// Error handling
import throwError from      './error-handling/throwError';
import _catch from          './error-handling/catch';
import retry from           './error-handling/retry';
import retryWhen from       './error-handling/retryWhen';
import onErrorResumeNext from './error-handling/onErrorResumeNext';

// Multicasting
import share from           './multicasting/share';

// Utility
import tap from             './utility/tap';
import finalize from        './utility/finalize';
import timeInterval from    './utility/timeInterval';
import delay from           './utility/delay';
import delayWhen from       './utility/delayWhen';
import dematerialize from   './utility/dematerialize';
import repeat from          './utility/repeat';
import timeout from         './utility/timeout';
import pipe from            './utility/pipe';

// import pausableBuffer from  './recipes/pausableBuffer';

// read the lib version
import { dependencies } from '../../../package.json';
const LIB_VERSION = dependencies.rxjs;

const examples =
    { interval
    , timer
    , 'from': _from
    , 'fromPromise': fromPromise
    , 'of': _of
    , defer
    , 'constructor': _constructor

    , filter
    , find
    , buffer
    , mergeMap
    , switchMap
    , exhaustMap
    , concatMap
    , windowToggle
    , expand

    , throwError
    , 'catch': _catch
    , retry
    , retryWhen
    , onErrorResumeNext

    , share

    , zip
    , forkJoin
    , combineLatest

    , tap
    , finalize
    , timeInterval
    , delay
    , delayWhen
    , dematerialize
    , repeat
    , timeout
    , pipe

    // , 'pausable-buffer': pausableBuffer
    };

export const library = {
    name: 'RxJS',
    version: LIB_VERSION,
    description: 'Reactive Extensions For JavaScript',
    examples,
    groups:
        [   { name: 'Creation'
            , items:
                [ 'of'
                , 'from'
                , 'fromPromise'
                , 'interval'
                , 'timer'
                , 'defer'
                , 'constructor'
                ]
            }

        ,   { name: 'Combination'
            , items:
                [ 'zip'
                , 'forkJoin'
                , 'combineLatest'
                ]
            }

        ,   { name: 'Error handling'
            , items:
                [ 'throwError'
                , 'catch'
                , 'retry'
                , 'retryWhen'
                , 'onErrorResumeNext'
                ]
            }

        ,   { name: 'Transformation'
            , items:
                [ 'filter'
                , 'find'
                , 'buffer'
                , 'mergeMap'
                , 'switchMap'
                , 'exhaustMap'
                , 'concatMap'
                , 'windowToggle'
                , 'expand'
                ]
            }
        
        ,   { name: 'Multicasting'
            , items:
                [ 'share'
                ]
            }

        ,   { name: 'Utility'
            , items:
                [ 'tap'
                , 'finalize'
                , 'timeInterval'
                , 'delay'
                , 'delayWhen'
                , 'dematerialize'
                , 'repeat'
                , 'timeout'
                , 'pipe'
                ]
            }

        // ,   { name: 'Recipes'
        //     , items:
        //         [ 'pausable-buffer'
        //         ]
        //     }
        ]
};