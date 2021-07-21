<!--
name:
title:		rxjs-rql
pageTitle:	Reactive Query Language — select events from observables
desc:
docsUrl:
-->

## 📖 About

Reactive Query Language for RxJS

**🔗 Links:**    
See the homepage: [github.com/erql/rx-rql](https://github.com/erql/rx-rql)    
Read an intro article: ["Queries for Observables: Crazy & Simple!"](https://dev.to/kosich/queries-for-observables-crazy-simple-15h3)    

**📦 Install:**    
```
npm i rx-rql
```

## 🛸 Examples

### Simple Query

Query events that occurred between other events

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { mapTo } = require('rxjs/operators');
const { query, some, mute } = require('rx-rql');

const a = timer(200).pipe(mapTo('a'));
const b = timer(0, 50).pipe(mapTo('b'));
const c = timer(800).pipe(mapTo('c'));

a.subscribe(rxObserver('a'));
b.subscribe(rxObserver('b'));
c.subscribe(rxObserver('c'));

// select all B between A and C
query(
  some(mute(a), some(b), mute(c))
)
.subscribe(rxObserver('all B between A and C'));
```

---

**🛠 Check out the docs for more: [github.com/erql/rx-rql](https://github.com/erql/rx-rql)**

_This is one of my libs that I'd like to share with you_
