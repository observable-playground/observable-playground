module.exports =
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

// Will start emiting after 10ms timeout
// with 5ms interval
Observable
  .timer(10, 5)
  .take(4)
  .subscribe(chart.createRxObserver());

// Will emit once
Observable
  .timer(20)
  .take(10)
  .subscribe(chart.createRxObserver());
`;