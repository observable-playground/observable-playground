export default
`const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const alphabet$ = Observable.from(alphabet.split(''));

Observable.timer(0, 5)
    .zip(alphabet$, (digit, letter)=>digit+letter)
    .take(10)
    .subscribe(rxObserver());
`;