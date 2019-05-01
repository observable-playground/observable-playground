<!--
name:		
title:		onErrorResumeNext
pageTitle:	RxJS onErrorResumeNext operator example + marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/index/function/onErrorResumeNext
-->

```js
const { rxObserver } = require('api/v0.3');
const { timer, onErrorResumeNext, throwError, of } = require('rxjs');
const { concat, ignoreElements } = require('rxjs/operators');


const failTimer$ = timer(5).pipe(
    ignoreElements(),
    concat(throwError('Ouch!'))
  );

const fineTimer$ = timer(5).pipe(
    ignoreElements(),
    concat(of('Ok!'))
  );

const strategicTimer$ = onErrorResumeNext(
    failTimer$,
    fineTimer$
  );

failTimer$.subscribe(rxObserver('fail timer'));
fineTimer$.subscribe(rxObserver('fine timer'));
strategicTimer$.subscribe(rxObserver('strategic'));

```

Check out ["Error handling in RxJS"](https://medium.com/@kddsky/error-handling-in-rxjs-bac0f96a7def) article to get better understanding how not to fail with Observables.