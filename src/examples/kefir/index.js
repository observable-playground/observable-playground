// Creation
import sequentially from        './creation/sequentially';
import interval     from        './creation/interval';
// Combination
import pool         from        './combination/pool';


// read the lib version
import { dependencies } from '../../../package.json';
const LIB_VERSION = dependencies.kefir;


const examples =
    // Creation
    { sequentially
    , interval

    // Combination
    , pool
    };

export const library = {
    name: 'Kefir.js',
    version: LIB_VERSION,
    description: 'Kefir — is a Reactive Programming library for JavaScript inspired by Bacon.js and RxJS, with focus on high performance and low memory usage.',
    examples,
    groups:
        [   { name: 'Creation'
            , items:
                [ 'sequentially'
                , 'interval'
                ]
            }

        ,   { name: 'Combination'
            , items:
                [ 'pool'
                ]
            }
        ]
};
