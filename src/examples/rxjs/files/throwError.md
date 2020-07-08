<!--
name:		
title:		throwError
pageTitle:	throwError — RxJS function example + marble diagram
desc:		throwError creates an Observable, that will immediately emit an error
docsUrl:	https://rxjs.dev/api/index/function/throwError
-->

throwError creates an Observable, that will immediately emit an error  
In the example below a value on [timer](/rxjs/timer/) will be [substituted](/rxjs/switchMap/) with a `throwError` stream at 10ms:

```js
const { rxObserver } = require('api/v0.3');
const { timer, throwError } = require('rxjs');
const { switchMap } = require('rxjs/operators');

timer(10).pipe(
    switchMap(()=>
      throwError('Err!')
    )
  )
  .subscribe(rxObserver());

```

Check out ["Error handling in RxJS"](https://medium.com/@kddsky/error-handling-in-rxjs-bac0f96a7def) article to get better understanding how not to fail with Observables.
