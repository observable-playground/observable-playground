<!--
name:		
title:		pipe
pageTitle:	pipe — RxJS Observable method and function usage example + marble diagram
desc:		Chain Rx operators or create new ones using pipe function and pipe factory
docsUrl:	https://rxjs.dev/api/index/class/Observable#pipe
-->

## method

`pipe` function let's you chain RxJS operators:  

```js
const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { filter, take } = require('rxjs/operators');


timer(0, 10)
  .pipe(
    filter(x => x % 2), // filter only even numbers
    take(10)            // take 10 values and complete
  )
  .subscribe(rxObserver('Odd'));

```

_**NOTE:** pipe function returns a new Observable each time_

## factory

You can also use [`pipe` factory](https://rxjs.dev/api/index/function/pipe) to create new operators:

```js
const { rxObserver } = require('api/v0.3');
const { timer, pipe } = require('rxjs');
const { filter, take } = require('rxjs/operators');


timer(0, 10)
  .pipe( // pipe operators
    tenEvens()
  )
  .subscribe(rxObserver('Odd'));

// create a new operator using pipe constructor
function tenEvens(){
  return pipe(
    filter(x => x % 2), // filter only even numbers
    take(10)            // take 10 values and complete
  )
} 
```