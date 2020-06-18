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

        ,   { name: 'Filtering'
            , items:
                [ 'filter'
                , 'find'
                , 'first'
                , 'auditTime'
                , 'debounceTime'
                , 'throttleTime'
                , 'sampleTime'
                ]
            }

        ,   { name: 'Combination'
            , items:
                [ 'zip'
                , 'forkJoin'
                , 'race'
                , 'combineLatest'
                , 'withLatestFrom'
                , 'startWith'
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
                [ 'map'
                , 'pluck'
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
