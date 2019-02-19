module.exports =
`const { chart } = require('rp-api');
const { palette } = require('rp-api/colors');
const { Observable } = require('rxjs/Rx');

const palette$ = Observable.from(palette);

const cold$ = Observable.timer(0, 5)
  // add color to items
  .zip(palette$, (value,color)=>({ valueOf(){ return value; }, color}));

const hot$ =  cold$.share();

// creating observers for cold$
const a = chart.createRxObserver();
const b = chart.createRxObserver();
cold$.take(5).subscribe(a);

// creating observers for hot$
const c = chart.createRxObserver();
const d = chart.createRxObserver();
hot$.take(5).subscribe(c);

// delayed subscriptions
setTimeout(()=>{
  cold$.take(5).subscribe(b);
  hot$.take(5).subscribe(d);
}, 10);
`;
