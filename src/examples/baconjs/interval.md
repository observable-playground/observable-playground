<!--
name:		
title:		interval
pageTitle:	Baconjs interval operator example + marble diagram
desc:		
docsUrl:	
-->

```js
const { baconObserver } = require('api/v0.3');
const Bacon = require('baconjs');

Bacon
  .interval(5, '+')
  .take(5)
  .subscribe(baconObserver());

```
