// Creation
import interval from './interval';
import _from from './from';
import timer from './timer';
import _of from './of';
import _constructor from './constructor';
// Instance methods
import mergeMap from './mergeMap';
import switchMap from './switchMap';
import exhaustMap from './exhaustMap';
// Utility
import delay from './delay';
import pipe from './pipe';
import _catch from './error-handling/catch';
import retry from './error-handling/retry';
import share from './multicasting/share';


const examples =
    { interval
    , timer
    , 'from': _from
    , 'of': _of
    , 'constructor': _constructor
    , mergeMap
    , switchMap
    , exhaustMap
    , delay
    , pipe
    , 'catch': _catch
    , retry
    , share
    };

export const library = {
    name: 'RxJS',
    version: '5.5.6',
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
                ]
            }
        
        ,   { name: 'Multicasting'
            , items:
                [ 'share'
                ]
            }

        ,   { name: 'Utility'
            , items:
                [ 'delay'
                , 'pipe'
                ]
            }
        ]
};