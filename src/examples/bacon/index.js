// Creation
import interval     from        './creation/interval';

// read the lib version
import { dependencies } from '../../../package.json';
const LIB_VERSION = dependencies.baconjs;


const examples =
    // Creation
    { interval
    };

export const library = {
    name: 'Bacon.js',
    version: LIB_VERSION,
    description: 'A small functional reactive programming lib for JavaScript.',
    examples,
    groups:
        [   { name: 'Creation'
            , items:
                [ 'interval'
                ]
            }
        ]
};
