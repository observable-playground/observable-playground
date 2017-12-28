module.exports = `
const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const line1 = chart.createLine();
const source$ = Observable
  .from([ 5, 10, 20 ]);

const line2 = chart.createLine();
const delayed$ = source$
  .delayWhen(x=>Observable.timer(x));


source$
  .subscribe(
    line1.onEvent,
    line1.onError,
    line1.onComplete
  );

delayed$
  .subscribe(
    line2.onEvent,
    line2.onError,
    line2.onComplete
  );
`;