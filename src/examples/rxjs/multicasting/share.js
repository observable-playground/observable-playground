export default
`const { rxObserver, palette } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');

const palette$ = Observable.from(palette);

const source$ = Observable.timer(0, 5)
  // add color to items
  .zip(palette$, Marble);

const shared$ = source$.share();

// creating observers for source$
const a = rxObserver('source$');
const b = rxObserver('delayed subscription');
source$.take(5).subscribe(a);

// creating observers for shared$
const c = rxObserver('shared$');
const d = rxObserver('delayed subscription');
shared$.take(5).subscribe(c);

// delayed subscriptions
setTimeout(()=>{
  source$.take(5).subscribe(b);
  shared$.take(5).subscribe(d);
}, 10);


function Marble(value,color) {
  return {
    valueOf: ()=>value
    , color
  };
}
`;
