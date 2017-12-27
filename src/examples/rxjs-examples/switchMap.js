export default `
const { Observable } = require('rxjs/Rx');

const source$ = Observable
  .from([ 5, 10, 20 ])
  .delayWhen(x=>Observable.timer(x));

const merged$ = source$
  .switchMap(x=> Observable
      .interval(3)
      .take(5));

const sourceLine = chart.createLine();
source$
  .subscribe(
    sourceLine.onEvent,
    sourceLine.onError,
    sourceLine.onComplete
  );

const mergedLine = chart.createLine();
merged$
  .subscribe(
    mergedLine.onEvent,
    mergedLine.onError,
    mergedLine.onComplete
  );
`;