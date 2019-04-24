const { rxObserver } = require('api/v0.3');
const { range } = require('rxjs');

range(0, 3)
  .subscribe(rxObserver());