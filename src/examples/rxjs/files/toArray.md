<!--
name:		
title:		toArray
pageTitle:	toArray — RxJS operator example + marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/operators/toArray
-->

Combines all stream values into one array, emits this array and immediately completes

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { take, toArray } = require('rxjs/operators');


// create a timer with 3 events
const source$ = timer(0, 5).pipe(
    take(3)
  );

// collapse all events into one array
const result$ = source$.pipe(
    toArray()
  );

source$.subscribe(rxObserver('timer(0, 10).take(4)'));
result$.subscribe(rxObserver('.toArray()'));

```
