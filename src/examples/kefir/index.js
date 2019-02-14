// Creation
import sequentially from        './sequentially';

// read the lib version
import { dependencies } from '../../../package.json';
const LIB_VERSION = dependencies.kefir;


const examples =
    { sequentially
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
                ]
            }
        ]
};
