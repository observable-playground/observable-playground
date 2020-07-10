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
const { expand, mapTo } = require('rxjs/operators');

of(1).pipe(
    expand(value =>
      value < 5
      ? timer(5).pipe(mapTo(++value))
      : EMPTY
    )
  )
  .subscribe(rxObserver());

```
