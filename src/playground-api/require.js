/**
 * Naive implementation of require mock for playground scripts
 * TODO: find a better way to do proper requires on the fly
 */

// RxJS {{{
// Compatibility package
// https://github.com/ReactiveX/rxjs/tree/master/compat
import * as RxCompat from 'rxjs/Rx';
// Regular
import * as Rx from 'rxjs';
// Lettable operators
// https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md
import * as RxOperators from 'rxjs/operators';
// }}}

// baconjs {{{
import baconjs from 'baconjs';
// }}}

// kefirjs {{{
import kefir from 'kefir';
// }}}

import { api as apiV0 } from './v0';
import { api as apiV0_3 } from './v0.3';

import * as colors from './colors';

const availablePackages = [
    { // RxJS
        name: 'rxjs',
        load: () => Rx
    },
    { // RxJS Compat
        name: 'rxjs/Rx',
        load: () => RxCompat
    },
    { // RxJS lettable operators
        name: 'rxjs/operators',
        load: () => RxOperators
    },

    { // Bacon
        name: 'baconjs',
        load: () => baconjs
    },

    { // kefir
        name: 'kefir',
        load: () => kefir
    },

    { // chart api
        name: 'rp-api',
        load: () => apiV0
    },
    {
        name: 'api/v0.3',
        load: () => apiV0_3
    },
    {
        name: 'rp-api/colors',
        load: () => colors
    }
];

class PackageNotSupportedError extends Error {
    constructor(name){
        const availablePackageNames = availablePackages.map(p => p.name);
        const errorMessage = `Currently package "${name}" is not supported. Please, use one of these: ${availablePackageNames}`;
        super(errorMessage);
    }
}

const _require = name => {
    const pkg = availablePackages.find(x=>x.name === name);
    if (pkg === undefined) {
        throw new PackageNotSupportedError(name);
    }
    return pkg.load();
}

export { _require };