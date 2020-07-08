<!--
name:		
title:		zip
pageTitle:	zip — RxJS operator example + marble diagram
desc:		Creates Observable from multiple Observables. Resulting stream will emit a combined value when all input streams emit a new value
docsUrl:	https://rxjs.dev/api/index/function/zip
-->

Creates Observable from multiple Observables.  
Resulting stream will emit a combined value when all input streams emit a new value

```js
const { rxObserver } = require('api/v0.3');
const { zip, timer, from } = require('rxjs');
const { take } = require('rxjs/operators');


const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabet$ = from(alphabet);

zip(
  timer(0, 5),
  alphabet$,
  (digit, letter)=>digit+letter // combinator
)
  .pipe(
    take(10)
  )
  .subscribe(rxObserver());

```