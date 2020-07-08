<!--
name:		
title:		shareReplay
pageTitle:	shareReplay — RxJS operator example + marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/operators/shareReplay
-->

```js
const { rxObserver, palette } = require('api/v0.3');
const { timer, from } = require('rxjs');
const { zip, shareReplay, take } = require('rxjs/operators');


// our source will be a basic timer
// making 5 ticks, every 5ms
const source$ = timer(0, 5).pipe(
  take(5),
  zip(from(palette), Marble) // add color to items
);

const shared$ = source$.pipe(
  shareReplay()
);


// subscriptions and visualisations:
// creating observers for source$
const a = rxObserver('source$');
const b = rxObserver('source$ — delayed subscription');
source$.subscribe(a);

// creating observers for shared$
const c = rxObserver('shared$');
const d = rxObserver('shared$ — delayed subscription');
shared$.subscribe(c);

// delayed subscriptions
setTimeout(()=>{
  source$.subscribe(b);
  shared$.subscribe(d);
}, 10);



// helpers
function Marble(value,color) {
  return {
    valueOf: ()=>value
    , color
  };
}

```
