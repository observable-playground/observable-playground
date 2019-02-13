export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const msg = 'awesome';

Observable
  .timer(0, 5)
  .take(msg.length)
  .map(index=>msg[index])
  .subscribe(chart.createObserver());`;