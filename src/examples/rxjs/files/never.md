<!--
name:       
title:      NEVER
pageTitle:	NEVER — An RxJS Observable that doesn't emit any value and never completes
desc:       
docsUrl:	
-->

An RxJS Observable that doesn't emit any value and **never** completes

```js
const { rxObserver } = require('api/v0.3');
const { NEVER } = require('rxjs');

NEVER
  .subscribe(rxObserver('NEVER'));
```

> Compare it to the [`EMPTY`](/rxjs/empty) Observable
