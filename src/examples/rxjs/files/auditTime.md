<!--
name:		
title:		auditTime
pageTitle:	auditTime — RxJS operator example + marble diagram
desc:		auditTime waits for the source stream to emit a value, waits for a given duration, and then emits the latest emitted value within that period. Then repeats this process:
docsUrl:	https://rxjs.dev/api/operators/auditTime
-->

`auditTime` waits for the source stream to emit a value, waits for a given duration, and then emits the latest emitted value within that period. Then repeats this process.  

> Also try this **[debounceTime vs throttleTime vs auditTime vs sampleTime](/rxjs/debounceTime-vs-throttleTime-vs-auditTime-vs-sampleTime/)** head-to-head comparison

```js
const { rxObserver, palette } = require('api/v0.3');
const { merge, timer, from } = require('rxjs');
const { map, zip, auditTime, takeUntil } = require('rxjs/operators');

// endless stream for coloring
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
    auditTime(100),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('auditTime(100)'));


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