<!--
name:		
title:		repeat
pageTitle:	repeat — RxJS operator example + marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/operators/repeat
-->

```js
const { rxObserver } = require('api/v0.3');
const { timer, iif, of } = require('rxjs');
const { repeat, delay } = require('rxjs/operators');

// repeat:
// resubscribe when source stream completes

// basic example
timer(5)
  .pipe(
    repeat(5)
  )
  .subscribe(rxObserver());

// when source stream completes -- repeat
// subscribes again and gets a new stream
iif(
  () => Date.now() < 10
  , of('0..10')
  , of('10+')
)
  .pipe(
    delay(5),
    repeat(5)
  )
  .subscribe(rxObserver());

```
