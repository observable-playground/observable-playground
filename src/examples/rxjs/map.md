<!--
name:		
title:		map
pageTitle:	RxJS map operator example + marble diagram
desc:		Turn emitted value into another value
docsUrl:	https://rxjs.dev/api/operators/map
-->

Turn emitted value into another value.  

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { map, take } = require('rxjs/operators');

timer(0, 10)
  .pipe(
    take(5)
  )
  .subscribe(rxObserver('timer(0, 5)'));

timer(0, 10)
  .pipe(
    map(i => i + ' 🦆'),
    take(5)
  )
  .subscribe(rxObserver('map(i => i + 🦆)'));

```


Try [comparing map to pluck](/rxjs/map-vs-pluck/)