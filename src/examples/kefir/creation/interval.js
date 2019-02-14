export default
`const { chart } = require('rp-api');
const Kefir = require('kefir');

Kefir
  .interval(10, 1)
  .take(5)
  .observe(chart.createKefirObserver());`