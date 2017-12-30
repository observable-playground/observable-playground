/**
 * Naive implementation of require mock for playground scripts
 * TODO: find a better way to do proper requires on the fly
 */

import Rx from 'rxjs/Rx';
import RxOperators from 'rxjs/operators';
import rpApi from './rp-api';

const availablePackages = [
    { // RxJS
        name: 'rxjs/Rx',
        load: () => Rx
    },
    { // RxJS lettable operators
        name: 'rxjs/operators',
        load: () => RxOperators
    },


    { // chart api
        name: 'rp-api',
        load: () => rpApi
    }
];

class PackageNotSupportedError extends Error {
    constructor(name){
        const availablePackageNames = availablePackages.map(p => p.name);
        const errorMessage = `Currently package "${name}" is not supported. Please, use one of these: ${availablePackageNames}`;
        super(errorMessage);
    }
}

const require = name => {
    const pkg = availablePackages.find(x=>x.name === name);
    if (pkg === undefined) {
        throw new PackageNotSupportedError(name);
    }
    return pkg.load();
}

export { require };