This polyfill is needed to mock original Promise, because original is **async**, while we need it to be **sync** when executing code.

This particular implementation was taken from [npm "promise-polyfill": "8.1.0"](https://github.com/taylorhakes/promise-polyfill), where I've deleted preventive storing of `setTimeout` and usage of `setImmediate`

https://github.com/taylorhakes/promise-polyfill/blob/master/src/index.js#L5