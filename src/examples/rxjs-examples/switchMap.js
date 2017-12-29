export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const source$ = Observable
  .from([ 5, 10, 20 ])
  .delayWhen(x=>Observable.timer(x));

const mapped$ = source$
  .switchMap(x=> Observable.interval(3));


source$.subscribe(chart.createObserver());
mapped$.take(8).subscribe(chart.createObserver());
`;