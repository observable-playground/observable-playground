<!--
name:		
title:		withLatestFrom
pageTitle:	RxJS withLatestFrom operator example + marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/operators/withLatestFrom
-->

Creates a combined stream from source and other provided streams.    
When source emits a value — resulting Observable will emit a combined value of source emission and all latest values on provided streams.

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { withLatestFrom, take } = require('rxjs/operators');


const a$ = timer(0, 10).pipe(
    take(5)
  );

const b$ = timer(0, 4).pipe(
    take(7)
  );

const result$ = a$.pipe(
  withLatestFrom(b$)
);

a$.subscribe(rxObserver('a$'));
b$.subscribe(rxObserver('b$'));
result$.subscribe(rxObserver('a$ :: withLatestFrom(b$)'));

```
