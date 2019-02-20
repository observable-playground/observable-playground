export default
`const { rxObserver, palette } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');

// stream for coloring
const palette$ = Observable.from(palette);

const source$ = fromDelayed([ 5, 10, 20 ])
  // get color for each item
  .zip(palette$, Marble);

const concatMap$ = source$
  .concatMap(x=> Observable
    .interval(5)
    .take(3)
    // inherit color from the source$ stream
    .map(y=>Marble(y, x.color)));


source$.subscribe(rxObserver());
concatMap$.subscribe(rxObserver());


// helpers
// creates a colored Marble
function Marble(value,color) {
  return {
    valueOf: ()=>value
    , color
  };
}

// like .from, but items are delayed by their value
function fromDelayed (arr) {
  return Observable
    .from(arr)
    .delayWhen(x=>Observable.timer(x));
}
`;