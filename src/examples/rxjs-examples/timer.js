module.exports = `
const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const line1 = chart.createLine();
Observable.timer(10, 5)
  .take(10)
  .subscribe(
    line1.onEvent,
    line1.onError,
    line1.onComplete
  );

const line2 = chart.createLine();
Observable.timer(20)
  .subscribe(
    line2.onEvent,
    line2.onError,
    line2.onComplete
  );
`;