<!--
name:		
title:		catchError
pageTitle:	catchError — RxJS operator example + marble diagram
desc:		catchError lets you substitute an error on a stream with another stream:
docsUrl:	https://rxjs.dev/api/operators/catchError
-->

catchError lets you substitute an error on a stream with another stream

```js
const { rxObserver } = require('api/v0.3');
const { timer, throwError, of } = require('rxjs');
const { switchMap, catchError } = require('rxjs/operators');

// emit an error in 5ms
const error$ = timer(5).pipe(
    switchMap(() => throwError('oh'))
  );


const catch$ = error$.pipe(
    catchError(err => of(err))
  );


error$.subscribe(rxObserver());
catch$.subscribe(rxObserver());

```

Check out ["Error handling in RxJS"](https://medium.com/@kddsky/error-handling-in-rxjs-bac0f96a7def) article to get better understanding how not to fail with Observables.
