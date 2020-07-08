<!--
name:		
title:		windowToggle
pageTitle:	windowToggle — RxJS operator example + marble diagram
desc:		windowToggle lets you open and close a filtering window. Emissions between "on" and "off" events will be passed to the output stream:
docsUrl:	https://rxjs.dev/api/operators/windowToggle
-->

`windowToggle` operator lets you open and close a filtering window. Emissions between "on" and "off" events will be passed to the output stream. Read more about muting and spacing events on RxJS streams in my article **["Pausable Observables in RxJS and other backpressure techniques"](https://medium.com/@kddsky/pauseable-observables-in-rxjs-58ce2b8c7dfd)**

```js
const { rxObserver } = require('api/v0.3');
const { timer, merge, Subject } = require('rxjs');
const { windowToggle, take, flatMap, mapTo } = require('rxjs/operators');


const source$ = timer(0, 10).pipe(take(10));

const windowOn$ = new Subject();
const windowOff$ = new Subject();

const result$ = source$.pipe(
  // filter values between on-off pairs
  windowToggle(
    windowOn$,
    ()=>windowOff$
  ),

  // flattern window values
  flatMap(v=>v)
);

// trigger ONs and OFFs
windowOn(15);
windowOff(35);

windowOn(75);
windowOff(85);


// subscriptions
source$.subscribe(rxObserver('source$'));
merge(
    windowOn$.pipe(mapTo('on')),
    windowOff$.pipe(mapTo('off'))
  )
  .subscribe(rxObserver('switch'));
result$.subscribe(rxObserver('result$'));



// helpers
function windowOn(delay){
  return setTimeout(()=>{
    windowOn$.next(void 0);
  }, delay);
}

function windowOff(delay){
  return setTimeout(()=>{
    windowOff$.next(void 0);
  }, delay);
}

```
