export function printValue(value){
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

    return primitive.toString();
}

function getObjectValue(object) {
    if (!object) {
        return object;
    }

    // Array handling
    if (Object.prototype.toString.call(object) == '[object Array]' && typeof object.join == 'function'){
        return `[${object.join()}]`;
    }

    if (typeof object.valueOf == 'function') {
        return object.valueOf();
    }

    if (typeof object.toString == 'function') {
        return object.toString();
    }

    return Object.prototype.toString.call(object);
}
