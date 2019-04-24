const { rxObserver } = require('api/v0.3');
const { from, timer } = require('rxjs');
const { delayWhen } = require('rxjs/operators');

from([ 0, 15, 20, 25, 5, 10 ])
  .pipe(
    delayWhen(x => timer(x))
  )
  .subscribe(rxObserver());