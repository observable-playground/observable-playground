export default
`const { rxObserver } = require('api/v0.3');
const { palette } = require('rp-api/colors');
const { Observable } = require('rxjs/Rx');

const error$ = Observable.timer(0,5)
  .map(x=>{
    if (x>2) { throw 'Bam!' }
    return x;
  });

// add color to items
const palette$ = Observable.from(palette);
const errorColorized$ = error$
  .zip(palette$, (value,color)=>({valueOf(){ return value; }, color}));


const retry$ = errorColorized$.retry(2);

error$.subscribe(rxObserver());
retry$.subscribe(rxObserver());
`;