export default
`const { chart } = require('rp-api');
const { palette } = require('rp-api/colors');
const { Observable } = require('rxjs/Rx');

// helpers {{{
// stream for coloring
const palette$ = Observable.from(palette);
// fn to define color for item
const Mark = (value,color)=>({value,color});
// like .from, but items are delayed by their value
const fromDelayed = arr =>
  Observable
    .from(arr)
    .delayWhen(x=>Observable.timer(x));
// }}}

const source$ = fromDelayed([ 5, 10, 20 ])
  // get color for each item
  .zip(palette$, Mark);

const switch$ = source$
  .mergeMap(x=> Observable
    .timer(0, 3)
    .take(3)
    // inherit color from the source$ stream
    .map(y=>Mark(y, x.color)));


source$.subscribe(chart.createRxObserver());
switch$.subscribe(chart.createRxObserver());
`;