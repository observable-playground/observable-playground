<!--
name:		
title:		pool
pageTitle:	pool — Kefir operator example + marble diagram
desc:		
docsUrl:	
-->

```js
const { kefirObserver } = require('api/v0.3');
const Kefir = require('kefir');

let a,b,c;

a = Kefir.sequentially(100, [0, 1, 2]);
b = Kefir.sequentially(100, [0, 1, 2]).delay(30);
c = Kefir.sequentially(100, [0, 1, 2]).delay(60);

const pool = Kefir.pool();

pool.plug(a);
pool.plug(b);
pool.plug(c);

a.observe(kefirObserver());
b.observe(kefirObserver());
c.observe(kefirObserver());
pool.observe(kefirObserver('pool'));

```
