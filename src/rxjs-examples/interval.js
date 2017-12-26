export default `
const { Observable } = require('rxjs/Rx');

const line = chart.createLine();

Observable
  .interval(5)
  .take(5)
  .subscribe(
    line.onEvent,
    line.onError,
    line.onComplete
  );
`;