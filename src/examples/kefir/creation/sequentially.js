export default
`const { chart } = require('rp-api');
const Kefir = require('kefir');

Kefir
  .sequentially(10, [1, 2, 3])
  .observe(chart.createKefirObserver());`