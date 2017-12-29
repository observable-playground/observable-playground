export default `
const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const source$ = Observable
  .from([ 5, 10, 20 ])
  .delayWhen(x=>Observable.timer(x));

const merged$ = source$
  .switchMap(x=> Observable
      .interval(3)
      .take(5));


source$.subscribe(chart.createObserver());
merged$.subscribe(chart.createObserver());
`;