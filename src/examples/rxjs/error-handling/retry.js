export default
`const { rxObserver, palette } = require('api/v0.3');
const { timer, from } = require('rxjs');
const { zip, map, retry } = require('rxjs/operators');

const error$ = timer(0, 5).pipe(
    map(x=>{
      if (x>2) { throw 'Bam!' }
      return x;
    })
  );

// same error$ stream, just frozen colors
const errorColorized$ = error$.pipe(
    zip(from(palette), Marble)
  );

// retry 2 times
const retry$ = errorColorized$.pipe(
    retry(2)
  );


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