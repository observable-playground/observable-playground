export default
`const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');

Observable
  .timer(0, 10)
  .take(5)
  .subscribe(rxObserver());

Observable
  .timer(0, 10)
  .delay(15)
  .take(5)
  .subscribe(rxObserver());
`;