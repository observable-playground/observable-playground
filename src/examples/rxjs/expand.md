<!--
name:		
title:		expand
pageTitle:	RxJS expand operator example with a marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/operators/expand
-->

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
