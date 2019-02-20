export default
`const {rxObserver} = require('api/v0.3');
const { timer } = require('rxjs');
const { map, tap, retryWhen, delayWhen } = require('rxjs/operators');


const source$ =
  timer(0, 100).pipe(
    map(val => {
      if (val > 2) {
        // error will be picked up by retryWhen
        throw val;
      }
      return val;
    }),
    retryWhen(errors =>
      // here Errors are transformed into Events
      errors.pipe(
        // show error messages thread
        tap(rxObserver('ERROR MESSAGES')),
        // will restart in 150 ms
        delayWhen(val => timer(val * 50))
      )
    )
);

source$.subscribe(rxObserver('source$'));
// taken from
// https://www.learnrxjs.io/operators/error_handling/retrywhen.html
`