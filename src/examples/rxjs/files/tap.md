<!--
name:
title:		tap
pageTitle:	tap — RxJS operator example + marble diagram
desc:		with tap you can perform side-effects when source emits, errors or completes
docsUrl:	https://rxjs.dev/api/operators/tap
-->

with `tap` you can perform side-effects when source emits, errors or completes

> Open browser console to see the output

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { tap, take } = require('rxjs/operators');

timer(0, 5)
  .pipe(
    take(10),
    tap(v => console.log('tap', v))
  )
  .subscribe(rxObserver('tap()'));

```

See [tap vs finalize](/rxjs/tap-vs-finalize/) comparison
