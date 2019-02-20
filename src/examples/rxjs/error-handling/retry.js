export default
`const { rxObserver, palette } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');

const error$ = Observable.timer(0, 5)
  .map(x=>{
    if (x>2) { throw 'Bam!' }
    return x;
  });

// stream for coloring
const palette$ = Observable.from(palette);

const errorColorized$ = error$
  .zip(palette$, Marble);

const retry$ = errorColorized$.retry(2);

error$.subscribe(rxObserver());
retry$.subscribe(rxObserver());


// helpers
// creates a colored Marble
function Marble(value,color) {
  return {
    valueOf: ()=>value
    , color
  };
}
`;