<!--
name:		
title:		interval
pageTitle:	interval — RxJS function example + marble diagram
desc:		Example of how to emit sequential numbers using RxJS interval
docsUrl:	https://rxjs.dev/api/index/function/interval
-->

`interval` will emit sequential numbers with a given interval (first emission being delayed by that interval)

```js
const { rxObserver } = require('api/v0.3');
const { interval } = require('rxjs');
const { take } = require('rxjs/operators');

interval(5).pipe(
    take(10)
  )
  .subscribe(rxObserver());

```

To specify an initial delay, see [`timer(10, 5)`](/rxjs/timer/) example