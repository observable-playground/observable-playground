export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const error$ = Observable
  .timer(5)
  .switchMap(() => Observable.throw('oh'));
  
const catch$ = error$
  .catch(err => Observable.of(err));


error$.subscribe(chart.createRxObserver());
catch$.subscribe(chart.createRxObserver());
`;