<!--
name:		
title:		first
pageTitle:	RxJS first operator example + marble diagram
desc:		first operator takes the first emission from the source and then completes
docsUrl:	https://rxjs.dev/api/operators/first
-->

first operator takes the first emission from the source and then completes

Also check out this [`first` vs `take` vs `single` head-to-head comparison](/rxjs/first-vs-take-vs-single)

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { take, first } = require('rxjs/operators');

const source$ = timer(10, 10).pipe(
    take(10)
  );

const result$ = source$.pipe(
    first()
  );


source$.subscribe(rxObserver('source'));
result$.subscribe(rxObserver('first()'));

```