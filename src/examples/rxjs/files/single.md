<!--
name:		
title:      single
pageTitle:	single — RxJS operator example + marble diagram
desc:		Returns an Observable that emits a value if and only if the source observable emits a single value:
docsUrl:	
-->

Returns an Observable that emits a value if and only if the source observable emits a **single** value. No more, no less. Otherwise throws an error. Also takes an optional predicate to pre-filter values:

> Also check out this [`first` vs `take` vs `single`](/rxjs/first-vs-take-vs-single/) head-to-head comparison

---

**No predicate** — multiple values from the source will result in an error:

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { single, take } = require('rxjs/operators');

const source$ = timer(0, 5).pipe(take(5));
const result$ = source$.pipe(single());

source$.subscribe(rxObserver('source'));
result$.subscribe(rxObserver('single()'));
```

---

**Predicate** — predicate will narrow source values to just one:

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { single, take } = require('rxjs/operators');

const source$ = timer(0, 5).pipe(take(5));
const result$ = source$.pipe(single(n => n === 3));

source$.subscribe(rxObserver('source'));
result$.subscribe(rxObserver('single(n => n === 3)'));
```

---

**An [empty](/rxjs/empty) source** — will result in an error, as no values are emitted at all:

```js
const { rxObserver } = require('api/v0.3');
const { EMPTY } = require('rxjs');
const { single } = require('rxjs/operators');

const source$ = EMPTY;
const result$ = source$.pipe(single());

source$.subscribe(rxObserver('EMPTY'));
result$.subscribe(rxObserver('single()'));
```
