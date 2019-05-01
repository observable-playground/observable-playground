<!--
name:		
title:		timeInterval
pageTitle:	RxJS timeInterval operator example with a marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/operators/timeInterval
-->

Indicates time passed since previous value emission

```js
const { rxObserver } = require('api/v0.3');
const { interval, merge } = require('rxjs');
const { timeInterval, take, map } = require('rxjs/operators');

merge(
  interval(5),
  interval(7)
)
  .pipe(
    take(10),
    timeInterval(),
    map(({ interval }) => `+${interval}`)
  )
  .subscribe(rxObserver(''));

```
