<!--
name:		
title:		combineLatest
pageTitle:	combineLatest — RxJS operator example + marble diagram
desc:		Creates Observable from multiple Observables. Resulting stream will emit a combined value of all latest emissions of input streams
docsUrl:	https://rxjs.dev/api/index/function/combineLatest
-->

Creates Observable from multiple Observables.  
Resulting stream will emit a combined value of all latest emissions of input streams

> **NOTE:** take a look at [rxjs/autorun](/rxjs/autorun/) package that let's you easily combine multiple streams emissions in any form

```js
const { rxObserver } = require('api/v0.3');
const { timer, combineLatest } = require('rxjs');
const { take } = require('rxjs/operators');


const a$ = timer(0, 10).pipe(
    take(5)
  );

const b$ = timer(0, 4).pipe(
    take(7)
  );

const result$ = combineLatest(a$, b$);

a$.subscribe(rxObserver('a$'));
b$.subscribe(rxObserver('b$'));
result$.subscribe(rxObserver('combineLatest(a$, b$)'));

```
