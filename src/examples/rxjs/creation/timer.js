module.exports =
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

// Will emit once
Observable
  .timer(10)
  .subscribe(chart.createRxObserver('timer(10)'));

// Will start emiting after 10ms timeout
// with 5ms interval
Observable
  .timer(10, 5)
  .take(4)
  .subscribe(chart.createRxObserver('timer(10, 5)'));
`;