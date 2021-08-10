<!--
name:		
title:		toPromise
pageTitle:	toPromise — RxJS Observable method example + marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/index/class/Observable#toPromise
-->

`toPromise` method turns Observable into a Promise, emitting it's last value

> **NOTE:** `toPromise` is deprecated and will be removed in RxJS v8 in favor of two new functions: `firstValueFrom` and `lastValueFrom`

```js
const { rxObserver } = require('api/v0.3');
const { interval } = require('rxjs');
const { take } = require('rxjs/operators');


// source stream -- an interval
// emitting at 50ms, 100ms, 150ms, 200ms, 250ms, etc
// we're taking 3 first values from it
const source$ = interval(50)
  .pipe(
    take(3)
  );

// observer to draw marbles on the diagram
const diagram = rxObserver();

source$
  .toPromise()
  .then(v => {
    console.log(v);
    diagram.next(v); // draw a marble
    diagram.complete(); // complete diagram
  });
```