<!--
name:		
title:		find
pageTitle:	find — RxJS operator example + marble diagram
desc:		find operator takes in predicate function and returns an Observable that will emit first value from source that matches predicate and will immediately complete:
docsUrl:	https://rxjs.dev/api/operators/find
-->

`find` operator takes in predicate function and returns an Observable that will emit first value from source that matches predicate and will immediately complete:

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { find, take } = require('rxjs/operators');


const source$ = timer(0, 5).pipe(
    take(4)
  );

const result$ = source$.pipe(
    find(x => x > 1)
  );

source$.subscribe(rxObserver());
result$.subscribe(rxObserver());

```
