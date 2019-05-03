<!--
name:		
title:		debounceTime vs throttleTime vs auditTime vs sampleTime
pageTitle:	RxJS debounceTime vs throttleTime vs auditTime vs sampleTime compared
desc:		See this head-to-head comparison of debounceTime, throttleTime, auditTime and sampleTime operators with a marble diagram:
docsUrl:	
-->



```js
const { rxObserver, palette } = require('api/v0.3');
const { merge, timer, from } = require('rxjs');
const { map, zip, auditTime, throttleTime, debounceTime, sampleTime } = require('rxjs/operators');

// stream for coloring
const palette$ = from(palette);

const source$ = merge(
    timer(0, 330),
    timer(50, 180)
  ).pipe(
    // colorize each item
    zip(palette$, Marble),
    map(setCurrentTime)
  );

source$
  .subscribe(rxObserver());

source$.pipe(
    debounceTime(100),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('debounceTime(100)'));

source$.pipe(
    throttleTime(100),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('throttleTime(100)'));

source$.pipe(
    auditTime(100),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('auditTime(100)'));

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
