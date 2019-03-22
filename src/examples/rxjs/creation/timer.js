export default
`const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { take } = require('rxjs/operators');


// Will emit once
timer(10)
  .subscribe(rxObserver('timer(10)'));

// Will start emiting after 10ms timeout
// with 5ms interval
timer(10, 5).pipe(
    take(4)
  )
  .subscribe(rxObserver('timer(10, 5)'));
`;