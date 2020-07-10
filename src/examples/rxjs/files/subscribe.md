<!--
name:		
title:		subscribe
pageTitle:	subscribe — RxJS Observable method example + marble diagram
desc:		subscribe method indicates to inner emitter that the Observer is ready to receive emissions
docsUrl:	https://rxjs.dev/api/index/class/Observable#subscribe
-->

`subscribe` method indicates to inner emitter that the Observer is ready to receive emissions

```js
const { rxObserver } = require('api/v0.3');
const { interval } = require('rxjs');


// source stream -- an interval
// emitting at 50ms, 100ms, 150ms, 200ms, 250ms, etc
const source$ = interval(50);

// observer to draw marbles on the diagram
const marble = rxObserver();

// unsubscribe from source$ in 200ms
const subscription = source$
  .subscribe(v => {
    console.log(v);
    marble.next(v); // draw a marble
  });

// unsubscribe from source$ in 200ms
setTimeout(() => {
  subscription.unsubscribe();
  marble.complete(); // complete marble
}, 200);
```