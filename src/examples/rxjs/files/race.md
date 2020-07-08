<!--
name:		
title:		race
pageTitle:	race — RxJS function example + marble diagram
desc:		Once received a value, error or completion event from any given stream, race will reproduce all events from that stream
docsUrl:	https://rxjs.dev/api/index/function/race
-->

Once received a value, error or completion event from any given stream, `race` will reproduce all events from that stream, while unsubscribing from other streams

```js
const { rxObserver } = require('api/v0.3');
const { timer, race } = require('rxjs');
const { mapTo, take } = require('rxjs/operators');


const a$ = timer(10).pipe(mapTo('a'));
const b$ = timer(5, 5).pipe(take(3));

const result$ = race([ a$, b$ ]);

a$.subscribe(rxObserver('a$'));
b$.subscribe(rxObserver('b$'));
result$.subscribe(rxObserver('race(a$, b$)'));

```
