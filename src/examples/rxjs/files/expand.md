<!--
name:		
title:		expand
pageTitle:	expand — RxJS operator example + marble diagram
desc:		expand recursively turns each emission into another stream
docsUrl:	https://rxjs.dev/api/operators/expand
-->

`expand` recursively turns each emission into another stream:

```js
const { rxObserver } = require('api/v0.3');
const { of, timer, EMPTY } = require('rxjs');
const { expand, take, mapTo } = require('rxjs/operators');

const T = 5;

of(1).pipe(
    expand(value =>
      value < T
      ? timer(T, T).pipe(
          take(value + 1),
          mapTo(value + 1)
       )
      : EMPTY
    )
  )
  .subscribe(rxObserver());

```
