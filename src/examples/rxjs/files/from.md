<!--
name:		
title:		from
pageTitle:	from — RxJS function example + marble diagram
desc:		See this example of "from" turning iterable string and an array into an Observable
docsUrl:	https://rxjs.dev/api/index/function/from
-->

Function `from` will turn an `iterable`, `Promise`, or `Observable-like` value into an Observable. Examples using `iterable`:

## A stream from an Array

```js
const { rxObserver } = require('api/v0.3');
const { from } = require('rxjs');

from([ 5, 10, 20 ])
  .subscribe(rxObserver('from([5, 10, 20])'));

```

## A stream from a String

```js
const { rxObserver } = require('api/v0.3');
const { from } = require('rxjs');

from('Hello')
  .subscribe(rxObserver(`from('Hello')`));

```

For promise conversion example see [`fromPromise`](/rxjs/fromPromise/) 