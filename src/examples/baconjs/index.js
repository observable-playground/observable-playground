// read the lib version
import { dependencies } from '../../../package.json';
const LIB_VERSION = dependencies.baconjs;

export const library = {
    name: 'Bacon.js',
    version: LIB_VERSION,
    description: 'A small functional reactive programming lib for JavaScript.',
    groups:
        [   { name: 'Creation'
            , items:
                [ 'interval'
                ]
            }
        ]
};
