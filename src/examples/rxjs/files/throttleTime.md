<!--
name:		
title:		throttleTime
pageTitle:	throttleTime — RxJS operator example + marble diagram
desc:		throttleTime will emit a value from the source stream and then ignore emissions for a given period of time:
docsUrl:	https://rxjs.dev/api/operators/throttleTime
-->

`throttleTime` will emit a value from the source stream and then ignore emissions for a given period of time. `throttleTime` can be configured `{ leading: boolean, trailing: boolean }` to trigger emission of the first and/or last value in the period.  

> Also try this **[debounceTime vs throttleTime vs auditTime vs sampleTime](/rxjs/debounceTime-vs-throttleTime-vs-auditTime-vs-sampleTime/)** head-to-head comparison

```js
const { rxObserver, palette } = require('api/v0.3');
const { merge, timer, from } = require('rxjs');
const { map, zip, throttleTime, takeUntil } = require('rxjs/operators');

// stream for coloring
const palette$ = from(palette);

// generate a colorized marble stream
const source$ = merge(timer(0, 330), timer(50, 180)).pipe(
    zip(palette$, Marble),
    map(setCurrentTime),
    takeUntil(timer(1000))
  );

source$
  .subscribe(rxObserver('source'));

source$.pipe(
    throttleTime(100, undefined, { leading: true }),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('throttleTime(100) -- leading'));

source$.pipe(
    throttleTime(100, undefined, { trailing: true }),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('throttleTime(100) -- trailing'));

source$.pipe(
    throttleTime(100, undefined, { leading: true, trailing: true }),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('throttleTime(100) -- both'));

// helpers
// keeps colors, updated value to Date.now
function setCurrentTime({ color }){
  return Marble(Date.now(), color);
}

// creates a colored Marble
function Marble(value, color) {
  return {
    valueOf: ()=>value
    , color
  };
}

```