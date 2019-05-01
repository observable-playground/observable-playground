<!--
name:		
title:		finalize
pageTitle:	RxJS finalize operator example + marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/operators/finalize
-->

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
