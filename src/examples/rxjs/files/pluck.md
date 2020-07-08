<!--
name:		
title:		pluck
pageTitle:	pluck — RxJS operator example + marble diagram
desc:		Map each emitted value to it's property, defined by path
docsUrl:	https://rxjs.dev/api/operators/pluck
-->

Map each emitted value to it's property, defined by path:  

```js
const { rxObserver } = require('api/v0.3');
const { of } = require('rxjs');
const { pluck, map } = require('rxjs/operators');

const source$ = of({ a: 1 }, { a: 2 }, { a: 3 });

source$
  .pipe(
    map(x => JSON.stringify(x))
  )
  .subscribe(rxObserver('of( { a: 1 } , ... )'));

source$
  .pipe(
    pluck('a')
  )
  .subscribe(rxObserver(`pluck('a')`));

```

Try [comparing map to pluck](/rxjs/map-vs-pluck/)