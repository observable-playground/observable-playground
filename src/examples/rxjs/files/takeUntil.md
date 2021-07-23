<!--
name:
title:      takeUntil
pageTitle:	takeUntil — RxJS operator example + marble diagram
desc:		takeUntil will complete when another stream emits a value
docsUrl:	https://rxjs.dev/api/operators/takeUntil
-->

`takeUntil(otherStream)` will complete when another (terminating) stream emits a value

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { takeUntil } = require('rxjs/operators');

const source$ = timer(0, 100);
const terminator$ = timer(550);

source$.subscribe(rxObserver('source$'));
terminator$.subscribe(rxObserver('terminator$'));
source$.pipe(
    takeUntil(terminator$)
  )
  .subscribe(rxObserver('takeUntil'));
```

Also see [take](/rxjs/take/) and [takeUntil](/rxjs/takeUntil/) operators