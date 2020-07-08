<!--
name:		
title:		timeout
pageTitle:	timeout — RxJS operator example + marble diagram
desc:		timeout operator will ensure that time gap between emissions won't be longer than defined duration
docsUrl:	https://rxjs.dev/api/operators/timeout
-->

Timeout operator will ensure that time gap between emissions won't be longer than defined duration. If source doesn't emit longer then duration — `timeout` will raise an error on stream:

```js
const { rxObserver } = require('api/v0.3');
const { from, timer } = require('rxjs');
const { delayWhen, timeout } = require('rxjs/operators');

// create a source that will emit at 0, 10, 20 and 45ms
const source$ = from([ 0, 10, 20, 45 ])
  .pipe(
    delayWhen(x => timer(x))
  );

// set maximum gap using `timeout`
const result$ = source$.pipe(
  timeout(20)
);


source$.subscribe(rxObserver());
result$.subscribe(rxObserver());

```
