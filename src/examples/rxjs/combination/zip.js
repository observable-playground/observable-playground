const { rxObserver } = require('api/v0.3');
const { timer, from } = require('rxjs');
const { zip, take } = require('rxjs/operators');


const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabet$ = from(alphabet);

timer(0, 5).pipe(
    zip(alphabet$, (digit, letter)=>digit+letter),
    take(10)
  )
  .subscribe(rxObserver());