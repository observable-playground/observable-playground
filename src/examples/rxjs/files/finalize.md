<!--
name:
title:		finalize
pageTitle:	finalize — RxJS operator example + marble diagram
desc:		RxJS 'finalize' operator lets you run a function upon stream termination, regardless whether it has completed or failed
docsUrl:	https://rxjs.dev/api/operators/finalize
-->

Being similar to native JS `finally`, RxJS `finalize` operator lets you run a function upon stream termination, regardless whether it completed, failed, or was unsubscribed from:

> Open browser console to see the output

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { finalize } = require('rxjs/operators');

timer(5)
  .pipe(
    finalize(()=>
      console.log(`Finished @ ${ Date.now() }ms`)
    )
  )
  .subscribe(rxObserver());

```

See [finalize vs tap](/rxjs/tap-vs-finalize/) comparison
