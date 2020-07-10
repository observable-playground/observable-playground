<!--
name:		
title:		forEach
pageTitle:	forEach — RxJS Observable method usage example + marble diagram
desc:		
docsUrl:	https://rxjs.dev/api/index/class/Observable#forEach
-->

`forEach` function let's us iterate over stream emissions. It takes a function to handle `next` stream events and returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to handle `error` and `complete` events.

```js
const { rxObserver } = require('api/v0.3');
const { interval } = require('rxjs');
const { take } = require('rxjs/operators');


// observer is needed to draw marble diagram
const observer = rxObserver();

interval(5).pipe(
  take(10)
)
  // forEach returns a promise
  .forEach(observer.next)
  // it will resolve on Observable complete
  //     and error   on Observable error
  .then(observer.complete, observer.error);
```

Here's a more convenient usecase with [`async` / `await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) approach:


```js
const { rxObserver } = require('api/v0.3');
const { interval } = require('rxjs');
const { take } = require('rxjs/operators');


doAsyncWork();

// define async function
async function doAsyncWork(){
  // observer is needed to draw marble diagram
  const observer = rxObserver();

  // create observable and iterate over it
  await interval(5).pipe(
    take(10)
  )
    .forEach(observer.next);
  
  // indicate that it's completed
  observer.complete();
}
```
