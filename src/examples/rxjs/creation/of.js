export default
`const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');

Observable
  .of(1)
  .subscribe(rxObserver());
`;