<!--
name:		
title:		debounceTime vs throttleTime vs auditTime vs sampleTime
pageTitle:	debounceTime vs throttleTime vs auditTime vs sampleTime — RxJS operators compared
desc:		See this head-to-head comparison of debounceTime, throttleTime, auditTime and sampleTime operators with a marble diagram:
docsUrl:	
-->

You can also try dedicated playgrounds for: [auditTime](/rxjs/auditTime/), [throttleTime](/rxjs/throttleTime/), [debounceTime](/rxjs/debounceTime/), [sampleTime](/rxjs/sampleTime/)

> Check out ["Debounce vs Throttle vs Audit vs Sample — Difference You Should Know"](https://dev.to/rxjs/debounce-vs-throttle-vs-audit-vs-sample-difference-you-should-know-1f21) article for a detailed review  


```js
const { rxObserver, palette } = require('api/v0.3');
const { merge, timer, from } = require('rxjs');
const { map, zip, takeUntil, auditTime, throttleTime, debounceTime, sampleTime } = require('rxjs/operators');

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
    debounceTime(100),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('debounceTime(100)'));

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
