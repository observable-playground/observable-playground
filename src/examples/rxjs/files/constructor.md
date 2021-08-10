<!--
name:		
title:		Observable constructor
pageTitle:	Observable — RxJS constructor usage example + marble diagram
desc:		See how to create your own observable using Observable constructor
docsUrl:	https://rxjs.dev/api/index/class/Observable
-->

Lets you create your own **Observable**. How cool is that? 😎  
`Observable` constructor takes in a function that will be called upon subscription. This function will decide how and when to notify the observer. It should return a [teardown](https://rxjs.dev/api/index/type-alias/TeardownLogic) mechanism that will be activated when unsubscribed (for cleanup).

> **NOTE:** While enjoying this might, don't forget that now you have greater responsibility. Take a better look at `Creation` section in the menu for ready-to-use factories.

```js
const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs');


const source$ = new Observable(observer => {
  let index = 0;

  // start pushing values to observer
  // once every 100ms
  const id = setInterval(()=>{
    observer.next(index++);
  }, 100);

  // return a teardown function
  return ()=>{
    clearInterval(id);
  };
});

source$
  .subscribe(rxObserver());
```