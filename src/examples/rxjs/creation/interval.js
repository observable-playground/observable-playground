export default
`const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');

Observable
  .interval(5)
  .take(10)
  .subscribe(rxObserver());
`;