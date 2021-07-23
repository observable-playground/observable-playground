<!--
name:		
title:		first vs take vs single
pageTitle:	first vs take vs single — RxJS operators head-to-head comparison + marble diagram
desc:		See how these RxJS operators differ in emission, throwing errors and completion, when applied to different source Observables:
docsUrl:	
-->

See how [first](/rxjs/first/), [take](/rxjs/take/) and [single](/rxjs/single/) RxJS operators differ in emission, throwing errors and completion, when applied to different source Observables:

---

**A source** — single value, delayed completion

```js
const { rxObserver } = require('api/v0.3');
const { timer, merge } = require('rxjs');
const { first, single, take, ignoreElements } = require('rxjs/operators');

// A stream — one value at 5ms, complete at 10ms
const a$ = merge(timer(5), timer(10).pipe(ignoreElements()));

a$.subscribe(rxObserver('A stream — one value at 5ms, complete at 10ms'));

a$.pipe(first())
  .subscribe(rxObserver('A :: first()'));

a$.pipe(take(1))
  .subscribe(rxObserver('A :: take(1)'));

a$.pipe(single())
  .subscribe(rxObserver('A :: single()'));
```

---

**B source** — two values, immediate completion

```js
const { rxObserver } = require('api/v0.3');
const { interval } = require('rxjs');
const { first, single, take } = require('rxjs/operators');

// B stream — two values at 5ms and 10ms, complete at 10ms
const b$ = interval(5).pipe(take(2));

b$.subscribe(rxObserver('B stream — two values at 5ms and 10ms, complete at 10ms'));

b$.pipe(first())
  .subscribe(rxObserver('B :: first()'));

b$.pipe(take(1))
  .subscribe(rxObserver('B :: take(1)'));

b$.pipe(single())
  .subscribe(rxObserver('B :: single()'));
```

---

**C source** — no values, delayed completion

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { first, single, take, ignoreElements } = require('rxjs/operators');

// C stream — no values, complete at 10ms
const c$ = timer(10).pipe(ignoreElements());

c$.subscribe(rxObserver('C stream — no values, complete at 10ms'));

c$.pipe(first())
  .subscribe(rxObserver('C :: first()'));

c$.pipe(take(1))
  .subscribe(rxObserver('C :: take(1)'));

c$.pipe(single())
  .subscribe(rxObserver('C :: single()'));
```
