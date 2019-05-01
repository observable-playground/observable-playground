<!--
name:		
title:		timeout
pageTitle:	RxJS timeout operator example with a marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/operators/timeout
-->

```js
const { rxObserver } = require('api/v0.3');
const { from, timer } = require('rxjs');
const { delayWhen, timeout } = require('rxjs/operators');

const source$ = from([ 0, 10, 20, 45 ])
  .pipe(
    delayWhen(x => timer(x))
  );

const result$ = source$.pipe(
  timeout(20)
);

source$.subscribe(rxObserver());
result$.subscribe(rxObserver());

```
