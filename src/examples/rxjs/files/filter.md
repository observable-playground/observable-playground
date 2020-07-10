<!--
name:		
title:		filter
pageTitle:	filter — RxJS operator example + marble diagram
desc:		Filter operator omits all values from source that don't match the predicate function
docsUrl:	https://rxjs.dev/api/operators/filter
-->

`filter` operator omits all values from source that don't match the predicate function

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { filter, take } = require('rxjs/operators');


const source$ = timer(0, 5).pipe(
    take(4)
  );

const result$ = source$.pipe(
    filter(x => x % 2)
  );

source$.subscribe(rxObserver());
result$.subscribe(rxObserver());

```
