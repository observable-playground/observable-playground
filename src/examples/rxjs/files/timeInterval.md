<!--
name:		
title:		timeInterval
pageTitle:	timeInterval — RxJS operator example + marble diagram
desc:		Indicates time passed since previous value emission:
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
