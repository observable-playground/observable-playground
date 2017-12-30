export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const source$ = Observable
  .from([ 5, 10, 20 ])
  .delayWhen(x=>Observable.timer(x));

const switch$ = source$
  .switchMap(x=> Observable
    .timer(0, 3)
    .take(5));


source$.subscribe(chart.createObserver());
switch$.subscribe(chart.createObserver());
`;