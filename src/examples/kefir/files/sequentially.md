<!--
name:		
title:		sequentially
pageTitle:	Kefir sequentially operator example + marble diagram
desc:		
docsUrl:	
-->

```js
const { kefirObserver } = require('api/v0.3');
const Kefir = require('kefir');

Kefir
  .sequentially(10, [1, 2, 3])
  .observe(kefirObserver());

```
