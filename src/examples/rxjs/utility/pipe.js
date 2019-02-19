export default
`const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');
const {
    filter,
    take
} = require('rxjs/operators');

Observable
  .interval(5)
  .pipe(
    filter(x=>x%2),
    take(5)
  )
  .subscribe(rxObserver());
`;