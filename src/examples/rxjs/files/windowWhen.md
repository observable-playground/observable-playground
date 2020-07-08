<!--
name:		
title:		windowWhen
pageTitle:	windowWhen — RxJS operator example
desc:		windowWhen will emit a new substream of values from the source stream, every time the stream returned by provided function emits:
docsUrl:	https://rxjs.dev/api/operators/throttleTime
-->

windowWhen will emit a new substream of values from the source stream, every time the stream returned by provided function emits:

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { take, windowWhen, mergeMap, count } = require('rxjs/operators');

timer(0, 4).pipe(
    // take 10 values
    take(10),
  
    // open a window every 10ms
    windowWhen(() => timer(10)),
  
    // manage with the substream
    // that emits events inside the window
    mergeMap(substream =>
      substream.pipe(count())
    )
  )
  .subscribe(rxObserver());
  ```