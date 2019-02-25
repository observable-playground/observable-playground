// https://rxjs-dev.firebaseapp.com/api/operators/timeInterval

export default `
const { rxObserver } = require('api/v0.3');
const { interval, merge } = require('rxjs');
const { timeInterval, take, map } = require('rxjs/operators');

// Indicates time passed since previous value

merge(
  interval(5),
  interval(7)
)
  .pipe(
    take(10),
    timeInterval(),
    map(({ interval }) => \`+\${interval}\`)
  )
  .subscribe(rxObserver(''));
`