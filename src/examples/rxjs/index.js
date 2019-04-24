// Creation
import interval from        './creation/interval';
import _from from           './creation/from';
import fromPromise from     './creation/fromPromise';
import timer from           './creation/timer';
import _of from             './creation/of';

const _constructor = 
    { name: 'constructor'
    , title: 'constructor'
    , description: ''
    , files:
        [ './examples/rxjs/creation/constructor.js'
        ]
    };

const iif = 
    { name: 'iif'
    , title: 'iif'
    , description: ''
    , files:
        [ './examples/rxjs/creation/iif.md'
        , './examples/rxjs/creation/iif.js'
        ]
    };

const defer = 
    { name: 'defer'
    , title: 'defer'
    , description: ''
    , files:
        [ './examples/rxjs/creation/defer.md'
        , './examples/rxjs/creation/defer.js'
        ]
    };

const range = 
    { name: 'range'
    , title: 'range'
    , description: ''
    , files:
        [ './examples/rxjs/creation/range/header.md'
        , './examples/rxjs/creation/range/code.js'
        ]
    };

// Combination
import forkJoin from        './combination/forkJoin';
import combineLatest from   './combination/combineLatest';
const zip =
    { name: 'zip'
    , title: 'zip'
    , description: ''
    , files:
        [ './examples/rxjs/combination/zip.md'
        , './examples/rxjs/combination/zip.js'
        ]
    };


// Transformation
import filter from          './transformation/filter';
import find from            './transformation/find';
import buffer from          './transformation/buffer';

const mergeMap =
    { name: 'mergeMap'
    , title: 'mergeMap'
    , description: ''
    , files:
        [ './examples/rxjs/transformation/mergeMap.js'
        , './examples/rxjs/transformation/metaMapComparison.md'
        ]
    };

const switchMap =
    { name: 'switchMap'
    , title: 'switchMap'
    , description: ''
    , files:
        [ './examples/rxjs/transformation/switchMap.js'
        , './examples/rxjs/transformation/metaMapComparison.md'
        ]
    };

const exhaustMap =
    { name: 'exhaustMap'
    , title: 'exhaustMap'
    , description: ''
    , files:
        [ './examples/rxjs/transformation/exhaustMap.js'
        , './examples/rxjs/transformation/metaMapComparison.md'
        ]
    };

const concatMap =
    { name: 'concatMap'
    , title: 'concatMap'
    , description: ''
    , files:
        [ './examples/rxjs/transformation/concatMap.js'
        , './examples/rxjs/transformation/metaMapComparison.md'
        ]
    };

import windowToggle from    './transformation/windowToggle';
import expand from          './transformation/expand';
import toArray from         './transformation/toArray';

// Error handling
const _catch =
    { name: 'catch'
    , title: 'catch'
    , description: ''
    , files:
        [ './examples/rxjs/error-handling/catch.js'
        , './examples/rxjs/error-handling/afterword.md'
        ]
    };

const retry =
    { name: 'retry'
    , title: 'retry'
    , description: ''
    , files:
        [ './examples/rxjs/error-handling/retry.js'
        , './examples/rxjs/error-handling/afterword.md'
        ]
    };

const retryWhen =
    { name: 'retryWhen'
    , title: 'retryWhen'
    , description: ''
    , files:
        [ './examples/rxjs/error-handling/retryWhen.js'
        , './examples/rxjs/error-handling/afterword.md'
        ]
    };

const onErrorResumeNext =
    { name: 'onErrorResumeNext'
    , title: 'onErrorResumeNext'
    , description: ''
    , files:
        [ './examples/rxjs/error-handling/onErrorResumeNext.js'
        , './examples/rxjs/error-handling/afterword.md'
        ]
    };

const throwError =
    { name: 'throwError'
    , title: 'throwError'
    , description: ''
    , files:
        [ './examples/rxjs/error-handling/throwError.js'
        , './examples/rxjs/error-handling/afterword.md'
        ]
    };

// Multicasting
const share =
    { name: 'share'
    , title: 'share'
    , description: ''
    , files:
        [ './examples/rxjs/multicasting/share/header.md'
        , './examples/rxjs/multicasting/share/code.js'
        ]
    };

const shareReplay =
    { name: 'shareReplay'
    , title: 'shareReplay'
    , description: ''
    , files:
        [ './examples/rxjs/multicasting/shareReplay/header.md'
        , './examples/rxjs/multicasting/shareReplay/code.js'
        ]
    };

// Utility
import tap from             './utility/tap';
import finalize from        './utility/finalize';
import timeInterval from    './utility/timeInterval';
const delay  =
    { name: 'delay'
    , title: 'delay'
    , description: ''
    , files:
        [ './examples/rxjs/utility/delay.md'
        , './examples/rxjs/utility/delay.js'
        ]
    };

const delayWhen =
    { name: 'delayWhen'
    , title: 'delayWhen'
    , description: ''
    , files:
        [ './examples/rxjs/utility/delayWhen.md'
        , './examples/rxjs/utility/delayWhen.js'
        ]
    };

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
    , range
    , iif
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
    , toArray

    , throwError
    , 'catch': _catch
    , retry
    , retryWhen
    , onErrorResumeNext

    , share
    , shareReplay

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
                , 'range'
                , 'iif'
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
                , 'toArray'
                ]
            }
        
        ,   { name: 'Multicasting'
            , items:
                [ 'share'
                , 'shareReplay'
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