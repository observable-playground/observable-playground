export default
`const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');

const error$ = Observable
  .timer(5)
  .switchMap(() => Observable.throw('oh'));
  
const catch$ = error$
  .catch(err => Observable.of(err));


error$.subscribe(rxObserver());
catch$.subscribe(rxObserver());
`;