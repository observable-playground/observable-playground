export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

Observable
  .timer(0, 10)
  .take(5)
  .subscribe(chart.createRxObserver());

Observable
  .timer(0, 10)
  .delay(15)
  .take(5)
  .subscribe(chart.createRxObserver());
`;