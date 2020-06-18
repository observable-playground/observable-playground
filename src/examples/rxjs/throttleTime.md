<!--
name:		
title:		throttleTime
pageTitle:	RxJS throttleTime operator example
desc:		throttleTime will emit a value from the source stream and then ignore emissions for a given period of time:
docsUrl:	https://rxjs.dev/api/operators/throttleTime
-->

throttleTime will emit a value from the source stream and then ignore emissions for a given period of time. throttleTime can be configured `{ leading: boolean, trailing: boolean }` to trigger emission of the first and/or last value in the period

Also, see this "[debounceTime vs throttleTime vs auditTime vs sampleTime](/rxjs/debounceTime-vs-throttleTime-vs-auditTime-vs-sampleTime/)" head-to-head comparison

```js
const { rxObserver, palette } = require('api/v0.3');
const { merge, timer, from } = require('rxjs');
const { map, zip, throttleTime } = require('rxjs/operators');

// stream for coloring
const palette$ = from(palette);

// generate a colorized marble stream
const source$ = merge(timer(0, 330), timer(50, 180)).pipe(
    zip(palette$, Marble),
    map(setCurrentTime)
  );

source$
  .subscribe(rxObserver('source'));

source$.pipe(
    throttleTime(100),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('throttleTime(100)'));

source$.pipe(
    throttleTime(100, undefined, { leading: false, trailing: true }),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('throttleTime(100, undefined, { leading: false, trailing: true })'));

source$.pipe(
    throttleTime(100, undefined, { leading: true, trailing: true }),
    map(setCurrentTime)
  )
  .subscribe(rxObserver('throttleTime(100, undefined, { leading: true, trailing: true })'));

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