module.exports =
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

Observable
  .timer(10, 5)
  .take(10)
  .subscribe(chart.createObserver());

Observable
  .timer(20)
  .subscribe(chart.createObserver());
`;