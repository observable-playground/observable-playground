<!--
name:       
title:      startWith
pageTitle:	startWith — RxJS operator example + marble diagram
desc:       Prepend a stream with a value
docsUrl:	https://rxjs.dev/api/operators/startWith
-->

Prepend a stream with a value. This value will be **synchronously** emitted upon subscription:

_**NOTE:** also take a look at [rxjs/defaultIfEmpty/](/rxjs/defaultIfEmpty/) to handle EMPTY Observables._

```js
const { rxObserver } = require('api/v0.3');
const { interval } = require('rxjs');
const { startWith, take } = require('rxjs/operators');

interval(10)
  .pipe(
    take(5)
  )
  .subscribe(rxObserver('interval(10)'));

interval(10)
  .pipe(
    startWith('🐶'),
    take(5)
  )
  .subscribe(rxObserver('startWith(🐶)'));
```