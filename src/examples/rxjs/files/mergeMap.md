<!--
name:		
title:		mergeMap (aka flatMap)
pageTitle:	mergeMap — RxJS (flatMap) operator example + marble diagram
desc:		mergeMap will substitute value on the source Observable with an Observable, returned by inner function. See this example of RxJS mergeMap with a timer
docsUrl:	https://rxjs.dev/api/operators/mergeMap
-->

`mergeMap`, as well as other `**Map` operators, will substitute value on the source stream with a stream of values, returned by inner function. When source stream emits, `mergeMap` will call inner function to merge yet another inner stream to the resulting stream.  

> Also try this [mergeMap vs exhaustMap vs switchMap vs concatMap](/rxjs/mergeMap-vs-exhaustMap-vs-switchMap-vs-concatMap/) head-to-head comparison

```js
const { rxObserver, palette } = require('api/v0.3');
const { from, timer, pipe } = require('rxjs');
const { zip, take, map, mergeMap, delayWhen } = require('rxjs/operators');


// our source$ will emit values at 5ms, 10ms, 20ms
const source$ = fromDelayed([ 5, 10, 20 ]).pipe(
    zip(from(palette), Marble) // colorize each item
  );

const mergeMap$ = source$.pipe(
    mergeMap(x => timer(0, 3).pipe(
        take(3),
        colorize(x.color))  // colorize as source$ value
      )
  );

// visualization
source$.subscribe(rxObserver('source$'));
mergeMap$.subscribe(rxObserver('mergeMap( timer(0, 3).take(3) )'));


// helpers
function colorize(color) {
  return pipe(
    map(y => Marble(y, color))
  );
}

// creates a colored Marble
function Marble(value,color) {
  return {
    valueOf: ()=>value
    , color
  };
}

// like .from, but items are delayed by their value
function fromDelayed (arr) {
  return from(arr).pipe(
      delayWhen(x=>timer(x))
    );
}

```

**NOTE:** `mergeMap` is also available via `flatMap` alias