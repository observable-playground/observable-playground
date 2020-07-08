<!--
name:		
title:		retry
pageTitle:	retry — RxJS operator example + marble diagram
desc:		retry will attempt to resubscribe to source Observable if source has failed
docsUrl:	https://rxjs.dev/api/operators/retry
-->

retry will attempt to resubscribe to source Observable if source has failed. It's useful, for example, when retrying failed network requests.

> See [retryWhen](/rxjs/retryWhen/) operator for a more strategic approach

```js
const { rxObserver, palette } = require('api/v0.3');
const { timer, from } = require('rxjs');
const { zip, map, retry } = require('rxjs/operators');

const error$ = timer(0, 5).pipe(
    map(x=>{
      if (x>2) { throw 'Bam!' }
      return x;
    }),
    zip(from(palette), Marble) // colorize the stream
  );

// retry 2 times
const retry$ = error$.pipe(
    retry(2)
  );


error$.subscribe(rxObserver());
retry$.subscribe(rxObserver());


// helpers
// creates a colored Marble
function Marble(value,color) {
  return {
    valueOf: ()=>value
    , color
  };
}

```

Check out ["Error handling in RxJS"](https://medium.com/@kddsky/error-handling-in-rxjs-bac0f96a7def) article to get better understanding how not to fail with Observables.