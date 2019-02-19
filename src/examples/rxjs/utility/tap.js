export default
`const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { tap, take } = require('rxjs/operators');

timer(0, 5)
  .pipe(
    take(10),
    tap(v => console.log('tap', v))
  )
  .subscribe(rxObserver('tap()'));


// Compat version with .do
const { Observable } = require('rxjs/Rx');
Observable
  .timer(0, 5)
  .take(10)
  .do(v => console.log('do', v))
  .subscribe(rxObserver('.do()'));
`