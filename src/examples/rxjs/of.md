<!--
name:		
title:		of
pageTitle:	RxJS of function example with a marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/index/function/of
-->

Creates an Observable that will immediately emit all passed arguments

```js
const { rxObserver } = require('api/v0.3');
const { of } = require('rxjs');

of(1)
  .subscribe(rxObserver());

```
