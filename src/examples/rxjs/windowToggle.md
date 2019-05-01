<!--
name:		
title:		windowToggle
pageTitle:	RxJS windowToggle operator example with a marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/operators/windowToggle
-->

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
source$.subscribe(rxObserver('source'));
result$.subscribe(rxObserver('result'));
merge(
    windowOn$.pipe(mapTo('on')),
    windowOff$.pipe(mapTo('off'))
  )
  .subscribe(rxObserver('switch'));


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
