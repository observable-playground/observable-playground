<!--
name:		
title:		interval
pageTitle:	Kefir interval operator example with a marble diagram
desc:		
docsUrl:	
-->

```js
const { kefirObserver } = require('api/v0.3');
const Kefir = require('kefir');

Kefir
  .interval(10, 1)
  .take(5)
  .observe(kefirObserver());

```
