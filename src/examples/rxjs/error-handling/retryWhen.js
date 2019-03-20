export default
`const {rxObserver} = require('api/v0.3');
const { timer } = require('rxjs');
const { map, tap, retryWhen, delayWhen } = require('rxjs/operators');

const source$ =
  timer(0, 100).pipe(
    map(val => {
      if (val == 1) {
        throw 'Err';
      }
      return val;
    })
  );

const result$ = source$.pipe(
    retryWhen(errors =>
      // here Errors are just events
      errors.pipe(
        // show error messages thread
        tap(rxObserver('Error messages')),
        // will restart with increasing delay
        delayWhen((_, index) => timer(index * 50))
      )
    )
);

source$.subscribe(rxObserver('source$'));
result$.subscribe(rxObserver('result$'));

// a modification of
// https://www.learnrxjs.io/operators/error_handling/retrywhen.html
`