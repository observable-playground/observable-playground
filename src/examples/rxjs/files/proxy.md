<!--
name:
title:		rxjs-proxify
pageTitle:	rxjs-proxify — A smart Proxy for RxJS with good TypeScript support
desc:		RxJS-Proxify playground. A smart Proxy for RxJS with good TypeScript support
docsUrl:
-->

## 📖 About

A smart Proxy for RxJS with good TypeScript support

**🔗 Links:**    
See the homepage: [github.com/kosich/rxjs-proxify](https://github.com/kosich/rxjs-proxify)    
Read an intro article: ["Turn a Stream of Objects into an Object of Streams"](https://dev.to/rxjs/turn-a-stream-of-objects-into-an-object-of-streams-2aed)    

**📦 Install:**    

```
npm i rxjs-proxify
```


## 🛸 Examples

### Access properties

Read property value at any depth:

```js
const { rxObserver } = require('api/v0.3');
const { of } = require('rxjs');
const { map } = require('rxjs/operators');
const { proxify } = require('rxjs-proxify');

const source = of({ a: 1 }, { a: 2 }, { a: 3 });

proxify(source)
  .a // read `a` from every emission
  .subscribe(rxObserver());
```


### Call methods

Call methods on stream values, preserving `this` binding:

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { proxify } = require('rxjs-proxify');

const a = timer(0, 100);

proxify(a)
  .toString(2)
  .subscribe(rxObserver());
```

---

**🛠 Check out the docs for more: [github.com/kosich/rxjs-proxify](https://github.com/kosich/rxjs-proxify)**

_This is one of my libs that I'd like to share with you_
