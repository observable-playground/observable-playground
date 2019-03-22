export default
`const { rxObserver } = require('api/v0.3');
const { interval } = require('rxjs');
const { take } = require('rxjs/operators');

interval(5).pipe(
    take(10)
  )
  .subscribe(rxObserver());
`;