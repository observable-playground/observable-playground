import { dependencies } from '../../../package.json';
import Page from './Page';

const LIB_VERSION = dependencies.rxjs;

export { Page };
export const library = {
    name: 'RxJS',
    version: LIB_VERSION,
    description: 'Reactive Extensions For JavaScript',
    groups:
        [   { name: 'Observable'
            , items:
                [ 'pipe'
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
                , 'delay'
                , 'delayWhen'
                , 'dematerialize'
                , 'repeat'
                , 'timeout'
                ]
            }

        ,   { name: '⚠️ Experimental'
            , items:
                [ 'js-pipeline'
                ]
            }

        // ,   { name: 'Recipes'
        //     , items:
        //         [ 'pausable-buffer'
        //         ]
        //     }
        ]
};
