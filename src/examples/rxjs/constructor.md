<!--
name:		
title:		Observable constructor
pageTitle:	RxJS Observable constructor usage example with a marble diagram
desc:		See how to create your own observable using Observable constructor
docsUrl:	https://rxjs.dev/api/index/class/Observable
-->

Lets you create your own **Observable**. How cool is that? 😎  
While enjoying this might, don't forget that now you have greater responsibility.

```js
const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs');
const { take } = require('rxjs/operators');


const source$ = new Observable(observer => {
  let index = 0;
  const id = setInterval(()=>{
    observer.next(index++);
  }, 10);

  // return a teardown function
  return ()=>{
    clearInterval(id);
  };
});

source$.pipe(
    take(5)
  )
  .subscribe(rxObserver());

```