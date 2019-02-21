/**
 * @file substitutes native Array.prototype.sort with a wrapper
 * that will guarantee stable results.
 * This is needed to stabilize behaviour of 3rd party libs and in-code sortings
 * 
 * For more info, see
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * https://medium.com/@fsufitch/is-javascript-array-sort-stable-46b90822543f
 */
if (process.env.NODE_ENV !== 'production') {
    console.warn('DEV NOTE: Substituting Array.prototype.sort')
}

const _sort = Array.prototype.sort;
// eslint-disable-next-line no-extend-native
Array.prototype.sort = function(comparator) {
    if (this.length < 2) {
        return this;
    }

    // default comparator
    if (typeof(comparator) !== 'function') {
        comparator = (a, b) => String(a).localeCompare(b);
    }

    // adding indices
    const indexed = this.map((value, index)=>({ value, index }));

    const stableComparator = (a, b) => {
        const sortResult = comparator(a.value, b.value);
        if (sortResult !== 0) {
            return sortResult;
        }
        return a.index - b.index;
    }

    const result = _sort.call(indexed, stableComparator).map(x=>x.value);
    this.splice(0, this.length, ...result);
    return this;
}
