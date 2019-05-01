<!--
name:		
title:		interval
pageTitle:	RxJS interval function example with a marble diagram
desc:		Example of how to emit sequential numbers using RxJS interval
docsUrl:	https://rxjs.dev/api/index/function/interval
-->

Will emit sequential numbers with a given interval (first emission being delayed by that interval)

```js
const { rxObserver } = require('api/v0.3');
const { interval } = require('rxjs');
const { take } = require('rxjs/operators');

interval(5).pipe(
    take(10)
  )
  .subscribe(rxObserver());

```

To specify initial delay, see [`timer(10, 5)`](/rxjs/timer)