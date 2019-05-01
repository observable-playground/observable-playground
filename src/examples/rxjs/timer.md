<!--
name:       
title:      timer
pageTitle:  RxJS timer function example with a marble diagram
desc:       timer will emit with a given pace after a delay
docsUrl:    https://rxjs.dev/api/index/function/timer
-->
## emit once

`timer(msDelay)` will emit once after a given delay

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { take } = require('rxjs/operators');

// will emit once in 10ms
timer(10)
  .subscribe(rxObserver('timer(10)'));

```

## emit with interval

`timer(msDelay, msInterval)` after a given delay will start emitting sequential number values with a given interval

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { take } = require('rxjs/operators');

// will start emiting in 10ms
// with 5ms interval
timer(10, 5).pipe(
    take(4)
  )
  .subscribe(rxObserver('timer(10, 5)'));

```
