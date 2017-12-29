export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const source$ = Observable
  .from([ 5, 10, 20 ])
  .delayWhen(x=>Observable.timer(x));

const exhaust$ = source$
  .exhaustMap(x=> Observable
    .timer(0, 3)
    .take(4));


source$.subscribe(chart.createObserver());
exhaust$.subscribe(chart.createObserver());
`;