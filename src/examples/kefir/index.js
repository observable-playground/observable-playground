// read the lib version
import { dependencies } from '../../../package.json';
import Page from './Page';

const LIB_VERSION = dependencies.kefir;

export { Page };
export const library = {
    name: 'Kefir.js',
    version: LIB_VERSION,
    description: 'Kefir — is a Reactive Programming library for JavaScript inspired by Bacon.js and RxJS, with focus on high performance and low memory usage.',
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
