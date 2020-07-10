<!--
name:		
title:		delayWhen
pageTitle:	delayWhen — RxJS operator example + marble diagram
desc:		delays value emission by another stream
docsUrl:	https://rxjs.dev/api/operators/delayWhen
-->

`delayWhen` delays value emission by another stream. In this example we'll delay source stream emissions by their numeric values:

```js
const { rxObserver } = require('api/v0.3');
const { from, timer } = require('rxjs');
const { delayWhen } = require('rxjs/operators');

const source$ =  from([ 0, 15, 20, 25, 5, 10 ]);

const delayed$ = source$.pipe(
    delayWhen(x => timer(x))
  );
  
source$.subscribe(rxObserver('source$'));
delayed$.subscribe(rxObserver('delayed$'));

```

To delay values emission by constant time — see [`delay` operator example](/rxjs/delay/)