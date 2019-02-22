export default
`const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { filter,take } = require('rxjs/operators');


timer(0, 10)
  .pipe(
    take(10),
    filter(x => x % 2)
  )
  .subscribe(rxObserver('Odd'));
`