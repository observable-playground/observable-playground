<!--
name:		
title:		pluck
pageTitle:	pluck — RxJS operator example + marble diagram
desc:		Map each emitted value to it's property, defined by path
docsUrl:	https://rxjs.dev/api/operators/pluck
-->

Map each emitted value to it's property, defined by path:  

> Also see the [`map`](/rxjs/map/) operator and try comparing [**pluck** to **map**](/rxjs/map-vs-pluck/)


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

_**NOTE:** I've created a package to simplify subproperty access_    
_It turns Observables of Objects into Objects of Observables_    
_Check it out: [rxjs/proxy](/rxjs/proxy/) {👓}_    