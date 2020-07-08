<!--
name:		
title:		defer
pageTitle:	defer — RxJS function example + marble diagram
desc:		Example of how to delay Observable creation till Observable is subscribed, using defer function
docsUrl:	https://rxjs.dev/api/index/function/defer
-->

Create Observable at the time of subscription

```js
const { rxObserver } = require('api/v0.3');
const { defer, of } = require('rxjs');

// decides later what observable to return
const source$ = defer(()=>{
  if (Date.now() < 3) {
    return of('🐦');
  }

  return of('🦉');
});

// subsctibe at T0
source$.subscribe(rxObserver('Early bird'));

// delayed subscription
setTimeout(()=>{
  source$.subscribe(rxObserver('Night owl'));
}, 5);

```

To switch between two Observables see [iif function](/rxjs/iif/)  