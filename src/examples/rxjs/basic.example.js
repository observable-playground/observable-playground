export default
`const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { take } = require('rxjs/operators');

timer(0, 5)
  .pipe(
    take(10)
  )
  .subscribe(rxObserver());`;