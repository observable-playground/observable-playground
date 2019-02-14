module.exports =
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const source$ = Observable
  .from([ 5, 10, 20 ]);

const delayed$ = source$
  .delayWhen(x=>Observable.timer(x));


source$.subscribe(chart.createRxObserver());
delayed$.subscribe(chart.createRxObserver());
`;