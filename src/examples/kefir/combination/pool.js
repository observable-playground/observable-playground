export default
`const { chart } = require('rp-api');
const Kefir = require('kefir');

let a,b,c;

a = Kefir.sequentially(100, [0, 1, 2]);
b = Kefir.sequentially(100, [0, 1, 2]).delay(30);
c = Kefir.sequentially(100, [0, 1, 2]).delay(60);

const pool = Kefir.pool();

pool.plug(a);
pool.plug(b);
pool.plug(c);

a.observe(chart.createKefirObserver());
b.observe(chart.createKefirObserver());
c.observe(chart.createKefirObserver());
pool.observe(chart.createKefirObserver());`