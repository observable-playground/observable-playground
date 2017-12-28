/**
 * Naive implementation of require mock for playground scripts
 */

import Rx from 'rxjs/Rx';
import rpApi from './rp-api';

const availablePackages = [
    { // RxJS
        name: 'rxjs/Rx',
        load: () => Rx
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