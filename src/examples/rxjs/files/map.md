<!--
name:		
title:		map
pageTitle:	map — RxJS operator example + marble diagram
desc:		Map each emitted value to another value
docsUrl:	https://rxjs.dev/api/operators/map
-->

`map` turns each emitted value into another value, using mapping function

_**NOTE**: if your mapping function returns an Observable or a Promise — you'll need one of `*Map` operators:    
[mergeMap, exhaustMap, switchMap, concatMap](/rxjs/mergeMap-vs-exhaustMap-vs-switchMap-vs-concatMap/)_

_**NOTE 2**: I've created a package [rxjs/proxy](/rxjs/proxy/) {👓} to simplify subproperty access_    
_It turns Observables of Objects into Objects of Observables_    
_And [rxjs/autorun](/rxjs/autorun/) package will let you easily map a single stream or combine multiple._

_Also check out [`pluck`](/rxjs/pluck/) operator and try comparing [**map** to **pluck**](/rxjs/map-vs-pluck/)_

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { map, take } = require('rxjs/operators');

// 5 values from a timer
timer(0, 10)
  .pipe(
    take(5)
  )
  .subscribe(rxObserver('timer(0, 5)'));

// 5 mapped values from a timer
timer(0, 10)
  .pipe(
    map(i => i + ' 🦆'),
    take(5)
  )
  .subscribe(rxObserver('map(i => i + 🦆)'));

```