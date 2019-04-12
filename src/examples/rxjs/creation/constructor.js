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