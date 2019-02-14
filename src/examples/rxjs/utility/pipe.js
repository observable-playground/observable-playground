export default
`const { chart } = require('rp-api');
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
  .subscribe(chart.createRxObserver());
`;