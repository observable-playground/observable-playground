export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

Observable
  .of(1)
  .subscribe(chart.createObserver());
`;