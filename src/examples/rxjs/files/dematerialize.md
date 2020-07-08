<!--
name:		
title:		materialize - dematerialize
pageTitle:	materialize — RxJS-dematerialize operators usage example + marble diagram
desc:		See how to turn an error into an event that can be delayed
docsUrl:	https://rxjs.dev/api/operators/dematerialize
-->

To manipulate error and completion events — we can turn them into ordinary value emissions, using `materialize`.  
Then we’ll be able to apply any operator we want: `delay`, `map`, `filter`, etc.  
After we're done, we can turn things back to normal using `dematerialize`:

```js
const { rxObserver } = require('api/v0.3');
const { timer, throwError, Notification } = require('rxjs');
const { switchMap, materialize, dematerialize, delay, map } = require('rxjs/operators');


const source$ = timer(5).pipe(
  switchMap(() => throwError('Err!'))
);

const result$ = source$.pipe(
  // turn all events on stream into Notifications
  materialize(),
  // delay error by 5ms
  delay(5),
  // turn error into a value
  map(n => new Notification('N', n.error, undefined)),
  // turn Notifications back to events on stream
  dematerialize()
);

source$.subscribe(rxObserver('source$'));
result$.subscribe(rxObserver('result$'));

```
