<!--
name:		
title:		repeat
pageTitle:	repeat — RxJS operator example + marble diagram
desc:		Repeat operator will resubscribe to source once it completes
docsUrl:	https://rxjs.dev/api/operators/repeat
-->

Repeat operator will resubscribe to source once it completes. `repeat` takes optional number of repeats, if omitted — will resubscribe indefinitely, if set to 0 — will return an empty observable.

## Basic example

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { repeat } = require('rxjs/operators');

timer(5)
  .pipe(
    repeat(5)
  )
  .subscribe(rxObserver());

```

## Smarter source

When source stream completes, repeat will re-subscribe again and will get a new source stream:

```js
const { rxObserver } = require('api/v0.3');
const { timer, iif, of } = require('rxjs');
const { repeat, delay } = require('rxjs/operators');

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
