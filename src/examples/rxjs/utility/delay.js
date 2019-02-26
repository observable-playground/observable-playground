export default
`const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { delay, take } = require('rxjs/operators');

// basic timer
const timer$ = timer(0, 10)
  .pipe(
    take(5)
  );

// same timer, values delayed by 15ms
const delayed$ = timer$.pipe(
    delay(15)
  );

timer$.subscribe(rxObserver('Basic timer'));
delayed$.subscribe(rxObserver('Delayed by 15ms'));
`;