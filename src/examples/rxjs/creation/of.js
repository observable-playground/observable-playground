export default
`const { rxObserver } = require('api/v0.3');
const { of } = require('rxjs');

of(1)
  .subscribe(rxObserver());
`;