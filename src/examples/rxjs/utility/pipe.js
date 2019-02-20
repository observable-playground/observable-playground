export default
`const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { filter,take } = require('rxjs/operators');


const timer$ = timer(0, 5)
  .pipe(
    take(10)
  );

timer$
  .subscribe(rxObserver('All'));

//only odd numbers
timer$
  .pipe(
    filter(x => x % 2)
  )
  .subscribe(rxObserver('Odd'));
`;