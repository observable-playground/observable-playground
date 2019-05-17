import { dependencies } from '../../../package.json';
const LIB_VERSION = dependencies.rxjs;

export const library = {
    name: 'RxJS',
    version: LIB_VERSION,
    description: 'Reactive Extensions For JavaScript',
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
                , 'race'
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
