export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const error$ = new Observable(observer=>{
  const t1 = setTimeout(()=>{
    observer.error('oh');
  }, 5);
  
  return ()=>clearTimeout(t1);
});
  
const catch$ = error$
  .catch(err => Observable.of(err));


error$.subscribe(chart.createRxObserver());
catch$.subscribe(chart.createRxObserver());
`;