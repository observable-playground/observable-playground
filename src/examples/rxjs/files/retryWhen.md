<!--
name:		
title:		retryWhen
pageTitle:	retryWhen — RxJS operator example + marble diagram
desc:		retryWhen let's you do basic retry with strategy, based on error emissions
docsUrl:	https://rxjs.dev/api/operators/retryWhen
-->

retryWhen let's you do basic [`retry`](/rxjs/retry/) with strategy, based on error emissions:

```js
const {rxObserver} = require('api/v0.3');
const { timer } = require('rxjs');
const { map, tap, retryWhen, delayWhen } = require('rxjs/operators');

const source$ =
  timer(0, 100).pipe(
    map(val => {
      if (val == 1) {
        throw 'Err';
      }
      return val;
    })
  );

const result$ = source$.pipe(
    retryWhen(errors =>
      // here Errors are just events
      errors.pipe(
        // show error messages thread
        tap(rxObserver('Error messages')),
        // will restart with increasing delay
        delayWhen((_, index) => timer(index * 50))
      )
    )
);

source$.subscribe(rxObserver('source$'));
result$.subscribe(rxObserver('result$'));

// a modification of
// https://www.learnrxjs.io/operators/error_handling/retrywhen.html

```

Check out ["Error handling in RxJS"](https://medium.com/@kddsky/error-handling-in-rxjs-bac0f96a7def) article to get better understanding how not to fail with Observables.