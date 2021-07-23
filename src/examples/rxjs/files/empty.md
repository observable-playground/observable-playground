<!--
name:       
title:      EMPTY
pageTitle:	EMPTY — An RxJS Observable that doesn't emit any value and immediately completes
desc:       
docsUrl:	
-->

An RxJS Observable that doesn't emit any value and immediately completes

```js
const { rxObserver } = require('api/v0.3');
const { EMPTY } = require('rxjs');

EMPTY
  .subscribe(rxObserver('EMPTY'));
```

> Compare it to the [`NEVER`](/rxjs/never) Observable
