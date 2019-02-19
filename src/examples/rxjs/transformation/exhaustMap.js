export default
`const { rxObserver } = require('api/v0.3');
const { palette } = require('rp-api/colors');
const { Observable } = require('rxjs/Rx');

// helpers {{{
// stream for coloring
const palette$ = Observable.from(palette);
// fn to define color for item
const Mark = (value,color)=>({valueOf(){ return value; },color});
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
  .exhaustMap(x=> Observable
    .timer(0, 3)
    .take(4)
    // inherit color from the source$ stream
    .map(y=>Mark(y, x.color)));


source$.subscribe(rxObserver());
switch$.subscribe(rxObserver());
`;