<!--
name:
title:      takeWhile
pageTitle:	takeWhile — RxJS operator example + marble diagram
desc:		takeWhile will emit values from source while they satisfy given predicate
docsUrl:	https://rxjs.dev/api/operators/takeWhile
-->

`takeWhile(predicate)` will emit values from source while they satisfy given predicate, and will complete once emitted value dissatisfies the predicate:

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { takeWhile } = require('rxjs/operators');

const source$ = timer(0, 100);

source$.subscribe(rxObserver('source$'));
source$.pipe(
    takeWhile(n => n < 5)
  )
  .subscribe(rxObserver('takeWhile(n < 5)'));
```

Also see [take](/rxjs/take/) and [takeUntil](/rxjs/takeUntil/) operators