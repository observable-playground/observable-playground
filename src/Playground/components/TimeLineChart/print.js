export function print(value){
    if (typeof value == 'object'){
        return printPrimitive(
            getObjectValue(value)
        );
    }

    return printPrimitive(value);
}

function printPrimitive(primitive) {
    if (primitive === null) {
        return 'null';
    }

    if (primitive === undefined) {
        return 'undefined';
    }

    return primitive;
}

function getObjectValue(object) {
    if (!object) {
        return object;
    }

    // Array handling
    if (Object.prototype.toString.call(object) == '[object Array]' && typeof object.join == 'function'){
        return `[${object.join()}]`;
    }

    if (typeof object.toString == 'function') {
        return object.toString();
    }

    if (typeof object.valueOf == 'function') {
        return printPrimitive(object.valueOf());
    }

    return Object.prototype.toString.call(object);
}
