<!--
name:		
title:		sampleTime
pageTitle:	sampleTime — RxJS operator example + marble diagram
desc:		sampleTime listens to the source stream and then produces the most recently emitted value within periodic time intervals:
docsUrl:	https://rxjs.dev/api/operators/sampleTime
-->

`sampleTime` listens to the source stream and then produces the most recently emitted value within periodic time intervals.  

> Also try this **[debounceTime vs throttleTime vs auditTime vs sampleTime](/rxjs/debounceTime-vs-throttleTime-vs-auditTime-vs-sampleTime/)** head-to-head comparison

```js
const { rxObserver, palette } = require('api/v0.3');
const { merge, timer, from } = require('rxjs');
const { map, zip, sampleTime, takeUntil } = require('rxjs/operators');

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
    sampleTime(100),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('sampleTime(100)'));


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