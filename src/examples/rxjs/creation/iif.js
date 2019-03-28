export default
`const { rxObserver } = require('api/v0.3');
const { iif, of } = require('rxjs');

// decides later which observable to return
const source$ = iif(
  ()=> Date.now() < 3 // predicate
  , of('🐦')          // true
  , of('🦉')          // false
);

// subsctibe at T0
source$.subscribe(rxObserver('Early bird'));

// delayed subscription
setTimeout(()=>{
  source$.subscribe(rxObserver('Night owl'));
}, 5);
`