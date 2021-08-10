<!--
name:		
title:		RxJS with pipeline |> operator proposal
pageTitle:	RxJS with pipeline |> operator proposal
desc:		This example shows how to use ECMAScript pipeline operator proposal with RxJS pipe operators
docsUrl:	
-->

> **EXPERIMENTAL**

> **NOTE**: I'm sorry, but I had to disable this feature in our playground due to technical issues.

Pipeline operator `|>` is a new proposal to ECMAScript that simplifies "piping" a value through several functions.    
And it nicely fits into RxJS' [`pipe`](/rxjs/pipe/) flow.

See TC-39 [pipeline operator proposal](https://github.com/tc39/proposal-pipeline-operator/) for more details


<!--
```ts
// proposal-pipeline-operator
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { take, map } = require('rxjs/operators');

const msg = 'awesome';

timer(0, 5)
  |> take(msg.length)
  |> map(index=>msg[index])
  |> subscribe(rxObserver())
  ;

function subscribe(observer){
  return stream$ => stream$.subscribe(observer);
}

```
-->
