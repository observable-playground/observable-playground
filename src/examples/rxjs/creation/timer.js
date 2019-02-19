module.exports =
`const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');

// Will emit once
Observable
  .timer(10)
  .subscribe(rxObserver('timer(10)'));

// Will start emiting after 10ms timeout
// with 5ms interval
Observable
  .timer(10, 5)
  .take(4)
  .subscribe(rxObserver('timer(10, 5)'));
`;