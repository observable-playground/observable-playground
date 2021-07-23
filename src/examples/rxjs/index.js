// @ts-check
import pkg from '../../../package.json';
import Page from './Page';

const LIB_VERSION = pkg.dependencies.rxjs;

export { Page };
export const library = {
    name: 'RxJS',
    version: LIB_VERSION,
    description: 'Reactive Extensions For JavaScript',
    groups:
        [   { name: 'My packages'
            , items:
                [ 'autorun'
                , 'proxy'
                , 'query'
                ]
            }
        ,   { name: 'Observable'
            , items:
                [ 'constructor'
                , 'pipe'
                , 'forEach'
                , 'toPromise'
                , 'subscribe'
                ]
            }

        ,   { name: 'Creation'
            , items:
                [ 'of'
                , 'from'
                , 'fromPromise'
                , 'interval'
                , 'timer'
                , 'defer'
                , 'range'
                , 'iif'
                , 'never'
                , 'empty'
                ]
            }

        ,   { name: 'Filtering'
            , items:
                [ 'filter'
                , 'find'
				, 'first'
				, 'take'
				, 'single'
				, 'takeUntil'
				, 'takeWhile'
                , 'auditTime'
                , 'debounceTime'
                , 'throttleTime'
                , 'sampleTime'
                , 'windowToggle'
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
                , 'expand'
                , 'toArray'
                , 'windowWhen'
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
                , 'defaultIfEmpty'
                , 'delay'
                , 'delayWhen'
                , 'dematerialize'
                , 'repeat'
                , 'timeout'
                ]
            }

        // ,   { name: '⚠️ Experimental'
        //     , items:
        //         [ 'js-pipeline'
        //         ]
        //     }

        // ,   { name: 'Recipes'
        //     , items:
        //         [ 'pausable-buffer'
        //         ]
        //     }
        ]
};
