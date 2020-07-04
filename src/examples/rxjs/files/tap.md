<!--
name:		
title:		tap
pageTitle:	RxJS tap operator example + marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/operators/tap
-->

Do sideeffects on source emissions.  
(Open browser console to see the output)

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

rxjs-compat version with `.do`:

```js
const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');
Observable
  .timer(0, 5)
  .take(10)
  .do(v => console.log('do', v))
  .subscribe(rxObserver('.do()'));

```
