<!--
name:		
title:		defaultIfEmpty
pageTitle:	defaultIfEmpty — RxJS operator example + marble diagram
desc:		Emits a given value if source observable has completed without ever emitting:
docsUrl:	https://rxjs.dev/api/operators/defaultIfEmpty
-->

Emits a given value if source observable has completed without ever emitting

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { filter, defaultIfEmpty } = require('rxjs/operators');


const source$ = timer(100).pipe(filter(x => x !== 0));
const result$ = source$.pipe(defaultIfEmpty(42));

source$.subscribe(rxObserver('source$: empty, completing at 100ms'));
result$.subscribe(rxObserver('result$'));

```
