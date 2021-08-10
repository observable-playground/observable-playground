<!--
name:		
title:		debounceTime
pageTitle:	debounceTime — RxJS operator example + marble diagram
desc:		debounceTime will emit a value from the source stream only if a given time has passed without source producing more values. See this marble diagram:
docsUrl:	https://rxjs.dev/api/operators/debounceTime
-->

`debounceTime` operator will emit a value from the source stream only if a given time has passed without source producing more values.  

> Also try this **[debounceTime vs throttleTime vs auditTime vs sampleTime](/rxjs/debounceTime-vs-throttleTime-vs-auditTime-vs-sampleTime/)** head-to-head comparison

```js
const { rxObserver, palette } = require('api/v0.3');
const { merge, timer, from } = require('rxjs');
const { map, zip, debounceTime, takeUntil } = require('rxjs/operators');

// stream for coloring
const palette$ = from(palette);

const source$ = merge(
    timer(0, 330),
    timer(50, 180)
  ).pipe(
    // colorize each item
    zip(palette$, Marble),
    map(setCurrentTime),
    takeUntil(timer(1000))
  );

source$
  .subscribe(rxObserver());

source$.pipe(
    debounceTime(100),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('debounceTime(100)'));


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