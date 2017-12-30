export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const source$ = Observable
  .from([ 5, 10, 20 ])
  .delayWhen(x=>Observable.timer(x));

const merge$ = source$
  .mergeMap(x=> Observable
    .timer(0, 3)
    .take(3));


source$.subscribe(chart.createObserver());
merge$.subscribe(chart.createObserver());
`;