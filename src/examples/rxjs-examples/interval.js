export default `
const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const line = chart.createLine();

Observable
  .interval(5)
  .take(10)
  .subscribe(
    line.onEvent,
    line.onError,
    line.onComplete
  );
`;