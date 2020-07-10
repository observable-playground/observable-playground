<!--
name:		
title:		forkJoin
pageTitle:	forkJoin — RxJS function example + marble diagram
desc:		Creates an Observable from multiple Observables. Resulting stream waits for all input streams to complete, then combines and emits their latest values
docsUrl:	https://rxjs.dev/api/index/function/forkJoin
-->

`forkJoin` creates an Observable from multiple Observables.  
Resulting stream waits for all input streams to complete, then combines and emits their latest values

```js
const { rxObserver } = require('api/v0.3');
const { timer, forkJoin } = require('rxjs');
const { mapTo, take } = require('rxjs/operators');


const a$ = timer(10).pipe(mapTo('a'));
const b$ = timer(5, 5).pipe(take(3));

const result$ = forkJoin([ a$, b$ ]);

a$.subscribe(rxObserver('a$'));
b$.subscribe(rxObserver('b$'));
result$.subscribe(rxObserver('forkJoin(a$, b$)'));

```
