export default
`const { chart } = require('rp-api');
const { Observable } = require('rxjs/Rx');

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const alphabet$ = Observable.from(alphabet.split(''));

Observable.timer(0, 5)
    .zip(alphabet$, (digit, letter)=>digit+letter)
    .take(10)
    .subscribe(chart.createRxObserver());
`;