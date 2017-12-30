export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const error$ = Observable.timer(0,5)
  .map(x=>{
    if (x>2) { throw 'Bam!' }
    return x;
  });
  
const retry$ = error$.retry(2);


error$.subscribe(chart.createObserver());
retry$.subscribe(chart.createObserver());
`;