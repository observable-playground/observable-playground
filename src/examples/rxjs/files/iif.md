<!--
name:		
title:		iif
pageTitle:	iif — RxJS function example + marble diagram
desc:		Example of iif that will use a predicate to choose which observable to return to a subscriber
docsUrl:	https://rxjs.dev/api/index/function/iif
-->

Using a predicate, decide which Observable to provide at the time of subscription

```js
const { rxObserver } = require('api/v0.3');
const { iif, of } = require('rxjs');

// decides later which observable to return
const source$ = iif(
  ()=> Date.now() < 3 // predicate
  , of('🐦')          // true
  , of('🦉')          // false
);

// subsctibe at T0
source$.subscribe(rxObserver('Early bird'));

// delayed subscription
setTimeout(()=>{
  source$.subscribe(rxObserver('Night owl'));
}, 5);

```

To switch between many Observables see [defer function](/rxjs/defer/)