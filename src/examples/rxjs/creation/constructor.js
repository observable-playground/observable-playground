export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const source$ = new Observable(observer=>{
  let index = 0;
  const id = setInterval(()=>{
    observer.next(index++);
  }, 10);
  
  return ()=>{
    clearInterval(id);
  };
});

source$
  .take(5)
  .subscribe(chart.createRxObserver());
`;