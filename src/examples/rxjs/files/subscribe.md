<!--
name:		
title:		subscribe
pageTitle:	subscribe — RxJS Observable method example + marble diagram
desc:		subscribe method indicates to inner emitter that the Observer is ready to receive emissions
docsUrl:	https://rxjs.dev/api/index/class/Observable#subscribe
-->

Calling `subscribe` tells inner emitter function (producer) that the observer (consumer) is ready to receive emissions:

> Also take a look at **[rxjs/constructor](/rxjs/constructor/)** to better understand the producer-consumer connection

```js
const { rxObserver } = require('api/v0.3');
const { interval } = require('rxjs');


// source stream -- an interval
// emitting at 50ms, 100ms, 150ms, 200ms, 250ms, etc
const source$ = interval(50);

// observer to draw marbles on the diagram
const marbleObserver = rxObserver();

// unsubscribe from source$ in 200ms
const subscription = source$
  .subscribe(v => {
    console.log(v);
    marbleObserver.next(v); // draw a marble
  });

// unsubscribe from source$ in 220ms
setTimeout(() => {
  subscription.unsubscribe();
  marbleObserver.complete(); // complete diagram
}, 220);
```