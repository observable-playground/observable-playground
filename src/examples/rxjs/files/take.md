<!--
name:
title:      take
pageTitle:	take — RxJS operator example + marble diagram
desc:		will take maximum 'N' values from source stream and will complete after that
docsUrl:	https://rxjs.dev/api/operators/take
-->

`take(N)` will take maximum `N` values from source stream and will complete after that

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { take } = require('rxjs/operators');

timer(0, 10).pipe(
    take(10)
  )
  .subscribe(rxObserver('take(10)'));
```

See [takeUntil](/rxjs/takeUntil/) and [takeWhile](/rxjs/takeWhile/) operators

And [first vs take vs single](/rxjs/first-vs-take-vs-single/) comparison
