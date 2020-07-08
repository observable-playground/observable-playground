<!--
name:		
title:		fromPromise
pageTitle:	fromPromise — RxJS function example + marble diagram
desc:		Learn how to turn a Promise into an Observable using "from"
docsUrl:	https://rxjs.dev/api/index/function/from
-->

Function `from` will turn an **`iterable`**, **`Promise`**, or **`Observable-like`** value into an Observable. Example using **`Promise`**:

```js
const { rxObserver } = require('api/v0.3');
const { from } = require('rxjs');

const promise = new Promise((resolve, reject)=>{
  setTimeout(() => resolve('done'), 10);
});

from(promise)
  .subscribe(rxObserver('from(promise)'));

```

Also check this [`from` iterable example](/rxjs/from/)
