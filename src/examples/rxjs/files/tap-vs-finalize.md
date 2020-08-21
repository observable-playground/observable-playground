<!--
name:
title:		tap vs finalize
pageTitle:	tap vs finalize — RxJS operators comparison + marble diagram
desc:		both can be used to
docsUrl:
-->

Both operators can be used to trigger sideeffects on error/complete stream events. While [`tap`](/rxjs/tap/) can distinguish error from complete, [`finalize`](/rxjs/finalize/) will also be triggered on unsubscription:

> Open browser console to see the output

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { finalize, tap } = require('rxjs/operators');

// you'll need to open console
// for this example

const sub = timer(10)
  .pipe(
    finalize(()=>
      console.log(`Finished @ ${ Date.now() }ms`)
    ),
    tap({
      next(n){ console.log(n) },
      error(e){ console.log(e) },
      complete(){ console.log('C') }
    })
  )
  .subscribe(rxObserver());


// uncomment next line to trigger only finalize
// setTimeout(() => sub.unsubscribe(), 5)

```
