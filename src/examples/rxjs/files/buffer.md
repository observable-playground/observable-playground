<!--
name:		
title:		buffer
pageTitle:	buffer — RxJS operator example + marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/operators/buffer
-->

```js
const { rxObserver } = require('api/v0.3');
const { merge, timer } = require('rxjs');
const { buffer, take } = require('rxjs/operators');


const source$ = merge(timer(0, 200), timer(300));

const trigger$ = timer(0, 250);

const buffered$ = source$.pipe(
    buffer(trigger$)
  ); 

source$.subscribe(rxObserver('source$'));
trigger$.subscribe(rxObserver('Buffer trigger$'));
buffered$.subscribe(rxObserver('buffered$'));

```
