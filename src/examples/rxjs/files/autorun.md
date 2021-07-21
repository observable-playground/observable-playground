<!--
name:
title:		rxjs-autorun
pageTitle:	rxjs-autorun — automatically re-evaluate an expression whenever Observable in it emits
desc:		RxJS-Autorun playground. Automatically re-evaluate an expression whenever Observable in it emits
docsUrl:
-->

## 📖 About

Automatically re-evaluate an expression whenever Observable in it emits

**🔗 Links:**    
See the homepage: [github.com/kosich/rxjs-autorun](https://github.com/kosich/rxjs-autorun)    
Read an intro article: ["RxJS Autorun Intro"](https://dev.to/rxjs/rxjs-autorun-cop)    

**📦 Install:**    
```
npm i rxjs-autorun
```

## 🛸 Examples

### Simple mapping

`computed` will run the `() => a + '!'` expression whenever `a` emits a distinctive value:

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { computed, $ } = require('rxjs-autorun');

const a = timer(100); // 0 in 100ms
const c = computed(() => $(a) + '!️');

a.subscribe(rxObserver('a'));
c.subscribe(rxObserver('a + !'));
```

### Combine two streams

`computed` will run the `() => a + b` expression whenever `a` or `b` emit a distinctive value:

```js
const { rxObserver } = require('api/v0.3');
const { timer, of } = require('rxjs');
const { map } = require('rxjs/operators');
const { computed, $, _ } = require('rxjs-autorun');


const a = timer(0, 100); // 0, 1, 2, …
const b = timer(0, 330).pipe(map(i => i % 2 ? '🐇' : '🦔' )); // 🦔, 🐇, 🦔, …
const c = computed(() => $(a) + $(b));

a.subscribe(rxObserver('a'));
b.subscribe(rxObserver('b'));
c.subscribe(rxObserver('a + b'));
```

### Combine `a` with latest `b`

`computed` will run the `() => a + b` expression whenever `a` emits a distinctive value, with latest value from `b`:

```js
const { rxObserver } = require('api/v0.3');
const { timer, of } = require('rxjs');
const { map } = require('rxjs/operators');
const { computed, $, _ } = require('rxjs-autorun');


const a = timer(0, 100); // 0, 1, 2, …
const b = timer(0, 330).pipe(map(i => i % 2 ? '🐇' : '🦔' )); // 🦔, 🐇, 🦔, …
const c = computed(() => $(a) + _(b));

a.subscribe(rxObserver('a'));
b.subscribe(rxObserver('b'));
c.subscribe(rxObserver('a + latest b'));
```

---

**🛠 Check out the docs for more: [github.com/kosich/rxjs-autorun](https://github.com/kosich/rxjs-autorun)**

_This is one of my libs that I'd like to share with you_
