export default
`const { chart } = require('rp-api');
const { timer } = require('rxjs');
const { take, map } = require('rxjs/operators');

const msg = 'awesome';

timer(0, 5)
  .pipe(
    take(msg.length),
    map(index=>msg[index])
  )
  .subscribe(chart.createRxObserver());`;