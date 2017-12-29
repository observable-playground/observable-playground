export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

Observable
  .interval(5)
  .take(5)
  .subscribe(chart.createObserver());

Observable
  .interval(5)
  .delay(40)
  .take(5)
  .subscribe(chart.createObserver());
`;