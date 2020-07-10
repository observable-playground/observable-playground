<!--
name:		
title:		exhaustMap
pageTitle:	exhaustMap — RxJS operator example + marble diagram
desc:		exhaustMap will substitute value on the source Observable with an Observable, returned by inner function. See this example of RxJS exhaustMap with a timer
docsUrl:	https://rxjs.dev/api/operators/exhaustMap
-->

`exhaustMap`, as well as other `**Map` operators, will substitute value on the source stream with a stream of values, returned by inner function. When source stream emits, `exhaustMap` will call inner function to get inner stream that it will switch to. Once switched to inner stream, `exhaustMap` will ignore values from source stream until inner stream completes.  
> Also try this [mergeMap vs exhaustMap vs switchMap vs concatMap](/rxjs/mergeMap-vs-exhaustMap-vs-switchMap-vs-concatMap/) head-to-head comparison

```js
const { rxObserver, palette } = require('api/v0.3');
const { from, timer, pipe } = require('rxjs');
const { zip, take, map, exhaustMap, delayWhen } = require('rxjs/operators');


// our source$ will emit values at 5ms, 10ms, 20ms
const source$ = fromDelayed([ 5, 10, 20 ]).pipe(
    zip(from(palette), Marble) // colorize each item
  );

const exhaustMap$ = source$.pipe(
    exhaustMap(x => timer(0, 3).pipe(
        take(3),
        colorize(x.color))  // colorize as source$ value
      )
  );

// visualization
source$.subscribe(rxObserver('source$'));
exhaustMap$.subscribe(rxObserver('exhaustMap( timer(0, 3).take(3) )'));


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