// Creation
import interval from        './creation/interval';
import _from from           './creation/from';
import timer from           './creation/timer';
import _of from             './creation/of';
import _constructor from    './creation/constructor';
// Combination
import zip from             './combination/zip';
import forkJoin from        './combination/forkJoin';
import combineLatest from   './combination/combineLatest';
// Transformation
import mergeMap from        './transformation/mergeMap';
import switchMap from       './transformation/switchMap';
import exhaustMap from      './transformation/exhaustMap';
import concatMap from       './transformation/concatMap';
// Error handling
import _catch from          './error-handling/catch';
import retry from           './error-handling/retry';
// Multicasting
import share from           './multicasting/share';
// Utility
import tap from             './utility/tap';
import finalize from        './utility/finalize';
import delay from           './utility/delay';
import pipe from            './utility/pipe';

// read the lib version
import { dependencies } from '../../../package.json';
const LIB_VERSION = dependencies.rxjs;


const examples =
    { interval
    , timer
    , 'from': _from
    , 'of': _of
    , 'constructor': _constructor
    , mergeMap
    , switchMap
    , exhaustMap
    , concatMap
    , 'catch': _catch
    , retry
    , share

    , zip
    , forkJoin
    , combineLatest

    , tap
    , finalize
    , delay
    , pipe
    };

export const library = {
    name: 'RxJS',
    version: LIB_VERSION,
    description: 'Reactive Extensions For JavaScript',
    examples,
    groups:
        [   { name: 'Creation'
            , items:
                [ 'interval'
                , 'timer'
                , 'from'
                , 'of'
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
                [ 'catch'
                , 'retry'
                ]
            }

        ,   { name: 'Transformation'
            , items:
                [ 'mergeMap'
                , 'switchMap'
                , 'exhaustMap'
                , 'concatMap'
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
                , 'delay'
                , 'pipe'
                ]
            }
        ]
};