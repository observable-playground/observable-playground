<!--
name:		
title:		range
pageTitle:	range — RxJS function example + marble diagram
desc:		Example of how to generate sequence of numbers using RxJS range
docsUrl:	https://rxjs.dev/api/index/function/range
-->

Will immediately emit a sequence of numbers within a specified range

```js
const { rxObserver } = require('api/v0.3');
const { range } = require('rxjs');

range(0, 3)
  .subscribe(rxObserver());

```

To make a pause between emissions see [timer](/rxjs/timer/) and [interval](/rxjs/interval/) functions