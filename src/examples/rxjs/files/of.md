<!--
name:		
title:		of
pageTitle:	of — RxJS function example + marble diagram
desc:		Example of how to turn anything into an Observable using Rxjs of function
docsUrl:	https://rxjs.dev/api/index/function/of
-->

Creates an Observable that will immediately emit all passed arguments

```js
const { rxObserver } = require('api/v0.3');
const { of } = require('rxjs');

of(1, 2, 3)
  .subscribe(rxObserver());

```

Use [`from`](/rxjs/from/) to create a stream from an iterable value or a promise