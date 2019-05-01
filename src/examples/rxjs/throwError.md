<!--
name:		
title:		throwError
pageTitle:	RxJS throwError function example + marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/index/function/throwError
-->

```js
const { rxObserver } = require('api/v0.3');
const { timer, throwError } = require('rxjs');
const { switchMap } = require('rxjs/operators');

timer(10)
  .pipe(
    switchMap(()=>
      throwError('Err!')
    )
  )
  .subscribe(rxObserver());

```

Check out ["Error handling in RxJS"](https://medium.com/@kddsky/error-handling-in-rxjs-bac0f96a7def) article to get better understanding how not to fail with Observables.