<!--
name:
title:      take
pageTitle:	take — RxJS operator example + marble diagram
desc:		will take maximum 'N' values from the source stream and will complete after that
docsUrl:	https://rxjs.dev/api/operators/take
-->

`take(N)` will take maximum `N` values from the source stream and will complete after that

> Also check out this [`first` vs `take` vs `single`](/rxjs/first-vs-take-vs-single/) head-to-head comparison

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { take } = require('rxjs/operators');

const source$ = timer(0, 100);

const result$ = source$.pipe(
    take(5)
  );

source$.subscribe(rxObserver('source'));
result$.subscribe(rxObserver('take(5)'));
```

There are also [takeUntil](/rxjs/takeUntil/) and [takeWhile](/rxjs/takeWhile/) operators
