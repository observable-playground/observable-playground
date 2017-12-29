export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

Observable
  .interval(5)
  .take(10)
  .subscribe(chart.createObserver());
`;