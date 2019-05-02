<!--
name:		
title:		debounceTime vs throttleTime vs auditTime vs sampleTime
pageTitle:	RxJS debounceTime vs throttleTime vs auditTime vs sampleTime compared
desc:		
docsUrl:	
-->



```js
const { rxObserver, palette } = require('api/v0.3');
const { merge, timer, from, NEVER } = require('rxjs');
const { map, take, zip, auditTime, throttleTime, debounceTime, sampleTime, share, concat } = require('rxjs/operators');

// stream for coloring
const palette$ = from(palette);

const source$ = merge(
    timer(0, 330),
    timer(50, 180)
  ).pipe(
    take(10),
    // get color for each item
    zip(palette$, Marble),
    map(setCurrentTime),
    share(),
    concat(NEVER)
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