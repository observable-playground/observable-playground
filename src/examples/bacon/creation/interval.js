export default
`const { chart } = require('rp-api');
const Bacon = require('baconjs');

Bacon
  .interval(5, '+')
  .take(5)
  .subscribe(chart.createBaconObserver());
`